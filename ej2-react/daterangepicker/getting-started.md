---
layout: post
title: Getting started with React Daterangepicker component | Syncfusion
description:  Checkout and learn about Getting started with React Daterangepicker component of Syncfusion Essential JS 2 and more details.
control: Getting started 
platform: ej2-react
documentation: ug
domainurl: ##DomainURL##
---

# Getting Started with React DateRangePicker component

This section explains the steps required to create a simple React DateRangePicker component and demonstrate its basic usage in a React environment.

> **Ready to streamline your Syncfusion<sup style="font-size:70%">&reg;</sup> React development?** Discover the full potential of Syncfusion<sup style="font-size:70%">&reg;</sup> React components with Syncfusion<sup style="font-size:70%">&reg;</sup> AI Coding Assistant. Effortlessly integrate, configure, and enhance your projects with intelligent, context-aware code suggestions, streamlined setups, and real-time insights—all seamlessly integrated into your preferred AI-powered IDEs like VS Code, Cursor, Syncfusion<sup style="font-size:70%">&reg;</sup> CodeStudio and more. [Explore Syncfusion<sup style="font-size:70%">&reg;</sup> AI Coding Assistant](https://ej2.syncfusion.com/react/documentation/ai-coding-assistant/overview).

To get started quickly with React DateRangePicker, you can watch this video:

{% youtube "https://www.youtube.com/watch?v=RCC_K6FbZRU" %}

## Setup for local development

Easily set up a React application using `create-vite-app`, which provides a faster development environment, smaller bundle sizes, and optimized builds compared to traditional tools like `create-react-app`. For detailed steps, refer to the Vite [installation instructions](https://vitejs.dev/guide). Vite sets up your environment using JavaScript and optimizes your application for production.

> **Note:**  To create a React application using `create-react-app`, refer to this [documentation](https://ej2.syncfusion.com/react/documentation/getting-started/create-app) for more details.

To create a new React application, run the following command.

```bash
npm create vite@latest my-app
```
This command will prompt you for a few settings for the new project, such as selecting a framework and a variant.

![Initial_setup](images/Initial-setup.jpg)

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

## Adding Syncfusion<sup style="font-size:70%">&reg;</sup> DateRangePicker packages

All the available Essential<sup style="font-size:70%">&reg;</sup> JS 2 packages are published in the [`npmjs.com`](https://www.npmjs.com/~syncfusionorg) public registry.
To install the DateRangePicker component, use the following command

```bash
npm install @syncfusion/ej2-react-calendars --save
```

> The --save will instruct NPM to include the DateRangePicker package inside of the **dependencies** section of the package.json.

## Adding CSS reference

The following CSS files are available in the **../node_modules/@syncfusion** package folder. Add these as references in **src/App.css**.

```css
@import "../node_modules/@syncfusion/ej2-base/styles/tailwind3.css";
@import "../node_modules/@syncfusion/ej2-buttons/styles/tailwind3.css";
@import "../node_modules/@syncfusion/ej2-lists/styles/tailwind3.css";
@import "../node_modules/@syncfusion/ej2-inputs/styles/tailwind3.css";
@import "../node_modules/@syncfusion/ej2-popups/styles/tailwind3.css";
@import "../node_modules/@syncfusion/ej2-react-calendars/styles/tailwind3.css";
```

> To refer **App.css** in the application then import it in the **src/App.tsx** file.

## Adding DateRangePicker component

The React DateRangePicker component can be added to the application by following these steps. To get started, add the DateRangePicker component to the **src/App.tsx** file using the following code.

The following daterangepicker code should be placed in the **src/App.tsx** file.

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

Run the `npm run dev` command in the terminal to start the development server. This command compiles your code and serves the application locally, opening it in the browser.

```bash
npm run dev
```

The output appears as follows.

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

The start and end date in a range can be defined with help of [`startDate`](https://ej2.syncfusion.com/react/documentation/api/daterangepicker/index-default#startdate) and [`endDate`](https://ej2.syncfusion.com/react/documentation/api/daterangepicker/index-default#enddate) property.
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

> Refer to the [React DateRangePicker](https://www.syncfusion.com/react-components/react-daterangepicker) feature tour page for its groundbreaking feature representations. You can also explore our [React DateRangePicker component example](https://ej2.syncfusion.com/react/demos/#/tailwind3/daterangepicker/default) that shows how to render the DateRangePicker in React.

## See Also

* [Render DateRangePicker with pre-defined ranges](./customization#preset-ranges)
* [Render DateRangePicker with specific culture](./globalization)