import { join } from "node:path";
import { writeFile } from "node:fs/promises";

const create = async () => {
    const path = join('src', 'fs', 'files', 'fresh.txt');
    const text = 'I am fresh and young';
    const options = {
        flag: 'wx',
        encoding: 'utf-8',
    };

    try {
        await writeFile(path, text, options);
    }
    catch(error) {
        console.error(new Error('FS operation failed'));
    }
};

await create();