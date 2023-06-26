const getArguments = (command) => {
  return [...command.split(' ').slice(1)];
};

export { getArguments };
