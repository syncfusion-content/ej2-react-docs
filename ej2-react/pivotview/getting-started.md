---
layout: post
title: Getting started with React Pivotview component | Syncfusion
description:  Checkout and learn about Getting started with React Pivotview component of Syncfusion Essential JS 2 and more details.
control: Getting started 
platform: ej2-react
documentation: ug
domainurl: ##DomainURL##
---

# Getting started in React PivotView component

This section guides you through the steps to create a simple [Pivot Table](https://www.syncfusion.com/react-components/react-pivot-table) using the Syncfusion `PivotView` component in a React application. It demonstrates how to set up and use the component to display and analyze data effectively.

> **Ready to streamline your Syncfusion<sup style="font-size:70%">&reg;</sup> React development?** Discover the full potential of Syncfusion<sup style="font-size:70%">&reg;</sup> React components with Syncfusion<sup style="font-size:70%">&reg;</sup> AI Coding Assistant. Effortlessly integrate, configure, and enhance your projects with intelligent, context-aware code suggestions, streamlined setups, and real-time insights—all seamlessly integrated into your preferred AI-powered IDEs like VS Code, Cursor, Syncfusion<sup style="font-size:70%">&reg;</sup> CodeStudio and more. [Explore Syncfusion<sup style="font-size:70%">&reg;</sup> AI Coding Assistant](https://ej2.syncfusion.com/react/documentation/ai-coding-assistant/overview)

To get started quickly with the React [Pivot Table](https://www.syncfusion.com/react-components/react-pivot-table), watch this video:

{% youtube "https://www.youtube.com/watch?v=vwoijhliTAI" %}

## Prerequisites

- **Node.js**: 18.0 or later
- **npm**: 8.0 or later

## Setup for local development

Easily set up a React application using [Vite](https://vitejs.dev), which provides a faster development environment, smaller bundle sizes, and optimized builds compared to traditional tools like `create-react-app`. For detailed steps, refer to the Vite [installation instructions](https://vitejs.dev/guide). Vite sets up your environment using JavaScript and optimizes your application for production.

> **Note:** To create a React application using `create-react-app`, refer to this [documentation](https://ej2.syncfusion.com/react/documentation/getting-started/create-app) for more details.

To create a new React application, run the following command and choose the `React` framework. Select the `TypeScript` variant if you plan to follow the `App.tsx` example below.

```bash
npm create vite@latest my-app
```
This command will prompt you for a few settings for the new project, such as selecting a framework and a variant.

![Initial_setup](images/Initial-setup.jpg)

Terminate the application, then run the following command:

```bash
cd my-app
```

## Adding Syncfusion<sup style="font-size:70%">&reg;</sup> React PivotView package

To install the `PivotView` package, run:

```bash
npm install @syncfusion/ej2-react-pivotview --save
```

## Adding CSS reference

The following CSS files are available in the **../node_modules/@syncfusion** package folder. You can add these as references in **src/App.css** (or your global stylesheet):

```css
@import '../node_modules/@syncfusion/ej2-base/styles/tailwind3.css';
@import '../node_modules/@syncfusion/ej2-buttons/styles/tailwind3.css';
@import '../node_modules/@syncfusion/ej2-dropdowns/styles/tailwind3.css';
@import '../node_modules/@syncfusion/ej2-grids/styles/tailwind3.css';
@import '../node_modules/@syncfusion/ej2-inputs/styles/tailwind3.css';
@import '../node_modules/@syncfusion/ej2-lists/styles/tailwind3.css';
@import '../node_modules/@syncfusion/ej2-navigations/styles/tailwind3.css';
@import '../node_modules/@syncfusion/ej2-popups/styles/tailwind3.css';
@import '../node_modules/@syncfusion/ej2-splitbuttons/styles/tailwind3.css';
@import '../node_modules/@syncfusion/ej2-calendars/styles/tailwind3.css';
@import '../node_modules/@syncfusion/ej2-react-pivotview/styles/tailwind3.css';
```

> Before including Syncfusion styles, make sure to remove the default styles defined in **index.css**. This helps prevent unintended style overrides and ensures that Syncfusion components render correctly.

## Adding Pivot Table component

The Pivot Table code should be placed in the **src/App.tsx** file.

{% tabs %}
{% highlight js tabtitle="App.jsx" %}
{% include code-snippet/pivot-table/getting-started-cs1/app/App.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="App.tsx" %}
{% include code-snippet/pivot-table/getting-started-cs1/app/App.tsx %}
{% endhighlight %}
{% highlight js tabtitle="App.css" %}
{% include code-snippet/pivot-table/getting-started-cs1/app/App.css %}
{% endhighlight %}
{% endtabs %}

## Run the application

```bash
npm run dev
```

## See also

* [Getting Started with Next.js](./nextjs-getting-started)
* [Data Binding](./data-binding)
* [Field List](./field-list)
* [Grouping Bar](./grouping-bar)
