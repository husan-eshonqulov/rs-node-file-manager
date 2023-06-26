import { createBrotliDecompress } from 'node:zlib';
import { createReadStream, createWriteStream } from 'node:fs';

const decompress = (filePath, destPath) => {
  const readStream = createReadStream(filePath);
  const writeStream = createWriteStream(destPath);
  const brotli = createBrotliDecompress();
  const stream = readStream.pipe(brotli).pipe(writeStream);
  stream.on('finish', () => {
    console.log('Done decompressiong');
  });
};

export { decompress };
