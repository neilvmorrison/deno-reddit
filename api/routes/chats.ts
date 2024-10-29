import { Router } from "oak";
import { PrismaClient } from "prisma";

const router = new Router({ prefix: "/chats" });
const prisma = new PrismaClient();

router
  .get("/rooms", async (ctx) => {
    // TODO: Implement get chat rooms
  })
  .post("/rooms", async (ctx) => {
    // TODO: Implement create chat room
  })
  .get("/rooms/:id/messages", async (ctx) => {
    // TODO: Implement get chat messages
  })
  .post("/rooms/:id/messages", async (ctx) => {
    // TODO: Implement send message
  })
  .put("/rooms/:id/messages/:messageId", async (ctx) => {
    // TODO: Implement update message
  })
  .post("/rooms/:id/participants", async (ctx) => {
    // TODO: Implement add participant
  })
  .delete("/rooms/:id/participants/:userId", async (ctx) => {
    // TODO: Implement remove participant
  });

export const chatsRouter = router; 