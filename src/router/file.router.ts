import express from "express";
import { getFileController, getListOfFilesController, uploadFileController } from "../controller/file.controller";

const router = express.Router();

/**
 * GET
 * Get the list of uploaded files
 */
router.get("/list", getListOfFilesController)

/**
 * GET
 * Get file content by filename
 */
router.get("/get/:filename", getFileController)

/**
 * POST
 * Create a file with given filename and content
 */
router.post("/upload", uploadFileController)

export = router;