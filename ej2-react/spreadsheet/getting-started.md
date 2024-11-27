---
layout: post
title: Getting started with React Spreadsheet component | Syncfusion
description:  Checkout and learn about Getting started with React Spreadsheet component of Syncfusion Essential JS 2 and more details.
control: Getting started 
platform: ej2-react
documentation: ug
domainurl: ##DomainURL##
---

# Getting started with React Spreadsheet component

This section explains the steps to create a simple Spreadsheet component in a React application.

To get start quickly with React Spreadsheet, you can check on this video:

{% youtube "https://www.youtube.com/watch?v=3Cx9AnKAHdY" %}

## Dependencies

The following list of dependencies are required to use the Spreadsheet component in your application:

```js
|-- @syncfusion/ej2-react-spreadsheet
      |-- @syncfusion/ej2-react-base
      |-- @syncfusion/ej2-spreadsheet
      |-- @syncfusion/ej2-base
      |-- @syncfusion/ej2-dropdowns
      |-- @syncfusion/ej2-navigations
      |-- @syncfusion/ej2-grids

```

## Setup for Local Development

You can use [`create-react-app`](https://github.com/facebook/create-react-app) to setup the applications and run the following command to install create-react-app.

```
npm install -g create-react-app
```

Run the following command to setup the basic `React` samples.

```
create-react-app quickstart --scripts-version=react-scripts-ts

cd quickstart

npm install

```

## Adding Syncfusion packages

All the available Essential JS 2 packages are published in [`npmjs.com`](https://www.npmjs.com/~syncfusionorg) public registry. To install Spreadsheet component use the following command.

```
npm install @syncfusion/ej2-react-spreadsheet --save
```

## Adding CSS reference

 Add components style as given below in `src/App.css`.

```css
@import '../node_modules/@syncfusion/ej2-base/styles/material.css';
@import '../node_modules/@syncfusion/ej2-inputs/styles/material.css';
@import '../node_modules/@syncfusion/ej2-buttons/styles/material.css';
@import '../node_modules/@syncfusion/ej2-splitbuttons/styles/material.css';
@import '../node_modules/@syncfusion/ej2-lists/styles/material.css';
@import '../node_modules/@syncfusion/ej2-navigations/styles/material.css';
@import '../node_modules/@syncfusion/ej2-popups/styles/material.css';
@import '../node_modules/@syncfusion/ej2-dropdowns/styles/material.css';
@import '../node_modules/@syncfusion/ej2-grids/styles/material.css';
@import '../node_modules/@syncfusion/ej2-react-spreadsheet/styles/material.css';
```

> To refer `App.css` in the application then import it in the `src/App.tsx` file.

## Adding Spreadsheet component

Now, you can import the spreadsheet component into your `src/App.tsx` file.

```ts
import * as React from 'react';
import { SpreadsheetComponent } from '@syncfusion/ej2-react-spreadsheet';
import './App.css';
export default function App() {
    return  (<SpreadsheetComponent/>);
}
```

## Run the application

The [create-react-app](https://github.com/facebook/create-react-app) will pre-configure the project to compile and run the application in browser. Use the following command to run the application.

```

npm start

```

The following example shows a basic spreadsheet component.

{% tabs %}
{% highlight js tabtitle="app.jsx" %}
{% include code-snippet/spreadsheet/getting-started-cs1/app/app.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="app.tsx" %}
{% include code-snippet/spreadsheet/getting-started-cs1/app/app.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/spreadsheet/getting-started-cs1" %}

> You can refer to our [React Spreadsheet](https://www.syncfusion.com/react-components/react-spreadsheet) feature tour page for its groundbreaking feature representations. You can also explore our [React Spreadsheet example](https://ej2.syncfusion.com/react/demos/#/bootstrap5/spreadsheet/default) that shows you how to present and manipulate data.

## See Also

* [Data Binding](./data-binding)
* [Open and Save](./open-save)