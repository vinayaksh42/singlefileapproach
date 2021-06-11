# singlefileapproach
This is a trial approach for building a treeshakable npm package for EOS-Icons which can be utilised by React (TypeScript and JavaScript supported).

## How to publish package:

```bash
npm install
npm run publish
```

## Explanation of npm scripts:

```c
//Used for removing files that are not relevant to development
"clean": "./scripts/cleanup.sh",

//Runs gulpfile for fetching SVG files from 'eos-icons' and also copies utility functions to build folder
"generate": "TS_NODE_PROJECT=tsIconConfig.json gulp --require ts-node/register/transpile-only",

//Runs script for scaffolding TypeScript SVG component into src/icon - filled
"script:filled": "TS_NODE_PROJECT=config/tsconfig.json node -r ts-node/register scripts/index.ts --target=filled --target=icon",

//Runs script for scaffolding TypeScript SVG component into src/icon - outlined
"script:outlined": "TS_NODE_PROJECT=config/tsconfig.json node -r ts-node/register scripts/index.ts --target=outlined --target=icon",

//Runs script for scaffolding TypeScript SVG component into src/icon - animated
"script:animated": "TS_NODE_PROJECT=config/tsconfig.json node -r ts-node/register scripts/index.ts --target=animated --target=icon",

//Runs script for scaffolding TypeScript and JavaScript export files into ./ - filled
"script:filled:e": "TS_NODE_PROJECT=config/tsconfig.json node -r ts-node/register scripts/index.ts --target=filled --target=entery",

//Runs script for scaffolding TypeScript and JavaScript export files into ./ - outlined
"script:outlined:e": "TS_NODE_PROJECT=config/tsconfig.json node -r ts-node/register scripts/index.ts --target=outlined --target=entery",

//Runs script for scaffolding TypeScript and JavaScript export files into ./ - animated
"script:animated:e": "TS_NODE_PROJECT=config/tsconfig.json node -r ts-node/register scripts/index.ts --target=animated --target=entery",

//Runs all the scaffolding script
"icon:generate": "mkdir -p src/icon && npm run script:filled && npm run script:filled:e && npm run script:animated && npm run script:animated:e && npm run script:outlined  && npm run script:outlined:e",

//builds for publishing in esnext
"build:es": "tsc --project tsconfig.build.json --module esnext --outDir es",

//builds for publishing in cjs
"build:lib": "tsc --project tsconfig.build.json --module commonjs --outDir lib",

//Runs both build commands
"build": "npm run build:es && npm run build:lib",

//Runs gulpfile, scaffolding scripts and build command
"publish": "npm run generate && npm run icon:generate && npm run build"
```

## Explanation of building process:
1. GulpFile fetches icons from 'Eos-Icons' npm package and places them in a folder named: 'svg'.
2. The scripts use the content of SVG files for scaffolding TypeScript React components in src/icon.
3. The script also produces a common index.ts file which exports all the icons.
4. The entery script creates the enter point for all the components in the root of the directory.
5. Finally the build command builds all the files in es and cjs format in lib and es respectively.
6. semantic release is setup in this repo and a commit containing "fix", "feat" or "perf" publishes the package on npm. (semantic naming can be modified)
