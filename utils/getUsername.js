const getUsername = (args) => {
  const usernames = args.filter((arg) => arg.match(/^--username=/));
  const username = usernames.pop().slice(11);
  return username;
};

export { getUsername };
