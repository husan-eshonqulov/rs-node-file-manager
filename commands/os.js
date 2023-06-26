import { EOL, cpus, homedir, userInfo, arch } from 'node:os';

const osCom = (arg) => {
  switch (arg) {
    case '--EOL':
      console.log(JSON.stringify(EOL));
      break;

    case '--cpus':
      cpus().map(({ model, speed }, index) => {
        console.log(`CPU ${index}: ${model}, @ ${speed / 1000} GHz`);
      });
      break;

    // case '--homedir';
  }
};

export { osCom };
