import { Request, Response } from "express";
import { getFileListService, getFileService, uploadFileService } from "../service/file.service";

export async function getListOfFilesController(req: Request, res: Response) {
    try {
        const list = await getFileListService();
        return res.send(list);
    } catch (error) {
        return res.status(500).send({error: error});
    }
}

export async function getFileController(req: Request, res: Response) {
    try {
        const { filename } = req.params;
        const content = await getFileService(filename);
        return res.send({content: content});
    } catch (error) {
        return res.status(500).send({error: error});
    }
}

export async function uploadFileController(req: Request, res: Response) {
    try {
        const data = req.body;
        await uploadFileService(data);
        return res.send({message: "File uploaded successfully"});
    } catch (error) {
        return res.status(500).send({error: error});
    }
}