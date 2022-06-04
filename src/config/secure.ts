import compose from "koa-compose";
import koaHelmet from "koa-helmet";

const appSecurity = compose([
    koaHelmet.contentSecurityPolicy({
        directives: {
            defaultSrc: ["'self'"],
            scriptSrc: ["'self'", "'unsafe-inline'", "https://cdnjs.cloudflare.com"],
            imgSrc: ["'self'", "data:"],
            styleSrc: [
                "'unsafe-inline'",
                "https://cdnjs.cloudflare.com",
                "https://fonts.googleapis.com/",
            ],
            fontSrc: ["https://fonts.gstatic.com"],
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
]);

export default appSecurity;
