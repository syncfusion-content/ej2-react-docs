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

- Basic knowledge of React and TypeScript (recommended)
- A code editor like Visual Studio Code

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

> **Note:** The `ej2-pdf-export` dependency is required only when you use the print and export features. See the [Print and Export](print-and-export) section for details.

## Installation and configuration

To set up a React application, use the [Vite](https://vitejs.dev/guide) scaffolding tool, which provides a faster development environment, smaller bundle sizes, and optimized builds compared with traditional tools like `create-react-app`.

> **Note:** To create a React application using `create-react-app`, refer to this [documentation](https://ej2.syncfusion.com/react/documentation/getting-started/create-app) for more details.

### Create a new React application

To set up a React application in TypeScript environment, run the following commands:

```bash
npm create vite@latest my-app -- --template react-ts
cd my-app
npm install
npm run dev
```

To set up a React application in JavaScript environment, run the following commands:

```bash
npm create vite@latest my-app -- --template react
cd my-app
npm install
npm run dev
```

### Add Syncfusion<sup style="font-size:70%">&reg;</sup> packages

All available Essential<sup style="font-size:70%">&reg;</sup> JS 2 packages are published in the [npm public registry](https://www.npmjs.com/~syncfusionorg). To install the TreeMap package, run the following command from your project folder:

```bash
npm install @syncfusion/ej2-react-treemap
```

### Add TreeMap to the project

Replace the contents of `src/App.jsx` (or `src/App.tsx` for TypeScript) with the following code to render a simple TreeMap:

```tsx

import * as React from 'react';
import { TreeMapComponent } from '@syncfusion/ej2-react-treemap';

export function App() {
  const dataSource = [
    { State: "Brazil", Count: 25 },
    { State: "Colombia", Count: 1 },
    { State: "Argentina", Count: 9 },
    { State: "Ecuador", Count: 7 },
    { State: "Chile", Count: 6 }
  ];
  return (
    <TreeMapComponent
      height="350px"
      dataSource={dataSource}
      weightValuePath="Count"
      leafItemSettings={{ labelPath: 'State' }}
    />
  );
}

export default App;

```

### Render the app

Open `src/main.jsx` (or `src/main.tsx`) and ensure the `App` component is mounted to the DOM:

```tsx
import React from 'react';
import { createRoot } from 'react-dom/client';
import { App } from './App';

const root = createRoot(document.getElementById('root')!);
root.render(<App />);
```

### Run the application

Run the `npm run dev` command in the console to start the development server. This command compiles your code and serves the application locally, opening it in the browser.

```bash
npm run dev
```

## Module injection

The TreeMap component is segregated into individual feature-wise modules. To use a particular feature, inject its feature module using the `<Inject services={} />` method inside `TreeMapComponent`. The following modules are available:

- `TreeMapHighlight` — Inject this provider to use the highlight feature.
- `TreeMapSelection` — Inject this provider to use the selection feature.
- `TreeMapLegend` — Inject this provider to use the legend feature.
- `TreeMapTooltip` — Inject this provider to use the tooltip feature.

The example below shows how to inject the `TreeMapLegend` module:

```tsx
import { TreeMapComponent, Inject, TreeMapLegend } from '@syncfusion/ej2-react-treemap';

<TreeMapComponent dataSource={dataSource} weightValuePath="Count">
  <Inject services={[TreeMapLegend]} />
</TreeMapComponent>
```

For a full list of module options, see the [Legend](legend), [Tooltip](tooltip), and [Selection and Highlight](selection-and-highlight) sections.

## Render TreeMap

This section shows how to render a TreeMap using a bound data source. The example visualizes the number of international airports in South America.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/treemap/code-path/getting-started-cs1/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/treemap/code-path/getting-started-cs1/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/treemap/getting-started-cs1" %}

The TreeMap is created with a data source and the `weightValuePath` property is set to the **Count** field of the data source as the value. The leaf-level items of the TreeMap can be customized using `leafItemSettings`. The `leafItemSettings` allows you to change properties such as `fill`, `border`, `labelPath`, and `labelPosition`.

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
