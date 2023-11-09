import { Md5 } from 'ts-md5';
import fs from 'fs';
import { getFromTableByFilename, insertIntoTable } from '../helper/query';

class FS {
    private path: string;

    constructor(path: string) {
        this.path = path;
        const exists = fs.existsSync(path);
        if (!exists) {
            fs.mkdirSync(path);
        }
    }

    async store(filename: string, content: string) {
        try {
            const ext = filename.split('.').pop();
            const hash = Md5.hashStr(content);
            const exists = fs.existsSync(`${this.path}/${hash}.${ext}`);
            if (!exists) {
                fs.writeFileSync(`${this.path}/${hash}.${ext}`, content);
            }
            await insertIntoTable(filename, hash);
        } catch (error) {
            throw error;
        }
    }

    async get(filename: string) {
        try {
            const data = await getFromTableByFilename(filename);
            if (data) {
                const ext = filename.split('.').pop();
                const file = fs.readFileSync(`${this.path}/${data.hash}.${ext}`);
                return file.toString("utf-8");
            }
        } catch (error) {
            throw error;
        }
    }
}
export default FS;