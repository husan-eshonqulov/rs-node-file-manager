import os from 'node:os';
import readline from 'node:readline';

import { printMessage } from './utils/printMessage.js';
import { getUsername } from './utils/getUsername.js';
import { getCurWorkingDir } from './utils/getCurWorkingDir.js';
import { getOperation } from './utils/getOperation.js';
import { getArguments } from './utils/getArguments.js';

import { up } from './commands/up.js';
import { cd } from './commands/cd.js';

const input = process.stdin;
const output = process.output;

const rl = readline.createInterface({ input, output });

const args = process.argv;
const username = getUsername(args.slice(2));
const homedir = os.homedir();
process.chdir(homedir);

const start = () => {
  printMessage(`Welcome to the File Manager, ${username}!`);
  printMessage(getCurWorkingDir());

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
        cd(...argument);
        break;
    }

    printMessage(getCurWorkingDir());
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
