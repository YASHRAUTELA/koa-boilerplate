"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.projectController = void 0;
var ProjectController = /** @class */ (function () {
    function ProjectController() {
    }
    ProjectController.prototype.getData = function (ctx, next) {
        ctx.body = { data: "Project Success!" };
    };
    return ProjectController;
}());
var projectController = new ProjectController();
exports.projectController = projectController;
//# sourceMappingURL=ProjectController.js.map