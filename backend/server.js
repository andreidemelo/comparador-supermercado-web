import express from "express";
import cors from "cors";
import sqlite3 from "sqlite3";
import authRoutes from "./routes/auth.routes.js";
import productRoutes from "./routes/products.routes.js";
import marketRoutes from "./routes/markets.routes.js";
import priceRoutes from "./routes/prices.routes.js";
import adminRoutes from "./routes/admin.routes.js";

const app = express();
app.use(cors());
app.use(express.json());

export const db = new sqlite3.Database("./db.sqlite");

app.use(authRoutes);
app.use(productRoutes);
app.use(marketRoutes);
app.use(priceRoutes);
app.use(adminRoutes);

app.listen(3001, () =>
  console.log("API rodando em http://localhost:3001")
);
