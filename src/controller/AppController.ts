import { query } from "../config/database";
import { Context, Next } from "koa";

class AppController {
    async getData(ctx: Context, next: Next) {
        try {
            const data = await query("SELECCT * from users where email=?", ["abc@gmail.com"]);
            ctx.body = { data: "App Success!", content: data };
        } catch (err: any) {
            ctx.throw(500, err.message);
        }
    }
}

const appController = new AppController();

export { appController };
