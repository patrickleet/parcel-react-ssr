// Generate the HTML using index.html as a template

import fs from 'fs';
import path from 'path';
import cheerio from 'cheerio';

const templatePath = path.join(process.cwd(), 'dist', 'clients', 'client', 'index.html');
const modernTemplate = fs.readFileSync(templatePath).toString();

const legacyTemplatePath = path.join(process.cwd(), 'dist', 'clients', 'legacy-client', 'index.html');
const legacyTemplate = fs.readFileSync(legacyTemplatePath).toString();

function parseTemplateForData(template) {
  const $template = cheerio.load(template);
  let src = $template("#js-entrypoint").attr('src')

  return {
    src
  }
}

const clientData = parseTemplateForData(modernTemplate)
const legacyClientData = parseTemplateForData(legacyTemplate)

export default {
  src: clientData.src,
  legacySrc: legacyClientData.src
}
