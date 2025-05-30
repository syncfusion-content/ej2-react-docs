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

## Dependencies

Below is the list of minimum dependencies required to use the DataManager.

```javascript
|-- @syncfusion/ej2-data
    |-- @syncfusion/ej2-base
    |-- es6-promise (Required when window.Promise is not available)
```

> **@syncfusion/ej2-data** requires the presence of a Promise feature in global environment. In the browser, window.Promise must be available.

## Installation and configuration

To set-up a React application, choose any of the following ways. The best and easiest way is to use the [create-react-app](https://github.com/facebook/create-react-app). It sets up your development environment in JavaScript and improvise your application for production. Refer to the [installation instructions](https://github.com/facebook/create-react-app#creating-an-app) of `create-react-app`.

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

To set-up a React application in `TypeScript` environment, run the following command.

```bash
npx create-react-app my-app --template typescript
cd my-app
npm start
```

Besides using the [npx](https://medium.com/@maybekatz/introducing-npx-an-npm-package-runner-55f7d4bd282b) package runner tool, also create an application from the `npm init`. To begin with the `npm init`, upgrade the `npm` version to `npm 6+`.

```bash
npm init react-app my-app
cd my-app
npm start
```

Install Syncfusion<sup style="font-size:70%">&reg;</sup> packages using below command.

```
npm install @syncfusion/ej2-data --save
```

## Connection to a data source

The DataManager can act as gateway for both local and remote data source which will uses the query to interact with the data source.

### Binding to JSON data

[DataManager](https://ej2.syncfusion.com/documentation/api/data/dataManager/) can be bound to local data source by assigning the array of JavaScript objects to the **json** property or simply passing them to the constructor while instantiating.

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
{% highlight js tabtitle="orders.jsx" %}
{% include code-snippet/data/get-started-cs6/app/orders.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="orders.tsx" %}
{% include code-snippet/data/get-started-cs6/app/orders.tsx %}
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
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/data/get-started-cs6" %}

### Binding to ODataV4

[DataManager](https://ej2.syncfusion.com/documentation/api/data/dataManager/)  can be bound to remote data source by assigning service end point URL to the **url** property. Now all `DataManager` operations will address the provided service end point.

{% tabs %}
{% highlight js tabtitle="app.jsx" %}
{% include code-snippet/data/get-started-cs7/app/App.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="app.tsx" %}
{% include code-snippet/data/get-started-cs7/app/App.tsx %}
{% endhighlight %}
{% highlight js tabtitle="orders.jsx" %}
{% include code-snippet/data/get-started-cs7/app/orders.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="orders.tsx" %}
{% include code-snippet/data/get-started-cs7/app/orders.tsx %}
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
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/data/get-started-cs7" %}

## Filter

The data filtering is a trivial operation which will let us to get reduced view of data based on filter criteria. The filter expression can be built easily using [where](https://ej2.syncfusion.com/documentation/api/data/query/#where) method of [Query](https://ej2.syncfusion.com/documentation/api/data/query/) class.

{% tabs %}
{% highlight js tabtitle="app.jsx" %}
{% include code-snippet/data/get-started-cs8/app/App.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="app.tsx" %}
{% include code-snippet/data/get-started-cs8/app/App.tsx %}
{% endhighlight %}
{% highlight js tabtitle="orders.jsx" %}
{% include code-snippet/data/get-started-cs8/app/orders.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="orders.tsx" %}
{% include code-snippet/data/get-started-cs8/app/orders.tsx %}
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
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/data/get-started-cs8" %}

## Sort

The data can be ordered either in ascending or descending using [sortBy](https://ej2.syncfusion.com/documentation/api/data/query/#sortby) method of [Query](https://ej2.syncfusion.com/documentation/api/data/query/) class.

{% tabs %}
{% highlight js tabtitle="app.jsx" %}
{% include code-snippet/data/get-started-cs9/app/App.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="app.tsx" %}
{% include code-snippet/data/get-started-cs9/app/App.tsx %}
{% endhighlight %}
{% highlight js tabtitle="orders.jsx" %}
{% include code-snippet/data/get-started-cs9/app/orders.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="orders.tsx" %}
{% include code-snippet/data/get-started-cs9/app/orders.tsx %}
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
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/data/get-started-cs9" %}

## Page

The [page](https://ej2.syncfusion.com/documentation/api/data/query/#page) method of the Query class is used to get range of data based on the page number and the total page size.

{% tabs %}
{% highlight js tabtitle="app.jsx" %}
{% include code-snippet/data/get-started-cs10/app/App.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="app.tsx" %}
{% include code-snippet/data/get-started-cs10/app/App.tsx %}
{% endhighlight %}
{% highlight js tabtitle="orders.jsx" %}
{% include code-snippet/data/get-started-cs10/app/orders.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="orders.tsx" %}
{% include code-snippet/data/get-started-cs10/app/orders.tsx %}
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
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/data/get-started-cs10" %}

## Component binding

DataManager component can be used with Syncfusion<sup style="font-size:70%">&reg;</sup> components which supports data binding.

In the following samples, the grid component is bound. To render the grid with the necessary configurations, please refer to the [React Grid getting started](https://ej2.syncfusion.com/react/documentation/grid/getting-started) documentation.

### Local data binding

A data source can be created in-line with other Syncfusion<sup style="font-size:70%">&reg;</sup> component configuration settings.

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

To bind remote data to Syncfusion<sup style="font-size:70%">&reg;</sup> component, you can assign a service data as an instance of [DataManager](https://ej2.syncfusion.com/documentation/api/data/dataManager/) to the **dataSource** property.

{% tabs %}
{% highlight js tabtitle="app.jsx" %}
{% include code-snippet/data/component-binding-cs2/app/App.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="app.tsx" %}
{% include code-snippet/data/component-binding-cs2/app/App.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/data/component-binding-cs2" %}
