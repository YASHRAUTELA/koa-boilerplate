import Router from "koa-router";
import { appRoutes } from "./appRoutes";
import { projectRoutes } from "./projectRoutes";
const routes: Router = new Router();
routes.use("/", appRoutes);
routes.use("/project", projectRoutes);
export { routes };
