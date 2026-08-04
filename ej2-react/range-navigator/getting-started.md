---
layout: post
title: Getting started with React Range Navigator component | Syncfusion
description: Check out and learn about getting started with the React Range Navigator component of Syncfusion Essential JS 2 and more details.
control: Getting started
platform: ej2-react
documentation: ug
domainurl: ##DomainURL##
---

# Getting started with React Range Navigator component

This section describes the steps to create a simple Range Navigator and demonstrates the basic usage of the Range Navigator component.

## Prerequisites

Before getting started, ensure that your development environment meets the [system requirements for Syncfusion® React UI components](https://ej2.syncfusion.com/react/documentation/system-requirement). That page documents the supported React, Node.js, and npm versions, and includes the React-version compatibility table for Syncfusion React components.

## Dependencies

When you install `@syncfusion/ej2-react-charts`, the following peer dependencies are installed automatically:

```
|-- @syncfusion/ej2-react-charts
    |-- @syncfusion/ej2-base
    |-- @syncfusion/ej2-data
    |-- @syncfusion/ej2-pdf-export
    |-- @syncfusion/ej2-file-utils
    |-- @syncfusion/ej2-compression
    |-- @syncfusion/ej2-navigations
    |-- @syncfusion/ej2-calendars
    |-- @syncfusion/ej2-svg-base

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

### Install Syncfusion<sup style="font-size:70%">&reg;</sup> React Range Navigator package

All the available Essential<sup style="font-size:70%">&reg;</sup> JS 2 packages are published in the [`npmjs.com`](https://www.npmjs.com/~syncfusionorg) public registry. 

To install the Range Navigator package, run the following command from the project folder:

```bash
npm install @syncfusion/ej2-react-charts
```

## Add the Range Navigator to the project

Open the application entry file (`src/App.jsx` or `src/App.tsx`) and the Range Navigator component using the following code.

{% tabs %}
{% highlight js tabtitle="app.jsx" %}
{% include code-snippet/rangenavigator/getting-started-cs17/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="app.tsx" %}
{% include code-snippet/rangenavigator/getting-started-cs17/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/rangenavigator/getting-started-cs17" %}

## Inject Required Modules

The Range Navigator is segregated into individual feature-wise modules. To use a particular feature, you need to inject its feature service in the `services` of the `Inject` component. The following services are commonly used to extend the Range Navigator's basic functionality.

* `AreaSeries` - Inject this module in to `services` to use the area series.
* `DateTime` - Inject this module in to `services` to use the DateTime axis.
* `RangeTooltip` - Inject this module in to `services` to use the tooltip feature.

Import the required module from the Chart package and register it through the `Inject` component as shown below.

```javascript
import { RangeNavigatorComponent, AreaSeries, DateTime, RangeTooltip, Inject } from "@syncfusion/ej2-react-charts";
import * as React from "react";

function App() {
  return (
    <RangeNavigatorComponent id="range-navigator">
      <Inject services={[AreaSeries, DateTime, RangeTooltip]} />
    </RangeNavigatorComponent>
  );
}

export default App;
```

## Populate Range Navigator with data

Add a series object to the Range Navigator by using the [`series`](https://ej2.syncfusion.com/react/documentation/api/range-navigator/rangeNavigatorSeriesModel) property. Map the JSON fields `x` and `y` to the series [`xName`](https://ej2.syncfusion.com/react/documentation/api/range-navigator/rangeNavigatorSeriesModel#xname) and [`yName`](https://ej2.syncfusion.com/react/documentation/api/range-navigator/rangeNavigatorSeriesModel#yname) properties, and set the JSON array as the [`dataSource`](https://ej2.syncfusion.com/react/documentation/api/range-navigator/rangenavigatorseriesmodel#datasource) property.

Since the JSON contains category data, set the [`valueType`](https://ej2.syncfusion.com/react/documentation/api/range-navigator/rangeNavigatorModel#valuetype) for the horizontal axis (primaryXAxis) to `Category`. By default, the axis valueType is `Numeric`.

{% tabs %}
{% highlight js tabtitle="app.jsx" %}
{% include code-snippet/rangenavigator/getting-started-cs18/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="app.tsx" %}
{% include code-snippet/rangenavigator/getting-started-cs18/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/rangenavigator/getting-started-cs38" %}

## Run the application

Run the application using the following command:

```bash
npm run dev
```

## Troubleshooting

Use the following guidance to resolve common issues when getting started with the Range Navigator component.

- **Range Navigator does not render (blank page)**
  - Verify that `index.html` contains a container with `id="root"`, and that `main.tsx`/`main.jsx` calls `ReactDOM.createRoot(document.getElementById("root"))` followed by `root.render(<App />)`.
  - Run `npm install` again to ensure all peer dependencies listed in the [Dependencies](#dependencies) section are installed.

- **Tooltip is not visible after setting `tooltip.enable = true`**
  - Confirm that the `RangeTooltip` module is included in the `services` array of the `Inject` component as shown in the [Module injection](#module-injection) and [Enable tooltip](#enable-tooltip) sections.

- **Series data is not plotted or appears empty**
  - Confirm that the `dataSource` array contains objects with property names matching `xName` and `yName` (case sensitive).
  - If the `x` field holds `Date` values, set the [`valueType`](https://ej2.syncfusion.com/react/documentation/api/range-navigator/rangeNavigatorModel#valuetype) of `primaryXAxis` to `DateTime`; for string categories use `Category`.

- **TypeScript errors on import**
  - Ensure `@types/react` and `@types/react-dom` are installed. The Syncfusion package ships with its own types, so no additional type packages are required.

- **`Module not found: Can't resolve '@syncfusion/ej2-react-charts'`**
  - The package was not installed in the current project. Run `npm install @syncfusion/ej2-react-charts` from the project root.

- **`ERESOLVE` peer-dependency errors during installation**
  - A React or Node.js version mismatch is the most common cause. Install a supported React version (18 or 19) and Node.js 18 or later, then delete `node_modules` and `package-lock.json` and run `npm install` again.

- **Build or dev server fails to start**
  - Confirm that you are using a supported Node.js version (Node 18 or later for the latest Vite templates).
  - Delete `node_modules` and `package-lock.json`, then run `npm install` again.

## See also

Explore the following related topics:

* [Selecting Range](./selecting-range)
* [Lightweight](./lightweight)
* [Series Types](./series-types)
* [Types of Data](./data)
* [Period Selector](./period-selector)
* [Labels](./labels)
* [Grid and Tick Lines](./grid-tick)
* [Customization](./customization)
* [Tooltip](./tool-tip)
* [RTL](./r-t-l)
* [Export and Print](./export-print)
* [Accessibility](./accessibility)
* [Range Navigator API reference](https://ej2.syncfusion.com/react/documentation/api/range-navigator)