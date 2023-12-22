---
layout: post
title: Value bar in React Bullet chart component | Syncfusion
description: Learn here all about Value bar in Syncfusion React Bullet chart component of Syncfusion Essential JS 2 and more.
control: Value bar 
platform: ej2-react
documentation: ug
domainurl: ##DomainURL##
---

# Value bar in React Bullet chart component

To display the primary data or the current value of the data being measured known as the **Feature Measure** that should be encoded as a bar. This is called as the **Actual Bar** or the **Feature Bar** in the Bullet Chart, and to display the actual bar the [`valueField`](https://ej2.syncfusion.com/react/documentation/api/bullet-chart/#valuefield) should be mapped to the appropriate field from the data source.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/bullet-chart/value-bar-cs1/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/bullet-chart/value-bar-cs1/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/bullet-chart/value-bar-cs1" %}

## Types of actual bar

The shape of the actual bar can be customized using the [`type`](https://ej2.syncfusion.com/react/documentation/api/bullet-chart/#type) property of the Bullet Chart. The actual bar contains `Rect` and `Dot` shapes. By default, the actual bar shape is Rect.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/bullet-chart/value-bar-cs2/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/bullet-chart/value-bar-cs2/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/bullet-chart/value-bar-cs2" %}

## Actual bar customization

### Border customization

Using the [`valueBorder`](https://ej2.syncfusion.com/react/documentation/api/bullet-chart/#valueborder) property of the bullet chart, you can customize the border [`color`](https://ej2.syncfusion.com/react/documentation/api/bullet-chart/border/#color) and [`width`](https://ej2.syncfusion.com/react/documentation/api/bullet-chart/border/#width) of the actual bar.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/bullet-chart/value-bar-cs3/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/bullet-chart/value-bar-cs3/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/bullet-chart/value-bar-cs3" %}

### Fill color and height customization

Customize the fill color and height of the actual bar using the [`valueFill`](https://ej2.syncfusion.com/react/documentation/api/bullet-chart/#valuefill) and [`valueHeight`](https://ej2.syncfusion.com/react/documentation/api/bullet-chart/#valueheight) properties of the bullet chart. Also, you can bind the color for the actual bar from [`dataSource`](https://ej2.syncfusion.com/react/documentation/api/bullet-chart/#datasource) for the bullet chart using [`valueFill`](https://ej2.syncfusion.com/react/documentation/api/bullet-chart/#valuefill) property.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/bullet-chart/value-bar-cs4/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/bullet-chart/value-bar-cs4/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/bullet-chart/value-bar-cs4" %}