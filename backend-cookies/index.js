import "dotenv/config";
import express from "express";
import cors from "cors";
import usersRoutes from "./routes/users.js";

const app = express();

app.use(cors());
app.use(express.json());

app.use("/users", usersRoutes);

app.listen(3000, () => console.log("Servidor ON"));