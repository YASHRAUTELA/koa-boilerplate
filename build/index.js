"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var cors_1 = __importDefault(require("@koa/cors"));
var koa_1 = __importDefault(require("koa"));
var koa_body_1 = __importDefault(require("koa-body"));
var koa_bodyparser_1 = __importDefault(require("koa-bodyparser"));
var koa_helmet_1 = __importDefault(require("koa-helmet"));
var routes_1 = require("./routes");
var koa_compose_1 = __importDefault(require("koa-compose"));
var dotenv_1 = require("dotenv");
var koa_logger_1 = __importDefault(require("koa-logger"));
(0, dotenv_1.config)({ path: "".concat(__dirname) + "/.env" });
var port = process.env.PORT || 5000;
var app = new koa_1.default();
app.use((0, koa_compose_1.default)([
    (0, koa_logger_1.default)(),
    (0, cors_1.default)(),
    (0, koa_bodyparser_1.default)(),
    (0, koa_body_1.default)({ multipart: true }),
    koa_helmet_1.default.contentSecurityPolicy({
        directives: {
            defaultSrc: ["'self'"],
            scriptSrc: ["'self'"],
            imgSrc: ["'self'", "data:"],
        },
    }),
    koa_helmet_1.default.dnsPrefetchControl({
        allow: false,
    }),
    koa_helmet_1.default.frameguard({
        action: "sameorigin",
    }),
    koa_helmet_1.default.hsts(),
    koa_helmet_1.default.ieNoOpen(),
    koa_helmet_1.default.noSniff(),
]));
app.use(routes_1.routes.routes());
app.on("error", function (err) {
    console.log(err);
});
// Start server
app.listen(port, function () { return console.log("Server is listening on port ".concat(port, "!")); });
//# sourceMappingURL=index.js.map