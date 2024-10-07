import { join } from "node:path";
import { createWriteStream } from "node:fs";
import process from "node:process";

const write = async () => {
    const path = join('src', 'streams', 'files', 'fileToWrite.txt');

    const stream = createWriteStream(path);
    process.stdin.pipe(stream);
};

await write();