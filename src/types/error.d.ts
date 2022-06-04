type ErrorType =
    | "HeaderAuthTokenError"
    | "Unauthorized"
    | "Forbidden"
    | "ProjectNotFound"
    | "ResourceNotFound"
    | "ValidationError"
    | "InvalidToken";

type ErrorCode = 400 | 401 | 403 | 404 | 420 | 490;

export { ErrorType, ErrorCode };
