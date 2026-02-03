---
layout: post
title: Category axis in React Chart component | Syncfusion
description: Learn here all about Category axis in Syncfusion React Chart component of Syncfusion Essential JS 2 and more.
control: Category axis 
platform: ej2-react
documentation: ug
domainurl: ##DomainURL##
---

# Category axis in React Chart component

The category axis is used to represent string-based values instead of numeric values. It is commonly used for displaying discrete categories such as names, labels, or textual groupings along an axis.

To get start quickly with React Category Axis, you can check out this video:

{% youtube "https://www.youtube.com/watch?v=PS4WWiu4TYM" %}

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/chart/axis/category-cs1/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/chart/axis/category-cs1/app/index.tsx %}
{% endhighlight %}
{% highlight js tabtitle="datasource.jsx" %}
{% include code-snippet/chart/axis/category-cs1/app/datasource.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="datasource.tsx" %}
{% include code-snippet/chart/axis/category-cs1/app/datasource.tsx %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/chart/axis/category-cs1" %}

> Note: To use category axis, we need to inject `Category` module into the `services` and
set the [`valueType`](https://ej2.syncfusion.com/react/documentation/api/chart/axisModel#valuetype) of axis to Category.

## Labels Placement

By default, category labels are positioned between the axis tick marks. They can also be aligned directly on the ticks by using the [`labelPlacement`](https://ej2.syncfusion.com/react/documentation/api/chart/axis#labelplacement) property.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/chart/axis/category-cs2/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/chart/axis/category-cs2/app/index.tsx %}
{% endhighlight %}
{% highlight js tabtitle="datasource.jsx" %}
{% include code-snippet/chart/axis/category-cs2/app/datasource.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="datasource.tsx" %}
{% include code-snippet/chart/axis/category-cs2/app/datasource.tsx %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/chart/axis/category-cs2" %}

## Range

The visible range of the category axis can be customized by using the  [`minimum`](https://ej2.syncfusion.com/react/documentation/api/chart/axisModel#minimum), [`maximum`](https://ej2.syncfusion.com/react/documentation/api/chart/axisModel#maximum) and [`interval`](https://ej2.syncfusion.com/react/documentation/api/chart/axisModel#interval) properties of the axis. These properties control the start value, end value, and spacing between category labels.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/chart/axis/category-cs3/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/chart/axis/category-cs3/app/index.tsx %}
{% endhighlight %}
{% highlight js tabtitle="datasource.jsx" %}
{% include code-snippet/chart/axis/category-cs3/app/datasource.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="datasource.tsx" %}
{% include code-snippet/chart/axis/category-cs3/app/datasource.tsx %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/chart/axis/category-cs3" %}

## Indexed category axis

The category axis can also be rendered based on the index values of the data source. This behavior can be enabled by setting the `isIndexed` property of the axis to **true**, which positions data points according to their index instead of their actual category values.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/chart/axis/multiple-cs22/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/chart/axis/multiple-cs22/app/index.tsx %}
{% endhighlight %}
{% highlight js tabtitle="datasource.jsx" %}
{% include code-snippet/chart/axis/multiple-cs22/app/datasource.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="datasource.tsx" %}
{% include code-snippet/chart/axis/multiple-cs22/app/datasource.tsx %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/chart/axis/multiple-cs22" %}