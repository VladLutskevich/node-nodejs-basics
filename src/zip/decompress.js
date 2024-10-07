import { join } from "node:path";
import { createReadStream, createWriteStream } from "node:fs";
import { pipeline } from 'node:stream/promises';
import { createUnzip } from "node:zlib";

const decompress = async () => {
    const pathToWrite = join('src', 'zip', 'files', 'fileToCompress.txt');
    const pathToRead = join('src', 'zip', 'files', 'archive.gz');

    const gzip = createUnzip();
    const readStream = createReadStream(pathToRead);
    const writeStream = createWriteStream(pathToWrite);
    
    await pipeline(readStream, gzip, writeStream);
};

await decompress();