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

## Adding Syncfusion<sup style="font-size:70%">&reg;</sup> packages

All the available Essential<sup style="font-size:70%">&reg;</sup> JS 2 packages are published in [npmjs.com](https://www.npmjs.com/~syncfusionorg) public registry.

To install `Timeline` component, use the following command

```bash
npm install @syncfusion/ej2-react-layouts --save
```

## Adding CSS Reference

Import the required CSS references for the Timeline component in `src/App.css` as shown below.

```css
@import "../node_modules/@syncfusion/ej2-base/styles/tailwind3.css";
@import "../node_modules/@syncfusion/ej2-layouts/styles/tailwind3.css";
```

## Adding Timeline component to the application

To include the Timeline component in the application, import the `TimelineComponent` from the `ej2-react-layouts` package into the `App.tsx` file.

Each Timeline item is defined using the `ItemDirective`, which must be placed inside the `ItemsDirective`. The `ItemsDirective` acts as a container for managing multiple Timeline items, and each `ItemDirective` represents an individual entry in the Timeline.

{% raw %}

```ts
import { TimelineComponent, ItemsDirective, ItemDirective } from '@syncfusion/ej2-react-layouts';
import * as React from "react";
import * as ReactDOM from "react-dom";
import "./App.css";

function App() {
  return (
    <div id='timeline' style={{ height: "350px" }}>
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

const root = ReactDOM.createRoot(document.getElementById("element"));
root.render(<App />);
```
{% endraw %}

## Running the application

Run the `npm run dev` command in the console to start the development server. This command compiles the application and serves it locally, making it available in the browser.

```
npm run dev
```

The following example shows a basic Timeline component.

{% tabs %}
{% highlight js tabtitle="app.jsx" %}
{% include code-snippet/timeline/getting-started/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="app.tsx" %}
{% include code-snippet/timeline/getting-started/app/index.tsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.html" %}
{% include code-snippet/timeline/getting-started/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/timeline/getting-started" %}
