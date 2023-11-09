import { fs } from "../app";
import { getFileListFromTable } from "../helper/query";

export async function getFileListService() {
    try {
        const list = await getFileListFromTable();
        const result = list.map(data => data.filename);
        return result;
    } catch (error) {
        throw error;
    }
}

export async function getFileService(filename: string) {
    try {
        const content = await fs.get(filename);
        return content;
    } catch (error) {
        throw error;
    }
}

export async function uploadFileService(fileData: { filename: string, content: string }) {
    try {
        await fs.store(fileData.filename, fileData.content);
    } catch (error) {
        throw error;
    }
}