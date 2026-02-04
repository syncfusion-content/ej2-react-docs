---
layout: post
title: Installation in React Installation md component | Syncfusion
description: Learn how to install Syncfusion React packages (Essential JS 2), including SystemJS configuration and a quick-start example.
control: Installation 
platform: ej2-react
documentation: ug
domainurl: ##DomainURL##
---

# Installation

## Installing the package

Syncfusion<sup style="font-size:70%">&reg;</sup> React packages are published on [npm](https://www.npmjs.com/search?q=ej2-react&page=1&ranking=optimal). Add the required packages to your project using the npm install command. For example, to install the Grid package, run:

```bash
npm install @syncfusion/ej2-react-grids --save
```

These packages provide JavaScript files in both ES6 and UMD module formats, which can be used with various dependency management and bundling libraries.

* SystemJS

## Using SystemJS

The Syncfusion<sup style="font-size:70%">&reg;</sup> npm packages include UMD bundle files for loading scripts via module loaders such as RequireJS or SystemJS. For details on the UMD files in each package, refer to [Anatomy of Package](deployment#anatomy-of-npm-packages).

### Configuration steps

**Step 1:** Prepare the project for local development. See [Setup for Local Development](getting-started/quick-start#preparing-the-application).

**Step 2:** Install the required npm packages.

**Step 3:** Map the Syncfusion React packages in the `system.config.js` configuration file as shown below:

```js
System.config({
    transpiler: "ts",
    typescriptOptions: {
        target: "es5",
        module: "commonjs",
        moduleResolution: "node",
        emitDecoratorMetadata: true,
        experimentalDecorators: true,
        jsx: "react"
    },
    meta: {
        'typescript': { exports: 'ts' }
    },
    paths: {
        "syncfusion:": "http://npmci.syncfusion.com/packages/development/"
    },
    map: {
        app: 'app',
        ts: "https://unpkg.com/plugin-typescript@4.0.10/lib/plugin.js",
        typescript: "https://unpkg.com/typescript@2.2.2/lib/typescript.js",
        "@syncfusion/ej2-base": "syncfusion:ej2-base/dist/ej2-base.umd.min.js",
        "@syncfusion/ej2-buttons": "syncfusion:ej2-buttons/dist/ej2-buttons.umd.min.js",
        "@syncfusion/ej2-react-base": "syncfusion:ej2-react-base/dist/ej2-react-base.umd.min.js",
        "@syncfusion/ej2-react-buttons": "syncfusion:ej2-react-buttons/dist/ej2-react-buttons.umd.min.js",
        "react-dom": "https://unpkg.com/react-dom@18.2.0/umd/react-dom.production.min.js",
        "react": "https://unpkg.com/react@18.2.0/umd/react.production.min.js"
    },
    packages: {
        app: { main: 'index', defaultExtension: 'tsx' }
    }
});

System.import('app');
```

**Step 4:** Add a component to the application

You can now use Syncfusion<sup style="font-size:70%">&reg;</sup> React UI components in the app. The example below demonstrates rendering a Button component in `index.tsx`:

```ts
import * as React from 'react';
import * as ReactDom from 'react-dom';
import { ButtonComponent } from '@syncfusion/ej2-react-buttons';
import { enableRipple } from '@syncfusion/ej2-base';

// Enable the ripple effect
enableRipple(true);

// To render Button.
class App extends React.Component<{}, {}> {
  render() {
    return (
      <ButtonComponent>Button</ButtonComponent>
    );
  }
}
ReactDom.render(<App />, document.getElementById('button'));
```

Include a matching `index.html` with the element where the app mounts:

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <title>Syncfusion React Button</title>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta name="description" content="Essential JS 2 for React Components" />
    <meta name="author" content="Syncfusion" />
    <link href="https://cdn.syncfusion.com/ej2/32.1.19/tailwind3.css" rel="stylesheet" />
    <link href="index.css" rel="stylesheet" />
    <script src="https://cdnjs.cloudflare.com/ajax/libs/systemjs/0.19.38/system.js"></script>
    <script src="systemjs.config.js"></script>
</head>
<body>
    <div id="button">
        <div id="loader">Loading....</div>
    </div>
</body>
</html>
```

**Step 5:** Adding CSS references

Individual component CSS files are available in each package's `styles` folder. Reference them in your CSS, for example:

```css
@import '../../node_modules/@syncfusion/ej2-base/styles/tailwind3.css';
@import '../../node_modules/@syncfusion/ej2-react-buttons/styles/tailwind3.css';
```

**Step 6:** Run the application

Start the configured quick-start project to compile and run the application in the browser:

```bash
npm start
```

For additional integration approaches (Webpack, Rollup, etc.) and bundler-specific guidance, refer to the relevant deployment and bundling documentation.