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
  //const { name, description, price } = req.body;
  const product = await prisma.car.create({
    data: req.body,
  });
  res.status(201).json(product);
});

app.delete("/products/:id", async (req, res) => {
  const id = Number(req.params.id);
  await prisma.car.delete({ where: { id } });
  res.status(204).send();
});

const PORT = process.env.PORT || 4000;
app.listen(PORT, () => console.log(`Server start: http://localhost:${PORT}`));
