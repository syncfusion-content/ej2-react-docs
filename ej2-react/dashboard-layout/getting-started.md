---
layout: post
title: Getting started with React Dashboard Layout  Component | Syncfusion
description: Checkout and learn about getting started with Syncfusion Essential React Dashboard Layout  component, it's elements, and more.
control: Dashboard Layout
platform: ej2-react
documentation: ug
domainurl: ##DomainURL##
---

# Getting started with React Dashboard Layout

This section explains how to create a simple **Dashboard Layout** component and demonstrates its basic usage.

## Dependencies

The following packages are required to use the Dashboard Layout component in your application:

```js
|-- @syncfusion/ej2-react-layouts
    |-- @syncfusion/ej2-react-base
        |-- @syncfusion/ej2-base
    |-- @syncfusion/ej2-layouts
```

## Installation and configuration

To set up a React application quickly, use `create-vite-app`, which offers faster development, smaller bundle sizes, and optimized builds compared to traditional tools like `create-react-app`. For detailed steps, refer to the Vite [installation instructions](https://vitejs.dev/guide). Vite configures the development environment using JavaScript and optimizes the application for production.

> **Note:** To create a React application using `create-react-app`, refer to the [Syncfusion documentation](https://ej2.syncfusion.com/react/documentation/getting-started/create-app) for more details.

To create a new React application, run the following command.

```bash
npm create vite@latest my-app
```

To set up a React application in a TypeScript environment, run the following command:

```bash
npm create vite@latest my-app -- --template react-ts
cd my-app
npm run dev
```

To set up a React application in a JavaScript environment, run the following command:

```bash
npm create vite@latest my-app -- --template react
cd my-app
npm run dev
```

## Adding Syncfusion<sup style="font-size:70%">&reg;</sup> packages

All Essential<sup style="font-size:70%">&reg;</sup> JS 2 packages are published in the [`npmjs.com`](https://www.npmjs.com/~syncfusionorg) public registry.

To install `Dashboard Layout` component, use the following command

```bash
npm install @syncfusion/ej2-react-layouts --save
```

## Adding CSS reference

To render the Dashboard Layout component, need to import Dashboard Layout and its dependent component's styles as given below in `src/App.css`.

```css
@import '../node_modules/@syncfusion/ej2-base/styles/tailwind3.css';
@import "../node_modules/@syncfusion/ej2-react-layouts/styles/tailwind3.css";
```

> **Note:** To include combined component styles, use the [CRG](https://crg.syncfusion.com) (Custom Resource Generator) to generate and add the required styles to the application.

## Add Dashboard Layout to the application

You can render the Dashboard Layout component in the following two ways.

* Defined the panels property as the attribute in the HTML element directly.
* Using the `panels` property directly.

## Setting the `panels` property using HTML attributes

The Dashboard Layout component can be rendered by adding the panels property to the HTML element. Insert a div element containing the panel definition for Dashboard Layout into `App.tsx`.

`[src/App.tsx]`

```ts
// import the DashboardLayout component
import { DashboardLayoutComponent } from '@syncfusion/ej2-react-layouts';
import * as React from 'react';

function App() {
  let cellSpacing: number[] = [5, 5];
  return (
    <div>
      <div className="control-section">
        <DashboardLayoutComponent id='defaultLayout' cellSpacing={cellSpacing} allowResizing={true} columns={5}>
          <div id="one" className="e-panel" data-row="0" data-col="0" data-sizex="1" data-sizey="1">
            <span id="close" className="e-template-icon e-clear-icon" />
            <div className="e-panel-container">
              <div className="text-align">0</div>
            </div>
          </div>
          <div id="two" className="e-panel" data-row="1" data-col="0" data-sizex="1" data-sizey="2">
            <span id="close" className="e-template-icon e-clear-icon" />
            <div className="e-panel-container">
              <div className="text-align">1</div>
            </div>
          </div>
          <div id="three" className="e-panel" data-row="0" data-col="1" data-sizex="2" data-sizey="2">
            <span id="close" className="e-template-icon e-clear-icon" />
            <div className="e-panel-container">
              <div className="text-align">2</div>
            </div>
          </div>
          <div id="four" className="e-panel" data-row="2" data-col="1" data-sizex="1" data-sizey="1">
            <span id="close" className="e-template-icon e-clear-icon" />
            <div className="e-panel-container">
              <div className="text-align">3</div>
            </div>
          </div>
          <div id="five" className="e-panel" data-row="2" data-col="2" data-sizex="2" data-sizey="1">
            <span id="close" className="e-template-icon e-clear-icon" />
            <div className="e-panel-container">
              <div className="text-align">4</div>
            </div>
          </div>
          <div id="six" className="e-panel" data-row="0" data-col="3" data-sizex="1" data-sizey="1">
            <span id="close" className="e-template-icon e-clear-icon" />
            <div className="e-panel-container">
              <div className="text-align">5</div>
            </div>
          </div>
          <div id="seven" className="e-panel" data-row="1" data-col="3" data-sizex="1" data-sizey="1">
            <span id="close" className="e-template-icon e-clear-icon" />
            <div className="e-panel-container">
              <div className="text-align">6</div>
            </div>
          </div>
          <div id="eight" className="e-panel" data-row="0" data-col="4" data-sizex="1" data-sizey="3">
            <span id="close" className="e-template-icon e-clear-icon" />
            <div className="e-panel-container">
              <div className="text-align">7</div>
            </div>
          </div>
        </DashboardLayoutComponent>
      </div>
    </div>
  );
}
export default App;

```

```ts
// import the DashboardLayout component
import { DashboardLayoutComponent } from '@syncfusion/ej2-react-layouts';
import * as React from 'react';
function App() {
    let cellSpacing = [5, 5];
    return (<div>
      <div className="control-section">
        <DashboardLayoutComponent id='defaultLayout' cellSpacing={cellSpacing} allowResizing={true} columns={5}>
          <div id="one" className="e-panel" data-row="0" data-col="0" data-sizex="1" data-sizey="1">
            <span id="close" className="e-template-icon e-clear-icon"/>
            <div className="e-panel-container">
              <div className="text-align">0</div>
            </div>
          </div>
          <div id="two" className="e-panel" data-row="1" data-col="0" data-sizex="1" data-sizey="2">
            <span id="close" className="e-template-icon e-clear-icon"/>
            <div className="e-panel-container">
              <div className="text-align">1</div>
            </div>
          </div>
          <div id="three" className="e-panel" data-row="0" data-col="1" data-sizex="2" data-sizey="2">
            <span id="close" className="e-template-icon e-clear-icon"/>
            <div className="e-panel-container">
              <div className="text-align">2</div>
            </div>
          </div>
          <div id="four" className="e-panel" data-row="2" data-col="1" data-sizex="1" data-sizey="1">
            <span id="close" className="e-template-icon e-clear-icon"/>
            <div className="e-panel-container">
              <div className="text-align">3</div>
            </div>
          </div>
          <div id="five" className="e-panel" data-row="2" data-col="2" data-sizex="2" data-sizey="1">
            <span id="close" className="e-template-icon e-clear-icon"/>
            <div className="e-panel-container">
              <div className="text-align">4</div>
            </div>
          </div>
          <div id="six" className="e-panel" data-row="0" data-col="3" data-sizex="1" data-sizey="1">
            <span id="close" className="e-template-icon e-clear-icon"/>
            <div className="e-panel-container">
              <div className="text-align">5</div>
            </div>
          </div>
          <div id="seven" className="e-panel" data-row="1" data-col="3" data-sizex="1" data-sizey="1">
            <span id="close" className="e-template-icon e-clear-icon"/>
            <div className="e-panel-container">
              <div className="text-align">6</div>
            </div>
          </div>
          <div id="eight" className="e-panel" data-row="0" data-col="4" data-sizex="1" data-sizey="3">
            <span id="close" className="e-template-icon e-clear-icon"/>
            <div className="e-panel-container">
              <div className="text-align">7</div>
            </div>
          </div>
        </DashboardLayoutComponent>
      </div>
    </div>);
}
export default App;
```

## Run the application

Run the following command in the to start the development server. This command compiles the code and serves the application locally in the browser.

```bash
npm run dev
```

The following example shows a basic Dashboard Layout by adding panel definitions directly via HTML attributes.

{% tabs %}
{% highlight js tabtitle="app.jsx" %}
{% include code-snippet/dashboard-layout/getting-started-cs1/app/App.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="app.tsx" %}
{% include code-snippet/dashboard-layout/getting-started-cs1/app/App.tsx %}
{% endhighlight %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/dashboard-layout/getting-started-cs1/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/dashboard-layout/getting-started-cs1/app/index.tsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.css" %}
{% include code-snippet/dashboard-layout/getting-started-cs1/index.css %}
{% endhighlight %}
{% highlight ts tabtitle="index.html" %}
{% include code-snippet/dashboard-layout/getting-started-cs1/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/dashboard-layout/getting-started-cs1" %}

## Setting the `panels` property directly

Render the Dashboard Layout by setting the `panels` property within the component.

`[src/App.tsx]`


```ts
// import the DashboardLayout component
import { DashboardLayoutComponent } from '@syncfusion/ej2-react-layouts';
import * as React from 'react';

function App() {
  let cellSpacing: number[] = [5, 5];
  let panels: object[] = [
    { "sizeX": 1, "sizeY": 1, "row": 0, "col": 0, content: '<div class="content">0</div>' },
    { "sizeX": 3, "sizeY": 2, "row": 0, "col": 1, content: '<div class="content">1</div>' },
    { "sizeX": 1, "sizeY": 3, "row": 0, "col": 4, content: '<div class="content">2</div>' },
    { "sizeX": 1, "sizeY": 1, "row": 1, "col": 0, content: '<div class="content">3</div>' },
    { "sizeX": 2, "sizeY": 1, "row": 2, "col": 0, content: '<div class="content">4</div>' },
    { "sizeX": 1, "sizeY": 1, "row": 2, "col": 2, content: '<div class="content">5</div>' },
    { "sizeX": 1, "sizeY": 1, "row": 2, "col": 3, content: '<div class="content">6</div>' }
  ];
  return (
    <div>
      <div className="control-section">
        <DashboardLayoutComponent id='defaultLayout' cellSpacing={cellSpacing} allowResizing={true} panels={panels} columns={5} />
      </div>
    </div>
  );
}
export default App;

```

```ts
// import the DashboardLayout component
import { DashboardLayoutComponent } from '@syncfusion/ej2-react-layouts';
import * as React from 'react';
function App() {
    let cellSpacing = [5, 5];
    let panels = [
      { "sizeX": 1, "sizeY": 1, "row": 0, "col": 0, content: '<div class="content">0</div>'},
      { "sizeX": 3, "sizeY": 2, "row": 0, "col": 1, content: '<div class="content">1</div>'},
      { "sizeX": 1, "sizeY": 3, "row": 0, "col": 4, content: '<div class="content">2</div>'},
      { "sizeX": 1, "sizeY": 1, "row": 1, "col": 0, content: '<div class="content">3</div>'},
      { "sizeX": 2, "sizeY": 1, "row": 2, "col": 0, content: '<div class="content">4</div>'},
      { "sizeX": 1, "sizeY": 1, "row": 2, "col": 2, content: '<div class="content">5</div>'},
      { "sizeX": 1, "sizeY": 1, "row": 2, "col": 3, content: '<div class="content">6</div>'}
    ];
    return (<div>
      <div className="control-section">
        <DashboardLayoutComponent id='defaultLayout' cellSpacing={cellSpacing} allowResizing={true} panels={panels} columns={5}/>
      </div>
    </div>);
}
export default App;
```

The following example shows a basic Dashboard Layout created using the `panels` property.

{% tabs %}
{% highlight js tabtitle="app.jsx" %}
{% include code-snippet/dashboard-layout/getting-started-panel-cs1/app/App.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="app.tsx" %}
{% include code-snippet/dashboard-layout/getting-started-panel-cs1/app/App.tsx %}
{% endhighlight %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/dashboard-layout/getting-started-panel-cs1/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/dashboard-layout/getting-started-panel-cs1/app/index.tsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.html" %}
{% include code-snippet/dashboard-layout/getting-started-panel-cs1/index.html %}
{% endhighlight %}
{% highlight ts tabtitle="index.css" %}
{% include code-snippet/dashboard-layout/getting-started-panel-cs1/index.css %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/dashboard-layout/getting-started-panel-cs1" %}

> Refer to the [React Dashboard Layout](https://www.syncfusion.com/react-components/react-dashboard-layout) feature tour for detailed demonstrations, and view the [React Dashboard Layout example](https://ej2.syncfusion.com/react/demos/#/tailwind3/dashboard-layout/default) example to learn how to present and manipulate data.
