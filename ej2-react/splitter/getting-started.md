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

The following dependencies are required to use the Splitter component in the application:

```js
|-- @syncfusion/ej2-layouts
    |-- @syncfusion/ej2-base
|-- @syncfusion/ej2-react-layouts
    |-- @syncfusion/ej2-react-base

```

## Installation and configuration

To quickly set up a React application, use `create-vite-app`, which provides a faster development environment, smaller bundle sizes, and optimized builds compared to traditional tools like `create-react-app`. For detailed steps, refer to the Vite [installation instructions](https://vitejs.dev/guide). Vite sets up the environment using JavaScript and optimizes the application for production.

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

Install the required dependency package to use the `Splitter` component in the application:

```
npm install @syncfusion/ej2-react-layouts --save
```

## Import Syncfusion<sup style="font-size:70%">&reg;</sup> CSS styles

Themes for Syncfusion<sup style="font-size:70%">&reg;</sup> React components can be applied using CSS or SASS files from the [npm theme packages](https://ej2.syncfusion.com/react/documentation/appearance/theme#theme-packages), CDN, CRG, or [Theme Studio](https://ej2.syncfusion.com/react/documentation/appearance/theme-studio). For more information, see the [themes documentation](https://ej2.syncfusion.com/react/documentation/appearance/theme).

This guide uses the `Tailwind 3` theme as an example, sourced from the theme package. In this package, each component includes an `index.css` file that automatically loads all the required dependency styles. To install the [Tailwind 3](https://www.npmjs.com/package/@syncfusion/ej2-tailwind3-theme) theme package, use the following command:

{% tabs %}
{% highlight bash tabtitle="npm" %}

npm install @syncfusion/ej2-tailwind3-theme --save

{% endhighlight %}
{% highlight bash tabtitle="yarn" %}

yarn add @syncfusion/ej2-tailwind3-theme

{% endhighlight %}
{% endtabs %}

By default, Vite projects include a `index.css` file with default styles. These default styles may conflict with Syncfusion component styles. Clear all content from the `index.css` file to prevent style conflicts.

The required styles for the component are imported in the **src/App.css** file:

{% tabs %}
{% highlight css tabtitle="App.css" %}

@import "@syncfusion/ej2-tailwind3-theme/styles/splitter/index.css";

{% endhighlight %}
{% endtabs %}

> To refer **App.css** in the application then import it in the **src/App.tsx** file.

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

Run the `npm run dev` command in the console to start the development server. This command compiles the code and serves the application locally, opening it in the browser.

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

Splitter supports both `Horizontal` and `Vertical` orientations. By default, it renders in `Horizontal` orientation. Change the layout by setting the [orientation](https://ej2.syncfusion.com/react/documentation/api/splitter#orientation) property.

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

Use the [content](https://ej2.syncfusion.com/react/documentation/api/splitter/panePropertiesModel#content) property to load pane contents as an HTML element or string. 

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