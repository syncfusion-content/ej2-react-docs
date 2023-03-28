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

You can use [`create-react-app`](https://github.com/facebookincubator/create-react-app) to setup the applications. To install **create-react-app** run the following command.

  ```
   npm install -g create-react-app
  ```

* To setup basic **React** sample use following commands.

   ```
     create-react-app quickstart --scripts-version=react-scripts-ts
     cd quickstart
     npm install
   ```

* Install Syncfusion packages using below command.

   ```
    npm install @syncfusion/ej2-data --save
   ```

## Connection to a data source

The DataManager can act as gateway for both local and remote data source which will uses the query to interact with the data source.

### Binding to JSON data

[`DataManager`](https://ej2.syncfusion.com/documentation/api/data/dataManager/) can be bound to local data source by assigning the array of JavaScript objects to the **json** property or simply passing them to the constructor while instantiating.

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
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/data/get-started-cs6" %}

### Binding to OData

[`DataManager`](https://ej2.syncfusion.com/documentation/api/data/dataManager/)  can be bound to remote data source by assigning service end point URL to the **url** property. Now all [`DataManager`](https://ej2.syncfusion.com/documentation/api/data/dataManager/)  operations will address the provided service end point.

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
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/data/get-started-cs7" %}

## Filter

The data filtering is a trivial operation which will let us to get reduced view of data based on filter criteria. The filter expression can be built easily using [`where`](https://ej2.syncfusion.com/documentation/api/data/query/#where) method of [`Query`](https://ej2.syncfusion.com/documentation/api/data/query/) class.

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
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/data/get-started-cs8" %}

## Sort

The data can be ordered either in ascending or descending using [`sortBy`](https://ej2.syncfusion.com/documentation/api/data/query/#sortby) method of [`Query`](https://ej2.syncfusion.com/documentation/api/data/query/) class.

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
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/data/get-started-cs9" %}

## Page

The [`page`](https://ej2.syncfusion.com/documentation/api/data/query/#page) method of the Query class is used to get range of data based on the page number and the total page size.

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
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/data/get-started-cs10" %}

## Component binding

DataManager component can be used with Syncfusion components which supports data binding.

### Local data binding

A DataSource can be created in-line with other Syncfusion component configuration settings.

{% tabs %}
{% highlight js tabtitle="app.jsx" %}
{% include code-snippet/data/component-binding-cs1/app/App.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="app.tsx" %}
{% include code-snippet/data/component-binding-cs1/app/App.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/data/component-binding-cs1" %}

### Remote data binding

To bind remote data to Syncfusion component, you can assign a service data as an instance of [`DataManager`](https://ej2.syncfusion.com/documentation/api/data/dataManager/) to the **dataSource** property.

{% tabs %}
{% highlight js tabtitle="app.jsx" %}
{% include code-snippet/data/component-binding-cs2/app/App.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="app.tsx" %}
{% include code-snippet/data/component-binding-cs2/app/App.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/data/component-binding-cs2" %}
