import { join, sep, dirname } from 'node:path';
import { readFile } from "node:fs/promises";
import { release, version } from 'node:os'
import { createServer as createServerHttp } from 'node:http';
import { fileURLToPath } from 'node:url'
import './files/c.js';

const random = Math.random();

const pathA = join('src', 'modules', 'files', 'a.json');
const pathB = join('src', 'modules', 'files', 'b.json');

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

let unknownObject;

if (random > 0.5) {
    unknownObject = JSON.parse(await readFile(pathA));
} else {
    unknownObject = JSON.parse(await readFile(pathB));
}

console.log(`Release ${release()}`);
console.log(`Version ${version()}`);
console.log(`Path segment separator is "${sep}"`);

console.log(`Path to current file is ${__filename}`);
console.log(`Path to current directory is ${__dirname}`);

const myServer = createServerHttp((_, res) => {
    res.end('Request accepted');
});

const PORT = 3000;

console.log(unknownObject);

myServer.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}`);
    console.log('To terminate it, use Ctrl+C combination');
});

export {
    unknownObject,
    myServer,
};

