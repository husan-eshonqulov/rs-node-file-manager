import fs from 'node:fs/promises';

const cat = async (path) => {
  try {
    const fd = await fs.open(path);
    const stream = fd.createReadStream();
    stream.on('data', (chunk) => {
      console.log(chunk.toString());
    });
  } catch (err) {
    throw err;
  }
};

export { cat };
