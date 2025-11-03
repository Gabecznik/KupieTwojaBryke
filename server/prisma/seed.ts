import { PrismaClient } from "../generated/prisma/index.js";
import bcrypt from "bcrypt";

const prisma = new PrismaClient();

async function main() {
  const adminUsername = "admin";
  const adminPassword = "admin";

  // sprawdź, czy użytkownik już istnieje
  const existing = await prisma.user.findUnique({
    where: { username: adminUsername },
  });

  if (!existing) {
    const hashed = await bcrypt.hash(adminPassword, 10);
    await prisma.user.create({
      data: {
        username: adminUsername,
        password: hashed,
      },
    });
    console.log(`✅ Utworzono użytkownika: ${adminUsername} / ${adminPassword}`);
  } else {
    console.log("ℹ️ Użytkownik admin już istnieje – pomijam seedowanie");
  }
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(() => prisma.$disconnect());
