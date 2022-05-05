"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.formattedResponse = exports.isStatusOk = void 0;
var isStatusOk = function (status) { return status >= 200 && status <= 207; };
exports.isStatusOk = isStatusOk;
var formattedResponse = function (status, data, message, error) {
    var response = {
        status: isStatusOk(status) ? "success" : "error",
        code: status,
        message: message || "Success",
        data: data || {},
        error: error || {},
    };
    return response;
};
exports.formattedResponse = formattedResponse;
//# sourceMappingURL=apiUtils.js.map