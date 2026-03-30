import pkg from "pg";
const { Pool } = pkg;

export const pool = new Pool({
  user: "cookies_db_nbmg_user",
  host: "dpg-d74vlckr85hc73fvppq0-a",
  database: "cookies_db_nbmg",
  password: "usjMax55WhNyvu3LShfoIPkuAarEb3V9",
  port: 5432,
  ssl: {
    rejectUnauthorized: false
  }
});