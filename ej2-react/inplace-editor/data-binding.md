---
layout: post
title: Data binding in React Inplace editor component | Syncfusion
description: Learn here all about Data binding in Syncfusion React Inplace editor component of Syncfusion Essential JS 2 and more.
control: Data binding 
platform: ej2-react
documentation: ug
domainurl: ##DomainURL##
---

# Data binding in React Inplace editor component

The Essential<sup style="font-size:70%">&reg;</sup> JS 2 React In-place Editor component supports data binding from local data sources or remote data services using the `dataSource` property. It accepts an array or `DataManager` instance and supports various data services such as OData, OData V4, and Web API with data formats including XML, JSON, and JSONP through `DataManager` adaptors.

## Local

Bind local data to the In-place Editor by assigning a JavaScript array of objects or strings to the `dataSource` property. You can also provide the local data source as a `DataManager` instance.

`[Class-component]`

{% tabs %}
{% highlight js tabtitle="app.jsx" %}
{% include code-snippet/in-place-editor/data-cs1/app/App.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="app.tsx" %}
{% include code-snippet/in-place-editor/data-cs1/app/App.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/in-place-editor/data-cs1" %}

`[Functional-component]`

{% tabs %}
{% highlight js tabtitle="app.jsx" %}
{% include code-snippet/in-place-editor/data-cs2/app/App.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="app.tsx" %}
{% include code-snippet/in-place-editor/data-cs2/app/App.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/in-place-editor/data-cs2" %}

## Remote

Bind remote data to the In-place Editor by assigning a `DataManager` instance to the `dataSource` property. Provide the endpoint URL to enable communication with the remote data source.

### OData V4

OData V4 is an improved version of the OData protocol. The [DataManager](../data/getting-started/) can retrieve and consume OData V4 services by configuring the adaptor property to [ODataV4Adaptor](../data/adaptors/#odatav4-adaptor).

In the following sample, the In-place Editor renders a `DropDownList` component with its `dataSource` property configured to fetch data from the server using `ODataV4Adaptor` and `DataManager`.

`[Class-component]`

{% tabs %}
{% highlight js tabtitle="app.jsx" %}
{% include code-snippet/in-place-editor/data-cs3/app/App.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="app.tsx" %}
{% include code-snippet/in-place-editor/data-cs3/app/App.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/in-place-editor/data-cs3" %}

`[Functional-component]`

{% tabs %}
{% highlight js tabtitle="app.jsx" %}
{% include code-snippet/in-place-editor/data-cs4/app/App.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="app.tsx" %}
{% include code-snippet/in-place-editor/data-cs4/app/App.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/in-place-editor/data-cs4" %}

### Web API

Fetch data from the server by using [DataManager](../data/getting-started/) with the adaptor property configured as [WebApiAdaptor](../data/adaptors/#web-api-adaptor).

In the following sample, the In-place Editor renders a `DropDownList` component with its `dataSource` property configured to fetch data from the server using `WebApiAdaptor` and `DataManager`.

`[Class-component]`

{% tabs %}
{% highlight js tabtitle="app.jsx" %}
{% include code-snippet/in-place-editor/data-cs5/app/App.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="app.tsx" %}
{% include code-snippet/in-place-editor/data-cs5/app/App.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/in-place-editor/data-cs5" %}

`[Functional-component]`

{% tabs %}
{% highlight js tabtitle="app.jsx" %}
{% include code-snippet/in-place-editor/data-cs6/app/App.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="app.tsx" %}
{% include code-snippet/in-place-editor/data-cs6/app/App.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/in-place-editor/data-cs6" %}