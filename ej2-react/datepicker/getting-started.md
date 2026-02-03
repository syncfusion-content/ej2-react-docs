---
layout: post
title: Getting started with React DatePicker component | Syncfusion
description: Check out and learn the steps to get started with the React DatePicker component of Syncfusion Essential JS 2.
control: Getting started 
platform: ej2-react
documentation: ug
domainurl: ##DomainURL##
---

# Getting started with React DatePicker component

This section explains the steps required to create a simple [React DatePicker](https://www.syncfusion.com/react-components/react-datepicker) and demonstrates the basic usage of the DatePicker component.

To get started quickly with the React DatePicker, watch this video:

{% youtube "https://www.youtube.com/watch?v=B7LvXEwgTyw" %}

## Dependencies

The below list of dependencies are required to use the `DatePicker` component in your application.

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
To set up a React application in a TypeScript environment, run the following command.

```bash
npm create vite@latest my-app -- --template react-ts
cd my-app
npm run dev
```
To set up a React application in a JavaScript environment, run the following command.

```bash
npm create vite@latest my-app -- --template react
cd my-app
npm run dev
```

## Adding Syncfusion<sup style="font-size:70%">&reg;</sup> packages

All the available Essential<sup style="font-size:70%">&reg;</sup> JS 2 packages are published in [`npmjs.com`](https://www.npmjs.com/~syncfusionorg) public registry.
You can choose the component that you want to install. For this application, we are going to use `DatePicker` component.

To install the DatePicker component, use the following command

```bash
npm install @syncfusion/ej2-react-calendars --save
```

## Adding Style sheet to the Application

To render the DatePicker component, import the DatePicker and its dependent component styles into `App.css` as shown below.

```css
@import "../node_modules/@syncfusion/ej2-base/styles/material.css";
@import "../node_modules/@syncfusion/ej2-buttons/styles/material.css";
@import "../node_modules/@syncfusion/ej2-inputs/styles/material.css";
@import "../node_modules/@syncfusion/ej2-popups/styles/material.css";
@import "../node_modules/@syncfusion/ej2-react-calendars/styles/material.css";
```

You can check out the [Themes](https://ej2.syncfusion.com/react/documentation/appearance/theme) topic to know more about built-in themes and different ways to refer themes in a React application.

>Note: If you want to refer the combined component styles, please make use of our [`CRG`](https://crg.syncfusion.com/) (Custom Resource Generator) in your application.

## Adding DatePicker component to the Application

* To include the DatePicker component in the application, import the `DatePickerComponent` from the `@syncfusion/ej2-react-calendars` package in `App.tsx`.

* Then add the DatePicker component as shown in the code example below.

`[src/App.tsx]`

`[Class-component]`

```ts
import { DatePickerComponent } from '@syncfusion/ej2-react-calendars';
import * as React from 'react';
import './App.css';

export default class App extends React.Component<{}, {}> {
  public render() {
    return <DatePickerComponent id="datepicker" />;
  }
}
```

`[Functional-component]`

```ts
import { DatePickerComponent } from '@syncfusion/ej2-react-calendars';
import * as React from 'react';
import './App.css';

export default function App() {
  return <DatePickerComponent id="datepicker" />;
}
```

## Run the application

Now run the `npm run dev` command in the console to start the development server. This command compiles your code and serves the application locally, opening it in the browser.

```
npm run dev
```

The examples below show the basic DatePicker component.

`[Class-component]`
{% tabs %}
{% highlight js tabtitle="app.jsx" %}
{% include code-snippet/datepicker/default-cs11/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="app.tsx" %}
{% include code-snippet/datepicker/default-cs11/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/datepicker/default-cs11" %}

`[Functional-component]`

{% tabs %}
{% highlight js tabtitle="app.jsx" %}
{% include code-snippet/datepicker/default-cs12/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="app.tsx" %}
{% include code-snippet/datepicker/default-cs12/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/datepicker/default-cs12" %}

## Setting the value, min and max dates

The following example demonstrates how to set the value, min, and max dates when initializing the DatePicker.
Here the DatePicker allows selection within a range from the 9th to the 15th of May 2017. To learn more about range restriction in DatePicker, refer this [page](./date-range).

`[Class-component]`

{% tabs %}
{% highlight js tabtitle="app.jsx" %}
{% include code-snippet/datepicker/default-cs13/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="app.tsx" %}
{% include code-snippet/datepicker/default-cs13/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/datepicker/default-cs13" %}

`[Functional-component]`

{% tabs %}
{% highlight js tabtitle="app.jsx" %}
{% include code-snippet/datepicker/default-cs14/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="app.tsx" %}
{% include code-snippet/datepicker/default-cs14/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/datepicker/default-cs14" %}

## See Also

* [Change the format of selected date](./date-format)
* [Render DatePicker with specific culture](./globalization)
* [How to change the initial view of the DatePicker](./date-views)
* [How to achieve dynamic form validation with DatePicker](./how-to/dynamic-form-validation)

N> You can also explore our [React DatePicker example](https://ej2.syncfusion.com/react/demos/#/bootstrap5/datepicker/default) that shows how to render the DatePicker in React.