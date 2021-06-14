# singlefileapproach
This is a trial approach for building a treeshakable npm package for EOS-Icons which can be utilised by React (TypeScript and JavaScript supported).

## How to publish package:

```bash
npm install
npm run publish
```

## How to test package:

### JavaScript:
```bash
npm install
npm run test:js
```

### TypeScript:
```bash
npm install
npm run test:ts
```

## Explanation of npm scripts:

```c
//Runs gulpfile for fetching SVG files from 'eos-icons' and also copies utility functions to build folder
"generate": "TS_NODE_PROJECT=tsIconConfig.json gulp --require ts-node/register/transpile-only",

//Runs script for scaffolding TypeScript SVG component into src/icon - filled
"script:filled": "TS_NODE_PROJECT=config/tsconfig.json node -r ts-node/register scripts/index.ts --target=filled",

//Runs script for scaffolding TypeScript SVG component into src/icon - outlined
"script:outlined": "TS_NODE_PROJECT=config/tsconfig.json node -r ts-node/register scripts/index.ts --target=outlined",

//Runs script for scaffolding TypeScript SVG component into src/icon - animated
"script:animated": "TS_NODE_PROJECT=config/tsconfig.json node -r ts-node/register scripts/index.ts --target=animated",

//Runs all the scaffolding script
"icon:generate": "mkdir -p src/icon && npm run script:filled && npm run script:animated && npm run script:outlined",

//builds for publishing in esnext
"build:es": "tsc --project tsconfig.build.json --module esnext --outDir es",

//builds for publishing in cjs
"build:lib": "tsc --project tsconfig.build.json --module commonjs --outDir lib",

//Runs both build commands
"build": "npm run build:es && npm run build:lib",

//Runs gulpfile, scaffolding scripts and build command
"publish": "npm run generate && npm run icon:generate && npm run build",

//For testing in TypeScript
"test:ts": "npm run publish && cd ./typescript-test-project && yarn install && npm run start",

//For testing in JavaScript
"test:js": "npm run publish && cd ./javascript-test-project && yarn install && npm run start"
```

## Explanation of building process:
1. GulpFile fetches icons from 'Eos-Icons' npm package and places them in a folder named: 'svg'.
2. The scripts use the content of SVG files for scaffolding TypeScript React components in src/icon.
3. The script also produces a common index.ts file which exports all the icons.
4. Finally the build command builds all the files in es and cjs format in lib and es respectively.
5. semantic release is setup in this repo and a commit containing "fix", "feat" or "perf" publishes the package on npm. (semantic naming can be modified)

## Props
| Name | Type | Default | Description |
|:-----|:-----|:--------|:------------|
| height | string, number | 36 | sets the height of icon |
| width | string, number | 36 | sets the width of icon |
| color | string | black | sets the color of icon |
| rotate | string | 0 | sets the rotation of icon |