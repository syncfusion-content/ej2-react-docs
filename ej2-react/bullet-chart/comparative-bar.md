---
layout: post
title: Target Bar in React Bullet Chart | Syncfusion
description: Learn how to render the target bar in the Syncfusion React Bullet Chart Component to compare against the actual value with custom color and width.
control: Target bar
platform: ej2-react
documentation: ug
domainurl: ##DomainURL##
---

# Target Bar in React Bullet Chart

The line marker that runs perpendicular to the orientation of the graph is known as the **Comparative Measure** and it is used as a target marker to compare against the feature measure value. This is also called as the **Target Bar** in the Bullet Chart. To display the target bar, the [`targetField`](https://ej2.syncfusion.com/react/documentation/api/bullet-chart#targetfield) should be mapped to the appropriate field from the datasource.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/bullet-chart/code-path/target-bar-cs1/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/bullet-chart/code-path/target-bar-cs1/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/bullet-chart/preview-sample/target-bar-cs1" %}

## Types of target bar

The shape of the target bar can be customized using the [`targetTypes`](https://ej2.syncfusion.com/react/documentation/api/bullet-chart#targettypes) property and it supports **Circle**, **Cross**, and **Rect** shapes. The default type of the target bar is **Rect**.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/bullet-chart/code-path/target-bar-cs2/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/bullet-chart/code-path/target-bar-cs2/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/bullet-chart/preview-sample/target-bar-cs2" %}

## Target bar customization

The following properties can be used to customize the target bar. Also, you can bind the color for the target bar from [`dataSource`](https://ej2.syncfusion.com/react/documentation/api/bullet-chart#datasource) for the bullet chart.

* [`targetColor`](https://ej2.syncfusion.com/react/documentation/api/bullet-chart#targetcolor) - Specifies the fill color of Target Bar.
* [`targetWidth`](https://ej2.syncfusion.com/react/documentation/api/bullet-chart#targetwidth) - Specifies the width of Target Bar.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/bullet-chart/code-path/target-bar-cs3/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/bullet-chart/code-path/target-bar-cs3/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/bullet-chart/preview-sample/target-bar-cs3" %}