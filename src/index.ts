import cors from "@koa/cors";
import Koa, { Next } from "koa";
import koaBody from "koa-body";
import bodyParser from "koa-bodyparser";
import koaHelmet from "koa-helmet";
import { routes } from "./routes";
import compose from "koa-compose";
import { config } from "dotenv";
import KoaLogger from "koa-logger";

config({ path: `${__dirname}` + "/.env" });
const port = process.env.PORT || 5000;
const app = new Koa();

app.use(
    compose([
        KoaLogger(),
        cors(),
        bodyParser(),
        koaBody({ multipart: true }),
        koaHelmet.contentSecurityPolicy({
            directives: {
                defaultSrc: ["'self'"],
                scriptSrc: ["'self'"],
                imgSrc: ["'self'", "data:"],
            },
        }),
        koaHelmet.dnsPrefetchControl({
            allow: false,
        }),
        koaHelmet.frameguard({
            action: "sameorigin",
        }),
        koaHelmet.hsts(),
        koaHelmet.ieNoOpen(),
        koaHelmet.noSniff(),
    ])
);

app.on("error", async (err) => {
    // Need to implement logger (winston) here to save formatted logs in a file.
    console.log("Error:", err.message);
});

app.use(async (ctx, next: Next) => {
    try {
        await next();
    } catch (err: Error | any) {
        ctx.status = err.statusCode || err.status || 500;
        ctx.body = {
            status: "error",
            data: {},
            message: err.message,
        };
        ctx.app.emit("error", err, ctx);
    }
});

app.use(routes.routes());
app.use(routes.allowedMethods());

// Start server
app.listen(port, () => console.log(`Server is listening on port ${port}!`));
