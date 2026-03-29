import { Router } from "express";
import { pool } from "../db/conexion.js";
import { verificarToken } from "../middlewares/auth.js";

const router = Router();

// GET
router.get("/", async (req, res) => {
  const { rows } = await pool.query("SELECT * FROM publicaciones");
  res.json(rows);
});

// POST (PROTEGIDO)
router.post("/", verificarToken, async (req, res) => {
  const { nombre, categoria } = req.body;

  await pool.query(
    "INSERT INTO publicaciones (nombre, categoria) VALUES ($1, $2)",
    [nombre, categoria]
  );

  res.send("Post creado");
});

export default router;