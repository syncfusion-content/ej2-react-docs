---
layout: post
title: React DataManager - Sending Additional Parameters to Server | Syncfusion
description: Pass additional custom parameters to the server with Syncfusion React DataManager using addParams method.
platform: ej2-react
control: Sending additional parameters to server in React DataManager 
documentation: ug
domainurl: ##DomainURL##
---

# Sending additional parameters to server with React DataManager

In React applications, when working with remote data sources, it's often necessary to pass additional parameters to the server to customize the data retrieval process. These parameters could include filters, sorting criteria, or any other information required for server-side processing. 

The Syncfusion<sup style="font-size:70%">&reg;</sup> [DataManager](https://ej2.syncfusion.com/documentation/api/data/dataManager) provides a convenient method for including custom parameters in data requests, allowing for enhanced server-side processing. By utilizing the [addParams](https://ej2.syncfusion.com/documentation/api/data/query/addparams) method of the [query](https://ej2.syncfusion.com/documentation/api/data/query) class, helps to seamlessly integrate additional information into the data requests.

In the following example, the top 15 records of the service are displayed in the table using the `addParams` method of `query` class.

{% tabs %}
{% highlight js tabtitle="app.jsx" %}
{% include code-snippet/data/get-started-cs12/app/App.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="app.tsx" %}
{% include code-snippet/data/get-started-cs12/app/App.tsx %}
{% endhighlight %}
{% highlight ts tabtitle="orders.tsx" %}
{% include code-snippet/data/get-started-cs12/app/orders.tsx %}
{% endhighlight %}
{% highlight js tabtitle="rowtemplate.jsx" %}
{% include code-snippet/data/get-started-cs12/app/rowTemplate.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="rowtemplate.tsx" %}
{% include code-snippet/data/get-started-cs12/app/rowTemplate.tsx %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/data/get-started-cs12" %}
