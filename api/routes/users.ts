import { Router } from "oak";
import { PrismaClient } from "prisma";

const router = new Router({ prefix: "/users" });
const prisma = new PrismaClient();

router
  .get("/profile/:id", async (ctx) => {
    // TODO: Implement get profile
  })
  .put("/profile/:id", async (ctx) => {
    // TODO: Implement update profile
  })
  .delete("/profile/:id", async (ctx) => {
    // TODO: Implement delete profile
  });

export const usersRouter = router; 