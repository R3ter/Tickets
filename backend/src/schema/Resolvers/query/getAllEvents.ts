import { Prisma, PrismaClient } from "@prisma/client";

export default async (
  _: any,
  args: any,
  { prisma }: { prisma: PrismaClient }
) => {
  return await prisma.events.findMany();
};
