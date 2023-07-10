import { PrismaClient } from "@prisma/client";
import { checkToken } from "../../../func/Token";
import { IncomingHttpHeaders } from "http";

export default async (
  _: any,
  {
    email,
    eventId,
    quantity,
  }: { eventId: number; quantity: number; email: string },
  {
    prisma,
    req: { headers },
  }: { prisma: PrismaClient; req: { headers: IncomingHttpHeaders } }
) => {
  const token = headers["token"];
  if (token === "" && Array.isArray(token)) {
    return false;
  }
  return await checkToken(token as string)
    .then(async (e) => {
      if (e) {
        return await prisma.orders
          .create({
            data: { email: email, quantity, eventId, userId: e?.id },
          })
          .then(() => true)
          .catch(() => false);
      }
    })
    .catch(() => false);
};
