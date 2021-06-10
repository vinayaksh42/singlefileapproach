import * as path from 'path';
import * as fs from 'fs';

export const generateIconComponents = (type:string, from:string) => {
  generateIcon(type,from)
  async function generateIcon(type:string, from:string) {
    const iconNames = await fs.promises.readdir(from);

    for(const iconName of iconNames) {
      const componentPath = path.join(`src/icon/${iconName}${type}.tsx`);
      const fileName = iconName.slice(0, iconName.length - 4).concat(type.charAt(0).toUpperCase() + type.slice(1));
      const name = iconName.slice(0, iconName.length - 4)
      await fs.readFile(path.resolve(__dirname,`../src/svg/${type}/${iconName}`),'utf8', async function (err,data) {
        if(err){
          console.error(err);
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
          path.resolve(__dirname,`../src/icon/${fileName}.js`), 
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
          path.resolve(__dirname, `../src/icon/index.js`),
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

if (process.argv[2] === '--target=filled') {
  generateIconComponents(
    'filled','src/svg/filled'
  )
}

if (process.argv[2] === '--target=animated') {
  generateIconComponents(
    'animated','src/svg/animated'
  )
}

if (process.argv[2] === '--target=outlined') {
  generateIconComponents(
    'outlined','src/svg/outlined'
  )
}





