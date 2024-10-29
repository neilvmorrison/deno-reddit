import { Router } from "oak";
import { PrismaClient } from "prisma";

const router = new Router({ prefix: "/interactions" });
const prisma = new PrismaClient();

router
  .post("/posts/:id/vote", async (ctx) => {
    // TODO: Implement post vote
  })
  .post("/comments/:id/vote", async (ctx) => {
    // TODO: Implement comment vote
  })
  .post("/posts/:id/save", async (ctx) => {
    // TODO: Implement save post
  })
  .post("/posts/:id/view", async (ctx) => {
    // TODO: Implement post view
  })
  .get("/collections", async (ctx) => {
    // TODO: Implement get collections
  })
  .post("/collections", async (ctx) => {
    // TODO: Implement create collection
  });

export const interactionsRouter = router; 