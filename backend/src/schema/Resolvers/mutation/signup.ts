import { Prisma, PrismaClient } from "@prisma/client";
import { setToken } from "../../../func/Token";

export default async (
  _: any,
  { email, password }: { password: string; email: string },
  { prisma }: { prisma: PrismaClient }
) => {
  return await prisma.user
    .create({ data: { email, password } })
    .then((e) => {
      return {
        email,
        isValid: e.isValid,
        token: setToken({ email, isValid: e.isValid }),
        result: true,
      };
    })
    .catch(() => {
      return { result: false, errorMsg: "email already exists!" };
    });
};
