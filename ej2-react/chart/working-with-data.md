---
layout: post
title: Working with data in React Chart component | Syncfusion
description: Learn here all about Working with data in Syncfusion React Chart component of Syncfusion Essential JS 2 and more.
control: Working with data 
platform: ej2-react
documentation: ug
domainurl: ##DomainURL##
---

<!-- markdownlint-disable MD036 -->

# Working with data in React Chart component

Chart can visualize data bound from local or remote data.

## Local data

You can bind a simple JSON data to the chart using [`dataSource`](https://ej2.syncfusion.com/react/documentation/api/chart/seriesModel/#datasource)property in series. Now map the fields in JSON to [`xName`](https://ej2.syncfusion.com/react/documentation/api/chart/seriesModel/#xname) and [`yName`](https://ej2.syncfusion.com/react/documentation/api/chart/seriesModel/#yname) properties.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/chart/series/column-cs8/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/chart/series/column-cs8/app/index.tsx %}
{% endhighlight %}
{% highlight js tabtitle="datasource.jsx" %}
{% include code-snippet/chart/series/column-cs8/app/datasource.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="datasource.tsx" %}
{% include code-snippet/chart/series/column-cs8/app/datasource.tsx %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/chart/series/column-cs8" %}

## Lazy loading

Lazy loading allows you to load data for chart on demand. Chart will fire the scrollEnd event, in that we can get the minimum and maximum range of the axis, based on this, we can upload the data to chart.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/chart/series/column-cs9/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/chart/series/column-cs9/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/chart/series/column-cs9" %}

### Common datasource

You can also bind a JSON data common to all series using  [`dataSource`](https://ej2.syncfusion.com/react/documentation/api/chart/seriesModel/#datasource) property in chart.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/chart/series/column-cs10/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/chart/series/column-cs10/app/index.tsx %}
{% endhighlight %}
{% highlight js tabtitle="datasource.jsx" %}
{% include code-snippet/chart/series/column-cs10/app/datasource.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="datasource.tsx" %}
{% include code-snippet/chart/series/column-cs10/app/datasource.tsx %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/chart/series/column-cs10" %}

## Remote data

You can also bind remote data to the chart using `DataManager`. The DataManager requires minimal information like webservice URL, adaptor and crossDomain to interact with service endpoint properly. Assign the instance of DataManager to the [`dataSource`](https://ej2.syncfusion.com/react/documentation/api/chart/seriesModel/#datasource) property in series and map the fields of data to [`xName`](https://ej2.syncfusion.com/react/documentation/api/chart/seriesModel/#xname) and [`yName`](https://ej2.syncfusion.com/react/documentation/api/chart/seriesModel/#yname) properties. You can also use the [`query`](https://ej2.syncfusion.com/react/documentation/api/chart/seriesModel/#query) property of the series to filter the data.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/chart/series/column-cs11/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/chart/series/column-cs11/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/chart/series/column-cs11" %}

## Binding data using ODataAdaptor

[`OData`](http://www.odata.org/documentation/odata-version-3-0/) is a standardized protocol for creating and consuming data. You can retrieve data from an OData service using the DataManager. Refer to the following code example for remote data binding using an OData service.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/chart/series/column-cs14/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/chart/series/column-cs14/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/chart/series/column-cs14" %}

## Binding data using ODataV4Adaptor

ODataV4 is an improved version of the OData protocols, and the `DataManager` can also retrieve and consume ODataV4 services. For more details on ODataV4 services, refer to the [`odata documentation`](http://docs.oasis-open.org/odata/odata/v4.0/errata03/os/complete/part1-protocol/odata-v4.0-errata03-os-part1-protocol-complete.html#_Toc453752197). To bind an ODataV4 service, use the **ODataV4Adaptor**.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/chart/series/column-cs15/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/chart/series/column-cs15/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/chart/series/column-cs15" %}

## Web API adaptor

You can use the **WebApiAdaptor** to bind the chart with a Web API created using an OData endpoint.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/chart/series/column-cs16/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/chart/series/column-cs16/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/chart/series/column-cs16" %}

The response object should contain the properties **Items** and **Count**, where **Items** represents a collection of entities, and **Count** represents the total number of entities.

The sample response object should appear as follows:

```
{
    Items: [{..}, {..}, {..}, ...],
    Count: 830
}
```

## Custom adaptor

You can create your own adaptor by extending the built-in adaptors. The following demonstrates the custom adaptor approach and how to add a serial number to the records by overriding the built-in response processing using the **processResponse** method of the **ODataAdaptor**.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/chart/series/column-cs17/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/chart/series/column-cs17/app/index.tsx %}
{% endhighlight %}
{% highlight js tabtitle="serialnoadaptor.jsx" %}
{% include code-snippet/chart/series/column-cs17/app/serialNoAdaptor.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="serialnoadaptor.tsx" %}
{% include code-snippet/chart/series/column-cs17/app/serialNoAdaptor.tsx %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/chart/series/column-cs17" %}

## Offline mode

When using remote data binding, all chart actions will be processed on the server-side. To avoid postback for every action, configure the chart to load all data upon initialization and handle actions on the client-side. To enable this behavior, utilize the **offline** property of the `DataManager`.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/chart/series/column-cs18/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/chart/series/column-cs18/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/chart/series/column-cs18" %}

## Empty points

The Data points that uses the `null` or `undefined` as value are considered as empty points. Empty data points are ignored and not plotted in the Chart. When the data is provided by using the points property, By using `emptyPointSettings` property in series, you can customize the empty point. Default `mode` of the empty point is `Gap`.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/chart/series/column-cs12/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/chart/series/column-cs12/app/index.tsx %}
{% endhighlight %}
{% highlight js tabtitle="datasource.jsx" %}
{% include code-snippet/chart/series/column-cs12/app/datasource.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="datasource.tsx" %}
{% include code-snippet/chart/series/column-cs12/app/datasource.tsx %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/chart/series/column-cs12" %}

**Empty point color**

Specific color for empty point can be set by `fill` property in `emptyPointSettings`.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/chart/series/column-cs13/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/chart/series/column-cs13/app/index.tsx %}
{% endhighlight %}
{% highlight js tabtitle="datasource.jsx" %}
{% include code-snippet/chart/series/column-cs13/app/datasource.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="datasource.tsx" %}
{% include code-snippet/chart/series/column-cs13/app/datasource.tsx %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/chart/series/column-cs13" %}
