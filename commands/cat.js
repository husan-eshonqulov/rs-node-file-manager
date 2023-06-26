import fs from 'node:fs/promises';

const cat = async (path) => {
  try {
    const fd = await fs.open(path);
  } catch (err) {
    throw err;
  }
  const stream = fd.createReadStream();
  stream.on('data', (chunk) => {
    console.log(chunk.toString());
  });
};

export { cat };
