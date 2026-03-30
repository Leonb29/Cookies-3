import "dotenv/config";
import express from "express";
import cors from "cors";
import usersRoutes from "./routes/users.js";
import postsRoutes from "./routes/posts.js";

const app = express();

app.use(cors());
app.use(express.json());

app.use("/users", usersRoutes);
app.use("/posts", postsRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log("Servidor ON"));