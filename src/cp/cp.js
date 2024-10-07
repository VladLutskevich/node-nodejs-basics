import { fileURLToPath } from 'url';
import { join, dirname } from "node:path";
import { spawn } from 'node:child_process';
import { stdin, stdout } from 'node:process';

const spawnChildProcess = async (args) => {
    const __filename = fileURLToPath(import.meta.url);
    const __dirname = dirname(__filename);
    const path = join(__dirname, 'files', 'script.js');

    const child = spawn('node', [path, ...args]);
    stdin.pipe(child.stdin);
    child.stdout.pipe(stdout);
};

// Put your arguments in function call to test this functionality
spawnChildProcess( [1, '23', true]);
