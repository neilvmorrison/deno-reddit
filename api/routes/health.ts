import { Router } from "oak";

const router = new Router({ prefix: "/health" });

router.get("/", (ctx) => {
  ctx.response.status = 200;
  ctx.response.body = { message: "OK" };
});

export const healthRouter = router; 