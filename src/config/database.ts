import { config } from "dotenv";
import { createPool, RowDataPacket } from "mysql2/promise";

config({ path: `${__dirname}` + "/../../.env" });
interface MySqlErrorType {
    code: string;
    errno: number;
    sql: string;
    sqlState: string;
    sqlMessage: string;
}
const db = createPool({
    host: process.env.DB_HOST || "localhost",
    user: process.env.DB_USER || "root",
    password: process.env.DB_PASSWORD || "12345678",
    database: process.env.DB_NAME || "test",
});

const query = (sql: string, values?: any | any[] | { [param: string]: any }) =>
    db
        .execute(sql, values)
        .then((value) => {
            return (<RowDataPacket>value)[0];
        })
        .catch((reason: MySqlErrorType) => {
            const { sqlMessage } = reason;
            throw new Error(sqlMessage);
        });

export { query };
