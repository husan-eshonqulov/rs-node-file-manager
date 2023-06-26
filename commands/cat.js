import fs from 'node:fs/promises';

const cat = async (path) => {
  const fd = await fs.open(path);
  const stream = fd.createReadStream();
  stream.on('data', (chunk) => {
    console.log(chunk.toString());
  });
};

export { cat };
