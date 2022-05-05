"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.routes = void 0;
var koa_router_1 = __importDefault(require("koa-router"));
var appRoutes_1 = require("./appRoutes");
var projectRoutes_1 = require("./projectRoutes");
var routes = new koa_router_1.default();
exports.routes = routes;
routes.use("/", appRoutes_1.appRoutes.routes());
routes.use("/project", projectRoutes_1.projectRoutes.routes());
//# sourceMappingURL=index.js.map