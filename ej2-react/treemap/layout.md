---
layout: post
title: Layout in React Treemap component | Syncfusion
description: Learn here all about Layout in Syncfusion React Treemap component of Syncfusion Essential JS 2 and more.
control: Layout 
platform: ej2-react
documentation: ug
domainurl: ##DomainURL##
---

# Layout in React Treemap component

Determine the visual representation of nodes belonging to all the TreeMap levels using the [`layoutType`](https://ej2.syncfusion.com/react/documentation/api/treemap/#layouttype) property.

## Types of layout

The available layout types are,

* Squarified
* SliceAndDiceVertical
* SliceAndDiceHorizontal
* SliceAndDiceAuto

### Squarified

The `Squarified` layout displays the nested rectangles based on aspect ratio in the TreeMap. The rectangles will be split based on the height and width of the parent. The default rendering type of layout is `Squarified`.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/treemap/layout-cs1/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/treemap/layout-cs1/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/treemap/layout-cs1" %}

### SliceAndDiceVertical

The `SliceAndDiceVertical` layout creates rectangles with high aspect ratio and displays items in a vertically sorted order.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/treemap/layout-cs2/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/treemap/layout-cs2/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/treemap/layout-cs2" %}

### SliceAndDiceHorizontal

The `SliceAndDiceHorizontal` layout creates rectangles with high aspect ratio and displays items in a horizontally sorted order.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/treemap/layout-cs3/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/treemap/layout-cs3/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/treemap/layout-cs3" %}

### SliceAndDiceAuto

The `SliceAndDiceAuto` layout creates rectangles with high aspect ratio and display items sorted both horizontally and vertically.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/treemap/layout-cs4/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/treemap/layout-cs4/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/treemap/layout-cs4" %}