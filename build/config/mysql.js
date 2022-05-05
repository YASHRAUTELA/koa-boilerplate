"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.query = void 0;
var promise_1 = __importDefault(require("mysql2/promise"));
var error_1 = require("./error");
var db = promise_1.default.createPool({
    host: process.env.DB_HOST || "localhost",
    user: process.env.DB_USER || "root",
    password: process.env.DB_PASSWORD || "12345678",
    database: process.env.DB_NAME || "scrumbooster_new",
});
var query = function (sql, values) {
    return db
        .execute(sql, values)
        .then(function (value) {
        return value[0];
    })
        .catch(function (reason) {
        var sqlMessage = reason.sqlMessage;
        throw new error_1.CustomError(sqlMessage, 500, {}, reason);
    });
};
exports.query = query;
//# sourceMappingURL=mysql.js.map