import Router from "koa-router";
import { registerValidation } from "../validations";
import { appController } from "../controller/AppController";
import { Context } from "koa";

const router = new Router();
/**
 * @swagger
 * /:
 *   get:
 *     summary: Fetch User Data
 *     tags:
 *       - User
 *     responses:
 *       200:
 *         description: User data fetched successfully.
 */
router.get("/", (ctx: Context) => {
    ctx.body = { status: "success", message: "Welcome to Yashwant's API world."};
});
/**
 * @swagger
 * /:
 *   post:
 *     summary: Register User
 *     tags:
 *       - User
 *     responses:
 *       200:
 *         description: User registered successfully.
 */
router.post("/", registerValidation, appController.getDummyData);

export const appRoutes = router.routes();
