import fs from "fs";
import { join } from "path";


const ensureFilename = (filename) => {
    if (!filename) {
        throw new Error("El nombre del archivo es obligatorio");
    }
};


export const existsImageFile = async (filepath, filename) => {
    try {
        const path = join(filepath, filename);
        await fs.promises.access(path, fs.constants.F_OK);
        return true;
    } catch {
        return false;
    }
};


export const deleteImageFile = async (filepath, filename) => {
    try {
        ensureFilename(filename);

        const path = join(filepath, filename);
        await fs.promises.unlink(path);
    } catch (error) {
        throw new Error(`Error al eliminar la imagen. ${error.message}`);
    }
};