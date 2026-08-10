---
layout: post
title: Ranges in React Bullet Chart | Syncfusion
description: Learn how to configure ranges in the Syncfusion React Bullet Chart Component to compare actual and target values against thresholds with custom colors.
control: Ranges
platform: ej2-react
documentation: ug
domainurl: ##DomainURL##
---

# Ranges in React Bullet Chart

Ranges represent the quality of a specific range such as **Good**, **Bad** and **Satisfactory** in the Bullet Chart scale. The ending point of a qualitative range is specified in the [`end`](https://ej2.syncfusion.com/angular/documentation/api/bullet-chart/rangeModel#end) property in [`ranges`](https://ej2.syncfusion.com/angular/documentation/api/bullet-chart#ranges). The [`minimum`](https://ej2.syncfusion.com/angular/documentation/api/bullet-chart#minimum) value of a quantitative scale is considered the starting point of the first range or the previous range end point.

## Color Customization

Enhance the readability of ranges with color and opacity. It can be applied using the [`color`](https://ej2.syncfusion.com/react/documentation/api/bullet-chart/rangeModel#color) and [`opacity`](https://ej2.syncfusion.com/react/documentation/api/bullet-chart/rangeModel#opacity) properties in [`ranges`](https://ej2.syncfusion.com/angular/documentation/api/bullet-chart#ranges).

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/bullet-chart/code-path/working-with-data/local-data-cs4/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/bullet-chart/code-path/working-with-data/local-data-cs4/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/bullet-chart/preview-sample/working-with-data/local-data-cs4" %}