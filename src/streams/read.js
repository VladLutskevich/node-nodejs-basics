import { join } from "node:path";
import { createReadStream } from "node:fs";
import process from "node:process";

const read = async () => {
    const path = join('src', 'streams', 'files', 'fileToRead.txt');

    const stream = createReadStream(path);
    stream.on("data", (res) => process.stdout.write(res));
};

await read();