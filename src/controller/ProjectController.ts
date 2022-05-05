import { Context, Next } from "koa";

class ProjectController {
    getData(ctx: Context, next: Next) {
        ctx.body = { data: "Project Success!" };
    }
}

const projectController = new ProjectController();

export { projectController };
