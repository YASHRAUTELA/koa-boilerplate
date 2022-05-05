import { ResponseType } from "../utils/apiUtils";

export class CustomError implements ResponseType {
    public status: string;
    public code: number;
    public message?: string;
    public data?: any;
    public error?: any;

    constructor(message: string, code: number = 500, data: any = {}, error: any = {}) {
        this.status = "error";
        this.code = code;
        this.message = message || "Oops! Something went wrong";
        this.data = data;
        this.error = error;
    }
}
