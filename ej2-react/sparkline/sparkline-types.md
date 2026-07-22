---
layout: post
title: Sparkline types in React Sparkline component | Syncfusion
description: Learn here all about Sparkline types in Syncfusion React Sparkline component of Syncfusion Essential JS 2 and more.
control: Sparkline types 
platform: ej2-react
documentation: ug
domainurl: ##DomainURL##
---

# Sparkline types in React Sparkline component

Different shapes can be used to visualize data in a Sparkline component. You can change the Sparkline type using the [`type`](https://ej2.syncfusion.com/react/documentation/api/sparkline/sparklinemodel#type) property.

The React Sparkline component supports the following types:

* `Line` – Connects data points with a continuous line; ideal for trend visualization.
* `Column` – Renders data as vertical bars; ideal for comparing discrete values.
* `WinLoss` – Renders each data point as a positive or negative bar; ideal for win/loss or profit/loss data.
* `Pie` – Renders data as proportional slices of a circle; ideal for composition.
* `Area` – Renders a filled line chart; ideal for emphasizing magnitude over time. Here, the `Area` type is applied.

{% tabs %}
{% highlight js tabtitle="app.jsx" %}
{% include code-snippet/sparkline/getting-started-cs2/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="app.tsx" %}
{% include code-snippet/sparkline/getting-started-cs2/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/sparkline/getting-started-cs2" %}

The following code sample shows different types of sparklines.

<!-- markdownlint-disable MD036 -->

**Line**

The [`Line`] type is used to render the sparkline series as line.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/sparkline/sparkline-types-cs1/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/sparkline/sparkline-types-cs1/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/sparkline/sparkline-types-cs1" %}

**Column**

The [`Column`] type is used to render the sparkline series as column.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/sparkline/sparkline-types-cs2/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/sparkline/sparkline-types-cs2/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/sparkline/sparkline-types-cs2" %}

**Pie**

The [`Pie`] type is used to render the sparkline series as pie.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/sparkline/sparkline-types-cs3/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/sparkline/sparkline-types-cs3/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/sparkline/sparkline-types-cs3" %}

**Win Loss**

The [`WinLoss`] type is used to render the sparkline series as Win Loss.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/sparkline/sparkline-types-cs4/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/sparkline/sparkline-types-cs4/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/sparkline/sparkline-types-cs4" %}

**Area**

The [`Area`] type is used to render the sparkline series as area.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/sparkline/sparkline-types-cs5/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/sparkline/sparkline-types-cs5/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/sparkline/sparkline-types-cs5" %}