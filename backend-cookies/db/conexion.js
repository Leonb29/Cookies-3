import pkg from "pg";
const { Pool } = pkg;

export const pool = new Pool({
  user: "postgres",
  host: "localhost",
  database: "cookies_db",
  password: "postgres", // ← tu contraseña real
  port: 5432,
});