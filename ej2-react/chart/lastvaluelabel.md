---
layout: post
title: Last value label in React Chart component | Syncfusion
description: Learn here all about Last value label in Syncfusion React Chart component of Syncfusion Essential JS 2 and more.
platform: ej2-react
control: Last value label
documentation: ug
domainurl: ##DomainURL##
---

# Last value label in React Chart component

The `lastValueLabel` in a chart allows you to easily display the value of the last data point in a series. This feature provides an intuitive way to highlight the most recent or last data value in a series on your chart.

## Enable last value label

To show the last value label, make sure the `enable` property inside the `lastValueLabel` settings is set to `true` within the series configuration.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/chart/last-value-label/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/chart/last-value-label/app/index.tsx %}
{% endhighlight %}
{% highlight js tabtitle="datasource.jsx" %}
{% include code-snippet/chart/last-value-label/app/datasource.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="datasource.tsx" %}
{% include code-snippet/chart/last-value-label/app/datasource.tsx %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/chart/last-value-label" %}

>Note: To use the last value label feature, we need to inject `LastValueLabel` module into the `services`.

## Customization

The appearance of the last value label can be customized using style properties such as `font`, `background`, `border`, `dashArray`, `lineWidth`, `lineColor`, `rx`, and `ry` in the lastValueLabel property of the chart series. These settings allow you to tailor the label’s look to align with your desired visual presentation.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/chart/last-value-label-customization/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/chart/last-value-label-customization/app/index.tsx %}
{% endhighlight %}
{% highlight js tabtitle="datasource.jsx" %}
{% include code-snippet/chart/last-value-label-customization/app/datasource.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="datasource.tsx" %}
{% include code-snippet/chart/last-value-label-customization/app/datasource.tsx %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/chart/last-value-label-customization" %}