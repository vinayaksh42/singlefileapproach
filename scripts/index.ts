import * as path from 'path';
import * as fs from 'fs';

export const generateIconComponents = (type:string, from:string, ext: string) => {
  generateIcon(type,from)
  async function generateIcon(type:string, from:string) {
    const iconNames = await fs.promises.readdir(from);

    for(const iconName of iconNames) {
      const componentPath = path.join(`src/icon/${iconName}${type}.tsx`);
      const fileName = iconName.slice(0, iconName.length - 4).concat(type.charAt(0).toUpperCase() + type.slice(1));
      const name = iconName.slice(0, iconName.length - 4)
      await fs.readFile(path.resolve(__dirname,`../src/svg/${type}/${iconName}`),'utf8', async function (err,data) {
        if(err) {
          console.error(err);
        }

        if(type === 'animated') {
          data = data.replace('xml:space="preserve"','');
          data = data.replaceAll('class','className');
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
          path.resolve(__dirname,`../src/icon/${fileName}.${ext}`), 
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
          path.resolve(__dirname, `../src/icon/index.${ext}`),
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
  if (process.argv[3] === '--ext=js') {
    generateIconComponents(
      'filled','src/svg/filled','js'
    )
  }
  if (process.argv[3] === '--ext=tsx') {
    generateIconComponents(
      'filled','src/svg/filled','tsx'
    )
  }
}

if (process.argv[2] === '--target=animated') {
  generateIconComponents(
    'animated','src/svg/animated','js'
  )
  generateIconComponents(
    'animated','src/svg/animated','tsx'
  )
}

if (process.argv[2] === '--target=outlined') {
  if (process.argv[3] === '--ext=js') {
    generateIconComponents(
      'outlined','src/svg/outlined','js'
    )
  }
  if (process.argv[3] === '--ext=tsx') {
    generateIconComponents(
      'outlined','src/svg/outlined','tsx'
    )
  }
}





