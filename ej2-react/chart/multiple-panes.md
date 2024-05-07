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

Chart area can be divided into multiple panes using [`rows`](https://ej2.syncfusion.com/react/documentation/api/chart/rowModel/) and [`columns`](https://ej2.syncfusion.com/react/documentation/api/chart/columnModel/).

## Rows

To split the chart area vertically into number of rows, use [`rows`](https://ej2.syncfusion.com/react/documentation/api/chart/rowModel/) property of the chart.

*1. You can allocate space for each row by using the [`height`](https://ej2.syncfusion.com/react/documentation/api/chart/rowModel/#height) property.
The value can be either in percentage or in pixel.*

*2. To associate a vertical axis to a particular row, specify its index to
  [`rowIndex`](https://ej2.syncfusion.com/react/documentation/api/chart/axisModel/#rowindex) property of the axis.*

*3. To customize each row’s bottom line, use [`border`](https://ej2.syncfusion.com/react/documentation/api/chart/rowModel/#border) property.*

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/chart/axis/multiple-panes-cs1/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/chart/axis/multiple-panes-cs1/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/chart/axis/multiple-panes-cs1" %}

For spanning the vertical axis along multiple row, you can use [`span`](https://ej2.syncfusion.com/react/documentation/api/chart/axisModel/#span) property of an axis.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/chart/axis/multiple-panes-cs2/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/chart/axis/multiple-panes-cs2/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/chart/axis/multiple-panes-cs2" %}

## Columns

To split the chart area horizontally into number of columns, use [`columns`](https://ej2.syncfusion.com/react/documentation/api/chart/columnModel/) property of the chart.

*1. You can allocate space for each column by using the [`width`](https://ej2.syncfusion.com/react/documentation/api/chart/columnModel/#width)
property. The given width can be either in percentage or in pixel.*

*2. To associate a horizontal axis to a particular column, specify its index to
  [`columnIndex`](https://ej2.syncfusion.com/react/documentation/api/chart/axisModel/#columnindex) property of the axis.*

*3. To customize each column’s bottom line, use [`border`](https://ej2.syncfusion.com/react/documentation/api/chart/columnModel/#border)
  property.*

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/chart/axis/multiple-panes-cs3/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/chart/axis/multiple-panes-cs3/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/chart/axis/multiple-panes-cs3" %}

For spanning the horizontal axis along multiple column, you can use [`span`](https://ej2.syncfusion.com/react/documentation/api/chart/axisModel/#span) property of an axis.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/chart/axis/multiple-panes-cs4/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/chart/axis/multiple-panes-cs4/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/chart/axis/multiple-panes-cs4" %}