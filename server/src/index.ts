import express from "express";
import cors from "cors";
import { PrismaClient } from "../generated/prisma/index.js";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";
import dotenv from "dotenv";
import { Request, Response, NextFunction } from "express";

dotenv.config();

const app = express();
const prisma = new PrismaClient();

app.use(
  cors({
    origin: [
      "http://localhost:5173",          
      "https://gabecznik.github.io",     
    ],
    methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
    allowedHeaders: ["Content-Type", "Authorization"],
  })
);

app.options("*", cors());

app.use(express.json());

const SECRET = process.env.JWT_SECRET as string;
if (!SECRET) throw new Error("Brak JWT_SECRET w pliku .env!");

function authenticateToken(req: Request, res: Response, next: NextFunction) {
  const authHeader = req.headers["authorization"];
  const token = authHeader && authHeader.split(" ")[1]; // "Bearer <token>"

  if (!token) return res.sendStatus(401);

  jwt.verify(token, SECRET, (err, user) => {
    if (err) return res.sendStatus(403); // nieważny token
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    (req as any).user = user;
    next();
  });
}


app.get("/", (req, res) => res.send("API działa"));

app.post("/login", async (req, res) => {
  const { username, password } = req.body;

  const user = await prisma.user.findUnique({ where: { username } });
  if (!user) return res.status(401).json({ error: "Nieprawidłowe dane logowania" });

  const valid = await bcrypt.compare(password, user.password);
  if (!valid) return res.status(401).json({ error: "Nieprawidłowe dane logowania" });

  const token = jwt.sign(
    { id: user.id, username: user.username },
    SECRET,
    { expiresIn: "1h" } // token ważny 1 godzinę
  );

  res.json({ token });
});

app.get("/products", authenticateToken, async (req, res) => {
  const products = await prisma.car.findMany();
  res.json(products);
});

app.get("/products/:id", authenticateToken, async (req, res) => {
  const id = Number(req.params.id);
  const product = await prisma.car.findUnique({ where: { id } });
  if (!product) return res.status(404).json({ error: "Not found" });
  res.json(product);
});

app.post("/products", authenticateToken, async (req, res) => {
  try {
    console.log("Odebrano body:", req.body);
    const product = await prisma.car.create({
      data: req.body,
    });
    res.status(201).json(product);
  } catch (error) {
    if (error instanceof Error) {
      console.error("Błąd przy zapisie samochodu:", error.message);
      res.status(500).json({ error: "Błąd serwera", details: error.message });
    } else {
      console.error("Nieznany błąd:", error);
      res.status(500).json({ error: "Błąd serwera", details: String(error) });
    }
  }
});

app.delete("/products/:id", authenticateToken, async (req, res) => {
  const id = Number(req.params.id);
  await prisma.car.delete({ where: { id } });
  res.status(204).send();
});

const PORT = process.env.PORT || 4000;
app.listen(PORT, () => console.log(`Server start: http://localhost:${PORT}`));
