"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.projectRoutes = void 0;
var koa_router_1 = __importDefault(require("koa-router"));
var ProjectController_1 = require("../controller/ProjectController");
var routes = new koa_router_1.default();
exports.projectRoutes = routes;
routes.get("/", ProjectController_1.projectController.getData);
//# sourceMappingURL=projectRoutes.js.map