import pkg from "pg";
const { Pool } = pkg;

export const pool = new Pool({
  user: "cookies_user",
  host: "dpg-abc123.render.com",
  database: "cookies_db",
  password: "123456",
  port: 5432,
  ssl: {
    rejectUnauthorized: false
  }
});