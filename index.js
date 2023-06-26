import os from 'node:os';
import readline from 'node:readline';

import { printMessage } from './utils/printMessage.js';
import { getUsername } from './utils/getUsername.js';
import { getCurWorkingDir } from './utils/getCurWorkingDir.js';
import { getOperation } from './utils/getOperation.js';
import { getArguments } from './utils/getArguments.js';

import { up } from './commands/up.js';
import { cd } from './commands/cd.js';
import { ls } from './commands/ls.js';
import { cat } from './commands/cat.js';
import { mv } from './commands/mv.js';
import { rm } from './commands/rm.js';
import { osCom } from './commands/os.js';
import { hash } from './commands/hash.js';
import { compress } from './commands/compress.js';
import { decompress } from './commands/decompress.js';

const input = process.stdin;
const output = process.output;

const rl = readline.createInterface({ input, output });

const args = process.argv;
const username = getUsername(args.slice(2));
const homedir = os.homedir();
process.chdir(homedir);

const start = () => {
  printMessage(`Welcome to the File Manager, ${username}!`);
  printMessage(getCurWorkingDir(process));

  rl.on('line', (input) => {
    if (input === '.exit') {
      return rl.close();
    }

    const operation = getOperation(input);
    const argument = getArguments(input);

    switch (operation) {
      case 'up':
        up(process);
        break;

      case 'cd':
        cd(process, ...argument);
        break;

      case 'ls':
        ls(process);
        break;

      case 'cat':
        cat(...argument);
        break;

      case 'mv':
        mv(...argument);
        break;

      case 'rm':
        rm(...argument);
        break;

      case 'os':
        osCom(...argument);
        break;

      case 'hash':
        hash(getCurWorkingDir(process), ...argument);
        break;

      case 'compress':
        compress(...argument);
        break;

      case 'decompress':
        decompress(...argument);
        break;
    }

    printMessage(getCurWorkingDir(process));
  });

  rl.on('close', () => {
    printMessage(`Thank you for using File Manager, ${username}, goodbye!`);
  });

  process.on('SIGINT', () => {
    printMessage('');
    rl.close();
  });
};

start();
