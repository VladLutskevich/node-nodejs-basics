import { cpus } from "node:os";
import { Worker } from "node:worker_threads";
import { fileURLToPath } from 'url';
import { join, dirname } from "node:path";

const performCalculations = async () => {
    const __filename = fileURLToPath(import.meta.url);
    const __dirname = dirname(__filename);
    const path = join(__dirname, 'worker.js');

    const workers = new Array(cpus().length).fill().map((el, ind) => new Worker(path, { workerData: ind + 10 }));

    const result = await Promise.allSettled(
        workers.map((worker) => 
            new Promise((resolve, reject) => {
                worker.on('message', data => resolve({ status: 'resolved', data }));
                worker.on('error', () => reject({ status: 'error', data: null }));
            })
        )
    );

    const resultModified = result.map((el) => el.status === 'fulfilled' ? {status: 'resolved', data: el.value.data} : {status: 'error', data: null});

    console.log(resultModified);

};

await performCalculations();