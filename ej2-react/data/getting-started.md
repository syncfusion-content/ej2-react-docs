---
layout: post
title: Getting started with React Data component | Syncfusion
description:  Checkout and learn about Getting started with React Data component of Syncfusion Essential JS 2 and more details.
control: Getting started 
platform: ej2-react
documentation: ug
domainurl: ##DomainURL##
---

# Getting started

The DataManager is a component that serves as a gateway to interact with local and remote data sources. It enables performing data operations such as filtering, sorting, paging, and binding to Syncfusion<sup style="font-size:70%">&reg;</sup> components with minimal configuration.

## Dependencies

Below is the list of minimum dependencies required to use the DataManager.

```javascript
|-- @syncfusion/ej2-data
    |-- @syncfusion/ej2-base
    |-- es6-promise (Required when window.Promise is not available)
```

> **@syncfusion/ej2-data** requires the presence of a Promise feature in global environment. In the browser, window.Promise must be available.

## Installation and configuration

Set up a React application using one of the following methods. The [create-react-app](https://github.com/facebook/create-react-app) tool is the recommended approach as it configures the development environment in JavaScript and optimizes the application for production. Refer to the [installation instructions](https://github.com/facebook/create-react-app#creating-an-app) of `create-react-app`.

```bash
npx create-react-app my-app
cd my-app
npm start
```

or

```bash
yarn create react-app my-app
cd my-app
yarn start
```

To set up a React application in a `TypeScript` environment, run the following command.

```bash
npx create-react-app my-app --template typescript
cd my-app
npm start
```

Alternatively, create a React application using the `npm init` command. To use `npm init`, ensure the `npm` version is `npm 6+` or higher.

```bash
npm init react-app my-app
cd my-app
npm start
```

Install Syncfusion<sup style="font-size:70%">&reg;</sup> packages using the following command.

```
npm install @syncfusion/ej2-data --save
```

## Connecting to data sources

The DataManager acts as a gateway for both local and remote data sources, using query operations to interact with the data.

### Binding to JSON data

Bind [DataManager](https://ej2.syncfusion.com/documentation/api/data/dataManager) to a local data source by assigning an array of JavaScript objects to the **json** property or passing them to the constructor during instantiation.

Add the CSS below to the **app/app.css** file to style the table, then import it in the **src/app.tsx** or **src/app.jsx** file.

```css
#datatable {
    border: solid 1px #e0e0e0;
    border-collapse: collapse;
    font-family: Roboto;
}

#datatable td,
#datatable th {
    border: solid #e0e0e0;
    border-width: 1px 0 0;
    display: table-cell;
    font-size: 14px;
    line-height: 20px;
    overflow: hidden;
    padding: 8px 21px;
    vertical-align: middle;
    white-space: nowrap;
    width: auto;
}

```

{% tabs %}
{% highlight js tabtitle="app.jsx" %}
{% include code-snippet/data/get-started-cs6/app/App.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="app.tsx" %}
{% include code-snippet/data/get-started-cs6/app/App.tsx %}
{% endhighlight %}
{% highlight js tabtitle="rowtemplate.jsx" %}
{% include code-snippet/data/get-started-cs6/app/rowTemplate.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="rowtemplate.tsx" %}
{% include code-snippet/data/get-started-cs6/app/rowTemplate.tsx %}
{% endhighlight %}
{% highlight js tabtitle="datasource.jsx" %}
{% include code-snippet/data/get-started-cs6/app/datasource.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="datasource.tsx" %}
{% include code-snippet/data/get-started-cs6/app/datasource.tsx %}
{% endhighlight %}
{% highlight css tabtitle="app.css" %}
{% include code-snippet/data/get-started-cs6/app/app.css %}
{% endhighlight %}
{% highlight ts tabtitle="orders.tsx" %}
{% include code-snippet/data/get-started-cs6/app/orders.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/data/get-started-cs6" %}

### Binding to ODataV4

Bind [DataManager](https://ej2.syncfusion.com/documentation/api/data/dataManager) to a remote data source by assigning a service endpoint URL to the **url** property. All DataManager operations will then address the specified service endpoint.

{% tabs %}
{% highlight js tabtitle="app.jsx" %}
{% include code-snippet/data/get-started-cs7/app/App.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="app.tsx" %}
{% include code-snippet/data/get-started-cs7/app/App.tsx %}
{% endhighlight %}
{% highlight js tabtitle="rowtemplate.jsx" %}
{% include code-snippet/data/get-started-cs7/app/rowTemplate.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="rowtemplate.tsx" %}
{% include code-snippet/data/get-started-cs7/app/rowTemplate.tsx %}
{% endhighlight %}
{% highlight js tabtitle="datasource.jsx" %}
{% include code-snippet/data/get-started-cs7/app/datasource.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="datasource.tsx" %}
{% include code-snippet/data/get-started-cs7/app/datasource.tsx %}
{% endhighlight %}
{% highlight css tabtitle="app.css" %}
{% include code-snippet/data/get-started-cs7/app/app.css %}
{% endhighlight %}
{% highlight ts tabtitle="orders.tsx" %}
{% include code-snippet/data/get-started-cs7/app/orders.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/data/get-started-cs7" %}

## Filter

Data filtering narrows the dataset based on specified filter criteria. Build filter expressions using the [where](https://ej2.syncfusion.com/documentation/api/data/query#where) method of the [Query](https://ej2.syncfusion.com/documentation/api/data/query) class.

{% tabs %}
{% highlight js tabtitle="app.jsx" %}
{% include code-snippet/data/get-started-cs8/app/App.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="app.tsx" %}
{% include code-snippet/data/get-started-cs8/app/App.tsx %}
{% endhighlight %}
{% highlight js tabtitle="rowtemplate.jsx" %}
{% include code-snippet/data/get-started-cs8/app/rowTemplate.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="rowtemplate.tsx" %}
{% include code-snippet/data/get-started-cs8/app/rowTemplate.tsx %}
{% endhighlight %}
{% highlight css tabtitle="app.css" %}
{% include code-snippet/data/get-started-cs8/app/app.css %}
{% endhighlight %}
{% highlight js tabtitle="datasource.jsx" %}
{% include code-snippet/data/get-started-cs8/app/datasource.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="datasource.tsx" %}
{% include code-snippet/data/get-started-cs8/app/datasource.tsx %}
{% endhighlight %}
{% highlight ts tabtitle="orders.tsx" %}
{% include code-snippet/data/get-started-cs8/app/orders.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/data/get-started-cs8" %}

## Sort

Order data in ascending or descending sequence using the [sortBy](https://ej2.syncfusion.com/documentation/api/data/query#sortby) method of the [Query](https://ej2.syncfusion.com/documentation/api/data/query) class.

{% tabs %}
{% highlight js tabtitle="app.jsx" %}
{% include code-snippet/data/get-started-cs9/app/App.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="app.tsx" %}
{% include code-snippet/data/get-started-cs9/app/App.tsx %}
{% endhighlight %}
{% highlight js tabtitle="rowtemplate.jsx" %}
{% include code-snippet/data/get-started-cs9/app/rowTemplate.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="rowtemplate.tsx" %}
{% include code-snippet/data/get-started-cs9/app/rowTemplate.tsx %}
{% endhighlight %}
{% highlight css tabtitle="app.css" %}
{% include code-snippet/data/get-started-cs9/app/app.css %}
{% endhighlight %}
{% highlight js tabtitle="datasource.jsx" %}
{% include code-snippet/data/get-started-cs9/app/datasource.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="datasource.tsx" %}
{% include code-snippet/data/get-started-cs9/app/datasource.tsx %}
{% endhighlight %}
{% highlight ts tabtitle="orders.tsx" %}
{% include code-snippet/data/get-started-cs9/app/orders.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/data/get-started-cs9" %}

## Page

Retrieve a subset of data based on the page number and total page size using the [page](https://ej2.syncfusion.com/documentation/api/data/query#page) method of the [Query](https://ej2.syncfusion.com/documentation/api/data/query) class.

{% tabs %}
{% highlight js tabtitle="app.jsx" %}
{% include code-snippet/data/get-started-cs10/app/App.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="app.tsx" %}
{% include code-snippet/data/get-started-cs10/app/App.tsx %}
{% endhighlight %}
{% highlight js tabtitle="rowtemplate.jsx" %}
{% include code-snippet/data/get-started-cs10/app/rowTemplate.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="rowtemplate.tsx" %}
{% include code-snippet/data/get-started-cs10/app/rowTemplate.tsx %}
{% endhighlight %}
{% highlight css tabtitle="app.css" %}
{% include code-snippet/data/get-started-cs10/app/app.css %}
{% endhighlight %}
{% highlight js tabtitle="datasource.jsx" %}
{% include code-snippet/data/get-started-cs10/app/datasource.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="datasource.tsx" %}
{% include code-snippet/data/get-started-cs10/app/datasource.tsx %}
{% endhighlight %}
{% highlight ts tabtitle="orders.tsx" %}
{% include code-snippet/data/get-started-cs10/app/orders.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/data/get-started-cs10" %}

## Component binding

The DataManager component integrates with Syncfusion<sup style="font-size:70%">&reg;</sup> components that support data binding.

The following samples demonstrate binding the DataManager with the Grid component. To render the Grid with the required configurations, refer to the [React Grid getting started](https://ej2.syncfusion.com/react/documentation/grid/getting-started) documentation.

### Local data binding

Create a local data source inline with other Syncfusion<sup style="font-size:70%">&reg;</sup> component configuration settings.

{% tabs %}
{% highlight js tabtitle="app.jsx" %}
{% include code-snippet/data/component-binding-cs1/app/App.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="app.tsx" %}
{% include code-snippet/data/component-binding-cs1/app/App.tsx %}
{% endhighlight %}
{% highlight js tabtitle="datasource.jsx" %}
{% include code-snippet/data/component-binding-cs1/app/datasource.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="datasource.tsx" %}
{% include code-snippet/data/component-binding-cs1/app/datasource.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/data/component-binding-cs1" %}

### Remote data binding

Bind remote data to Syncfusion<sup style="font-size:70%">&reg;</sup> components by assigning a service data source as a [DataManager](https://ej2.syncfusion.com/documentation/api/data/dataManager) instance to the **dataSource** property.

{% tabs %}
{% highlight js tabtitle="app.jsx" %}
{% include code-snippet/data/component-binding-cs2/app/App.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="app.tsx" %}
{% include code-snippet/data/component-binding-cs2/app/App.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/data/component-binding-cs2" %}
