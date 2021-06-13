import * as path from 'path';
import * as fs from 'fs';

import { iconGenerateScript } from '../interface/index';

async function iconEntery({type,from}: iconGenerateScript) {
  const iconNames = await fs.promises.readdir(from);

  for(const iconName of iconNames) {
    const componentPath = path.join(`src/icon/${iconName}${type}.tsx`);
    const fileName = iconName.slice(0, iconName.length - 4).concat(type.charAt(0).toUpperCase() + type.slice(1));
    const name = iconName.slice(0, iconName.length - 4)
    await fs.readFile(path.resolve(__dirname,`../svg/${type}/${iconName}`),'utf8', async function (err,data) {
      if(err) {
        console.error(err);
      }

      if(type === 'animated') {
        data = data.replace('xml:space="preserve"','');
        if(fileName === 'installingAnimated') {
          while(data.includes('class="st0"')) {
            data = data.replace('class="st0"','className="st0"');
          }
        }
      }
const render = `
// GENERATE BY ./scripts/index.ts

import * as React from 'react';

function Eos${fileName}() {
  return (
    ${data}
  );
};

export default Eos${fileName};
`;
const indexContent = `export { default } from './lib/icon/${fileName}';
`;
      await fs.writeFile(
        path.resolve(__dirname,`../${fileName}.js`), 
        render, 
        {
          flag: 'w+'
        },
        err => {
          if(err) {
            console.error(err)
          }
      })
      await fs.writeFile(
        path.resolve(__dirname, `../${fileName}.d.ts`),
        indexContent,
        {
          flag: 'a+'
        },
        err => {
          if(err) {
            console.error(err)
          }
      });
    })
    
    await fs.close
  }
}

export default iconEntery;