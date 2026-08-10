---
layout: post
title: Data Labels in React Sparkline | Syncfusion
description: Display point values on the Syncfusion React Sparkline by enabling data labels for all, start, end, high, low, or negative points with custom formatting.
control: Data labels 
platform: ej2-react
documentation: ug
domainurl: ##DomainURL##
---

# Data Labels in React Sparkline

Data labels are used to display values of data points to improve the readability.

## Enable data label

To enable data label for sparkline series, provide `visible` of the `dataLabelSettings` as following possible values:

* All - Enables data label of  all points.
* Start - Enables data label of the start point.
* End - Enables data label of the end point.
* High - Enables data label of the high point.
* Low - Enables data label of the low point.
* Negative - Enables data labels of the negative points.

The following example shows enabling sparkline data label for all points.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/sparkline/datalabel-cs1/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/sparkline/datalabel-cs1/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/sparkline/datalabel-cs1" %}

## Customize data label

Data labels can be customized using the fill, border, opacity, and textStyle. The following code example shows customizing data label border, text color, and fill color.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/sparkline/datalabel-cs2/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/sparkline/datalabel-cs2/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/sparkline/datalabel-cs2" %}

## Format data label text

The text of data labels can be formatted using the `format` API in the sparkline `dataLabelSettings`. By default, data label shows the y-value of point. The following code example shows how to display x and y-values for points.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/sparkline/datalabel-cs3/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/sparkline/datalabel-cs3/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/sparkline/datalabel-cs3" %}