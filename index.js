import readline from 'node:readline';

import { printMessage } from './utils/printMessage.js';
import { getUsername } from './utils/getUsername.js';

const input = process.stdin;
const output = process.output;

const rl = readline.createInterface({ input, output });

const args = process.argv;
const username = getUsername(args.slice(2));

const start = () => {
  printMessage(`Welcome to the File Manager, ${username}!`);
  rl.on('line', (input) => {
    if (input === '.exit') {
      rl.close();
    }
  });

  rl.on('close', () => {
    printMessage(`Thank you for using File Manager, ${username}, goodbye!`);
  });

  process.on('SIGINT', () => {
    printMessage();
    rl.close();
  });
};

start();
