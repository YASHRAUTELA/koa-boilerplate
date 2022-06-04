import cors from "@koa/cors";
import Koa from "koa";
import koaBody from "koa-body";
import bodyParser from "koa-bodyparser";
import { routes } from "./routes";
import compose from "koa-compose";
import { config } from "dotenv";
import KoaLogger from "koa-logger";
import appSecurity from "./config/secure";
import errorHandler from "./config/error";
import swaggerDocs from "./config/documentation";

config({ path: `${__dirname}` + "/.env" });
const port = process.env.PORT || 5000;
const app = new Koa();

app.use(compose([KoaLogger(), cors(), bodyParser(), koaBody({ multipart: true }), appSecurity]));

errorHandler(app);

app.use(routes.routes());
app.use(routes.allowedMethods());

swaggerDocs(app);

// Start server
app.listen(port, () => console.log(`Server is listening on port ${port}!`));
