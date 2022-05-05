import cors from "@koa/cors";
import Koa, { Context } from "koa";
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
app.use(routes.routes());
app.on("error", (err, ctx: Context) => {
    ctx.status = 500;
    ctx.body = {
        status: "error",
        data: {},
        error: err,
    };
});

// Start server
app.listen(port, () => console.log(`Server is listening on port ${port}!`));
