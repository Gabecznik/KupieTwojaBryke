import express from "express";
import cors from "cors";
import { PrismaClient } from "../generated/prisma/index.js";

const app = express();
const prisma = new PrismaClient();

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => res.send("API działa"));

/* Produkty */
app.get("/products", async (req, res) => {
  const products = await prisma.car.findMany();
  res.json(products);
});

app.get("/products/:id", async (req, res) => {
  const id = Number(req.params.id);
  const product = await prisma.car.findUnique({ where: { id } });
  if (!product) return res.status(404).json({ error: "Not found" });
  res.json(product);
});

app.post("/products", async (req, res) => {
  try {
    console.log("Odebrano body:", req.body);
    const product = await prisma.car.create({
      data: req.body,
    });
    res.status(201).json(product);
  } catch (error) {
    const e = error as Error
    console.error("Błąd przy zapisie samochodu:", e);
    res.status(500).json({ error: "Błąd serwera", details: e.message });
  }
});

app.delete("/products/:id", async (req, res) => {
  const id = Number(req.params.id);
  await prisma.car.delete({ where: { id } });
  res.status(204).send();
});

const PORT = process.env.PORT || 4000;
app.listen(PORT, () => console.log(`Server start: http://localhost:${PORT}`));
