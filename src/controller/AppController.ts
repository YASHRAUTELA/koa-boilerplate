import { query } from "../config/mysql";
import { Context, Next } from "koa";

class AppController {
    async getData(ctx: Context, next: Next) {
        const data = await query("SELECT * from users where email=?", ["abc@gmail.com"]);
        ctx.body = { data: "App Success!", content: data };
    }
}

const appController = new AppController();

export { appController };
