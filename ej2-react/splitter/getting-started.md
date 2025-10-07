---
layout: post
title: Getting started with React Splitter component | Syncfusion
description:  Checkout and learn about Getting started with React Splitter component of Syncfusion Essential JS 2 and more details.
control: Splitter
platform: ej2-react
documentation: ug
domainurl: ##DomainURL##
---

# Getting Started with React Splitter

The following section explains the steps required to build the Splitter component with a step-by-step procedure.

## Dependencies

The following dependencies are required to use the Splitter component in your application:

```js
|-- @syncfusion/ej2-layouts
    |-- @syncfusion/ej2-base
|-- @syncfusion/ej2-react-layouts
    |-- @syncfusion/ej2-react-base

```

## Installation and configuration

To quickly set up a React application, use `create-vite-app`, which provides a faster development environment, smaller bundle sizes, and optimized builds compared to traditional tools like `create-react-app`. For detailed steps, refer to the Vite [installation instructions](https://vitejs.dev/guide/). Vite sets up your environment using JavaScript and optimizes your application for production.

> **Note:** To create a React application using `create-react-app`, refer to this [Syncfusion guide](https://ej2.syncfusion.com/react/documentation/getting-started/create-app) for more details.

To create a new React application, run the following command.

```bash
npm create vite@latest my-app
```
To set up a React application in TypeScript environment, run the following command.

```bash
npm create vite@latest my-app --template react-ts
cd my-app
npm run dev
```
To set up a React application in JavaScript environment, run the following command.

```bash
npm create vite@latest my-app --template react
cd my-app
npm run dev
```

Install the below required dependency package in order to use the `Splitter` component in your application.

```
npm install @syncfusion/ej2-react-layouts --save
```

## Adding CSS Reference

The Splitter CSS files are available in the `ej2-layouts` package folder.
This can be referred in your application using the following code.

`[src/App.css]`

```css
@import '../../node_modules/@syncfusion/ej2-base/styles/material.css';
@import '../../node_modules/@syncfusion/ej2-layouts/styles/material.css';
```

## Adding Splitter to the project

Initialize the Splitter using the`<SplitterComponent>` tag-directive with `<PanesDirective>` and `<PaneDirective>` child elements respectively.

Please refer the below code snippet,



```ts
import { PaneDirective, PanesDirective, SplitterComponent } from '@syncfusion/ej2-react-layouts';
import * as React from "react";

class App extends React.Component {
  public render() {
    return (
      <div className="App">
      <SplitterComponent id="splitter" height="250px" width="600px">
          <PanesDirective>
            <PaneDirective/>
            <PaneDirective/>
            <PaneDirective/>
          </PanesDirective>
      </SplitterComponent>
      </div>
    );
  }
}

export default App;

```

Now run the `npm run dev` command in the console to start the development server. This command compiles your code and serves the application locally, opening it in the browser.

```
npm run dev
```

Output will be as follows:

{% tabs %}
{% highlight js tabtitle="app.jsx" %}
{% include code-snippet/splitter/getting-started-cs4/app/App.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="app.tsx" %}
{% include code-snippet/splitter/getting-started-cs4/app/App.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/splitter/getting-started-cs4" %}

## Orientation

Splitter supports both `Horizontal` and `Vertical` orientations. By default, it renders in `Horizontal` orientation. Change the layout by setting the [orientation](https://ej2.syncfusion.com/react/documentation/api/splitter/#orientation) property.

{% tabs %}
{% highlight js tabtitle="app.jsx" %}
{% include code-snippet/splitter/getting-started-cs5/app/App.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="app.tsx" %}
{% include code-snippet/splitter/getting-started-cs5/app/App.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/splitter/getting-started-cs5" %}

## Load content to the pane

Use the [content](https://ej2.syncfusion.com/react/documentation/api/splitter/panePropertiesModel/#content) property to load pane contents as an HTML element or string. 

For detailed information, refer to the [Pane Content](./pane-content) section.

{% tabs %}
{% highlight js tabtitle="app.jsx" %}
{% include code-snippet/splitter/getting-started-cs6/app/App.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="app.tsx" %}
{% include code-snippet/splitter/getting-started-cs6/app/App.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/splitter/getting-started-cs6" %}

## See Also

* [Construct different layouts using Splitter](different-layouts)