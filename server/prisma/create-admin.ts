import { PrismaClient } from "@prisma/client";
import bcrypt from "bcrypt";

const prisma = new PrismaClient();

async function main() {
  const hashed = await bcrypt.hash("admin", 10);

  await prisma.user.create({
    data: {
      username: "admin",
      password: hashed,
    },
  });

  console.log("ADMIN UTWORZONY: admin / admin");
}

main().finally(() => prisma.$disconnect());
