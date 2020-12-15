var prompt = require('prompt-sync')();

module.exports = {
  read_properties: (object, property) => {
    return object[property];
  },

  transformer: {
    h1: () => {
      const message = prompt('Digite a mensagem a ser inserida: ');
      return `# ${message}`;
    },
    h2: () => {
      const message = prompt('Digite a mensagem a ser inserida: ');
      return `## ${message}`;
    },
    h3: () => {
      const message = prompt('Digite a mensagem a ser inserida: ');
      return `### ${message}`;
    },
    h4: () => {
      const message = prompt('Digite a mensagem a ser inserida: ');
      return `#### ${message}`;
    },
    h5: () => {
      const message = prompt('Digite a mensagem a ser inserida: ');
      return `##### ${message}`;
    },
    h6: () => {
      const message = prompt('Digite a mensagem a ser inserida: ');
      return `###### ${message}`;
    },
    p: () => {
      const message = prompt('Digite a mensagem a ser inserida: ');
      return `${message}\\`;
    },
    p_final: () => { // Used for the last paragraph, so no line break is added
      const message = prompt('Digite a mensagem a ser inserida: ');
      return `${message}`;
    },
    break_line: () => {
      return `  `;
    },
    strong: () => {
      const message = prompt('Digite a mensagem a ser inserida: ');
      return `**${message}**`;
    },
    italic: () => {
      const message = prompt('Digite a mensagem a ser inserida: ');
      return `*${message}*`;
    },
    strong_italic: () => {
      const message = prompt('Digite a mensagem a ser inserida: ');
      return `***${message}***`;
    },
    blockquotes: () => {
      const message = prompt('Digite a mensagem a ser inserida: ');
      return `> ${message}`;
    },
    nested_blockquotes: () => {
      const message = prompt('Digite a mensagem a ser inserida: ');
      return `>> ${message}`;
    },
    unordered_list_item: () => {
      const message = prompt('Digite a mensagem a ser inserida: ');
      return `* ${message}`;
    },
    unordered_list_idented_item: () => {
      const message = prompt('Digite a mensagem a ser inserida: ');
      return `    * ${message}`;
    },
    image: () => {
      const url = prompt('Digite a url da imagem: ');
      const title = prompt('Digite o titulo da imagem: ');
      const width = prompt('Digite a largura (250px): ');
      const position = prompt('Digite a posição (center, left, right): ');
      return `<h1 align='${position}'><img alt='${title}' title='${title}' src='${url}' width='${width}' /></h1>`;
    },
    link: () => {
      const url = prompt('Digite a url do link: ');
      const title = prompt('Digite o titulo do link: ');
      return `[${title}](${url})`;
    }
  }
}
