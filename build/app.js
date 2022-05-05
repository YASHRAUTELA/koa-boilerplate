"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var koa_1 = __importDefault(require("koa"));
var koa_router_1 = __importDefault(require("koa-router"));
var appRoutes_1 = require("./routes/appRoutes");
var App = /** @class */ (function () {
    function App() {
        this.app = new koa_1.default();
        this.router = new koa_router_1.default();
        this.routes();
        this.config();
    }
    App.prototype.routes = function () {
        this.router.get("/", appRoutes_1.appRoutes);
    };
    App.prototype.config = function () { };
    return App;
}());
var app = new App().app;
exports.default = app;
//# sourceMappingURL=app.js.map