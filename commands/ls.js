import path from 'node:path';
import fs from 'node:fs/promises';
import { statSync } from 'node:fs';

import { getCurWorkingDir } from '../utils/getCurWorkingDir.js';

const ls = async (process) => {
  const curWorkDir = getCurWorkingDir(process);
  let files = [];
  let dirs = [];
  try {
    const content = await fs.readdir(curWorkDir);
    const contPaths = content.map((cont) => path.join(curWorkDir, cont));
    contPaths.forEach((path, index) => {
      const stats = statSync(path);
      if (stats.isFile()) {
        files.push(content[index]);
      } else if (stats.isDirectory()) {
        dirs.push(contPaths[index]);
      }
    });
    files.sort();
    dirs.sort();
    dirs = dirs.map((dir) => ({ name: dir, type: 'directory' }));
    files = files.map((file) => ({ name: file, type: 'file' }));
    const table = [...dirs, ...files];
    console.table(table);
  } catch (err) {
    throw err;
  }
};

export { ls };
