// Generate the HTML using index.html as a template

import fs from 'fs';
import path from 'path';
import cheerio from 'cheerio';

// The path is relative from server bundle to client bundle, not the source
const templatePath = path.join(__dirname, '..', 'client', 'index.html');
const HTML_TEMPLATE = fs.readFileSync(templatePath).toString();

function generateData() {
  const $template = cheerio.load(HTML_TEMPLATE);
  let src = $template("#js-entrypoint").attr('src')

  return {
    src
  }
}

export const pageData = generateData()
