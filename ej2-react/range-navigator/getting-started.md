---
layout: post
title: Getting started with React Range Navigator component | Syncfusion
description:  Checkout and learn about Getting started with React Range Navigator component of Syncfusion Essential JS 2 and more details.
control: Getting started 
platform: ej2-react
documentation: ug
domainurl: ##DomainURL##
---

# Getting started with React Range Navigator component

This section describes the steps to create a simple Range Navigator and demonstrates the basic usage of the Range Navigator component.

## Dependencies

Below is the list of minimum dependencies required to use the Range Navigator component.

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

## Installation and configuration

To easily set up a React application, use the Vite CLI (`npm create vite`), which provides a faster development environment, smaller bundle sizes, and optimized builds compared to traditional tools like `create-react-app`. For detailed steps, refer to the Vite [installation instructions](https://vitejs.dev/guide/). Vite sets up your environment using JavaScript and optimizes your application for production.

> **Note:** To create a React application using `create-react-app` instead, refer to this [documentation](https://ej2.syncfusion.com/react/documentation/getting-started/create-app) for more details.

To create a new React application, run the following command.

```bash
npm create vite@latest my-app
```
This command will prompt you for a few settings for the new project, such as selecting a framework and a variant.

![Initial_setup](../images/Initial-setup.jpg)

To set up a React application in TypeScript environment, run the following command.

```bash
npm create vite@latest my-app -- --template react-ts
cd my-app
npm run dev
```
To set up a React application in JavaScript environment, run the following command.

```bash
npm create vite@latest my-app -- --template react
cd my-app
npm run dev
```

### Install Syncfusion<sup style="font-size:70%">&reg;</sup> Range Navigator Package

All the available Essential<sup style="font-size:70%">&reg;</sup> JS 2 packages are published in the [`npmjs.com`](https://www.npmjs.com/~syncfusionorg) public registry.
To install the Syncfusion<sup style="font-size:70%">&reg;</sup> Range Navigator package, use the following command

```bash
   npm install @syncfusion/ej2-react-charts --save
```

> The –save will instruct NPM to include the Range Navigator package inside of the dependencies section of the package.json.

## Add Range Navigator to the project

Add the Range Navigator component to `src/App.tsx` using the following code.

```ts
import * as React from 'react';
import { RangeNavigatorComponent } from '@syncfusion/ej2-react-charts';

function App() {
  return (<RangeNavigatorComponent></RangeNavigatorComponent>);
}
export default App;
```

Then, update the `src/main.tsx` file to render the App component using React 18's [`createRoot`](https://react.dev/reference/react-dom/client/createRoot) API.

```ts
import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';
import './index.css';

const root = createRoot(document.getElementById('root')!);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
```

Now run the `npm run dev` command in the console to start the development server. This command compiles your code and serves the application locally, opening it in the browser.

  ```bash
   npm run dev
  ```

The below example shows a basic Range Navigator.

{% tabs %}
{% highlight js tabtitle="App.jsx" %}
{% include code-snippet/rangenavigator/getting-started-cs17/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="App.tsx" %}
{% include code-snippet/rangenavigator/getting-started-cs17/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/rangenavigator/getting-started-cs17" %}

## Module injection

Range Navigator component are segregated into individual feature-wise modules. In order to use a particular feature, you need to inject its feature service in the AppModule. The following services are used to extend Range Navigator’s basic functionality.

* `AreaSeries` - Inject this module in to `services` to use area series.
* `DateTime` - Inject this module in to `services` to use date time feature.
* `RangeTooltip` - Inject this module in to `services` to use tooltip feature.

Import the above-mentioned modules from the chart package and inject them into the `services` section of the Range Navigator component as follows.

 ```javascript
import { RangeNavigatorComponent, AreaSeries, DateTime, RangeTooltip, Inject } from '@syncfusion/ej2-react-charts';
import * as React from 'react';
import { createRoot } from 'react-dom/client';

function App() {
    return (
        <RangeNavigatorComponent id='charts'>
            <Inject services={[AreaSeries, DateTime, RangeTooltip]} />
        </RangeNavigatorComponent>
    );
}

const root = createRoot(document.getElementById("charts"));
root.render(<App />);
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

{% previewsample "page.domainurl/code-snippet/rangenavigator/getting-started-cs18" %}

## Enable tooltip

The tooltip is useful to show the selected data. You can enable tooltip by setting the [`enable`](https://ej2.syncfusion.com/react/documentation/api/range-navigator/rangetooltipsettingsmodel#enable) property as `true` in [`tooltip`](https://ej2.syncfusion.com/react/documentation/api/range-navigator/rangenavigatormodel#tooltip) object and by injecting `RangeTooltip` module into the `services`.

{% tabs %}
{% highlight js tabtitle="app.jsx" %}
{% include code-snippet/rangenavigator/getting-started-cs19/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="app.tsx" %}
{% include code-snippet/rangenavigator/getting-started-cs19/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/rangenavigator/getting-started-cs19" %}