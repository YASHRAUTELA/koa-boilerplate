import Koa, { Next } from "koa";
const errorHandler = (app: Koa) => {
    app.on("error", async (err) => {
        // Need to implement logger (winston) here to save formatted logs in a file.
        console.log("Custom Error:", err.message);
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
};

export default errorHandler;
