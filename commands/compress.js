import { createBrotliCompress } from 'node:zlib';
import { createReadStream, createWriteStream } from 'node:fs';

const compress = (filePath, destPath) => {
  const readStream = createReadStream(filePath);
  const writeStream = createWriteStream(destPath);
  const brotli = createBrotliCompress();
  const stream = readStream.pipe(brotli).pipe(writeStream);
  stream.on('finish', () => {
    console.log('Done compressiong');
  });
};

export { compress };
