---
layout: post
title: Getting started with React Linear Gauge component | Syncfusion
description:  Check out and learn about Getting started with React Linear Gauge component of Syncfusion Essential JS 2 and more details.
control: Getting started
platform: ej2-react
documentation: ug
domainurl: ##DomainURL##
---

# Getting Started with React Linear Gauge

This section explains the steps required to create a simple React Linear Gauge component and demonstrate its basic usage in a React environment.

To get started quickly with React Linear Gauge, you can watch this video:

{% youtube "https://www.youtube.com/watch?v=PTBeKSNHp1k" %}

## Prerequisites

Before getting started, ensure that your development environment meets the [system requirements for Syncfusion<sup style="font-size:70%">&reg;</sup> React UI components](https://ej2.syncfusion.com/react/documentation/system-requirement). That page documents the supported React, Node.js, and npm versions, and includes the React-version compatibility table for Syncfusion React components.

- Basic knowledge of React and TypeScript (recommended)
- A code editor like Visual Studio Code

## Dependencies

The following list shows the minimum dependencies required to use the Linear Gauge component. These are installed automatically when you install `@syncfusion/ej2-react-lineargauge`.

```
+-- @syncfusion/ej2-react-lineargauge
|-- @syncfusion/ej2-lineargauge
    |-- @syncfusion/ej2-base
    |-- @syncfusion/ej2-svg-base
    |-- @syncfusion/ej2-pdf-export
|-- @syncfusion/ej2-react-base
```

## Setup for local development

Easily set up a React application using [Vite](https://vitejs.dev/guide), which provides a faster development environment, smaller bundle sizes, and optimized builds compared to traditional tools like `create-react-app`. Vite sets up your environment using JavaScript and optimizes your application for production.

To create a new React application, run the following command.

```bash
npm create vite@latest my-app
```

This command will prompt you for a few settings for the new project, such as selecting a framework and a variant. Use the `--template` flag shown below to skip these prompts.

To set up a React application in a TypeScript environment, run the following commands.

```bash
npm create vite@latest my-app -- --template react-ts
cd my-app
npm install
npm run dev
```

To set up a React application in a JavaScript environment, run the following commands.

```bash
npm create vite@latest my-app -- --template react
cd my-app
npm install
npm run dev
```

## Adding Syncfusion<sup style="font-size:70%">&reg;</sup> React Linear Gauge packages

All the available Essential<sup style="font-size:70%">&reg;</sup> JS 2 packages are published in the [npmjs.com](https://www.npmjs.com/~syncfusionorg) public registry. To install the Linear Gauge component, use the following command.

```bash
npm install @syncfusion/ej2-react-lineargauge
```
## Adding Linear Gauge component

The React Linear Gauge component can be added to the application by following these steps. Add the Linear Gauge component to the `src/App.tsx` (or `src/App.jsx`) file using the following code.

{% tabs %}
{% highlight jsx tabtitle="app.jsx" %}

import { LinearGaugeComponent } from '@syncfusion/ej2-react-lineargauge';
import * as React from 'react';

function App() {
    return <LinearGaugeComponent></LinearGaugeComponent>
}
export default App;

{% endhighlight %}
{% highlight tsx tabtitle="app.tsx" %}

import { LinearGaugeComponent } from '@syncfusion/ej2-react-lineargauge';
import * as React from 'react';

function App() {
    return <LinearGaugeComponent></LinearGaugeComponent>
}
export default App;

{% endhighlight %}
{% endtabs %}

Make sure your `src/main.tsx` (or `src/main.jsx`) file renders the `App` component inside an element with `id="container"`. A minimal example is shown below.

{% tabs %}
{% highlight jsx tabtitle="main.jsx" %}

import * as React from 'react';
import * as ReactDOM from 'react-dom';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('container'));
root.render(<App />);

{% endhighlight %}
{% highlight tsx tabtitle="main.tsx" %}

import * as React from 'react';
import * as ReactDOM from 'react-dom';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('container'));
root.render(<App />);

{% endhighlight %}
{% endtabs %}

## Module Injection

React Linear Gauge component features are segregated into individual feature-wise modules. To use a particular feature, you need to inject its feature service in the `App`. The relevant feature service names and descriptions are listed below.

* `Annotations` - Inject this module to use the annotation feature.
* `GaugeTooltip` - Inject this module to use the tooltip feature.

These modules should be injected into the Linear Gauge using the `Inject` directive.

{% tabs %}
{% highlight js tabtitle="app.jsx" %}

import { LinearGaugeComponent, Annotations, GaugeTooltip, Inject } from '@syncfusion/ej2-react-lineargauge';
import * as React from 'react';

function App() {
    return (
        <LinearGaugeComponent>
            <Inject services={[Annotations, GaugeTooltip]} />
        </LinearGaugeComponent>
    );
}
export default App;

{% endhighlight %}
{% highlight ts tabtitle="app.tsx" %}

import { LinearGaugeComponent, Annotations, GaugeTooltip, Inject } from '@syncfusion/ej2-react-lineargauge';
import * as React from 'react';

function App() {
    return (
        <LinearGaugeComponent>
            <Inject services={[Annotations, GaugeTooltip]} />
        </LinearGaugeComponent>
    );
}
export default App;

{% endhighlight %}
{% endtabs %}

## Run the application

Run the `npm run dev` command in the terminal to start the development server. This command compiles your code and serves the application locally, opening it in the browser.

```bash
npm run dev
```

The output appears as follows.

{% tabs %}
{% highlight js tabtitle="app.jsx" %}
{% include code-snippet/linear-gauge/code-path/getting-started-cs4/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="app.tsx" %}
{% include code-snippet/linear-gauge/code-path/getting-started-cs4/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/linear-gauge/getting-started-cs4" %}

## Troubleshooting

* **Module not found errors**: Ensure the `@syncfusion/ej2-react-lineargauge` package is installed and that your `package.json` lists it under `dependencies`.
* **Feature not working (annotation/tooltip)**: Confirm that the corresponding service (`Annotations` or `GaugeTooltip`) is registered through the `Inject` directive.

## See also

* [Linear Gauge Axis Customization](axis.md)
* [Linear Gauge Pointers](pointers.md)
* [Linear Gauge Ranges](ranges.md)
* [Linear Gauge Annotations](annotations.md)