import { join } from "node:path";
import { cp } from "node:fs/promises";

const copy = async () => {
    const path = join('src', 'fs', 'files');
    const newPath = join('src', 'fs', 'files_copy');
    const options = {
        recursive: true,
        errorOnExist: true,
        force: false,
    };

    try {
        await cp(path, newPath, options);
    }
    catch(error) {
        console.error(new Error('FS operation failed'));
    }
};

await copy();
