#!/usr/bin/env node
//chamar e manipular a função mdLinks do index.js

const mdLinks = require('./index.js');

mdLinks(process.argv[2]) //vai pegar o arquivo na posição 2 da cli
  .then((result) => result.forEach((el) => {
    console.log('\n', el.href, el.text.substring(0, 50));
  }))
  .catch(console.error);