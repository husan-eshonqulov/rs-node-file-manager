import fs from 'node:fs/promises';

const rm = async (path) => {
  try {
    await fs.unlink(path);
  } catch (err) {
    throw err;
  }
};

export { rm };
