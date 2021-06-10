import * as path from 'path';
import * as fs from 'fs';
import { promisify } from 'util';
// eslint-disable-next-line import/no-extraneous-dependencies
import { template } from 'lodash';

const writeFile = promisify(fs.writeFile);

// interface IconDefinitionWithIdentifier {
//   svgIdentifier: string;
// }

// function walk<T>(
//   fn: (iconDef: IconDefinitionWithIdentifier) => Promise<T>,
// ) {
//   return Promise.all(
//     Object.keys(allIconDefs)
//       .map(svgIdentifier => {
//       const iconDef = (allIconDefs as { [id: string]: IconDefinition })[
//         svgIdentifier
//       ];

//       return fn({ svgIdentifier, ...iconDef });
//     }),
//   );
// }

// async function generateIcons(type:string) {
//   const iconsDir = path.join(__dirname, '../src/icons');
//   try {
//     await promisify(fs.access)(iconsDir);
//   } catch (err) {
//     await promisify(fs.mkdir)(iconsDir);
//   }

//   const render = template(`
// // GENERATE BY ./scripts/index.ts

// import * as React from 'react';
// import <%= svgName %>Svg from '../svg/<%= svgType %>/<%= svgName %>';

// const <%= svgFileName %> = () => {
//   return (
//     <img src={<%= svgName %>} />
//   );
// };

// export default <%= svgFileName %>;
// `.trim());

//   await walk(async ({ svgIdentifier }) => {
//     // generate icon file
//     await writeFile(
//       path.resolve(__dirname, `../src/icons/${svgIdentifier}.tsx`),
//       render({ svgIdentifier }),
//     );
//   });

//   // generate icon index
//   const entryText = Object.keys(allIconDefs)
//     .sort()
//     .map(svgIdentifier => `export { default as ${svgIdentifier} } from './${svgIdentifier}';`)
//     .join('\n');

//   await promisify(fs.appendFile)(
//     path.resolve(__dirname, '../src/icons/index.tsx'),
//     `
// // GENERATE BY ./scripts/generate.ts
// // DON NOT EDIT IT MANUALLY

// ${entryText}
//     `.trim(),
//   );
// }

// async function generateEntries() {
//   const render = template(`
// 'use strict';
//   Object.defineProperty(exports, "__esModule", {
//     value: true
//   });
//   exports.default = void 0;
  
//   var _<%= svgIdentifier %> = _interopRequireDefault(require('./lib/icons/<%= svgIdentifier %>'));
  
//   function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
  
//   var _default = _<%= svgIdentifier %>;
//   exports.default = _default;
//   module.exports = _default;
// `.trim());

//   await walk(async ({ svgIdentifier }) => {
//     // generate `Icon.js` in root folder
//     await writeFile(
//       path.resolve(__dirname, `../${svgIdentifier}.js`),
//       render({
//         svgIdentifier,
//       }),
//     );

//     // generate `Icon.d.ts` in root folder
//     await writeFile(
//       path.resolve(__dirname, `../${svgIdentifier}.d.ts`),
//       `export { default } from './lib/icons/${svgIdentifier}';`,
//     );
//   });
// }

export const generateIconComponents = (type:string, from:string) => {
  generateIcon(type,from)
  async function generateIcon(type:string, from:string) {
    const iconNames = await fs.promises.readdir(from);

    for(const iconName of iconNames) {
      const componentPath = path.join(`src/icon/${iconName}${type}.tsx`);
      const fileName = iconName.slice(0, iconName.length - 4).concat(type.charAt(0).toUpperCase() + type.slice(1));
      const name = iconName.slice(0, iconName.length - 4)
      await fs.readFile(path.resolve(__dirname,`../src/svg/${type}/${iconName}`),'utf8', async function(err,data) {
        if(err) {
          console.error(err)
        }
        const render = `
        // GENERATE BY ./scripts/index.ts

        import * as React from 'react';

        const eos${fileName} = () => {
          return (
            ${data}
          );
        };

        export default eos${fileName};
        `;
        const indexContent = `export * from './icon/${fileName}';
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





