import { error } from "../config";
import Joi from "joi";
import { Context, Next } from "koa";

const registerValidation = async (ctx: Context, next: Next) => {
    const schema = Joi.object({
        name: Joi.string().required(),
        email: Joi.string().email().required(),
        password: Joi.string().min(6).max(20).required(),
    });
    const { error: validationError } = schema.validate(ctx.request.body, { abortEarly: false });
    if (!validationError) {
        await next();
    } else {
        error({ ctx, type: "ValidationError", fields: validationError });
    }
};

export { registerValidation };
