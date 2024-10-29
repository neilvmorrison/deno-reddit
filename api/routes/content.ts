import { Router } from "oak";
import { PrismaClient } from "prisma";

const router = new Router({ prefix: "/content" });
const prisma = new PrismaClient();

router
  .get("/posts", async (ctx) => {
    // TODO: Implement get posts
  })
  .post("/posts", async (ctx) => {
    // TODO: Implement create post
  })
  .get("/posts/:id", async (ctx) => {
    // TODO: Implement get single post
  })
  .put("/posts/:id", async (ctx) => {
    // TODO: Implement update post
  })
  .delete("/posts/:id", async (ctx) => {
    // TODO: Implement delete post
  })
  .get("/posts/:id/comments", async (ctx) => {
    // TODO: Implement get post comments
  })
  .post("/posts/:id/comments", async (ctx) => {
    // TODO: Implement create comment
  });

export const contentRouter = router; 