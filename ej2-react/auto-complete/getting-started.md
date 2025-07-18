---
layout: post
title: Getting started with React Auto complete component | Syncfusion
description:  Checkout and learn about Getting started with React Auto complete component of Syncfusion Essential JS 2 and more details.
control: Getting started 
platform: ej2-react
documentation: ug
domainurl: ##DomainURL##
---

# Getting Started

This section explains how to create a simple **AutoComplete** component and configure its available functionalities in React.

To get start quickly with React AutoComplete, you can check on this video:

{% youtube "https://www.youtube.com/watch?v=qpnnfN_E8PY" %}

## Dependencies

The following list of dependencies are required to use the `AutoComplete` component in your application.

```javascript
|-- @syncfusion/ej2-react-dropdowns
|-- @syncfusion/ej2-dropdowns
    |-- @syncfusion/ej2-base
    |-- @syncfusion/ej2-data
    |-- @syncfusion/ej2-lists
    |-- @syncfusion/ej2-inputs
    |-- @syncfusion/ej2-navigations
    |-- @syncfusion/ej2-popups
        |-- @syncfusion/ej2-buttons
|-- @syncfusion/ej2-react-base
```

## Installation and configuration

To easily set up a React application, use `create-vite-app`, which provides a faster development environment, smaller bundle sizes, and optimized builds compared to traditional tools like `create-react-app`. For detailed steps, refer to the Vite [installation instructions](https://vitejs.dev/guide/). Vite sets up your environment using JavaScript and optimizes your application for production.

> **Note:**  To create a React application using `create-react-app`, refer to this [documentation](https://ej2.syncfusion.com/react/documentation/getting-started/create-app) for more details.

To create a new React application, run the following command.

```bash
npm create vite@latest my-app
```
To set-up a React application in TypeScript environment, run the following command.

```bash
npm create vite@latest my-app -- --template react-ts
cd my-app
npm run dev
```
To set-up a React application in JavaScript environment, run the following command.

```bash
npm create vite@latest my-app -- --template react
cd my-app
npm run dev
```

## Adding syncfusion<sup style="font-size:70%">&reg;</sup> packages

All the available Essential<sup style="font-size:70%">&reg;</sup> JS 2 packages are published in [`npmjs.com`](https://www.npmjs.com/~syncfusionorg) public registry. You can choose the component that you want to install.

To install AutoComplete component, use the following command

```bash
npm install @syncfusion/ej2-react-dropdowns --save
```

## Adding AutoComplete component

Now, you can start adding AutoComplete component in the application. For getting started, add the AutoComplete component in `src/App.tsx` file using following code.

Add the below code in the `src/App.tsx` to initialize the AutoComplete.

`[Class-component]`

```ts

import { AutoCompleteComponent } from '@syncfusion/ej2-react-dropdowns';
import * as React from 'react';
import * as ReactDOM from "react-dom";

export default class App extends React.Component<{}, {}> {
  public render() {
    return (
       // specifies the tag for render the AutoComplete component
      <AutoCompleteComponent id='atcelement'></AutoCompleteComponent>
    );
  }
}
ReactDOM.render(<App />, document.getElementById('sample'));
```

`[Functional-component]`

```ts
import { AutoCompleteComponent } from '@syncfusion/ej2-react-dropdowns';
import * as React from 'react';
import * as ReactDOM from "react-dom";

function App() {
    return (
       // specifies the tag for render the AutoComplete component
      <AutoCompleteComponent id='atcelement'></AutoCompleteComponent>
    );
}
ReactDOM.render(<App />, document.getElementById('sample'));
```

## Adding CSS reference

Import the AutoComplete component required CSS references as follows in `src/App.css`.

```css

/* import the AutoComplete dependency styles */

@import "../node_modules/@syncfusion/ej2-base/styles/material.css";
@import "../node_modules/@syncfusion/ej2-react-inputs/styles/material.css";
@import "../node_modules/@syncfusion/ej2-react-dropdowns/styles/material.css";

```

## Binding data source

After initialization, populate the data using [`dataSource`](https://ej2.syncfusion.com/react/documentation/api/auto-complete/#datasource) property. Here, an array of string values is passed to the AutoComplete component.

`[Class-component]`

```ts

import { AutoCompleteComponent } from '@syncfusion/ej2-react-dropdowns';
import * as React from 'react';
import * as ReactDOM from 'react-dom';

export default class App extends React.Component<{}, {}> {
  // define the array of data
  private sportsData: string[] = ['Badminton', 'Basketball', 'Cricket', 'Football', 'Golf', 'Gymnastics', 'Hockey', 'Rugby', 'Snooker', 'Tennis'];
  public render() {
    return (
        // specifies the tag for render the AutoComplete component
      <AutoCompleteComponent id="atcelement" dataSource={this.sportsData} />
    );
  }
}
ReactDOM.render(<App />, document.getElementById('sample'));
```

`[Functional-component]`

```ts

import { AutoCompleteComponent } from '@syncfusion/ej2-react-dropdowns';
import * as React from 'react';
import * as ReactDOM from 'react-dom';

function App() {
  // define the array of data
  const sportsData: string[] = ['Badminton', 'Basketball', 'Cricket', 'Football', 'Golf', 'Gymnastics', 'Hockey', 'Rugby', 'Snooker', 'Tennis'];
  return (
  // specifies the tag for render the AutoComplete component
      <AutoCompleteComponent id="atcelement" dataSource={sportsData} />
    );
}
ReactDOM.render(<App />, document.getElementById('sample'));
```

## Run the application

Now run the `npm run dev` command in the console to start the development server. This command compiles your code and serves the application locally, opening it in the browser.

```
npm run dev
```

`[Class-component]`

{% tabs %}
{% highlight js tabtitle="app.jsx" %}
{% include code-snippet/dropdownlist/basic-cs3/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="app.tsx" %}
{% include code-snippet/dropdownlist/basic-cs3/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/dropdownlist/basic-cs3" %}

`[Functional-component]`

{% tabs %}
{% highlight js tabtitle="app.jsx" %}
{% include code-snippet/dropdownlist/basic-cs4/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="app.tsx" %}
{% include code-snippet/dropdownlist/basic-cs4/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/dropdownlist/basic-cs4" %}

## Configure the Popup List

By default, the width of the popup list automatically adjusts according to the AutoComplete input element's width and the height of the popup list has '300px'.

You can also customize the suggestion list height and width using [`popupHeight`](https://ej2.syncfusion.com/react/documentation/api/auto-complete/#popupheight) and [`popupWidth`](https://ej2.syncfusion.com/react/documentation/api/auto-complete/#popupwidth) property respectively.

In the following sample, popup list's width and height are configured.

`[Class-component]`

{% tabs %}
{% highlight js tabtitle="app.jsx" %}
{% include code-snippet/autocomplete/basic-cs19/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="app.tsx" %}
{% include code-snippet/autocomplete/basic-cs19/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/autocomplete/basic-cs19" %}

`[Functional-component]`

{% tabs %}
{% highlight js tabtitle="app.jsx" %}
{% include code-snippet/autocomplete/basic-cs20/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="app.tsx" %}
{% include code-snippet/autocomplete/basic-cs20/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/autocomplete/basic-cs20" %}

## See Also

* [How to bind the data](./data-binding)