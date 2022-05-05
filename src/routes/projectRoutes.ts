import Router from "koa-router";
import { projectController } from "../controller/ProjectController";
const routes = new Router();
routes.get("/", projectController.getData);
export { routes as projectRoutes };
