---
layout: post
title: Getting started with React Dashboard Layout Component | Syncfusion
description: Checkout and learn about getting started with Syncfusion Essential React Dashboard Layout component, its elements, and more.
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

## Prerequisites

[System requirements for Syncfusion<sup style="font-size:70%">&reg;</sup> React UI components](https://ej2.syncfusion.com/react/documentation/system-requirement)

## Set up the Vite project

To create a new `Vite` project, use one of the commands that are specific to either NPM or Yarn.

{% tabs %}
{% highlight bash tabtitle="npm" %}
npm create vite@latest my-project -- --template react
{% endhighlight %}
{% highlight bash tabtitle="yarn" %}
yarn create vite my-project --template react
{% endhighlight %}
{% endtabs %}

After running the command, you will be prompted with a series of interactive questions to configure your project. Select the appropriate options for each prompt:

1. **Select a linter to use**: Choose the linter for your project (for example, `ESLint`).
2. **Install with npm and start now?**: Type `Yes` to proceed with installing the dependencies and automatically start the development server, or `No` to install dependencies manually later.

Navigate into the project directory with:

```
cd my-project
```

## Add Syncfusion<sup style="font-size:70%">&reg;</sup> React packages

Syncfusion<sup style="font-size:70%">&reg;</sup> React component packages are available at [npmjs.com](https://www.npmjs.com/search?q=ej2-react). To use Syncfusion<sup style="font-size:70%">&reg;</sup> React components in the project, install the corresponding npm package.

To install the React component package, use the following command:

{% tabs %}
{% highlight bash tabtitle="npm" %}

npm install @syncfusion/ej2-react-layouts

{% endhighlight %}
{% highlight bash tabtitle="yarn" %}

yarn add @syncfusion/ej2-react-layouts

{% endhighlight %}
{% endtabs %}
 
## Import Syncfusion<sup style="font-size:70%">&reg;</sup> CSS styles

Themes for Syncfusion<sup style="font-size:70%">&reg;</sup> React components can be applied using CSS or SASS files from the [npm theme packages](https://ej2.syncfusion.com/react/documentation/appearance/theme#theme-packages), CDN, CRG, or [Theme Studio](https://ej2.syncfusion.com/react/documentation/appearance/theme-studio). For more information, see the [themes documentation](https://ej2.syncfusion.com/react/documentation/appearance/theme).

This guide uses the `Tailwind 3` theme as an example, sourced from the theme package. In this package, each component includes an `index.css` file that automatically loads all the required dependency styles. To install the [Tailwind 3](https://www.npmjs.com/package/@syncfusion/ej2-tailwind3-theme) theme package, use the following command:

{% tabs %}
{% highlight bash tabtitle="npm" %}

npm install @syncfusion/ej2-tailwind3-theme

{% endhighlight %}
{% highlight bash tabtitle="yarn" %}

yarn add @syncfusion/ej2-tailwind3-theme

{% endhighlight %}
{% endtabs %}

By default, Vite projects include a `src/index.css` file with default styles. These default styles may conflict with Syncfusion component styles. Clear all content from the `src/index.css` file to prevent style conflicts.

The required styles for the Dashboard Layout component are imported in the **src/App.css** file:

{% tabs %}
{% highlight css tabtitle="App.css" %}

@import "@syncfusion/ej2-tailwind3-theme/styles/dashboard-layout/index.css";

{% endhighlight %}
{% endtabs %}

> You can also refer to the combined CSS file for all Syncfusion components in your application. For more information, see the documentation on [referring themes through npm packages](https://ej2.syncfusion.com/react/documentation/appearance/theme#refer-themes-through-npm-packages).

## Add Dashboard Layout to the application

You can render the Dashboard Layout component in either of the following ways:

* Define `panels` directly in the markup using HTML elements with the `e-panel` class.
* Configure `panels` using the `panels` property.

### Defining `panels` using HTML attributes

You can add the React Dashboard Layout component to your **src/App.jsx** file by importing and defining it within your application. In the following example, a basic Dashboard Layout is rendered by defining panel configurations directly in the markup using HTML attributes and elements with the `e-panel` class. Use the following code:

{% tabs %}
{% highlight js tabtitle="App.jsx" %}

// import the DashboardLayout component
import { DashboardLayoutComponent } from '@syncfusion/ej2-react-layouts';
import './App.css';

function App() {
    let cellSpacing = [5, 5];
    return (<div>
      <div className="control-section">
          <DashboardLayoutComponent id='defaultLayout' cellSpacing={cellSpacing} allowResizing={true} columns={5}>
              <div id="one" className="e-panel" data-row="0" data-col="0" data-sizex="1" data-sizey="1">
                  <span className="e-template-icon e-clear-icon" />
                  <div className="e-panel-container">
                      <div className="text-align">0</div>
                  </div>
              </div>
              <div id="two" className="e-panel" data-row="1" data-col="0" data-sizex="1" data-sizey="2">
                  <span className="e-template-icon e-clear-icon" />
                  <div className="e-panel-container">
                      <div className="text-align">1</div>
                  </div>
              </div>
              <div id="three" className="e-panel" data-row="0" data-col="1" data-sizex="2" data-sizey="2">
                  <span className="e-template-icon e-clear-icon" />
                  <div className="e-panel-container">
                      <div className="text-align">2</div>
                  </div>
              </div>
              <div id="four" className="e-panel" data-row="2" data-col="1" data-sizex="1" data-sizey="1">
                  <span className="e-template-icon e-clear-icon" />
                  <div className="e-panel-container">
                      <div className="text-align">3</div>
                  </div>
              </div>
              <div id="five" className="e-panel" data-row="2" data-col="2" data-sizex="2" data-sizey="1">
                  <span className="e-template-icon e-clear-icon" />
                  <div className="e-panel-container">
                      <div className="text-align">4</div>
                  </div>
              </div>
              <div id="six" className="e-panel" data-row="0" data-col="3" data-sizex="1" data-sizey="1">
                  <span className="e-template-icon e-clear-icon" />
                  <div className="e-panel-container">
                      <div className="text-align">5</div>
                  </div>
              </div>
              <div id="seven" className="e-panel" data-row="1" data-col="3" data-sizex="1" data-sizey="1">
                  <span className="e-template-icon e-clear-icon" />
                  <div className="e-panel-container">
                      <div className="text-align">6</div>
                  </div>
              </div>
              <div id="eight" className="e-panel" data-row="0" data-col="4" data-sizex="1" data-sizey="3">
                  <span className="e-template-icon e-clear-icon" />
                  <div className="e-panel-container">
                      <div className="text-align">7</div>
                  </div>
              </div>
          </DashboardLayoutComponent>
      </div>
    </div>);
}

export default App;

{% endhighlight %}
{% endtabs %}

### Setting the `panels` property directly

Alternatively, you can configure panels declaratively by setting the [panels](https://ej2.syncfusion.com/react/documentation/api/dashboard-layout/index-default#panels) property in **src/App.jsx**. Use the following code:

{% tabs %}
{% highlight js tabtitle="App.jsx" %}

// import the DashboardLayout component
import { DashboardLayoutComponent } from '@syncfusion/ej2-react-layouts';
import './App.css';

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

{% endhighlight %}
{% endtabs %}

## Run the application

Run the `npm run dev` command in the terminal to start the development server. This command compiles your code and serves the application locally.

{% tabs %}
{% highlight bash tabtitle="npm" %}

npm run dev

{% endhighlight %}
{% highlight bash tabtitle="yarn" %}

yarn dev

{% endhighlight %}
{% endtabs %}

## Sample output

The following example shows a basic Dashboard Layout by adding panel definitions directly via HTML attributes.

{% tabs %}
{% highlight js tabtitle="app.jsx" %}
{% include code-snippet/dashboard-layout/getting-started-cs1/app/App.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="app.tsx" %}
{% include code-snippet/dashboard-layout/getting-started-cs1/app/App.tsx %}
{% endhighlight %}
{% highlight css tabtitle="index.css" %}
{% include code-snippet/dashboard-layout/getting-started-cs1/index.css %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/dashboard-layout/getting-started-cs1" %}

The example below renders the same Dashboard Layout by setting the `panels` property within the component.

{% tabs %}
{% highlight js tabtitle="app.jsx" %}
{% include code-snippet/dashboard-layout/getting-started-panel-cs1/app/App.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="app.tsx" %}
{% include code-snippet/dashboard-layout/getting-started-panel-cs1/app/App.tsx %}
{% endhighlight %}
{% highlight css tabtitle="index.css" %}
{% include code-snippet/dashboard-layout/getting-started-panel-cs1/index.css %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/dashboard-layout/getting-started-panel-cs1" %}

> Refer to the [React Dashboard Layout](https://www.syncfusion.com/react-components/react-dashboard-layout) feature tour for detailed demonstrations, and view the [React Dashboard Layout example](https://ej2.syncfusion.com/react/demos/#/tailwind3/dashboard-layout/default) example to learn how to present and manipulate data.
