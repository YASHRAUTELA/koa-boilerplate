import Koa from "koa";
import { koaSwagger } from "koa2-swagger-ui";
import path from "path";
import yamljs from "yamljs";

// Swagger-ui documentation
const swaggerDocs = (app: Koa) => {
    // loads file from directory
    const spec = yamljs.load(path.join(__dirname, "../docs/v1.0.0.yaml"));

    app.use(
        koaSwagger({
            routePrefix: "/swagger", // host at /swagger instead of default /docs
            swaggerOptions: {
                spec,
            },
        })
    );
};

export { swaggerDocs };
