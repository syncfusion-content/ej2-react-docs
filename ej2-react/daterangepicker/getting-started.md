
---
layout: post
title: Getting started with React Daterangepicker component | Syncfusion
description:  Checkout and learn about Getting started with React Daterangepicker component of Syncfusion Essential JS 2 and more details.
control: Getting started 
platform: ej2-react
documentation: ug
domainurl: ##DomainURL##
---

# Getting started with React DateRangePicker component

This section explains you the steps required to create a simple DateRangePicker and demonstrate the basic usage of the DateRangePicker component.

To get start quickly with React DateRangePicker, you can check on this video:

{% youtube "https://www.youtube.com/watch?v=RCC_K6FbZRU" %}

## Dependencies

The below list of dependencies are required to use the `DateRangePicker` component in your application.

```javascript
|-- @syncfusion/ej2-react-calendars
  |-- @syncfusion/ej2-react-base
    |-- @syncfusion/ej2-base
  |-- @syncfusion/ej2-data
  |-- @syncfusion/ej2-calendars
  |-- @syncfusion/ej2-inputs
    |-- @syncfusion/ej2-splitbuttons
  |-- @syncfusion/ej2-lists
  |-- @syncfusion/ej2-popups
    |-- @syncfusion/ej2-buttons

```

## Installation and configuration

To easily set up a React application, use `create-vite-app`, which provides a faster development environment, smaller bundle sizes, and optimized builds compared to traditional tools like `create-react-app`. For detailed steps, refer to the Vite [installation instructions](https://vitejs.dev/guide/). Vite sets up your environment using JavaScript and optimizes your application for production.

> **Note:**  To create a React application using `create-react-app`, refer to this [documentation](https://ej2.syncfusion.com/react/documentation/getting-started/create-app) for more details.

To create a new React application, run the following command.

```bash
npm create vite@latest my-app
```
To set-up a React application in TypeScript environment, run the following command.

```bash
npm create vite@latest my-app -- --template react-ts
cd my-app
npm run dev
```
To set-up a React application in JavaScript environment, run the following command.

```bash
npm create vite@latest my-app -- --template react
cd my-app
npm run dev
```


## Adding Syncfusion<sup style="font-size:70%">&reg;</sup> packages

All the available Essential<sup style="font-size:70%">&reg;</sup> JS 2 packages are published in [`npmjs.com`](https://www.npmjs.com/~syncfusionorg) public registry. You can choose the component that you want to install. For this application, we are going to use `DateRangePicker` component.

To install DateRangePicker component, use the following command

```bash
npm install @syncfusion/ej2-react-calendars –save
```

## Adding Style sheet to the Application

To render the DateRangePicker component, need to import DateRangePicker and its dependent component's styles as given below in `App.css`.

```css
@import "../node_modules/@syncfusion/ej2-base/styles/material.css";
@import "../node_modules/@syncfusion/ej2-buttons/styles/material.css";
@import "../node_modules/@syncfusion/ej2-lists/styles/material.css";
@import "../node_modules/@syncfusion/ej2-inputs/styles/material.css";
@import "../node_modules/@syncfusion/ej2-popups/styles/material.css";
@import "../node_modules/@syncfusion/ej2-react-calendars/styles/material.css";
```

>Note: If you want to refer the combined component styles, please make use of our [`CRG`](https://crg.syncfusion.com/) (Custom Resource Generator) in your application.

## Adding DateRangePicker component to the Application

* To include the DateRangePicker component in application import the `DateRangePickerComponent` from `ej2-react-calendars` package in `App.tsx`.

* Then add the DateRangePicker component as shown in below code example.

`[src/App.tsx]`

`[Class-component]`

```ts
import { DateRangePickerComponent } from '@syncfusion/ej2-react-calendars';
import * as React from "react";
import './App.css';

export default class App extends React.Component<{}, {}> {
    public render() {
        return <DateRangePickerComponent id="daterangepicker" />
    }
};
```

`[Functional-component]`

```ts
import { DateRangePickerComponent } from '@syncfusion/ej2-react-calendars';
import * as React from "react";
import './App.css';

function App() {
    return <DateRangePickerComponent id="daterangepicker" />
};
```

## Run the application

Now run the `npm run dev` command in the console to start the development server. This command compiles your code and serves the application locally, opening it in the browser.

```
npm run dev
```

The below examples shows the basic DateRangePicker component.

`[Class-component]`

{% tabs %}
{% highlight js tabtitle="app.jsx" %}
{% include code-snippet/daterangepicker/default-cs9/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="app.tsx" %}
{% include code-snippet/daterangepicker/default-cs9/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/daterangepicker/default-cs9" %}

`[Functional-component]`

{% tabs %}
{% highlight js tabtitle="app.jsx" %}
{% include code-snippet/daterangepicker/default-cs10/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="app.tsx" %}
{% include code-snippet/daterangepicker/default-cs10/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/daterangepicker/default-cs10" %}

## Setting the start and end date in a range

The start and end date in a range can be defined with help of [`startDate`](https://ej2.syncfusion.com/react/documentation/api/daterangepicker/#startdate) and [`endDate`](https://ej2.syncfusion.com/react/documentation/api/daterangepicker/#enddate) property.
The following example demonstrates, how to set the start date, end date on initializing the DateRangePicker. To know more about range restriction in DateRangePicker, please refer this [page](./range-selection).

`[Class-component]`

{% tabs %}
{% highlight js tabtitle="app.jsx" %}
{% include code-snippet/daterangepicker/default-cs11/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="app.tsx" %}
{% include code-snippet/daterangepicker/default-cs11/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/daterangepicker/default-cs11" %}

`[Functional-component]`

{% tabs %}
{% highlight js tabtitle="app.jsx" %}
{% include code-snippet/daterangepicker/default-cs12/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="app.tsx" %}
{% include code-snippet/daterangepicker/default-cs12/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/daterangepicker/default-cs12" %}

## See Also

* [Render DateRangePicker with pre-defined ranges](./customization#preset-ranges)
* [Render DateRangePicker with specific culture](./globalization)

N> You can refer to our [React DateRangePicker](https://www.syncfusion.com/react-components/react-daterangepicker) feature tour page for its groundbreaking feature representations. You can also explore our [React DateRangePicker example](https://ej2.syncfusion.com/react/demos/#/bootstrap5/daterangepicker/default) that shows how to render the DateRangePicker in React.
