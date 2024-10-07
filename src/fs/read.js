import { join } from "node:path";
import { readFile } from "node:fs/promises";

const read = async () => {
    const path = join('src', 'fs', 'files', 'fileToRead.txt');

    try {
        const text = await readFile(path, 'utf8');
        console.log(text)
    }
    catch(error) {
        console.error(new Error('FS operation failed'));
    }
};

await read();