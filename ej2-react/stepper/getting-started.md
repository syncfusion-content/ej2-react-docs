---
layout: post
title: Getting started with React Stepper component | Syncfusion
description:  Checkout and learn about Getting started with Syncfusion React Stepper component of Syncfusion Essential JS 2 and more.
control: Stepper 
platform: ej2-react
documentation: ug
domainurl: ##DomainURL##
---

# Getting Started

This section explains how to create a simple Stepper and configure its available functionalities in the React environment.

## Dependencies

The following list of dependencies is required to use the Stepper component in your application.

```js
|-- @syncfusion/ej2-react-navigations
    |-- @syncfusion/ej2-base
    |-- @syncfusion/ej2-popups
    |-- @syncfusion/ej2-navigations
    |-- @syncfusion/ej2-react-base

```

## Installation and Configuration

You can use [`Create-react-app`](https://github.com/facebookincubator/create-react-app) to setup the applications. To install `create-react-app` run the following command.

```bash
npm install -g create-react-app
```

Start a new project using create-react-app command as follows

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

To install `Stepper` component, use the following command

```bash
npm install @syncfusion/ej2-react-navigations --save
```

## Adding CSS Reference

Import the Stepper component's required CSS references as follows in `src/App.css`.

```css
@import "../node_modules/@syncfusion/ej2-base/styles/material.css";
@import "../node_modules/@syncfusion/ej2-popups/styles/material.css";
@import "../node_modules/@syncfusion/ej2-navigations/styles/material.css";
```

## Adding Stepper component to the application

To include the Stepper component in your application, import the `StepperComponent` from `ej2-react-navigations` package in the `App.tsx`.

To define each step, you can use the `StepDirective` inside the `StepsDirective` tags as shown in below code example.

{% raw %}

```ts
import { StepperComponent, StepsDirective, StepDirective } from '@syncfusion/ej2-react-navigations';
import * as React from "react";
import * as ReactDOM from "react-dom";
import "./App.css";

function App() {
  return (
        <StepperComponent>
            <StepsDirective>
                  <StepDirective/>
                  <StepDirective/>
                  <StepDirective/>
                  <StepDirective/>
                  <StepDirective/>
            </StepsDirective>
        </StepperComponent>
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

The following example shows a basic Stepper component.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/stepper/getting-started-cs1/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/stepper/getting-started-cs1/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/stepper/getting-started-cs1" %}

## Configure icon and label

You can define the step icon and label by setting the `iconCss` and `label` properties using the `StepDirective` tag directive.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/stepper/iconWithLabel/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/stepper/iconWithLabel/app/index.tsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.css" %}
{% include code-snippet/stepper/iconWithLabel/index.css %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/stepper/iconWithLabel" %}
