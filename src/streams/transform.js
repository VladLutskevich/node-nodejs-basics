import process from 'node:process';
import { Transform } from 'node:stream';

const transform = async () => {
    const myTransform = new Transform({
        transform(res, enc, callback) {
            callback(null, res.toString().split('').reverse().join(''));
        }
    })
    process.stdin.pipe(myTransform).pipe(process.stdout);
};

await transform();