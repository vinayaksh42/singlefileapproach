import * as path from 'path';
import * as fs from 'fs';

import { iconGenerateScript } from '../interface/index';
import {iconEntery} from './iconEntry';

export const generateIconComponents = ({type,from}: iconGenerateScript) => {
  generateIcon(type,from)
  async function generateIcon(type:string, from:string) {
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
          while(data.includes('class')) {
            data = data.replace('class','className');
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
const indexContent = `export { default as Eos${fileName} } from './${fileName}';
`;
        await fs.writeFile(
          path.resolve(__dirname,`../src/icon/${fileName}.tsx`), 
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
          path.resolve(__dirname, `../src/icon/index.tsx`),
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
  return "done"
}