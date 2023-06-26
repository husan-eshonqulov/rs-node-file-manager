import path from 'node:path';
import { createHash } from 'node:crypto';
import { createReadStream } from 'node:fs';

const hash = (curWorkDir, filePath) => {
  const resPath = path.resolve(curWorkDir, filePath);
  const readStream = createReadStream(resPath);
  const hash = createHash('sha256');
  readStream.on('data', (chunk) => {
    hash.update(chunk);
  });

  readStream.on('end', () => {
    console.log(hash.digest('hex'));
  });
};

export { hash };
