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

<<<<<<< HEAD
This section explains the steps required to create a simple React DataGrid component and demonstrate its basic usage in a React environment.
=======
This section explains the steps required to create a simple [React Data Grid](https://www.syncfusion.com/react-components/react-data-grid) component and demonstrate its basic usage in a React environment.
>>>>>>> 8f3c51b893fb30a2292cc772a92ba38135a0569f

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

<<<<<<< HEAD
## Adding Syncfusion<sup style="font-size:70%">&reg;</sup> React Grids package
=======
## Adding React Data Grid packages
>>>>>>> 8f3c51b893fb30a2292cc772a92ba38135a0569f

To install the Grids package, use the following command:

```bash
npm install @syncfusion/ej2-react-grids --save
```

>Before including Syncfusion styles, make sure to remove the default styles defined in **index.css**. This helps prevent unintended style overrides and ensures that Syncfusion components render correctly.

## Adding CSS reference

The following CSS files are available in the **../node_modules/@syncfusion** package folder. Add these as references in **src/App.css**.

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

<<<<<<< HEAD
=======
N> Looking for the full React Data Grid component overview, features, pricing, and documentation? Visit the [React Data Grid](https://www.syncfusion.com/react-components/react-data-grid) page.

>>>>>>> 8f3c51b893fb30a2292cc772a92ba38135a0569f
## See also

* [DataGrid Feature Modules](./module)
* [Top 5 Features of React Data DataGrid](https://www.syncfusion.com/blogs/post/top-5-features-react-data-grid.aspx)
* [How to render React DataGrid with bootstrap theme](https://support.syncfusion.com/kb/article/10054/how-to-render-react-grid-with-bootstrap-theme)
* [Getting Started with Next.js](./nextjs-getting-started)
* [Getting Started with SharePoint](./sharepoint)
* [Getting Started with Preact](./preact)