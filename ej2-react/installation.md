---
layout: post
title: Installation in React Installation md component | Syncfusion
description: Learn here all about Installation in Syncfusion React Installation md component of Syncfusion Essential JS 2 and more.
control: Installation 
platform: ej2-react
documentation: ug
domainurl: ##DomainURL##
---

# Installation

## Installing the Package

Syncfusion<sup style="font-size:70%">&reg;</sup> React packages are published on [npm](https://www.npmjs.com/search?q=ej2-react&page=1&ranking=optimal). You can add the required packages to your project using the npm install command. For example, to install the grid package, run:

```
npm install @syncfusion/ej2-react-grids --save
```

These packages provide JavaScript files in both ES6 and UMD module formats, which can be used with various dependency management and bundling libraries.

* SystemJS

## Using SystemJS

The Syncfusion<sup style="font-size:70%">&reg;</sup> npm package includes UMD bundle files for loading scripts via module loaders such as RequireJS or SystemJS. For details on the UMD files in the package, refer to the topic [Anatomy of Package](deployment#anatomy-of-npm-packages).

### Configuration Steps

**Step 1:** For setup project locally, read topic [Setup for Local Development](getting-started/quick-start#preparing-the-application).

**Step 2:** Install your required npm packages.

**Step 3:** Map the Syncfusion<sup style="font-size:70%">&reg;</sup> React packages in the `system.config.js` configuration
file as follows.

```js

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

**Step 4:** Adding a Component to the Application

Now, you can start adding Syncfusion<sup style="font-size:70%">&reg;</sup> React UI components in the application.
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

Individual component CSS files are available in the Syncfusion<sup style="font-size:70%">&reg;</sup> React package `styles` folder.
This can be referenced in your `material.css` using the following code.

```css
@import '../../node_modules/@syncfusion/ej2-base/styles/material.css';
@import '../../node_modules/@syncfusion/ej2-react-buttons/styles/material.css';
```

**Step 6:** Running the application

The quick-start project is configured to compile and run your application in the browser. To start the application, execute:

```
npm start
```