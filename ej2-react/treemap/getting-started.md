---
layout: post
title: Getting Started with React TreeMap component | Syncfusion
description: Checkout and learn about getting started with the React TreeMap component of Syncfusion Essential JS 2 and more details.
control: Getting started
platform: ej2-react
documentation: ug
domainurl: ##DomainURL##
---

# Getting Started with React TreeMap Component

This document explains the steps required to create and render a TreeMap component and demonstrates the component's basic usage.

## Prerequisites

Before getting started, ensure that your development environment meets the [system requirements for Syncfusion® React UI components](https://ej2.syncfusion.com/react/documentation/system-requirement). That page documents the supported React, Node.js, and npm versions, and includes the React-version compatibility table for Syncfusion React components.

## Dependencies

The following list of minimum dependencies is required to use the TreeMap component:

```ts
|-- @syncfusion/ej2-react-treemap
    |-- @syncfusion/ej2-treemap
    |-- @syncfusion/ej2-base
    |-- @syncfusion/ej2-data
    |-- @syncfusion/ej2-pdf-export
    |-- @syncfusion/ej2-svg-base
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

## Install the Syncfusion® React Treemap package

All Syncfusion Essential® JS 2 packages are available in the [npmjs.com](https://www.npmjs.com/~syncfusionorg) registry.

Install the React TreeMap package using the following command:

```bash
npm install @syncfusion/ej2-react-treemap
```

### Add TreeMap to the project

Replace the contents of `src/App.jsx` (or `src/App.tsx` for TypeScript) with the following code to render a simple TreeMap:

```tsx
import * as React from 'react';
import { TreeMapComponent } from '@syncfusion/ej2-react-treemap';

export function App() {
  return (
    <TreeMapComponent id="treemap"></TreeMapComponent>
  );
}

export default App;
```

## Inject Required Modules

The TreeMap component features are delivered as separate modules and must be explicitly injected. The `Inject` component accepts a `services` array that registers the modules required by the Treemap component. Injecting only the modules you need helps reduce the application bundle size.

In this example, the `TreeMapLegend` module is injected to enable the legend feature.

* `TreeMapLegend` – Inject this module into `services` to use the legend feature.

Import the required modules from the TreeMap package and register them through the `Inject` component as shown below.

{% tabs %}
{% highlight ts tabtitle="~/src/App.tsx" %}

import { TreeMapComponent, Inject, TreeMapLegend } from '@syncfusion/ej2-react-treemap';
import * as React from 'react';

function App() {
  return (
    <TreeMapComponent>
      <Inject services={[TreeMapLegend]} />
    </TreeMapComponent>
  )
}
export default App;

{% endhighlight %}
{% endtabs %}

## Bind Data to the TreeMap Component

This section explains how to bind data to the TreeMap component. In the following example, the TreeMap visualizes the number of international airports in South American countries based on the provided data source.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/treemap/code-path/getting-started-cs1/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/treemap/code-path/getting-started-cs1/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/treemap/getting-started-cs1" %}

## Run the application

Run the application using the following command:

```bash
npm run dev
```

## Troubleshooting

- If the TreeMap does not render, verify that the data source contains the field referenced by `weightValuePath` and `labelPath`.
- If feature-specific methods or events are missing, confirm that the corresponding module (for example, `TreeMapLegend`) is injected with `<Inject services={...} />`.
- For build errors related to peer dependencies, ensure that `react` and `react-dom` are installed at a supported version (16.8+).

## See also

* [Data Binding](data-binding)
* [Color Mapping](color-mapping)
* [Legend](legend)
* [Data Label](data-label)
* [Tooltip](tooltip)
* [Drilldown](drilldown)
* [Selection and Highlight](selection-and-highlight)
* [Print and Export](print-and-export)
* [Accessibility](accessibility)
* [TreeMap API Reference](https://ej2.syncfusion.com/react/documentation/api/treemap)
