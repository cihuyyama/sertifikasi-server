export interface FileResponse {
    id: string
    filename: string
    path: string
    mimetype: string
    createdAt: string
}

export type FileEntries = {
    filename: string;
    originalName: any;
    path: string;
    mimetype: string;
    size: number;
    extension: any;
}