import request from "supertest";
import express from "express";
import postsRoutes from "../routes/posts.js";

const app = express();
app.use(express.json());
app.use("/posts", postsRoutes);

describe("API TEST", () => {

  it("GET /posts debe responder 200", async () => {
    const res = await request(app).get("/posts");
    expect(res.statusCode).toBe(200);
  });

});