---
layout: post
title: React Grid - Getting Started | Syncfusion
description: React Grid getting started covers installation, basic setup, and examples to render data, configure columns, and enable common features in new projects.
control: Getting started 
platform: ej2-react
documentation: ug
domainurl: ##DomainURL##
---

# Getting Started with React Grid

This section explains the steps required to create a simple React Grid component and demonstrate its basic usage in a React environment.

> **Ready to streamline your Syncfusion<sup style="font-size:70%">&reg;</sup> React development?** Discover the full potential of Syncfusion<sup style="font-size:70%">&reg;</sup> React components with Syncfusion<sup style="font-size:70%">&reg;</sup> AI Coding Assistant. Effortlessly integrate, configure, and enhance your projects with intelligent, context-aware code suggestions, streamlined setups, and real-time insights—all seamlessly integrated into your preferred AI-powered IDEs like VS Code, Cursor, Syncfusion<sup style="font-size:70%">&reg;</sup> CodeStudio and more. [Explore Syncfusion<sup style="font-size:70%">&reg;</sup> AI Coding Assistant](https://ej2.syncfusion.com/react/documentation/ai-coding-assistant/overview).

To get started quickly with React Grid, you can watch this video:

{% youtube "https://www.youtube.com/watch?v=QNwcXokKc70" %}

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

## Adding Syncfusion<sup style="font-size:70%">&reg;</sup> React Grid packages

All the available Essential<sup style="font-size:70%">&reg;</sup> JS 2 packages are published in the [`npmjs.com`](https://www.npmjs.com/~syncfusionorg) public registry.
To install the Grid component, use the following command

```bash
npm install @syncfusion/ej2-react-grids --save
```

> The --save will instruct NPM to include the Grid package inside of the **dependencies** section of the package.json.

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

> To refer **App.css** in the application then import it in the **src/App.tsx** file.

## Adding Grid component

The React Grid component can be added to the application by following these steps. To get started, add the Grid component to the **src/App.tsx** file using the following code.

The following grid code should be placed in the **src/App.tsx** file.

```ts
import { ColumnDirective, ColumnsDirective, GridComponent } from '@syncfusion/ej2-react-grids';
import * as React from 'react';
import { data } from './datasource';
import './App.css';

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

Create a [src/app/datasource.ts] file and use the following dataset to provide JSON data for the grid component.

```typescript
export let data: Object[] = [
    {
        OrderID: 10248, CustomerID: 'VINET', EmployeeID: 5, OrderDate: new Date(8364186e5),
        ShipName: 'Vins et alcools Chevalier', ShipCity: 'Reims', ShipAddress: '59 rue de l Abbaye',
        ShipRegion: 'CJ', ShipPostalCode: '51100', ShipCountry: 'France', Freight: 32.38, Verified: !0
    },
    {
        OrderID: 10249, CustomerID: 'TOMSP', EmployeeID: 6, OrderDate: new Date(836505e6),
        ShipName: 'Toms Spezialitäten', ShipCity: 'Münster', ShipAddress: 'Luisenstr. 48',
        ShipRegion: 'CJ', ShipPostalCode: '44087', ShipCountry: 'Germany', Freight: 11.61, Verified: !1
    },
    {
        OrderID: 10250, CustomerID: 'HANAR', EmployeeID: 4, OrderDate: new Date(8367642e5),
        ShipName: 'Hanari Carnes', ShipCity: 'Rio de Janeiro', ShipAddress: 'Rua do Paço, 67',
        ShipRegion: 'RJ', ShipPostalCode: '05454-876', ShipCountry: 'Brazil', Freight: 65.83, Verified: !0
    },
    {
        OrderID: 10251, CustomerID: 'VICTE', EmployeeID: 3, OrderDate: new Date(8367642e5),
        ShipName: 'Victuailles en stock', ShipCity: 'Lyon', ShipAddress: '2, rue du Commerce',
        ShipRegion: 'CJ', ShipPostalCode: '69004', ShipCountry: 'France', Freight: 41.34, Verified: !0
    },
    {
        OrderID: 10252, CustomerID: 'SUPRD', EmployeeID: 4, OrderDate: new Date(8368506e5),
        ShipName: 'Suprêmes délices', ShipCity: 'Charleroi', ShipAddress: 'Boulevard Tirou, 255',
        ShipRegion: 'CJ', ShipPostalCode: 'B-6000', ShipCountry: 'Belgium', Freight: 51.3, Verified: !0
    },
    {
        OrderID: 10253, CustomerID: 'HANAR', EmployeeID: 3, OrderDate: new Date(836937e6),
        ShipName: 'Hanari Carnes', ShipCity: 'Rio de Janeiro', ShipAddress: 'Rua do Paço, 67',
        ShipRegion: 'RJ', ShipPostalCode: '05454-876', ShipCountry: 'Brazil', Freight: 58.17, Verified: !0
    },
    {
        OrderID: 10254, CustomerID: 'CHOPS', EmployeeID: 5, OrderDate: new Date(8370234e5),
        ShipName: 'Chop-suey Chinese', ShipCity: 'Bern', ShipAddress: 'Hauptstr. 31',
        ShipRegion: 'CJ', ShipPostalCode: '3012', ShipCountry: 'Switzerland', Freight: 22.98, Verified: !1
    },
    {
        OrderID: 10255, CustomerID: 'RICSU', EmployeeID: 9, OrderDate: new Date(8371098e5),
        ShipName: 'Richter Supermarkt', ShipCity: 'Genève', ShipAddress: 'Starenweg 5',
        ShipRegion: 'CJ', ShipPostalCode: '1204', ShipCountry: 'Switzerland', Freight: 148.33, Verified: !0
    }];
```

## Module injection

React Grid component features are segregated into individual feature-wise modules.
In order to use a particular feature, you need to inject its feature service in the **App**.
The paging, sorting, filtering, and grouping features of the Grid are used in the current application.
The relevant feature service names and descriptions are listed below.

* **Page** - Inject this service to use paging feature.
* **Sort** - Inject this service to use sorting feature.
* **Filter** - Inject this service to use filtering feature.
* **Group** - Inject this service to use grouping feature.

These modules should be injected into the grid using the **Inject** directive.

> Additional feature modules are available [here](./module).

## Enable paging

The paging feature divides Grid records into multiple pages, improving performance and usability when handling large datasets. Enable paging by setting the [allowPaging](https://ej2.syncfusion.com/react/documentation/api/grid#allowpaging) property to `true` and injecting the **Page** module. Without the **Page** module, the pager will not render. Customize pager behavior using the [pageSettings](https://ej2.syncfusion.com/react/documentation/api/grid#pagesettings) property.

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

## Enable sorting

The sorting feature allows ordering Grid records by clicking column headers. Enable sorting by setting the [allowSorting](https://ej2.syncfusion.com/react/documentation/api/grid#allowsorting) property to `true` and injecting the **Sort** module. Without the **Sort** module, clicking headers will not sort the data. Customize sorting behavior using the [sortSettings](https://ej2.syncfusion.com/react/documentation/api/grid#sortsettings) property.

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

## Enable filtering

The filtering feature enables searching and refining Grid records based on column values. Enable filtering by setting the [allowFiltering](https://ej2.syncfusion.com/react/documentation/api/grid#allowfiltering) property to `true` and injecting the [Filter](https://ej2.syncfusion.com/react/documentation/api/grid#filtermodule) module. Without the **Filter** module, the filter bar will not render. Customize filtering options using the [filterSettings](https://ej2.syncfusion.com/react/documentation/api/grid#filtersettings) property.

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

## Enable grouping

The grouping feature organizes Grid records into logical groups based on column values, improving data visualization and analysis. Enable grouping by setting the [allowGrouping](https://ej2.syncfusion.com/react/documentation/api/grid#allowgrouping) property to `true` and injecting the [Group](https://ej2.syncfusion.com/react/documentation/api/grid#groupmodule) module. Without the **Group** module, the group drop area will not render. Customize grouping behavior using the [groupSettings](https://ej2.syncfusion.com/react/documentation/api/grid#groupsettings) property.

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

Run the `npm run dev` command in the terminal to start the development server. This command compiles your code and serves the application locally, opening it in the browser.

```bash
npm run dev
```

The output appears as follows.

{% tabs %}
{% highlight js tabtitle="App.jsx" %}
{% include code-snippet/grid/getting-started-cs5/app/App.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="App.tsx" %}
{% include code-snippet/grid/getting-started-cs5/app/App.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/grid/getting-started-cs5" %}

> Refer to the [React Grid](https://www.syncfusion.com/react-components/react-data-grid) feature tour page for its groundbreaking feature representations. You can also explore our [React Grid Component example](https://ej2.syncfusion.com/react/demos/#/tailwind3/grid/overview) that shows how to render the Grid in React.

## See also

* [Top 5 Features of React Data Grid](https://www.syncfusion.com/blogs/post/top-5-features-react-data-grid.aspx)
* [How to render React Grid with bootstrap theme](https://support.syncfusion.com/kb/article/10054/how-to-render-react-grid-with-bootstrap-theme)
* [Getting Started with Next.js](./nextjs-getting-started.md)
* [Getting Started with SharePoint](./sharepoint.md)
* [Getting Started with Preact](./preact.md)