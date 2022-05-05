"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.appRoutes = void 0;
var koa_router_1 = __importDefault(require("koa-router"));
var AppController_1 = require("../controller/AppController");
var routes = new koa_router_1.default();
exports.appRoutes = routes;
routes.get("/", AppController_1.appController.getData);
//# sourceMappingURL=appRoutes.js.map