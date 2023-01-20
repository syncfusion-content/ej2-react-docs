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

Category axis are used to represent, the string values instead of numbers.

To get start quickly with React Category Axis, you can check out this video:

{% youtube "https://www.youtube.com/watch?v=PS4WWiu4TYM" %}

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/chart/axis/category-cs1/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/chart/axis/category-cs1/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/chart/axis/category-cs1" %}

>Note: To use category axis, we need to inject `Category` module into the `services` and
set the [`valueType`](https://ej2.syncfusion.com/react/documentation/api/chart/axisModel/#valuetype) of axis to Category.

## Labels Placement

By default, category labels are placed between the ticks in an axis, this can also be placed on ticks using [`labelPlacement`](https://ej2.syncfusion.com/react/documentation/api/chart/axisModel/#labelplacement) property.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/chart/axis/category-cs2/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/chart/axis/category-cs2/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/chart/axis/category-cs2" %}

## Range

Range of the category axis can be customized using [`minimum`](https://ej2.syncfusion.com/react/documentation/api/chart/axisModel/#minimum), [`maximum`](https://ej2.syncfusion.com/react/documentation/api/chart/axisModel/#maximum) and [`interval`](https://ej2.syncfusion.com/react/documentation/api/chart/axisModel/#interval) property of the axis.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/chart/axis/category-cs3/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/chart/axis/category-cs3/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/chart/axis/category-cs3" %}

## Indexed category axis

Category axis also can be rendered based on the index values of data source. This can be achieved by defining the `isIndexed` property to `true` in the axis.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/chart/axis/multiple-cs22/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/chart/axis/multiple-cs22/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/chart/axis/multiple-cs22" %}