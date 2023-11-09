import { sequelize } from "../app";

export interface FileData {
    filename: string
    hash: string
}

export async function insertIntoTable(filename: string, hash: string) {
    try {
        const [results, metadata] = await sequelize.query(`INSERT INTO FILES (filename, hash) VALUES ('${filename}', '${hash}')`);
        return results;
    } catch (error) {
        throw error;
    }
}

export async function getFromTableByFilename(filename: string) {
    try {
        const [results, metadata] = await sequelize.query(`SELECT * FROM FILES WHERE filename = '${filename}'`);
        return (results[0] as FileData) || null;
    } catch (error) {
        throw error;
    }
}

export async function getFileListFromTable() {
    const [results, metadata] = await sequelize.query('SELECT * FROM FILES');
    return (results as FileData[]) || [];
}