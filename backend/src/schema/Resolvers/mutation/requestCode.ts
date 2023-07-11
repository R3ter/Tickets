import { totp, authenticator } from "otplib";
import nodemailer from "nodemailer";
import { PrismaClient } from "@prisma/client";
import { checkToken } from "../../../func/Token";
import { IncomingHttpHeaders } from "http";
import isEmail from "validator/lib/isEmail";

const secret = authenticator.generateSecret();
totp.options = { step: 100, digits: 4 };

export default async (
  _: any,
  { email }: any,
  {
    prisma,
    req: { headers },
  }: { prisma: PrismaClient; req: { headers: IncomingHttpHeaders } }
) => {
  const token = headers["token"];
  if (token === "" && Array.isArray(token)) {
    return false;
  }
  // const deToken = await checkToken(token as string);
  // if (!deToken) return false;
  // const { email } = deToken;

  if (!email || !isEmail(email)) {
    return false;
  }

  const code = totp.generate(secret + token);

  let mailOptions = {
    from: "epic.collection100@gmail.com",
    to: email,
    subject: "account activation OTP:",
    text: `Your OTP is ${code}`,
  };

  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: "epic.collection100@gmail.com",
      pass: "gpefepntjfoxnohk",
    },
    tls: { rejectUnauthorized: false },
  });

  transporter.sendMail(mailOptions);
  return true;
};

export const checkBuyCode = async (
  _: any,
  { code }: { code: string },
  {
    prisma,
    req: { headers },
  }: { prisma: PrismaClient; req: { headers: IncomingHttpHeaders } }
) => {
  // const token = headers["token"];
  // const deToken = await checkToken(token as string);
  // if (deToken) {

  return totp.verify({ token: code, secret: secret + "token" });
  // }

  return false;
};
