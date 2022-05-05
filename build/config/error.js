"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CustomError = void 0;
var CustomError = /** @class */ (function () {
    function CustomError(message, code, data, error) {
        if (code === void 0) { code = 500; }
        if (data === void 0) { data = {}; }
        if (error === void 0) { error = {}; }
        this.status = "error";
        this.code = code;
        this.message = message || "Oops! Something went wrong";
        this.data = data;
        this.error = error;
    }
    return CustomError;
}());
exports.CustomError = CustomError;
//# sourceMappingURL=error.js.map