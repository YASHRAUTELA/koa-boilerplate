import Router from "koa-router";
import { appRoutes } from "./appRoutes";
import { projectRoutes } from "./projectRoutes";
const routes: Router = new Router();
routes.use("/", appRoutes.routes());
routes.use("/project", projectRoutes.routes());
export { routes };
