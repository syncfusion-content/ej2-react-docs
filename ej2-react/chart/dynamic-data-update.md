---
layout: post
title: Dynamic data update in React Chart component | Syncfusion
description: Learn here all about dynamic data update in Syncfusion React Chart component of Syncfusion Essential JS 2 and more.
control: Dynamic Data Update
platform: ej2-react
documentation: ug
domainurl: ##DomainURL##
---

# Dynamic data update in React Chart component

The React Chart component provides methods to dynamically modify data without requiring a full chart refresh. This enables real-time data visualization, interactive features, and responsive user experiences. Common scenarios include adding sensor readings, removing outdated data points, replacing entire datasets, and enabling click-based data manipulation.

## Adding a new data point

Use the `addPoint` method to dynamically append a new data point to a series. This is useful for real-time data streams, user interactions, or incremental data loading. The method accepts the following parameters:
 
* **Data point** (required): The new data object to append to the series (must match the datasource structure)
* **Animation duration** (optional): Duration in milliseconds for the entry animation

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/chart/code-path/dynamic-update/add-point/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/chart/code-path/dynamic-update/add-point/app/index.tsx %}
{% endhighlight %}
{% highlight js tabtitle="datasource.jsx" %}
{% include code-snippet/chart/code-path/dynamic-update/add-point/app/datasource.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="datasource.tsx" %}
{% include code-snippet/chart/code-path/dynamic-update/add-point/app/datasource.tsx %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/chart/preview-sample/dynamic-update/add-point" %}

## Removing an existing data point

Use the `removePoint` method to dynamically delete a data point from a series by its index. This is useful for filtering data, removing outliers, or responding to user actions. The method accepts the following parameters:
 
* **Point index** (required): The zero-based index of the data point to remove
* **Animation duration** (optional): Duration in milliseconds for the exit animation

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/chart/code-path/dynamic-update/remove-point/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/chart/code-path/dynamic-update/remove-point/app/index.tsx %}
{% endhighlight %}
{% highlight js tabtitle="datasource.jsx" %}
{% include code-snippet/chart/code-path/dynamic-update/remove-point/app/datasource.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="datasource.tsx" %}
{% include code-snippet/chart/code-path/dynamic-update/remove-point/app/datasource.tsx %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/chart/preview-sample/dynamic-update/remove-point" %}

## Replacing entire data points

Use the `setData` method to replace all data points in a series with a new dataset. This is useful for category switching, time range changes, or complete data refreshes. The method accepts the following parameters:
 
* **New data source** (required): The complete new dataset array to display
* **Animation duration** (optional): Duration in milliseconds for the transition animation

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/chart/code-path/dynamic-update/set-data/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/chart/code-path/dynamic-update/set-data/app/index.tsx %}
{% endhighlight %}
{% highlight js tabtitle="datasource.jsx" %}
{% include code-snippet/chart/code-path/dynamic-update/set-data/app/datasource.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="datasource.tsx" %}
{% include code-snippet/chart/code-path/dynamic-update/set-data/app/datasource.tsx %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/chart/preview-sample/dynamic-update/set-data" %}

## Click to add or remove a data point

Enable users to add or remove data points by clicking on the chart. Listen to the `chartMouseClick` event to capture click coordinates and point information. When a user clicks within the chart area, extract the x and y axis values from the event arguments. If the location is empty, use `addPoint` to add a new data point at those coordinates. If a user clicks on an existing data point, identify its index and use `removePoint` to delete it. This creates an intuitive interface for data exploration and editing.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/chart/code-path/dynamic-update/click-add-point/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/chart/code-path/dynamic-update/click-add-point/app/index.tsx %}
{% endhighlight %}
{% highlight js tabtitle="datasource.jsx" %}
{% include code-snippet/chart/code-path/dynamic-update/click-add-point/app/datasource.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="datasource.tsx" %}
{% include code-snippet/chart/code-path/dynamic-update/click-add-point/app/datasource.tsx %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/chart/preview-sample/dynamic-update/click-add-point" %}
