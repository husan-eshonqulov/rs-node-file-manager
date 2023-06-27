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

    case '--homedir':
      console.log(homedir());
      break;

    case '--username':
      console.log(userInfo().username);
      break;

    case '--architecture':
      console.log(arch());
      break;
  }
};

export { osCom };
