---
layout: post
title: Getting started with React Linear Gauge component | Syncfusion
description:  Check out and learn about Getting started with React Linear Gauge component of Syncfusion Essential JS 2 and more details.
control: Getting started
platform: ej2-react
documentation: ug
domainurl: ##DomainURL##
---

# Getting Started with React Linear Gauge Component

This section explains the steps required to create a simple React Linear Gauge component and demonstrate its basic usage in a React environment.

To get started quickly with React Linear Gauge, you can watch this video:

{% youtube "https://www.youtube.com/watch?v=PTBeKSNHp1k" %}

## Prerequisites

Before getting started, ensure that your development environment meets the [system requirements for Syncfusion<sup style="font-size:70%">&reg;</sup> React UI components](https://ej2.syncfusion.com/react/documentation/system-requirement). That page documents the supported React, Node.js, and npm versions, and includes the React-version compatibility table for Syncfusion React components.

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

## Set up a development environment

To set up a React application quickly, use `create-vite-app`, which provides a faster development environment, smaller bundle sizes, and optimized builds compared to traditional tools like `create-react-app`. For detailed steps, refer to the Vite [installation instructions](https://vitejs.dev/guide). Vite sets up the environment using JavaScript and optimizes applications for production.

> As an alternative, you can create a React application using [`create-react-app`](https://github.com/facebook/create-react-app). For detailed instructions, refer to this [documentation](https://ej2.syncfusion.com/react/documentation/getting-started/create-app).

To create a new React application, run one of the following commands based on your preferred language:

**React with JavaScript**

```
npm create vite@latest my-app -- --template react
```

**React with TypeScript**

```
npm create vite@latest my-app -- --template react-ts
```

During the setup process, the CLI will prompt you for a few configuration options. Select the following:

- **Which linter to use?** → **ESLint**
- **Install with npm and start now?** → **Yes**

Selecting **Yes** automatically installs the project dependencies and starts the development server.

After verifying that the application starts successfully, terminate the development server in the terminal and proceed to the next step.

Then, navigate to the project directory:

```
cd my-app
```

## Install the Syncfusion® React Linear Gauge Package

All Syncfusion Essential® JS 2 packages are available in the [npmjs.com](https://www.npmjs.com/~syncfusionorg) registry.

Install the React Linear Gauge package using the following command:

```bash
npm install @syncfusion/ej2-react-lineargauge
```

## Add the Linear Gauge Component to the Project

Replace the contents of `src/App.tsx` (or `src/App.jsx` for JavaScript) with the following code to render a   Linear Gauge component.

{% tabs %}
{% highlight tsx tabtitle="app.tsx" %}

import { LinearGaugeComponent } from '@syncfusion/ej2-react-lineargauge';
import * as React from 'react';

function App() {
    return <LinearGaugeComponent id="linear-gauge"></LinearGaugeComponent>
}
export default App;

{% endhighlight %}
{% endtabs %}

## Inject Required Modules

Linear Gauge features are delivered as separate modules and must be explicitly injected. The `Inject` component accepts a `services` array that registers the modules required by the Linear Gauge component. Injecting only the modules you need helps reduce the application bundle size.

In this example, the `GaugeTooltip` module is injected to enable tooltip functionality in the Linear Gauge.

* `GaugeTooltip` - Inject this module into the `services` array to enable tooltips.

Import the required modules from the Linear Gauge package and register them through the `Inject` component as shown below.

{% tabs %}
{% highlight js tabtitle="app.jsx" %}
{% include code-snippet/linear-gauge/code-path/getting-started-cs4/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="app.tsx" %}
{% include code-snippet/linear-gauge/code-path/getting-started-cs4/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/linear-gauge/getting-started-cs4" %}

## Run the application

Run the application using the following command:

```bash
npm run dev
```

## Troubleshooting

* **Module not found errors**: Ensure the `@syncfusion/ej2-react-lineargauge` package is installed and that your `package.json` lists it under `dependencies`.
* **Feature not working (annotation/tooltip)**: Confirm that the corresponding service (`Annotations` or `GaugeTooltip`) is registered through the `Inject` directive.

## See also

* [Linear Gauge Axis Customization](axis)
* [Linear Gauge Pointers](pointers)
* [Linear Gauge Ranges](ranges)
* [Linear Gauge Annotations](annotations)
* [Linear Gauge API Reference](https://ej2.syncfusion.com/react/documentation/api/linear-gauge)