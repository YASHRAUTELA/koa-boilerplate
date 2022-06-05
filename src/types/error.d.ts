type ErrorType =
    | "BadRequest"
    | "HeaderAuthTokenError"
    | "Unauthorized"
    | "Forbidden"
    | "ProjectNotFound"
    | "ResourceNotFound"
    | "ValidationError"
    | "InvalidToken";

type ErrorCode = 400 | 401 | 403 | 404 | 420 | 490;

interface ErrorRequestType<T> {
    ctx: T;
    type: ErrorType;
    message?: string;
    code?: ErrorCode;
    fields?: any;
}

interface ErrorResponseType {
    message: string;
    code: number;
    details?: any;
}

export { ErrorRequestType, ErrorResponseType };
