---
layout: post
title: Getting started with React Grid component | Syncfusion
description:  Checkout and learn about Getting started with React Grid component of Syncfusion Essential JS 2 and more details.
control: Getting started 
platform: ej2-react
documentation: ug
domainurl: ##DomainURL##
---

# Getting started

This section explains you the steps required to create a simple Grid and demonstrate the basic usage of the Grid component in React environment.

> **Ready to streamline your Syncfusion<sup style="font-size:70%">&reg;</sup> React development?** Discover the full potential of Syncfusion<sup style="font-size:70%">&reg;</sup> React components with Syncfusion<sup style="font-size:70%">&reg;</sup> AI Coding Assistant. Effortlessly integrate, configure, and enhance your projects with intelligent, context-aware code suggestions, streamlined setups, and real-time insights—all seamlessly integrated into your preferred AI-powered IDEs like VS Code, Cursor, Syncfusion<sup style="font-size:70%">&reg;</sup> CodeStudio and more. [Explore Syncfusion<sup style="font-size:70%">&reg;</sup> AI Coding Assistant](https://ej2.syncfusion.com/react/documentation/ai-coding-assistants/overview)

To get start quickly with React Grid, you can check on this video:

{% youtube "https://www.youtube.com/watch?v=QNwcXokKc70" %}

## Setup for Local Development

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

## Adding Syncfusion<sup style="font-size:70%">&reg;</sup> Grid packages

All the available Essential<sup style="font-size:70%">&reg;</sup> JS 2 packages are published in [`npmjs.com`](https://www.npmjs.com/~syncfusionorg) public registry.
To install Grid component, use the following command

```bash
npm install @syncfusion/ej2-react-grids --save
```

> The --save will instruct NPM to include the Grid package inside of the **dependencies** section of the package.json.

## Adding CSS reference

The following CSS files are available in **../node_modules/@syncfusion** package folder. This can be added as reference in **src/App.css**.

```css
@import '../node_modules/@syncfusion/ej2-base/styles/material.css';  
@import '../node_modules/@syncfusion/ej2-buttons/styles/material.css';  
@import '../node_modules/@syncfusion/ej2-calendars/styles/material.css';  
@import '../node_modules/@syncfusion/ej2-dropdowns/styles/material.css';  
@import '../node_modules/@syncfusion/ej2-inputs/styles/material.css';  
@import '../node_modules/@syncfusion/ej2-navigations/styles/material.css';
@import '../node_modules/@syncfusion/ej2-popups/styles/material.css';
@import '../node_modules/@syncfusion/ej2-splitbuttons/styles/material.css';
@import '../node_modules/@syncfusion/ej2-notifications/styles/material.css';
@import "../node_modules/@syncfusion/ej2-react-grids/styles/material.css";
```

> To refer **App.css** in the application then import it in the **src/App.tsx** file.

## Adding Grid component

Now, you can start adding React Grid component in the application. For getting started, add the Grid component in **src/App.tsx** file using following code.

Place the following grid code in the **src/App.tsx**.

```ts
import { ColumnDirective, ColumnsDirective, GridComponent } from '@syncfusion/ej2-react-grids';
import * as React from 'react';
import { data } from './datasource';

function App() {
    return <GridComponent dataSource={data}>
        <ColumnsDirective>
            <ColumnDirective field='OrderID' width='100' textAlign="Right"/>
            <ColumnDirective field='CustomerID' width='100'/>
            <ColumnDirective field='EmployeeID' width='100' textAlign="Right"/>
            <ColumnDirective field='Freight' width='100' format="C2" textAlign="Right"/>
            <ColumnDirective field='ShipCountry' width='100'/>
        </ColumnsDirective>
    </GridComponent>
};
export default App;
```

## Module Injection

React Grid component features are segregated into individual feature-wise modules.
In order to use a particular feature, you need to inject its feature service in the **App**.
In the current application, we are going to use paging, sorting, filtering and grouping feature of Grid.
Please find relevant feature service name and description as follows.

* **Page** - Inject this service to use paging feature.
* **Sort** - Inject this service to use sorting feature.
* **Filter** - Inject this service to use filtering feature.
* **Group** - Inject this service to use grouping feature.

These modules should be injected into the grid using the **Inject** directive.

> Additional feature modules are available [here](./module).

## Enable Paging

The paging feature enables users to view the Grid record in a paged view.
It can be enabled by setting [allowPaging](https://ej2.syncfusion.com/react/documentation/api/grid/#allowpaging) property to true.
Inject the **Page** module in **Inject.services** as follows.
If the **Page** service is not injected, the pager will not be rendered in the grid.
Pager can be customized using [pageSettings](https://ej2.syncfusion.com/react/documentation/api/grid/#pagesettings) property.

{% tabs %}
{% highlight js tabtitle="App.jsx" %}
{% include code-snippet/grid/getting-started-cs1/app/App.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="App.tsx" %}
{% include code-snippet/grid/getting-started-cs1/app/App.tsx %}
{% endhighlight %}
{% highlight js tabtitle="datasource.jsx" %}
{% include code-snippet/grid/getting-started-cs1/app/datasource.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="datasource.tsx" %}
{% include code-snippet/grid/getting-started-cs1/app/datasource.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/grid/getting-started-cs1" %}

## Enable Sorting

The sorting feature enables you to order the records.
It can be enabled by setting the [allowSorting](https://ej2.syncfusion.com/react/documentation/api/grid/#allowsorting) property as true.
Inject the **Sort** module in the **Inject.services** as follows.
If the **Sort** module is not injected, you cannot sort when a header is clicked.
Sorting feature can be customized using [sortSettings](https://ej2.syncfusion.com/react/documentation/api/grid/#sortsettings) property.

{% tabs %}
{% highlight js tabtitle="App.jsx" %}
{% include code-snippet/grid/getting-started-cs2/app/App.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="App.tsx" %}
{% include code-snippet/grid/getting-started-cs2/app/App.tsx %}
{% endhighlight %}
{% highlight js tabtitle="datasource.jsx" %}
{% include code-snippet/grid/getting-started-cs2/app/datasource.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="datasource.tsx" %}
{% include code-snippet/grid/getting-started-cs2/app/datasource.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/grid/getting-started-cs2" %}

## Enable Filtering

It can be enabled by setting the [allowFiltering](https://ej2.syncfusion.com/react/documentation/api/grid/#allowfiltering) property as true.
Inject the [Filter](https://ej2.syncfusion.com/react/documentation/api/grid/#filtermodule) module in the **Inject.services** as follows.
If [Filter`](https://ej2.syncfusion.com/react/documentation/api/grid/#filtermodule) module is not injected, filter bar will not be rendered in Grid.
Filtering feature can be customized using [filterSettings](https://ej2.syncfusion.com/react/documentation/api/grid/#filtersettings) property.

{% tabs %}
{% highlight js tabtitle="App.jsx" %}
{% include code-snippet/grid/getting-started-cs3/app/App.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="App.tsx" %}
{% include code-snippet/grid/getting-started-cs3/app/App.tsx %}
{% endhighlight %}
{% highlight js tabtitle="datasource.jsx" %}
{% include code-snippet/grid/getting-started-cs3/app/datasource.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="datasource.tsx" %}
{% include code-snippet/grid/getting-started-cs3/app/datasource.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/grid/getting-started-cs3" %}

## Enable Grouping

The grouping feature enables you to view the grid record in a grouped view.
It can be enabled by setting [allowGrouping](https://ej2.syncfusion.com/react/documentation/api/grid/#allowgrouping) property to true.
The [Group](https://ej2.syncfusion.com/react/documentation/api/grid/#groupmodule) module has to be injected as follows.
If [Group](https://ej2.syncfusion.com/react/documentation/api/grid/#groupmodule) module is not injected, the group drop area will not be rendered in Grid.
Grouping feature can be customized using [groupSettings](https://ej2.syncfusion.com/react/documentation/api/grid/#groupsettings) property.

{% tabs %}
{% highlight js tabtitle="App.jsx" %}
{% include code-snippet/grid/getting-started-cs4/app/App.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="App.tsx" %}
{% include code-snippet/grid/getting-started-cs4/app/App.tsx %}
{% endhighlight %}
{% highlight js tabtitle="datasource.jsx" %}
{% include code-snippet/grid/getting-started-cs4/app/datasource.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="datasource.tsx" %}
{% include code-snippet/grid/getting-started-cs4/app/datasource.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/grid/getting-started-cs4" %}

## Run the application

Now run the `npm run dev` command in the console to start the development server. This command compiles your code and serves the application locally, opening it in the browser.

```bash
npm run dev
```

Output will be appears as follows.

{% tabs %}
{% highlight js tabtitle="App.jsx" %}
{% include code-snippet/grid/getting-started-cs5/app/App.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="App.tsx" %}
{% include code-snippet/grid/getting-started-cs5/app/App.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/grid/getting-started-cs5" %}

> You can refer to our [React Grid](https://www.syncfusion.com/react-components/react-data-grid) feature tour page for its groundbreaking feature representations. You can also explore our [React Grid Component example](https://ej2.syncfusion.com/react/demos/#/bootstrap5/grid/overview) that shows how to render the Grid in React.

## See also

* [Top 5 Features of React Data Grid](https://www.syncfusion.com/blogs/post/top-5-features-react-data-grid)
* [How to render React Grid with bootstrap theme](https://support.syncfusion.com/kb/article/10054/how-to-render-react-grid-with-bootstrap-theme)