---
layout: post
title: Getting Started with React Circular Gauge component | Syncfusion
description: Check out and learn about getting started with the React Circular Gauge component of Syncfusion Essential JS 2 and more details.
control: Getting Started
platform: ej2-react
documentation: ug
domainurl: ##DomainURL##
---

# Getting Started with React Circular Gauge component

This section explains the steps required to create a simple React Circular Gauge component and demonstrate its basic usage in a React environment.

> Ready to streamline your Syncfusion<sup>&reg;</sup> React development. Discover the full potential of Syncfusion<sup>&reg;</sup> React components with Syncfusion<sup>&reg;</sup> AI Coding Assistant. Effortlessly integrate, configure, and enhance your projects with intelligent, context-aware code suggestions, streamlined setups, and real-time insights—all seamlessly integrated into your preferred AI-powered IDEs like VS Code, Cursor, Syncfusion<sup>&reg;</sup> CodeStudio and more. [Explore Syncfusion<sup>&reg;</sup> AI Coding Assistant](https://ej2.syncfusion.com/react/documentation/ai-coding-assistant/overview).

## Prerequisites

Before getting started, ensure that your development environment meets the [system requirements for Syncfusion<sup>&reg;</sup> React UI components](https://ej2.syncfusion.com/react/documentation/system-requirement). That page documents the supported React, Node.js, and npm versions, and includes the React-version compatibility table for Syncfusion<sup>&reg;</sup> React components.

## Dependencies

The following table lists the minimum required dependencies to use the Circular Gauge.

```
|-- @syncfusion/ej2-react-circulargauge
    |-- @syncfusion/ej2-react-base
    |-- @syncfusion/ej2-circulargauge
    |-- @syncfusion/ej2-base
    |-- @syncfusion/ej2-svg-base
    |-- @syncfusion/ej2-pdf-export
```

> **Compatibility:** This component is compatible with React 18 and React 19. The latest stable packages are published under the [Syncfusion org](https://www.npmjs.com/~syncfusionorg) scope on npm.

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

## Adding Syncfusion<sup>&reg;</sup> React Circular Gauge packages

All Syncfusion Essential® JS 2 packages are available in the [npmjs.com](https://www.npmjs.com/~syncfusionorg) registry.

Install the React Circular Gauge package using the following command:

```bash
npm install @syncfusion/ej2-react-circulargauge
```

## Add the Circular Gauge Component to the Project

Add the Circular Gauge component to the application. To initialize the Circular Gauge control in the React application, import the component into `src/App.tsx` or `src/App.jsx` as appropriate. Use the example below to include the Circular Gauge component.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/circulargauge/code-path/getting-started-cs1/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/circulargauge/code-path/getting-started-cs1/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/circulargauge/getting-started-cs1" %}

## Module injection

Circular Gauge component features are segregated into individual feature-wise modules. To use a particular feature, inject its feature module using the `Inject` directive. The relevant feature module names and descriptions are listed below.

* `Legend` - Inject this module to use the legend feature.
* `Annotations` - Inject this module to use the annotations feature.
* `GaugeTooltip` - Inject this module to use the gauge-specific tooltip feature (distinct from the generic `Tooltip`).

Inject the required modules into the Circular Gauge using the `Inject` directive, as shown below.

```ts
import { CircularGaugeComponent, Legend, Annotations, GaugeTooltip, Inject } from '@syncfusion/ej2-react-circulargauge';

<CircularGaugeComponent>
  <Inject services={[Legend, Annotations, GaugeTooltip]} />
  {/* axes, pointers, ranges, etc. */}
</CircularGaugeComponent>
```

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/circulargauge/code-path/gauge-legend-cs1/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/circulargauge/code-path/gauge-legend-cs1/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/circulargauge/preview-sample/gauge-legend-cs1" %}

## Run the application

Run the `npm run dev` command in the terminal to start the development server. This command compiles your code and serves the application locally, opening it in the browser.

```bash
npm run dev
```

## Troubleshooting

* **Module not found errors**: Ensure the `@syncfusion/ej2-react-circulargauge` package is installed and that your `package.json` lists it under `dependencies`.
* **Feature not working (annotation/tooltip)**: Confirm that the corresponding service (`Annotations` or `GaugeTooltip`) is registered through the `Inject` directive.

## See also

* [Getting Started with Next.js](https://ej2.syncfusion.com/react/documentation/circular-gauge/nextjs-getting-started)
* [Circular Gauge Axes](https://ej2.syncfusion.com/react/documentation/circular-gauge/gauge-axes)
* [Circular Gauge Ranges](https://ej2.syncfusion.com/react/documentation/circular-gauge/gauge-ranges)
* [Circular Gauge Pointers](https://ej2.syncfusion.com/react/documentation/circular-gauge/gauge-pointers)
* [Circular Gauge Annotations](https://ej2.syncfusion.com/react/documentation/circular-gauge/gauge-annotations)
* [Circular Gauge API Reference](https://ej2.syncfusion.com/react/documentation/api/circular-gauge)

