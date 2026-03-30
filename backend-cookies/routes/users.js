import { Router } from "express";
import { pool } from "../db/conexion.js";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";

const router = Router();

// 🟢 REGISTER
router.post("/register", async (req, res) => {
  try {
    const { email, password } = req.body;

    const hash = await bcrypt.hash(password, 10);

    await pool.query(
      "INSERT INTO usuarios (email, password) VALUES ($1, $2)",
      [email, hash]
    );

    res.status(201).send("Usuario creado");
  } catch (error) {
    res.status(500).send(error.message);
  }
});

// 🔐 LOGIN
router.post("/login", async (req, res) => {
  try {
    const { email, password } = req.body;

    const { rows } = await pool.query(
      "SELECT * FROM usuarios WHERE email = $1",
      [email]
    );

    const user = rows[0];

    if (!user) return res.status(404).send("Usuario no encontrado");

    const valid = await bcrypt.compare(password, user.password);

    if (!valid) return res.status(401).send("Contraseña incorrecta");

    const token = jwt.sign(
      { email: user.email },
      process.env.JWT_SECRET || "MiSecretoSuperSeguro123",
      { expiresIn: "1h" }
    );

    res.json({ token });

  } catch (error) {
    res.status(500).send(error.message);
  }
});

// 🟢 Crear usuario administrador por defecto al iniciar el servidor
const createAdminUser = async () => {
  try {
    // Verifica si ya existe
    const { rows } = await pool.query(
      "SELECT * FROM usuarios WHERE email = $1",
      ["leonb"]
    );

    if (rows.length === 0) {
      const hash = await bcrypt.hash("123456", 10);

      await pool.query(
        "INSERT INTO usuarios (email, password) VALUES ($1, $2)",
        ["leonb", hash]
      );

      console.log("Usuario administrador 'leonb' creado ✅");
    } else {
      console.log("Usuario administrador 'leonb' ya existe ✅");
    }
  } catch (error) {
    console.error("Error creando usuario administrador:", error.message);
  }
};

// Ejecutar al iniciar el servidor
createAdminUser();

export default router;