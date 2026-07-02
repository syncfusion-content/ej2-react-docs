---
layout: post
title: React DataGrid Getting Started (Quick Setup Guide) | Syncfusion
description: Learn how to install and configure the Syncfusion React DataGrid. Set up a new React app and enable paging, sorting, filtering, and grouping.
control: Getting started 
platform: ej2-react
documentation: ug
domainurl: ##DomainURL##
---

# Getting Started with React DataGrid

This section explains the steps required to create a simple React DataGrid component and demonstrate its basic usage in a React environment.

> **Ready to streamline your Syncfusion<sup style="font-size:70%">&reg;</sup> React development?** Discover the full potential of Syncfusion<sup style="font-size:70%">&reg;</sup> React components with Syncfusion<sup style="font-size:70%">&reg;</sup> AI Coding Assistant. Effortlessly integrate, configure, and enhance your projects with intelligent, context-aware code suggestions, streamlined setups, and real-time insights—all seamlessly integrated into your preferred AI-powered IDEs like VS Code, Cursor, Syncfusion<sup style="font-size:70%">&reg;</sup> CodeStudio and more. [Explore Syncfusion<sup style="font-size:70%">&reg;</sup> AI Coding Assistant](https://ej2.syncfusion.com/react/documentation/ai-coding-assistant/overview).

To get started quickly with React DataGrid, you can watch this video:

{% youtube "https://www.youtube.com/watch?v=IGLlZiuFdbA" %}

## Setup for local development

Easily set up a React application using `create-vite-app`, which provides a faster development environment, smaller bundle sizes, and optimized builds compared to traditional tools like `create-react-app`. For detailed steps, refer to the Vite [installation instructions](https://vitejs.dev/guide). Vite sets up your environment using JavaScript and optimizes your application for production.

> **Note:**  To create a React application using `create-react-app`, refer to this [documentation](https://ej2.syncfusion.com/react/documentation/getting-started/create-app) for more details.

To create a new React application, run the following command.

```bash
npm create vite@latest my-app
```
This command will prompt you for a few settings for the new project, such as selecting a framework and a variant.

![Initial_setup](images/Initial-setup.jpg)

Terminate the application, then run the following command:

```bash
cd my-app
```

## Adding Syncfusion<sup style="font-size:70%">&reg;</sup> React Grids package

To install the Grids package, use the following command:

```bash
npm install @syncfusion/ej2-react-grids --save
```

>Before including Syncfusion styles, make sure to remove the default styles defined in **index.css**. This helps prevent unintended style overrides and ensures that Syncfusion components render correctly.

## Adding CSS reference

You can add the CSS files required for the Syncfusion React DataGrid component using one of the following methods.

### Option 1: Add CSS references from a theme package

Themes for Syncfusion<sup style="font-size:70%">&reg;</sup> DataGrid component can be applied using CSS files provided through [npm theme packages](https://www.npmjs.com/package/@syncfusion/ej2-material3-theme). For available themes, refer to the [Themes](https://ej2.syncfusion.com/react/documentation/appearance/theme) documentation.

Install the **Material 3** theme package using the following command:

{% tabs %}
{% highlight bash tabtitle="npm" %}

npm install @syncfusion/ej2-material3-theme --save

{% endhighlight %}
{% endtabs %}

Then add the following CSS reference to the **src/App.css** file:

{% tabs %}
{% highlight css tabtitle="App.css" %}

@import "../node_modules/@syncfusion/ej2-material3-theme/grids/grid/index.css";

{% endhighlight %}
{% endtabs %}

### Option 2: Add CSS references from component packages

After installing the DataGrid package, the required CSS files are available in the corresponding Syncfusion packages under the **node_modules/@syncfusion** directory. Add the following CSS references to the **src/App.css** file:

```css
@import '../node_modules/@syncfusion/ej2-base/styles/material3.css';  
@import '../node_modules/@syncfusion/ej2-buttons/styles/material3.css';  
@import '../node_modules/@syncfusion/ej2-calendars/styles/material3.css';  
@import '../node_modules/@syncfusion/ej2-dropdowns/styles/material3.css';  
@import '../node_modules/@syncfusion/ej2-inputs/styles/material3.css';  
@import '../node_modules/@syncfusion/ej2-navigations/styles/material3.css';
@import '../node_modules/@syncfusion/ej2-popups/styles/material3.css';
@import '../node_modules/@syncfusion/ej2-splitbuttons/styles/material3.css';
@import '../node_modules/@syncfusion/ej2-notifications/styles/material3.css';
@import "../node_modules/@syncfusion/ej2-react-grids/styles/material3.css";
```

## Adding DataGrid component

The DataGrid code should be added to the **src/App.tsx** file.

{% tabs %}
{% highlight js tabtitle="App.jsx" %}
{% include code-snippet/grid/getting-started/app/App.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="App.tsx" %}
{% include code-snippet/grid/getting-started/app/App.tsx %}
{% endhighlight %}
{% highlight css tabtitle="App.css" %}
{% include code-snippet/grid/getting-started/app/App.css %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/grid/getting-started-cs1" %}

## Run the application

```bash
npm run dev
```

## See also

* [DataGrid Feature Modules](./module)
* [Data Binding](./data-binding)
* [Top 5 Features of React Data DataGrid](https://www.syncfusion.com/blogs/post/top-5-features-react-data-grid.aspx)
* [How to render React DataGrid with bootstrap theme](https://support.syncfusion.com/kb/article/10054/how-to-render-react-grid-with-bootstrap-theme)
* [Getting Started with Next.js](./nextjs-getting-started)
* [Getting Started with SharePoint](./sharepoint)
* [Getting Started with Preact](./preact)