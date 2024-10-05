import { join } from "node:path";
import { readFile } from "node:fs/promises";
import { createHash } from "node:crypto";
import { createReadStream } from "node:fs";

const calculateHash = async () => {
    const path = join('src', 'hash', 'files', 'fileToCalculateHashFor.txt');
    let text = await readFile(path);
    text = createHash("sha256");

    const stream = createReadStream(path);
    stream.on("data", (res) => text.update(res));
    stream.on("end", () => console.log(text.digest("hex")));
};

await calculateHash();