import { PrismaClient } from "@prisma/client";
import { checkToken } from "../../../func/Token";
import { IncomingHttpHeaders } from "http";

export default async (
  _: any,
  args: any,
  {
    prisma,
    req: { headers },
  }: { prisma: PrismaClient; req: { headers: IncomingHttpHeaders } }
) => {
  const token = headers["token"];
  if (token === "" && Array.isArray(token)) {
    return false;
  }
  return checkToken(headers["token"] as string)
    .then(async (e) => {
      if (!e) {
        return false;
      }
      return await prisma.user
        .update({ where: { email: e.email }, data: { isValid: true } })
        .then(() => true)
        .catch(() => false);
    })
    .catch(() => {
      return false;
    });
};
