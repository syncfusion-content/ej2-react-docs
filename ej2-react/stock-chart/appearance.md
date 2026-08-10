---
layout: post
title: Appearance in React Stock Chart | Syncfusion
description: Learn how to customize the appearance of the Syncfusion React Stock Chart Component with custom title and theme.
control: Appearance 
platform: ej2-react
documentation: ug
domainurl: ##DomainURL##
---

# Appearance in React Stock Chart

## Stock Chart Title

Stock Chart can be given a title using [`title`](https://ej2.syncfusion.com/react/documentation/api/stock-chart/stockChartModel#title) property, to show the information about the data plotted.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/stock-chart/code-path/appearance/title-cs1/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/stock-chart/code-path/appearance/title-cs1/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/stock-chart/appearance/title-cs1" %}

<!-- markdownlint-disable MD036 -->

**Title Customization**

The `textStyle` property of chart title provides options to customize the `size`, `color`, `fontFamily`, `fontWeight`,`fontStyle`, `opacity`, `textAlignment` and `textOverflow`.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/stock-chart/code-path/appearance/title-cs2/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/stock-chart/code-path/appearance/title-cs2/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/stock-chart/appearance/title-cs2" %}

## Stock Chart Theme

Changing Stock Chart theme will affect background color, grid lines, tooltip colors and appearance.

[`theme`](https://ej2.syncfusion.com/react/documentation/api/stock-chart/stockChartModel#theme) property of Stock chart is shipped with several built-in themes such as `Material`, `Fabric`, `Bootstrap` , `HighContrastLight`, `MaterialDark`, `FabricDark`, `FabricDark`, `HighContrast` and `BootstrapDark`.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/stock-chart/code-path/appearance/theme-cs1/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/stock-chart/code-path/appearance/theme-cs1/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/stock-chart/appearance/theme-cs1" %}

## See Also

* [Axis Customization](./axis-customization)