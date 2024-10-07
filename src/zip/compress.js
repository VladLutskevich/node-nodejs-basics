import { join } from "node:path";
import { createReadStream, createWriteStream } from "node:fs";
import { pipeline } from 'node:stream/promises';
import { createGzip } from "node:zlib";

const compress = async () => {
    const pathToRead = join('src', 'zip', 'files', 'fileToCompress.txt');
    const pathToWrite = join('src', 'zip', 'files', 'archive.gz');

    const gzip = createGzip();
    const readStream = createReadStream(pathToRead);
    const writeStream = createWriteStream(pathToWrite);

    await pipeline(readStream, gzip, writeStream);
};

await compress();