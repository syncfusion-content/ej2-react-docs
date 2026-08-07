---
layout: post
title: Range Band in React Sparkline | Syncfusion
description: Highlight specific y-axis value regions in the Syncfusion React Sparkline using one or multiple range bands with custom start, end, color, and opacity.
control: Range band 
platform: ej2-react
documentation: ug
domainurl: ##DomainURL##
---

# Range Band in React Sparkline

This section explains how to customize the sparkline with multiple range bands.

## Range band customization

The range band feature is used to highlight a particular range along with the y-axis using the [`startRange`] and [`endRange`] properties. You can also customize the [`color`] and [`opacity`] of the range band.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/sparkline/range-band-cs1/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/sparkline/range-band-cs1/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/sparkline/range-band-cs1" %}

## Multiple range band customization

You can define multiple range bands to a sparkline as shown in the following code sample.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/sparkline/range-band-cs2/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/sparkline/range-band-cs2/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/sparkline/range-band-cs2" %}
