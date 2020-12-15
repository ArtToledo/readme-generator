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
    ||   h1        p_final          nested_blockquotes            ||
    ||   h2        p                unordered_list_item           ||
    ||   h3        strong           unordered_list_idented_item   ||
    ||   h4        italic           image                         ||
    ||   h5        strong_italic    link                          ||
    ||   h6        blockquotes      break_line                    ||
    ||                              sair                          ||
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
