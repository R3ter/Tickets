import { Prisma, PrismaClient } from "@prisma/client";
import { setToken } from "../../../func/Token";

export default async (
  _: any,
  { email, password }: { password: string; email: string },
  { prisma }: { prisma: PrismaClient }
) => {
  return await prisma.user.findUnique({ where: { email } }).then((e) => {
    if (e?.password === password) {
      return {
        email,
        isValid: e.isValid,
        token: setToken({ email, isValid: e.isValid, id: e.id }),
        result: true,
        id: e.id,
      };
    }
    return { result: false };
  });
};
