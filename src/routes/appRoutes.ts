import Router from "koa-router";
import { appController } from "../controller/AppController";
const router = new Router();
router.get("/", appController.getData);
export const appRoutes = router.routes();
