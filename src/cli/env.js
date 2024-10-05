const parseEnv = () => {
    Object.keys(process.env)
      .filter((el) => el.startsWith('RSS_'))
      .forEach((el) => console.log(el + '=' + process.env[el]));
};

parseEnv();