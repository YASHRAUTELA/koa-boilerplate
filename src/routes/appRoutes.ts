import Router from "koa-router";
import { registerValidation } from "../validations";
import { appController } from "../controller/AppController";
import { Context } from "koa";

const router = new Router();
router.get("/", (ctx: Context) => {
    ctx.body = { status: "success", message: "Welcome to Yashwant's API world."};
});
router.post("/", registerValidation, appController.getDummyData);

export const appRoutes = router.routes();
