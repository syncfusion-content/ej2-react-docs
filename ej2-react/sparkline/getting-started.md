---
layout: post
title: Getting started with React Sparkline component | Syncfusion
description: Checkout and learn about Getting started with React Sparkline component of Syncfusion Essential JS 2 and more details.
control: Getting started
platform: ej2-react
documentation: ug
domainurl: ##DomainURL##
---

# Getting started with React Sparkline component

This section describes the steps to create a simple Sparkline and demonstrates the basic usage of the Sparkline component.

## Prerequisites

Before getting started, ensure that your development environment meets the [system requirements for Syncfusion® React UI components](https://ej2.syncfusion.com/react/documentation/system-requirement). That page documents the supported React, Node.js, and npm versions, and includes the React-version compatibility table for Syncfusion React components.

## Dependencies

Below is the list of minimum dependencies required to use the Sparkline component.

```
|-- @syncfusion/ej2-react-charts
    |-- @syncfusion/ej2-data
    |-- @syncfusion/ej2-svg-base
    |-- @syncfusion/ej2-react-base
    |-- @syncfusion/ej2-pdf-export
    |-- @syncfusion/ej2-file-utils
    |-- @syncfusion/ej2-compression
```

Once you install `@syncfusion/ej2-react-charts`, the other required dependencies will be installed automatically along with the main package.

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

## Install Syncfusion<sup style="font-size:70%">&reg;</sup> React Sparkline package

All Syncfusion Essential® JS 2 packages are available in the [npmjs.com](https://www.npmjs.com/~syncfusionorg) registry.

Install the React Sparkline package using the following command:

```bash
npm install @syncfusion/ej2-react-charts
```

## Add the Sparkline Component to the Project

Add the Sparkline component to `src/App.tsx` using the following code.

{% tabs %}
{% highlight ts tabtitle="App.tsx" %}

import { SparklineComponent } from '@syncfusion/ej2-react-charts';
import * as React from 'react';
function App() {
    return (<SparklineComponent></SparklineComponent>);
}
export default App;

{% endhighlight %}
{% endtabs %}

> Since the data source has not been specified to the Sparkline, no shapes will be rendered. Only an empty SVG element is appended to the Sparkline container.

## Inject Required Modules

Sparkline component features are delivered as separate modules and must be explicitly injected. The `Inject` component accepts a `services` array that registers the modules required by the Sparkline component. Injecting only the modules you need helps reduce the application bundle size.

In this example, the `SparklineTooltip` module is injected to enable the tooltip functionality in the Smith Chart.

* `SparklineTooltip` – Inject this module into `services` to use the tooltip feature.

Import the required modules from the Charts package and register them through the `Inject` component as shown below.

{% tabs %}
{% highlight ts tabtitle="App.tsx" %}

import { SparklineComponent, Inject, SparklineTooltip } from '@syncfusion/ej2-react-charts';
import * as React from "react";
function App() {
    return (<SparklineComponent>
            <Inject services={[SparklineTooltip]} />
          </SparklineComponent>);
}
export default App;

{% endhighlight %}
{% endtabs %}

## Bind Data to the Sparkline

The [`dataSource`](https://ej2.syncfusion.com/react/documentation/api/sparkline/sparklinemodel#datasource) property enables data binding for the Sparkline. It accepts a collection of values as input, such as a list of objects. Use [`xName`](https://ej2.syncfusion.com/react/documentation/api/sparkline/sparklinemodel#xname) and [`yName`](https://ej2.syncfusion.com/react/documentation/api/sparkline/sparklinemodel#yname) to map the data field names to the horizontal and vertical axes.

{% tabs %}
{% highlight js tabtitle="app.jsx" %}
{% include code-snippet/sparkline/getting-started-cs1/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="app.tsx" %}
{% include code-snippet/sparkline/getting-started-cs1/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/sparkline/getting-started-cs1" %}

## Run the application

Run the application using the following command:

```bash
npm run dev
```

## Troubleshooting

If the Sparkline does not render or build errors appear, verify the following common causes before raising an issue.

* **Empty container or no shapes rendered** – Ensure `dataSource` is set and the field names referenced in `xName` and `yName` exist on each data object. Without a data source, the component renders only an empty SVG element.
* **`SparklineTooltip is not a function` or tooltip does not appear** – Confirm the `SparklineTooltip` module is imported from `@syncfusion/ej2-react-charts` and injected inside `<SparklineComponent>` using `<Inject services={[SparklineTooltip]} />`. Also set `tooltipSettings.visible` to `true`.
* **Module not found / package not installed** – Run `npm install @syncfusion/ej2-react-charts --save` from the project root and restart the dev server.
* **TypeScript errors for props such as `xName`, `yName`, or `tooltipSettings`** – Verify the installed package version supports your React version (see the [system requirements](https://ej2.syncfusion.com/react/documentation/system-requirement)) and that `@types/react` matches your React major version.

## See also

* [Sparkline types](sparkline-types)
* [Sparkline dimensions](sparkline-dimensions)
* [Sparkline appearance](appearance)
* [Axis customization](axis-customization)
* [Data labels](data-labels)
* [Marker](marker)
* [Range band](range-band)
* [Special points customization](special-points-customization)
* [User interaction](user-interaction)
* [Localization](localization)
* [Accessibility in Sparkline](accessibility)
* [Sparkline Chart API Reference](https://ej2.syncfusion.com/react/documentation/api/sparkline)