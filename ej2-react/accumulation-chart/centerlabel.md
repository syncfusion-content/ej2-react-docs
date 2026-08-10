---
layout: post
title: Center Label in React Accumulation Chart | Syncfusion
description: Learn how to show a center label in the Syncfusion React Accumulation Chart doughnut to display total, percentage, or custom text in the inner radius.
control: Center label 
platform: ej2-react
documentation: ug
domainurl: ##DomainURL##
---

# Center Label in React Accumulation Chart

## Center label

Using [`centerLabel`](https://ej2.syncfusion.com/react/documentation/api/accumulation-chart/centerLabel) it is now possible to place a label at the center of a pie or donut chart. To configure the default text rendered on the center label for the pie and doughnut charts, use the [`text`](https://ej2.syncfusion.com/react/documentation/api/accumulation-chart/centerLabel#text) property in the [`centerLabel`](https://ej2.syncfusion.com/react/documentation/api/accumulation-chart/centerLabel).

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/chart/code-path/series/doughnut-cs2/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/chart/code-path/series/doughnut-cs2/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/chart/preview-sample/series/doughnut-cs2" %}

## Hover text

The default text in the center label can be changed when the mouse pointer hovers over the pie and doughnut charts slice using the [`hoverTextFormat`](https://ej2.syncfusion.com/react/documentation/api/accumulation-chart/centerLabel#hovertextformat) property.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/chart/code-path/series/doughnut-cs3/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/chart/code-path/series/doughnut-cs3/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/chart/preview-sample/series/doughnut-cs3" %}

## Customization

Customize the center label text using the [`textStyle`](https://ej2.syncfusion.com/react/documentation/api/accumulation-chart/centerLabel#textstyle) property.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/chart/code-path/series/doughnut-cs4/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/chart/code-path/series/doughnut-cs4/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/chart/preview-sample/series/doughnut-cs4" %}
