import { join } from "node:path";
import { readdir } from "node:fs/promises";

const list = async () => {
    const path = join('src', 'fs', 'files');

    try {
        const files = await readdir(path);
        console.log(files);
    }
    catch(error) {
        console.error(new Error('FS operation failed'));
    }
};

await list();