import { Application } from "oak";
import { authRouter } from "./routes/auth.ts";
import { usersRouter } from "./routes/users.ts";
import { contentRouter } from "./routes/content.ts";
import { communitiesRouter } from "./routes/communities.ts";
import { interactionsRouter } from "./routes/interactions.ts";
import { chatsRouter } from "./routes/chats.ts";
import { healthRouter } from "./routes/health.ts";

const app = new Application();

// Add health check route first
app.use(healthRouter.routes());
app.use(healthRouter.allowedMethods());

// Add routes
app.use(authRouter.routes());
app.use(authRouter.allowedMethods());

app.use(usersRouter.routes());
app.use(usersRouter.allowedMethods());

app.use(contentRouter.routes());
app.use(contentRouter.allowedMethods());

app.use(communitiesRouter.routes());
app.use(communitiesRouter.allowedMethods());

app.use(interactionsRouter.routes());
app.use(interactionsRouter.allowedMethods());

app.use(chatsRouter.routes());
app.use(chatsRouter.allowedMethods());

await app.listen({ port: 8000 }); 