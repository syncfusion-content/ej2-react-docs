---
layout: post
title: Category Axis in React Chart | Syncfusion
description: Learn how to use the category axis in Syncfusion React Chart to plot string-based values, customize labels, and enable indexed categories.
control: Category axis
platform: ej2-react
documentation: ug
domainurl: ##DomainURL##
---

# Category Axis in React Chart

The category axis is used to represent string-based values instead of numeric values. It is commonly used for displaying discrete categories such as names, labels, or textual groupings along an axis.

To get start quickly with React Category Axis, you can check out this video:

{% youtube "https://www.youtube.com/watch?v=PS4WWiu4TYM" %}

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/chart/code-path/axis/category-cs1/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/chart/code-path/axis/category-cs1/app/index.tsx %}
{% endhighlight %}
{% highlight js tabtitle="datasource.jsx" %}
{% include code-snippet/chart/code-path/axis/category-cs1/app/datasource.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="datasource.tsx" %}
{% include code-snippet/chart/code-path/axis/category-cs1/app/datasource.tsx %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/chart/preview-sample/axis/category-cs1" %}

> Note: To use the category axis, you need to inject the `Category` module into the `services` array and set the [`valueType`](https://ej2.syncfusion.com/react/documentation/api/chart/axisModel#valuetype) of the axis to `Category`.

## Label placement

By default, category labels are positioned between the axis tick marks. They can also be aligned directly on the ticks by using the [`labelPlacement`](https://ej2.syncfusion.com/react/documentation/api/chart/axis#labelplacement) property.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/chart/code-path/axis/category-cs2/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/chart/code-path/axis/category-cs2/app/index.tsx %}
{% endhighlight %}
{% highlight js tabtitle="datasource.jsx" %}
{% include code-snippet/chart/code-path/axis/category-cs2/app/datasource.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="datasource.tsx" %}
{% include code-snippet/chart/code-path/axis/category-cs2/app/datasource.tsx %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/chart/preview-sample/axis/category-cs2" %}

## Range

The visible range of the category axis can be customized by using the [`minimum`](https://ej2.syncfusion.com/react/documentation/api/chart/axisModel#minimum), [`maximum`](https://ej2.syncfusion.com/react/documentation/api/chart/axisModel#maximum), and [`interval`](https://ej2.syncfusion.com/react/documentation/api/chart/axisModel#interval) properties of the axis. These properties control the start value, end value, and spacing between category labels. By default, all categories are displayed.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/chart/code-path/axis/category-cs3/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/chart/code-path/axis/category-cs3/app/index.tsx %}
{% endhighlight %}
{% highlight js tabtitle="datasource.jsx" %}
{% include code-snippet/chart/code-path/axis/category-cs3/app/datasource.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="datasource.tsx" %}
{% include code-snippet/chart/code-path/axis/category-cs3/app/datasource.tsx %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/chart/preview-sample/axis/category-cs3" %}

## Indexed category axis

Beyond the default category-by-value behavior, the category axis can also be rendered based on the index values of the data source. This is useful when you have multiple data sources with different category values that need to be aligned on the same axis, or when you want to position data points by their index instead of their actual category values. This behavior can be enabled by setting the [`isIndexed`](https://ej2.syncfusion.com/react/documentation/api/chart/axisModel#isindexed) property of the axis to `true`.

> Note: When using an indexed category axis, ensure the `Category` module is injected into the `services` array.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/chart/code-path/axis/multiple-cs22/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/chart/code-path/axis/multiple-cs22/app/index.tsx %}
{% endhighlight %}
{% highlight js tabtitle="datasource.jsx" %}
{% include code-snippet/chart/code-path/axis/multiple-cs22/app/datasource.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="datasource.tsx" %}
{% include code-snippet/chart/code-path/axis/multiple-cs22/app/datasource.tsx %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/chart/preview-sample/axis/multiple-cs22" %}