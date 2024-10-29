import { Router } from "oak";
import { PrismaClient } from "prisma";

const router = new Router({ prefix: "/auth" });
const prisma = new PrismaClient();

router
  .post("/register", async (ctx) => {
    // TODO: Implement registration
  })
  .post("/login", async (ctx) => {
    // TODO: Implement login
  })
  .post("/logout", async (ctx) => {
    // TODO: Implement logout
  });

export const authRouter = router; 