---
layout: post
title: Multiple panes in React Chart component | Syncfusion
description: Learn here all about Multiple panes in Syncfusion React Chart component of Syncfusion Essential JS 2 and more.
control: Multiple panes 
platform: ej2-react
documentation: ug
domainurl: ##DomainURL##
---

# Multiple panes in React Chart component

The chart area can be divided into multiple panes by defining rows and columns using the [`rows`](https://ej2.syncfusion.com/react/documentation/api/chart/row) and [`columns`](https://ej2.syncfusion.com/react/documentation/api/chart/column) collections. This feature is useful for displaying multiple related datasets within the same chart container while maintaining clear visual separation.

## Rows

To split the chart area vertically into multiple rows, use the [`rows`](https://ej2.syncfusion.com/react/documentation/api/chart/row) property of the chart.

- Space for each row can be allocated by using the [`height`](https://ej2.syncfusion.com/react/documentation/api/chart/row#height) property. The value can be specified either in pixels or as a percentage.
- To associate a vertical axis with a specific row, assign the corresponding index using the [`rowIndex`](https://ej2.syncfusion.com/react/documentation/api/chart/axis#rowindex) property of the axis.
- To customize the bottom line of each row, use the [`border`](https://ej2.syncfusion.com/react/documentation/api/chart/axis#border) property.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/chart/axis/multiple-panes-cs1/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/chart/axis/multiple-panes-cs1/app/index.tsx %}
{% endhighlight %}
{% highlight js tabtitle="datasource.jsx" %}
{% include code-snippet/chart/axis/multiple-panes-cs1/app/datasource.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="datasource.tsx" %}
{% include code-snippet/chart/axis/multiple-panes-cs1/app/datasource.tsx %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/chart/axis/multiple-panes-cs1" %}

To span a vertical axis across multiple rows, use the [`span`](https://ej2.syncfusion.com/react/documentation/api/chart/axis#span) property of the axis.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/chart/axis/multiple-panes-cs2/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/chart/axis/multiple-panes-cs2/app/index.tsx %}
{% endhighlight %}
{% highlight js tabtitle="datasource.jsx" %}
{% include code-snippet/chart/axis/multiple-panes-cs2/app/datasource.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="datasource.tsx" %}
{% include code-snippet/chart/axis/multiple-panes-cs2/app/datasource.tsx %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/chart/axis/multiple-panes-cs2" %}

## Columns

To split the chart area horizontally into multiple columns, use the [`columns`](https://ej2.syncfusion.com/react/documentation/api/chart/column) property of the chart.
  property.*

- Space for each column can be allocated using the [`width`](https://ej2.syncfusion.com/react/documentation/api/chart/column#width) property. The width can be specified either in pixels or as a percentage.
- To associate a horizontal axis with a specific column, assign the corresponding index using the [`columnIndex`](https://ej2.syncfusion.com/react/documentation/api/chart/axis#columnindex) property of the axis.
- To customize the bottom line of each column, use the [`border`](https://ej2.syncfusion.com/react/documentation/api/chart/column#border) property.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/chart/axis/multiple-panes-cs3/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/chart/axis/multiple-panes-cs3/app/index.tsx %}
{% endhighlight %}
{% highlight js tabtitle="datasource.jsx" %}
{% include code-snippet/chart/axis/multiple-panes-cs3/app/datasource.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="datasource.tsx" %}
{% include code-snippet/chart/axis/multiple-panes-cs3/app/datasource.tsx %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/chart/axis/multiple-panes-cs3" %}

To span a horizontal axis across multiple columns, use the [`span`](https://ej2.syncfusion.com/react/documentation/api/chart/axis#span) property of the axis.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/chart/axis/multiple-panes-cs4/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/chart/axis/multiple-panes-cs4/app/index.tsx %}
{% endhighlight %}
{% highlight js tabtitle="datasource.jsx" %}
{% include code-snippet/chart/axis/multiple-panes-cs4/app/datasource.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="datasource.tsx" %}
{% include code-snippet/chart/axis/multiple-panes-cs4/app/datasource.tsx %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/chart/axis/multiple-panes-cs4" %}