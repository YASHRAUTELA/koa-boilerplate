import cors from "@koa/cors";
import Koa from "koa";
import koaBody from "koa-body";
import bodyParser from "koa-bodyparser";
import { routes } from "./routes";
import compose from "koa-compose";
import { config } from "dotenv";
import KoaLogger from "koa-logger";
import SwaggerJSDoc from "swagger-jsdoc";
import { errorHandler, appSecurity } from "./config";
// @ts-ignore
import SwaggerUi from "swagger-ui-koa";
import path from "path";

config({ path: `${__dirname}` + "/../.env" });
const port = process.env.PORT || 5000;
const app = new Koa();

// Swagger Configuration
const swaggerSpec = SwaggerJSDoc({
    swaggerDefinition: {
        info: {
            title: "Sample API",
            version: "1.0.0",
            contact: {
                email: "yashrautela1@gmail.com",
                name: "Yashwant Rautela",
            },
        },
        securityDefinitions: {
            bearerAuth: {
                type: "apiKey",
                name: "Authorization",
                scheme: "bearer",
                in: "header",
            },
        },
        security: [
            {
                bearerAuth: [],
            },
        ],
    },
    apis: [path.join(__dirname, "routes", process.env.NODE_ENV == "development" ? "*.ts": "*.js")],
});

app.use(compose([KoaLogger(), cors(), koaBody({ multipart: true }), bodyParser(), appSecurity]));

errorHandler(app);

app.use(routes.routes());
app.use(routes.allowedMethods());
app.use(SwaggerUi.serve);
app.use(SwaggerUi.setup(swaggerSpec));

// Start server
app.listen(port, () => console.log(`Server is listening on port ${port}!`));
