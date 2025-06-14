import { MultipartFile } from "@fastify/multipart";
import NotulensiRepository from "./notulensi.repository";
import { CreateNotulensiInput } from "./notulensi.schema";
import { FileEntries } from "../../utils/types";
import path from "path";
import fs from "fs";
import ProgramRepository from "../program/program.repository";
import EventRepository from "../event/event.repository";

class NotulensiService {
    static async createNotulensi(data: CreateNotulensiInput, files: MultipartFile | MultipartFile[]) {
        const event = await EventRepository.FindById(data.eventId.value);
        if (!event) {
            throw new Error("Event not found");
        }

        const fileEntries: FileEntries[] = [];

        const filesArray = Array.isArray(files) ? files : [files];

        for (const file of filesArray) {
            // Process file
            const uploadDir = path.join(__dirname, `../../../public/notulensi`)
            if (!fs.existsSync(uploadDir)) {
                fs.mkdirSync(uploadDir, { recursive: true })
            }

            const clearFileName = file.filename.replace(/[^a-z0-9.]/gi, '_').toLowerCase()
            const uniqueFilename = `${Date.now()}-${clearFileName}`
            const filePath = path.join(uploadDir, uniqueFilename)

            fs.writeFile(filePath, await file.toBuffer(), (err) => {
                if (err) {
                    throw new Error(err.message)
                }
            })

            fileEntries.push({
                filename: uniqueFilename,
                originalName: file.filename,
                path: filePath,
                mimetype: file.mimetype,
                size: file.file.bytesRead,
                extension: path.extname(file.filename).toLowerCase(),
            });
        }

        if (fileEntries.length === 0) {
            throw new Error("files are required");
        }

        const notulensi = await NotulensiRepository.Insert(data, fileEntries);

        return notulensi;
    }

    static async createNotulensiDoc(id: string, files: MultipartFile | MultipartFile[]) {
        const fileEntries: FileEntries[] = [];

        if (!id) {
            throw new Error("Notulensi ID is required");
        }

        const filesArray = Array.isArray(files) ? files : [files];

        for (const file of filesArray) {
            // Process file
            const uploadDir = path.join(__dirname, `../../../public/notulensi`)
            if (!fs.existsSync(uploadDir)) {
                fs.mkdirSync(uploadDir, { recursive: true })
            }

            const clearFileName = file.filename.replace(/[^a-z0-9.]/gi, '_').toLowerCase()
            const uniqueFilename = `${Date.now()}-${clearFileName}`
            const filePath = path.join(uploadDir, uniqueFilename)

            fs.writeFile(filePath, await file.toBuffer(), (err) => {
                if (err) {
                    throw new Error(err.message)
                }
            })

            fileEntries.push({
                filename: uniqueFilename,
                originalName: file.filename,
                path: filePath,
                mimetype: file.mimetype,
                size: file.file.bytesRead,
                extension: path.extname(file.filename).toLowerCase(),
            });
        }

        if (fileEntries.length === 0) {
            throw new Error("files are required");
        }

        const notulensi = await NotulensiRepository.InsertDocument(id, fileEntries);

        return notulensi;
    }

    static async streamNotulensiDocByID(
        id: string
    ) {
        const file = await NotulensiRepository.FindNotulensiDokumen(id)

        if (!file) {
            throw new Error('File not found')
        }

        const filePath = path.join(__dirname, '../../../public/notulensi', file.filename)

        return {
            file,
            filePath
        }
    }

    static async getAllNotulensi(name?: string) {
        const notulensi = await NotulensiRepository.FindAll(name);
        return notulensi;
    }

    static async getNotulensiById(id: string) {
        const notulensi = await NotulensiRepository.FindById(id);
        if (!notulensi) {
            throw new Error("Notulensi not found");
        }

        return notulensi;
    }

    static async updateNotulensi(id: string, data: CreateNotulensiInput, files?: MultipartFile | MultipartFile[]) {
        const notulensi = await NotulensiRepository.FindById(id);
        if (!notulensi) {
            throw new Error("Notulensi not found");
        }

        const fileEntries: FileEntries[] = [];
        if (files) {
            const filesArray = Array.isArray(files) ? files : [files];

            for (const file of filesArray) {
                const uploadDir = path.join(__dirname, `../../../public/notulensi`);
                if (!fs.existsSync(uploadDir)) {
                    fs.mkdirSync(uploadDir, { recursive: true });
                }

                const clearFileName = file.filename.replace(/[^a-z0-9.]/gi, '_').toLowerCase();
                const uniqueFilename = `${Date.now()}-${clearFileName}`;
                const filePath = path.join(uploadDir, uniqueFilename);

                await fs.promises.writeFile(filePath, await file.toBuffer());

                fileEntries.push({
                    filename: uniqueFilename,
                    originalName: file.filename,
                    path: filePath,
                    mimetype: file.mimetype,
                    size: file.file.bytesRead,
                    extension: path.extname(file.filename).toLowerCase(),
                });
            }

        }

        const updatedNotulensi = await NotulensiRepository.Update(id, data, fileEntries);

        return updatedNotulensi;
    }

    static async deleteNotulensi(id: string) {
        const notulensi = await NotulensiRepository.FindById(id);
        if (!notulensi) {
            throw new Error("Notulensi not found");
        }

        if(notulensi.File.length > 0) {
            for (const file of notulensi.File) {
                await this.deleteNotulensiDoc(file.id);
            }
        }

        return NotulensiRepository.Delete(id);

    }

    static async deleteNotulensiDoc(id: string) {
        try {
            const fileRecord = await NotulensiRepository.FindNotulensiDokumen(id);

            if (fileRecord) {
                const filePath = path.join(__dirname, '../../../public/notulensi', fileRecord.filename);

                await fs.promises.unlink(filePath);

                await NotulensiRepository.DeleteFile(id);

                return [];
            } else {
                throw new Error("File not found");
            }
        } catch (error) {
            throw new Error(`Error while deleting file: ${error}`);
        }

    }
}

export default NotulensiService;