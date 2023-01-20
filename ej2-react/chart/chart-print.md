---
layout: post
title: Chart print in React Chart component | Syncfusion
description: Learn here all about Chart print in Syncfusion React Chart component of Syncfusion Essential JS 2 and more.
control: Chart print 
platform: ej2-react
documentation: ug
domainurl: ##DomainURL##
---

# Chart print in React Chart component

## Print

The rendered chart can be printed directly from the browser by calling the public method print. From chart instance itself, it is called.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/chart/print-cs3/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/chart/print-cs3/app/index.tsx %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/chart/print-cs3/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/chart/print-cs3" %}

## Export

The rendered chart can be exported to `JPEG` , `PNG`, `SVG`or `PDF` format by using export method in chart.Input parameters for this method are `Export Type` for format and `fileName` of result.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/chart/print-cs4/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/chart/print-cs4/app/index.tsx %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/chart/print-cs4/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/chart/print-cs4" %}

## Exporting multiple charts

You can export the multiple charts in single page by passing the multiple chart instances to `export` method of chart.

To export multiple charts in a single page, render more than one chart to export. In button click, call the `export` method of chart by passing multiple chart objects.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/chart/print-cs5/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/chart/print-cs5/app/index.tsx %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/chart/print-cs5/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/chart/print-cs5" %}
