import Koa, { Context, Next } from "koa";
import { ErrorCode, ErrorType } from "types";

const error = (ctx: Context, type: ErrorType, message?: string, code?: ErrorCode) => {
    const response = {
        message: message || "Internal Server Error",
        code: 500,
    };

    switch (type) {
        case "HeaderAuthTokenError":
            response.message = message || "Invalid Authorization Code";
            response.code = 400;
            break;

        case "Unauthorized":
            response.message = message || "You are not authorized to perform this action";
            response.code = 401;
            break;

        case "Forbidden":
            response.message = message || "Forbidden";
            response.code = 403;
            break;

        case "ProjectNotFound":
            response.message = message || "The project you are looking for was not found";
            response.code = 404;
            break;

        case "ResourceNotFound":
            response.message = message || "The resource you are looking for was not found";
            response.code = 404;
            break;

        case "ValidationError":
            response.message = message || "There were errors in validation";
            response.code = 420;
            break;

        case "InvalidToken":
            response.message = message || "The token is either expired or a wrong token was passed";
            response.code = 490;
            break;
    }
    ctx.throw(response.message, response.code);
};

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

export { errorHandler, error };
