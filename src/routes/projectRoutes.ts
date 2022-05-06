import Router from "koa-router";
import { projectController } from "../controller/ProjectController";
const router = new Router();
router.get("/", projectController.getData);
export const projectRoutes = router.routes();
