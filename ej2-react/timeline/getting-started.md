---
layout: post
title: Getting started with React Timeline component | Syncfusion
description:  Checkout and learn about Getting started with Syncfusion React Timeline component of Syncfusion Essential JS 2 and more.
control: Timeline
platform: ej2-react
documentation: ug
domainurl: ##DomainURL##
---

# Getting started with the React Timeline component

This section explains how to create and configure a simple Timeline in a React application using Syncfusion Essential JS 2.

## Dependencies

The following list of dependencies is required to use the Timeline component in the application.

```js
|-- @syncfusion/ej2-react-layouts
    |-- @syncfusion/ej2-base
    |-- @syncfusion/ej2-layouts
    |-- @syncfusion/ej2-react-base

```

## Installation and Configuration

To quickly set up a React application, use `create-vite-app`, which provides a faster development environment, smaller bundle sizes, and optimized builds compared to traditional tools like `create-react-app`. For detailed steps, refer to the Vite [installation instructions](https://vitejs.dev/guide). Vite configures the development environment using modern tooling and optimizes the application for production.

> **Note:** To create a React application using `create-react-app`, refer to this [documentation](https://ej2.syncfusion.com/react/documentation/getting-started/create-app) for more details.

To create a new React application, run the following command.

```bash
npm create vite@latest my-app
```
To set up a React application in a TypeScript environment, run the following command.

```bash
npm create vite@latest my-app -- --template react-ts
cd my-app
npm run dev
```
To set up a React application in a JavaScript environment, run the following command.

```bash
npm create vite@latest my-app -- --template react
cd my-app
npm run dev
```

## Adding Syncfusion<sup style="font-size:70%">&reg;</sup> packages

All the available Essential<sup style="font-size:70%">&reg;</sup> JS 2 packages are published in [npmjs.com](https://www.npmjs.com/~syncfusionorg) public registry.

To install the `Timeline` component, use the following command:

```bash
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

@import "@syncfusion/ej2-tailwind3-theme/styles/timeline/index.css";

{% endhighlight %}
{% endtabs %}

> To refer **App.css** in the application then import it in the **src/App.tsx** file.

## Adding the Timeline Component to the Application

To include the Timeline component in your application, import the `TimelineComponent` from the `ej2-react-layouts` package into the `App.tsx` file.

Each Timeline item is defined using the `ItemDirective`, which must be placed inside the `ItemsDirective`. The `ItemsDirective` acts as a container for managing multiple Timeline items, and each `ItemDirective` represents an individual entry in the Timeline.

{% raw %}

```ts
import { TimelineComponent, ItemsDirective, ItemDirective } from '@syncfusion/ej2-react-layouts';
import * as React from "react";
import * as ReactDOM from 'react-dom/client';
import "./App.css";

function App() {
  return (
    <div id="timeline" style={{ height: "350px" }}>
      <TimelineComponent>
          <ItemsDirective>
              <ItemDirective />
              <ItemDirective />
              <ItemDirective />
              <ItemDirective />
          </ItemsDirective>
      </TimelineComponent>
    </div>
  );
}

export default App;
const root = ReactDOM.createRoot(
  document.getElementById('element')
);
root.render(<App />);
```
{% endraw %}

## Running the application

Run the `npm run dev` command in the console to start the development server. This command compiles the application and serves it locally, making it available in the browser.

```
npm run dev
```

The following example renders a basic Timeline with four default items.

{% tabs %}
{% highlight js tabtitle="app.jsx" %}
{% include code-snippet/timeline/getting-started/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="app.tsx" %}
{% include code-snippet/timeline/getting-started/app/index.tsx %}
{% endhighlight %}
{% highlight css tabtitle="index.css" %}
{% include code-snippet/timeline/items/content/string-based/index.css %}
{% endhighlight %}
{% highlight ts tabtitle="index.html" %}
{% include code-snippet/timeline/getting-started/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/timeline/getting-started" %}
