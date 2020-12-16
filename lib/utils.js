var prompt = require('prompt-sync')();

module.exports = {
  read_properties: (object, property) => {
    return object[property];
  },

  transformer: {
    h1: () => {
      const message = prompt('Enter the message to be inserted: ');
      return `# ${message}`;
    },
    h2: () => {
      const message = prompt('Enter the message to be inserted: ');
      return `## ${message}`;
    },
    h3: () => {
      const message = prompt('Enter the message to be inserted: ');
      return `### ${message}`;
    },
    h4: () => {
      const message = prompt('Enter the message to be inserted: ');
      return `#### ${message}`;
    },
    h5: () => {
      const message = prompt('Enter the message to be inserted: ');
      return `##### ${message}`;
    },
    h6: () => {
      const message = prompt('Enter the message to be inserted: ');
      return `###### ${message}`;
    },
    p: () => {
      const message = prompt('Enter the message to be inserted: ');
      return `${message}\\`;
    },
    p_final: () => { // Used for the last paragraph, so no line break is added
      const message = prompt('Enter the message to be inserted: ');
      return `${message}`;
    },
    break_line: () => {
      return `  `;
    },
    strong: () => {
      const message = prompt('Enter the message to be inserted: ');
      return `**${message}**`;
    },
    italic: () => {
      const message = prompt('Enter the message to be inserted: ');
      return `*${message}*`;
    },
    strong_italic: () => {
      const message = prompt('Enter the message to be inserted: ');
      return `***${message}***`;
    },
    blockquotes: () => {
      const message = prompt('Enter the message to be inserted: ');
      return `> ${message}`;
    },
    nested_blockquotes: () => {
      const message = prompt('Enter the message to be inserted: ');
      return `>> ${message}`;
    },
    unordered_list_item: () => {
      const message = prompt('Enter the message to be inserted: ');
      return `* ${message}`;
    },
    unordered_list_idented_item: () => {
      const message = prompt('Enter the message to be inserted: ');
      return `    * ${message}`;
    },
    image: () => {
      const url = prompt('Enter the image URL: ');
      const title = prompt('Enter image title: ');
      const width = prompt('Enter the width (250px): ');
      const position = prompt('Enter position (center, left, right): ');
      return `<h1 align='${position}'><img alt='${title}' title='${title}' src='${url}' width='${width}' /></h1>`;
    },
    link: () => {
      const url = prompt('Enter the link URL: ');
      const title = prompt('Enter the title of the link: ');
      return `[${title}](${url})`;
    }
  }
}
