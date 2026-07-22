---
layout: post
title: Getting started with React Query builder component | Syncfusion
description:  Checkout and learn about Getting started with React Query builder component of Syncfusion Essential JS 2 and more details.
control: Getting started 
platform: ej2-react
documentation: ug
domainurl: ##DomainURL##
---

# Getting Started with React Query Builder component

This section explains the steps required to create a simple React Query Builder component and demonstrate its basic usage in a React environment.

> **Ready to streamline your Syncfusion<sup style="font-size:70%">&reg;</sup> React development?** Discover the full potential of Syncfusion<sup style="font-size:70%">&reg;</sup> React components with Syncfusion<sup style="font-size:70%">&reg;</sup> AI Coding Assistant. Effortlessly integrate, configure, and enhance your projects with intelligent, context-aware code suggestions, streamlined setups, and real-time insights—all seamlessly integrated into your preferred AI-powered IDEs like VS Code, Cursor, Syncfusion<sup style="font-size:70%">&reg;</sup> CodeStudio and more. [Explore Syncfusion<sup style="font-size:70%">&reg;</sup> AI Coding Assistant](https://ej2.syncfusion.com/react/documentation/ai-coding-assistant/overview).

## Prerequisites
 
[System requirements for Syncfusion<sup style="font-size:70%">&reg;</sup> React UI components](https://ej2.syncfusion.com/react/documentation/system-requirement)
 
## Set up the Vite project
 
To create a new `Vite` project, use one of the commands that are specific to either NPM or Yarn.
 
{% tabs %}
{% highlight bash tabtitle="npm" %}
npm create vite@latest my-project -- --template react
{% endhighlight %}
{% highlight bash tabtitle="yarn" %}
yarn create vite my-project --template react
{% endhighlight %}
{% endtabs %}
 
After running the command, you will be prompted with a series of interactive questions to configure your project. Select the appropriate options for each prompt:
 
1. **Select a linter to use**: Choose the linter for your project (for example, `ESLint`).
2. **Install with npm and start now?**: Type `Yes` to proceed with installing the dependencies and automatically start the development server, or `No` to install dependencies manually later.
 
Navigate into the project directory with:
 
```
cd my-project
```
 
## Add Syncfusion<sup style="font-size:70%">&reg;</sup> React packages
 
Syncfusion<sup style="font-size:70%">&reg;</sup> React component packages are available at [npmjs.com](https://www.npmjs.com/search?q=ej2-react). To use Syncfusion<sup style="font-size:70%">&reg;</sup> React components in the project, install the corresponding npm package.
 
To install the React component package, use the following command:
 
{% tabs %}
{% highlight bash tabtitle="npm" %}
 
npm install @syncfusion/ej2-react-querybuilder
 
{% endhighlight %}
{% highlight bash tabtitle="yarn" %}
 
yarn add @syncfusion/ej2-react-querybuilder
 
{% endhighlight %}
{% endtabs %}
 
## Import Syncfusion<sup style="font-size:70%">&reg;</sup> CSS styles
 
Themes for Syncfusion<sup style="font-size:70%">&reg;</sup> React components can be applied using CSS or SASS files from the [npm theme packages](https://ej2.syncfusion.com/react/documentation/appearance/theme#theme-packages), CDN, CRG, or [Theme Studio](https://ej2.syncfusion.com/react/documentation/appearance/theme-studio). For more information, see the [themes documentation](https://ej2.syncfusion.com/react/documentation/appearance/theme).
 
This guide uses the `Tailwind 3` theme as an example, sourced from the theme package. In this package, each component includes an `index.css` file that automatically loads all the required dependency styles. To install the [Tailwind 3](https://www.npmjs.com/package/@syncfusion/ej2-tailwind3-theme) theme package, use the following command:
 
{% tabs %}
{% highlight bash tabtitle="npm" %}
 
npm install @syncfusion/ej2-tailwind3-theme
 
{% endhighlight %}
{% highlight bash tabtitle="yarn" %}
 
yarn add @syncfusion/ej2-tailwind3-theme
 
{% endhighlight %}
{% endtabs %}
 
By default, Vite projects include a `src/index.css` file with default styles. These default styles may conflict with Syncfusion component styles. Clear all content from the `src/index.css` file to prevent style conflicts.
 
The required styles for the Query Builder component are imported in the **src/App.css** file:
 
{% tabs %}
{% highlight css tabtitle="App.css" %}
 
@import "@syncfusion/ej2-tailwind3-theme/styles/query-builder/index.css";
 
{% endhighlight %}
{% endtabs %}
 
> You can also refer to the combined CSS file for all Syncfusion components in your application. For more information, see the documentation on [referring themes through npm packages](https://ej2.syncfusion.com/react/documentation/appearance/theme#refer-themes-through-npm-packages).

## Adding Query Builder component

Now, you can add the React Query Builder component to your **src/App.jsx** file by importing and defining it within your application. Then, populate the Query Builder with data using the [dataSource](https://ej2.syncfusion.com/react/documentation/api/query-builder/index-default#datasource) property, which accepts an array of string values to display as suggestions. Use the following code:

{% tabs %}
{% highlight js tabtitle="App.jsx" %}

import { ColumnsModel, QueryBuilderComponent } from '@syncfusion/ej2-react-querybuilder';
import * as React from 'react';
import './App.css';

function App() {
    let columnData: ColumnsModel[] = [
        { field: 'EmployeeID', label: 'EmployeeID', type: 'number'},
        { field: 'FirstName', label: 'FirstName', type: 'string' },
        { field: 'TitleOfCourtesy', label: 'Title Of Courtesy', type: 'boolean', values: ['Mr.', 'Mrs.'] },
        { field: 'Title', label: 'Title', type: 'string' },
        { field: 'HireDate', label: 'HireDate', type: 'date', format: 'dd/MM/yyyy' },
        { field: 'Country', label: 'Country', type: 'string' },
        { field: 'City', label: 'City', type: 'string' }
    ];

    return (
        <QueryBuilderComponent width='100%' columns={columnData}/>
    );
}
export default App;

{% endhighlight %}
{% endtabs %}

## Run the application

Run the `npm run dev` command in the terminal to start the development server. This command compiles your code and serves the application locally, opening it in the browser.

```bash
npm run dev
```

The output appears as follows.

The following example shows a basic Query Builder component.

{% tabs %}
{% highlight js tabtitle="app.jsx" %}
{% include code-snippet/query-builder/default-cs9/app/app.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="app.tsx" %}
{% include code-snippet/query-builder/default-cs9/app/app.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/query-builder/default-cs9" %}

> Refer to the [React Query Builder](https://www.syncfusion.com/react-components/react-query-builder) feature tour page for its groundbreaking feature representations. You can also explore our [React Query Builder component example](https://ej2.syncfusion.com/react/demos/#/tailwind3/query-builder/default) that shows how to render the Query Builder in React.