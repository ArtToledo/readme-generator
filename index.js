const fs = require('fs');
var prompt = require('prompt-sync')();
const { read_properties, transformer } = require('./lib/utils');

runQuestion = true;
const readmeFile = fs.createWriteStream('./files/generated-files/readme.md', {
  flags: 'a'
});

while(runQuestion) {
  console.log(`
     ==============================================================
    ||                     README GENERATOR                       ||
    ||                                                            ||
    || Escolha uma das opções abaixo para adicionar ao arquivo:   ||
    ||                                                            ||
    ||  h1        p                   unordered_list_idented_item ||
    ||  h2        strong              image                       ||
    ||  h3        italic              link                        ||
    ||  h4        strong_italic       break_line                  ||
    ||  h5        blockquotes         sair                        ||
    ||  h6        nested_blockquotes                              ||
    ||  p_final   unordered_list_item                             ||
    ||                                                            ||
     ==============================================================
  `);
  const optionChoose = prompt('Digite o item a sua escolha: ');
  const functionTransformer = read_properties(transformer, optionChoose);
  
  if (optionChoose === 'sair' || optionChoose === 'Sair') {
    runQuestion = false;
    break;
  }

  const messageTransformed = functionTransformer();
  readmeFile.write(messageTransformed.toString()+'\r\n');
};
