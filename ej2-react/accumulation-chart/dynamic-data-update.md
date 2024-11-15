---
layout: post
title: Dynamic data update in Accumulation Chart component | Syncfusion
description: Learn here all about dynamic data update in Syncfusion Accumulation Chart component in Syncfusion Essential JS 2 and more.
platform: ej2-react
control: Dynamic Data Update
documentation: ug
publishingplatform: ##Platform_Name##
domainurl: ##DomainURL##
---

# Dynamic data update in React Accumulation Chart component

## Adding a new data point

The [`addPoint`](https://ej2.syncfusion.com/react/documentation/api/chart/seriesModel/#addpoint) method is used to dynamically add a new data point to the accumulation chart series. This method is particularly useful when you want to update the chart with a new data point without having to refresh the entire accumulation chart. This method takes two parameters:

* The first parameter is the new data point to add to your existing data source.
* The optional second parameter specifies the animation duration for adding the new data point.

{% tabs %}
{% highlight ts tabtitle="index.jsx" %}
{% include code-snippet/chart/series/addpoint-cs/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/chart/series/addpoint-cs/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/chart/series/addpoint-cs" %}

## Removing an existing data point

The [`removePoint`](https://ej2.syncfusion.com/react/documentation/api/chart/seriesModel/#removepoint) method is used to dynamically remove a data point from the accumulation chart series. This method is particularly useful when you want to update the accumulation chart by removing an existing data point without having to refresh the entire accumulation chart. This method takes two parameters:

* The first parameter is the index of the data point that needs to be removed from the existing data source.
* The optional second parameter specifies the animation duration for removing the data point.

{% tabs %}
{% highlight ts tabtitle="index.jsx" %}
{% include code-snippet/chart/series/addpoint-cs1/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/chart/series/addpoint-cs1/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/chart/series/addpoint-cs1" %}

## Replacing entire data points

To replace the existing data source in the accumulation chart with a new data source, you can simply use the [`setData`](https://ej2.syncfusion.com/react/documentation/api/chart/seriesModel/#setdata) method. This method allows you to replace the existing data points in the accumulation chart series with a new set of data points, enabling you to easily update the accumulation chart with new information. This method takes two parameters:

* The first parameter is the new set of data points to be updated.
* The optional second parameter specifies the animation duration for updating the new data source.

{% tabs %}
{% highlight ts tabtitle="index.jsx" %}
{% include code-snippet/chart/series/addpoint-cs3/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/chart/series/addpoint-cs3/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/chart/series/addpoint-cs3" %}