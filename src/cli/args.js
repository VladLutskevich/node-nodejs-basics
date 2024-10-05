const parseArgs = () => {
    const result = process.argv.slice(2).reduce((acc, el) => {
        return el.startsWith('--') ? acc + ' ' + el.slice(2) + ' is ' : acc + el + ','; 
      }, '');
      console.log(result.slice(0, -1));
};

parseArgs();