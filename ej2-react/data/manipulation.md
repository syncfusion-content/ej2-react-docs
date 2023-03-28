---
layout: post
title: Manipulation in React Data component | Syncfusion
description: Learn here all about Manipulation in Syncfusion React Data component of Syncfusion Essential JS 2 and more.
control: Manipulation 
platform: ej2-react
documentation: ug
domainurl: ##DomainURL##
---

# Manipulation in React Data component

In this section, you will see in detail about how to manipulate data using [`DataManager`](https://ej2.syncfusion.com/documentation/api/data/dataManager/). The [`DataManager`](https://ej2.syncfusion.com/documentation/api/data/dataManager/) can create, update and delete records either in local data source or remote data source.

Each data sources uses different way in handling the CRUD operations and hence [`DataManager`](https://ej2.syncfusion.com/documentation/api/data/dataManager/) uses data adaptors to manipulate data that can be understood by a particular data source.

## Insert

The [`insert`](https://ej2.syncfusion.com/documentation/api/data/dataManager/#insert) method of [`DataManager`](https://ej2.syncfusion.com/documentation/api/data/dataManager/) is used to add new record to the data source. For remote data source, the new record will be send along with the request to the server.

{% tabs %}
{% highlight js tabtitle="app.jsx" %}
{% include code-snippet/data/get-started-cs13/app/App.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="app.tsx" %}
{% include code-snippet/data/get-started-cs13/app/App.tsx %}
{% endhighlight %}
{% highlight js tabtitle="rowtemplate.jsx" %}
{% include code-snippet/data/get-started-cs13/app/rowTemplate.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="rowtemplate.tsx" %}
{% include code-snippet/data/get-started-cs13/app/rowTemplate.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/data/get-started-cs13" %}

> In remote data sources, when the primary key field is an identity field, then it is advised to return the created data in the response.

## Update

The [`update`](https://ej2.syncfusion.com/documentation/api/data/dataManager/#update) method of [`DataManager`](https://ej2.syncfusion.com/documentation/api/data/dataManager) is used to modify/update a record in the data source. For remote data source, the modified record will be send along with the request to the server.

{% tabs %}
{% highlight js tabtitle="app.jsx" %}
{% include code-snippet/data/get-started-cs14/app/App.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="app.tsx" %}
{% include code-snippet/data/get-started-cs14/app/App.tsx %}
{% endhighlight %}
{% highlight js tabtitle="rowtemplate.jsx" %}
{% include code-snippet/data/get-started-cs14/app/rowTemplate.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="rowtemplate.tsx" %}
{% include code-snippet/data/get-started-cs14/app/rowTemplate.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/data/get-started-cs14" %}

> Primary key name is required by the `update` method to find the record to be updated.

## Remove

The [`remove`](https://ej2.syncfusion.com/documentation/api/data/dataManager/#remove) method of [`DataManager`](https://ej2.syncfusion.com/documentation/api/data/dataManager) is used to remove a record from the data source. For remote data source, the record details such as primary key and data will be send along with the request to the server.

{% tabs %}
{% highlight js tabtitle="app.jsx" %}
{% include code-snippet/data/get-started-cs15/app/App.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="app.tsx" %}
{% include code-snippet/data/get-started-cs15/app/App.tsx %}
{% endhighlight %}
{% highlight js tabtitle="rowtemplate.jsx" %}
{% include code-snippet/data/get-started-cs15/app/rowTemplate.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="rowtemplate.tsx" %}
{% include code-snippet/data/get-started-cs15/app/rowTemplate.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/data/get-started-cs15" %}

> Primary key name and its value are required to find the record to be removed.

## Batch Edit Operation

[`DataManager`](https://ej2.syncfusion.com/documentation/api/data/dataManager) supports batch processing for the CRUD operations. You can use the [`saveChanges`](https://ej2.syncfusion.com/documentation/api/data/dataManager/#savechanges) method to batch the edit operation. For remote data source, requests to add, remove and change are handled altogether at a time rather than passing the request separately for each operation.

{% tabs %}
{% highlight js tabtitle="app.jsx" %}
{% include code-snippet/data/get-started-cs16/app/App.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="app.tsx" %}
{% include code-snippet/data/get-started-cs16/app/App.tsx %}
{% endhighlight %}
{% highlight js tabtitle="rowtemplate.jsx" %}
{% include code-snippet/data/get-started-cs16/app/rowTemplate.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="rowtemplate.tsx" %}
{% include code-snippet/data/get-started-cs16/app/rowTemplate.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/data/get-started-cs16" %}
