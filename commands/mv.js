import fs from 'node:fs';
import path from 'node:path';

import { rm } from './rm.js';

const mv = (filePath, pathDir) => {
  const fileName = path.basename(filePath);
  const readStream = fs.createReadStream(filePath);
  const writeStream = fs.createWriteStream(path.join(pathDir, fileName));

  readStream.on('data', (chunk) => {
    writeStream.write(chunk);
  });

  readStream.on('end', async () => {
    await rm(filePath);
  });
};

export { mv };
