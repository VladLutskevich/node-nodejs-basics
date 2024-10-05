import { join } from "node:path";
import { unlink } from "node:fs/promises";

const remove = async () => {
    const path = join('src', 'fs', 'files', 'fileToRemove.txt');

    try {
        await unlink(path);
    }
    catch(error) {
        console.error(new Error('FS operation failed'));
    }
};

await remove();