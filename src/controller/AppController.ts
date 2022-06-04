import { query } from "../config/database";
import { Context, Next } from "koa";

class AppController {
    async getData(ctx: Context, next: Next) {
        try {
            const data = await query("SELECT * from users where email=?", ["test@gmail.com"]);
            ctx.body = { data: "App Success!", content: data };
        } catch (err: any) {
            ctx.throw(500, err.message);
        }
    }

    async getDummyData(ctx: Context, next: Next) {
        try {
            const data = [
                {
                    name: "Lorem Ipsum",
                    company: "Google",
                },
            ];
            ctx.body = { data: "App Success!", content: data };
        } catch (err: any) {
            ctx.throw(500, err.message);
        }
    }
}

const appController = new AppController();

export { appController };
