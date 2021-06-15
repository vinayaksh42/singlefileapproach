import * as path from 'path';
import * as fs from 'fs';

import { iconGenerateScript } from '../interface/index';

async function generateIconComponents({type,from}: iconGenerateScript) {
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

      const propString = 'svg transform={`rotate(${props.rotate})`} fill={props.color} width={props.width} height={props.width}'

      data = data.replace('svg',propString);
const render = `
// GENERATE BY ./scripts/index.ts

import * as React from 'react';

interface iconProps {
  height: string | number | undefined,
  width: string | number | undefined,
  color: string | undefined,
  rotate: string | undefined
}

const defaultProps = {
  height: 36,
  width: 36,
  color: 'black',
  rotate: '0'
};

function Eos${fileName}(props: iconProps) {
  return (
    ${data}
  );
};

Eos${fileName}.defaultProps = defaultProps;

export default Eos${fileName};
`;
const indexContent = `export { default as Eos${fileName} } from './icon/${fileName}';
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
        path.resolve(__dirname, `../src/index.tsx`),
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

export default generateIconComponents;