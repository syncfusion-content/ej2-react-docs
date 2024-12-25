---
layout: post
title: Getting started with React Timeline component | Syncfusion
description:  Checkout and learn about Getting started with Syncfusion React Timeline component of Syncfusion Essential JS 2 and more.
control: Timeline 
platform: ej2-react
documentation: ug
domainurl: ##DomainURL##
---

# Getting Started

This section explains how to create a simple Timeline and configure its available functionalities in the React environment.

## Dependencies

The following list of dependencies is required to use the Timeline component in your application.

```js
|-- @syncfusion/ej2-react-layouts
    |-- @syncfusion/ej2-base
    |-- @syncfusion/ej2-layouts
    |-- @syncfusion/ej2-react-base

```

## Installation and Configuration

You can use [`Create-react-app`](https://github.com/facebookincubator/create-react-app) to setup the applications. To install `create-react-app` run the following command.

```bash
npm install -g create-react-app
```

Start a new project using the create-react-app command as follows

<div class='tsx'>

```bash

create-react-app quickstart --scripts-version=react-scripts-ts

cd quickstart

```

</div>

<div class='jsx'>

```bash

create-react-app quickstart

cd quickstart

```

</div>

> 'react-scripts-ts' is used for creating React app with typescript.

## Adding Syncfusion packages

All the available Essential JS 2 packages are published in [npmjs.com](https://www.npmjs.com/~syncfusionorg) public registry.

To install `Timeline` component, use the following command

```bash
npm install @syncfusion/ej2-react-layouts --save
```

## Adding CSS Reference

Import the Timeline component's required CSS references as follows in `src/App.css`.

```css
@import "../../node_modules/@syncfusion/ej2-base/styles/material.css";
@import "../../node_modules/@syncfusion/ej2-layouts/styles/material.css";
```

## Adding Timeline component to the application

To include the Timeline component in your application, import the `TimelineComponent` from `ej2-react-layouts` package in the `App.tsx`.

To define each item, you can use the `ItemDirective` tag inside the `ItemsDirective` tag as shown in below code example.

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

Run the application in the browser using the following command:

```
npm start
```

The following example shows a basic Timeline component.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/timeline/getting-started/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/timeline/getting-started/app/index.tsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.html" %}
{% include code-snippet/timeline/getting-started/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/timeline/getting-started" %}
