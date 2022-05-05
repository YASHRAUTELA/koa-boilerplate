interface ResponseType {
    status: string;
    code: number;
    message?: string;
    data?: any;
    error?: any;
}

const isStatusOk = (status: number) => status >= 200 && status <= 207;

const formattedResponse = (status: number, data?: any, message?: string, error?: any) => {
    const response: ResponseType = {
        status: isStatusOk(status) ? "success" : "error",
        code: status,
        message: message || "Success",
        data: data || {},
        error: error || {},
    };
    return response;
};

export { isStatusOk, formattedResponse, ResponseType };
