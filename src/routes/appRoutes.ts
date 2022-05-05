import Router from "koa-router";
import { appController } from "../controller/AppController";
const routes = new Router();
routes.get("/", appController.getData);
export { routes as appRoutes };
