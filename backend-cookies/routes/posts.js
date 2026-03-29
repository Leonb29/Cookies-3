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
  try {
    const { nombre, categoria } = req.body;

    await pool.query(
      "INSERT INTO publicaciones (nombre, categoria) VALUES ($1, $2)",
      [nombre, categoria]
    );

    res.send("Publicación creada");
  } catch (error) {
    res.status(500).send(error.message);
  }
});

export default router;