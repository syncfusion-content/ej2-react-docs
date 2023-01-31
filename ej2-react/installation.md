---
layout: post
title: Installation in React Installation md component | Syncfusion
description: Learn here all about Installation in Syncfusion React Installation md component of Syncfusion Essential JS 2 and more.
control: Installation 
platform: ej2-react
documentation: ug
domainurl: ##DomainURL##
---

# Installation in React Installation md component

## Installing Package

Syncfusion React packages are published on
[npm](https://www.npmjs.com/search?q=ej2-react&page=1&ranking=optimal).
You can install the necessary packages from npm’s install command.
For example, grid package can be installed using the following command.

```
npm install @syncfusion/ej2-react-grids --save
```

These packages offer JavaScript files in ES6, UMD module systems. Which can be used in the different
dependency management and bundling libraries.

* System JS

## Using SystemJS

The Syncfusion npm package provides the UMD bundle file for loading scripts via script loaders such as
Require JS, System JS, etc. To find UMD files in package read topic [Anatomy of Package](deployment#anatomy-of-npm-packages).

### Configuration Steps

**Step 1:** For setup project locally, read topic [Setup for Local Development](getting-started/quick-start#preparing-the-application).

**Step 2:** Install your required npm packages.

**Step 3:** Map the Syncfusion React packages in the `system.config.js` configuration
file as follows.

```javascript

System.config({
    transpiler: "ts",
    typescriptOptions: {
        target: "es5",
        module: "commonjs",
        moduleResolution: "node",
        emitDecoratorMetadata: true,
        experimentalDecorators: true,
        "jsx": "react"
    },
    meta: {
        'typescript': {
            "exports": "ts"
        }
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
        "@syncfusion/ej2-react-buttons":"syncfusion:ej2-react-buttons/dist/ej2-react-buttons.umd.min.js",
        "react-dom": "https://unpkg.com/react-dom@18.2.0/umd/react-dom.production.min.js",
        "react": "https://unpkg.com/react@18.2.0/umd/react.production.min.js",
    },
    packages: {
        'app': { main: 'index', defaultExtension: 'tsx' },
    }

});

System.import('app');

```

**Step 4:** Adding component to the Application

Now, you can start adding Syncfusion React UI components in the application.
For getting started, we have added a Button Module in `app.tsx` and `index.html` file
using following code.

Now, add the Button in the `index.tsx` will be as follows

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
ReactDom.render(<App />,document.getElementById('button'));

```

Now, add the Button in the `index.html` using following code

```
<!DOCTYPE html>
<html lang="en">

<head>
    <title>Syncfusion React Button</title>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta name="description" content="Essential JS 2 for React Components" />
    <meta name="author" content="Syncfusion" />
    <link href="http://npmci.syncfusion.com/packages/development/ej2-react-buttons/styles/material.css" rel="stylesheet" />
    <link href="index.css" rel="stylesheet" />
    <script src="https://cdnjs.cloudflare.com/ajax/libs/systemjs/0.19.38/system.js"></script>
    <script src="systemjs.config.js"></script>
</head>

<body>
        <div id='button'>
            <div id='loader'>Loading....</div>
        </div>
</body>

</html>
```

**Step 5:** Adding CSS reference

Individual component CSS files are available in the Syncfusion React package `styles` folder.
This can be referenced in your `material.css` using the following code.

```css
@import '../../node_modules/@syncfusion/ej2-base/styles/material.css';
@import '../../node_modules/@syncfusion/ej2-react-buttons/styles/material.css';
```

**Step 6:** Running the application

The quick-start project is configured to compile and run the application in the browser.
Use the following command to run the application.

```
npm start
```