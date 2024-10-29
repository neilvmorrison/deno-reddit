import { Router } from "oak";
import { PrismaClient } from "prisma";

const router = new Router({ prefix: "/communities" });
const prisma = new PrismaClient();

router
  .get("/", async (ctx) => {
    // TODO: Implement list communities
  })
  .post("/", async (ctx) => {
    // TODO: Implement create community
  })
  .get("/:id", async (ctx) => {
    // TODO: Implement get community details
  })
  .put("/:id", async (ctx) => {
    // TODO: Implement update community
  })
  .delete("/:id", async (ctx) => {
    // TODO: Implement delete community
  })
  .post("/:id/moderators", async (ctx) => {
    // TODO: Implement add moderator
  })
  .delete("/:id/moderators/:userId", async (ctx) => {
    // TODO: Implement remove moderator
  });

export const communitiesRouter = router; 