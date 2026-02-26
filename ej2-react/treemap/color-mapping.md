---
layout: post
title: Color mapping in React Treemap component | Syncfusion
description: Learn here all about Color mapping in Syncfusion React Treemap component of Syncfusion Essential JS 2 and more.
control: Color mapping 
platform: ej2-react
documentation: ug
domainurl: ##DomainURL##
---

# Color mapping in React Treemap component

Color mapping is used to customize the color for each group or item based on the specified types. The following options are available to customize the group and leaf items in the TreeMap.

## Range color mapping

Range color mapping is used to apply color to the items by giving specific ranges in the DataSource, and it should be specifying the data source properties to the [`rangeColorValuePath`](https://ej2.syncfusion.com/react/documentation/api/treemap#rangecolorvaluepath). The color mapping ranges to be specified in the [`from`](https://ej2.syncfusion.com/react/documentation/api/treemap/colorMappingModel#from) and [`to`](https://ej2.syncfusion.com/react/documentation/api/treemap/colorMappingModel#to) properties of the [`colorMapping`](https://ej2.syncfusion.com/react/documentation/api/treemap/colorMapping).

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/treemap/code-path/colormapping-cs1/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/treemap/code-path/colormapping-cs1/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/treemap/colormapping-cs1" %}

## Equal color mapping

Equal color mapping is used to fill colors to each item by specifying equal value present in the data source, that can be specified in the [`equalColorValuePath`](https://ej2.syncfusion.com/react/documentation/api/treemap#equalcolorvaluepath) property.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/treemap/colormapping-cs2/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/treemap/colormapping-cs2/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/treemap/colormapping-cs2" %}

## Desaturation color mapping

Desaturation color mapping is used to apply colors to the items based on the [`minOpacity`](https://ej2.syncfusion.com/react/documentation/api/treemap/colorMapping#minopacity) and [`maxOpacity`](https://ej2.syncfusion.com/react/documentation/api/treemap/colorMapping#minopacity) properties in the [`colorMapping`](https://ej2.syncfusion.com/react/documentation/api/treemap/colorMapping).

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/treemap/colormapping-cs3/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/treemap/colormapping-cs3/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/treemap/colormapping-cs3" %}

## Palette color mapping

The palette color mapping is used to fill the color to each group or leaf item by given colors in the [`palette`](https://ej2.syncfusion.com/react/documentation/api/treemap#palette) property.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/treemap/colormapping-cs4/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/treemap/colormapping-cs4/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/treemap/colormapping-cs4" %}

## Desaturation with multiple colors

Multiple colors are used as gradient effect to specific shapes based on the ranges in datasource. By using [`color`](https://ej2.syncfusion.com/react/documentation/api/treemap/colorMapping#color) property, you can set n number of colors.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/treemap/colormapping-cs5/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/treemap/colormapping-cs5/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/treemap/colormapping-cs5" %}

## Color for items excluded from color mapping

Get the excluded ranges from data source using the color mapping and apply the specific color to those items, without specifying the [`from`](https://ej2.syncfusion.com/react/documentation/api/treemap/colorMappingModel#from) and [`to`](https://ej2.syncfusion.com/react/documentation/api/treemap/colorMappingModel#to) properties.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/treemap/colormapping-cs6/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/treemap/colormapping-cs6/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/treemap/colormapping-cs6" %}
