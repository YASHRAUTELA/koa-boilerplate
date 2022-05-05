import mysql, { RowDataPacket } from "mysql2/promise";
import { CustomError } from "./error";

interface MySqlErrorType {
    code: string;
    errno: number;
    sql: string;
    sqlState: string;
    sqlMessage: string;
}
const db = mysql.createPool({
    host: process.env.DB_HOST || "localhost",
    user: process.env.DB_USER || "root",
    password: process.env.DB_PASSWORD || "12345678",
    database: process.env.DB_NAME || "scrumbooster_new",
});

export const query = (sql: string, values?: any | any[] | { [param: string]: any }) =>
    db
        .execute(sql, values)
        .then((value) => {
            return (<RowDataPacket>value)[0];
        })
        .catch((reason: MySqlErrorType) => {
            const { sqlMessage } = reason;
            throw new CustomError(sqlMessage, 500, {}, reason);
        });
