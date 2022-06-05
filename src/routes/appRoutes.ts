import Router from "koa-router";
import { registerValidation } from "../validations";
import { appController } from "../controller/AppController";
const router = new Router();
router.get("/", appController.getData);
router.post("/", registerValidation, appController.getDummyData);
export const appRoutes = router.routes();
