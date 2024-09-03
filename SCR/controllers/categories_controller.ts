import pool from "../database/db_connect";

export const getCategories = async (req: Request, res:Response): Promise<Response> =>{
    try {
        const response = pool.query('SELECT* FROM Categories')
        return res.status(200).json
    }
};