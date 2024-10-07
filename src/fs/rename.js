import { join } from "node:path";
import { rename as renameFs} from "node:fs/promises";

const rename = async () => {
    const path = join('src', 'fs', 'files', 'wrongFilename.txt');
    const newPath = join('src', 'fs', 'files', 'properFilename.md');
    
    try {
        await renameFs(path, newPath);
    }
    catch(error) {
        console.error(new Error('FS operation failed'));
    }
};

await rename();