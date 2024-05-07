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

The rendered chart can be exported to `JPEG`, `PNG`, `SVG`, `PDF`, `XLSX`, or `CSV` format using the export method in chart. The input parameters for this method are `type` for format and `fileName` for result.

The optional parameters for this method are,
* `orientation` - either portrait or landscape mode during PDF export,
* `controls` - pass collections of controls for multiple export,
* `width` - width of chart export, and
* `height` - height of chart export.

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

### Adding header and footer in PDF export

In the export method, specify the following parameters to add a header and footer text to the exported PDF document:

* `header` - Specify the text that should appear at the top of the exported PDF document.
* `footer` - Specify the text that should appear at the bottom of the exported PDF document.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/chart/print-cs6/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/chart/print-cs6/app/index.tsx %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/chart/print-cs6/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/chart/print-cs6" %}

### Exporting charts into separate page during the PDF export

During PDF export, set the `exportToMultiplePage` parameter to **true** to export each chart as a separate page.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/chart/print-cs7/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/chart/print-cs7/app/index.tsx %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/chart/print-cs7/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/chart/print-cs7" %}

## Multiple chart export

You can export the multiple charts in single page by passing the multiple chart objects in the export method of chart. To export multiple charts in a single page, follow the given steps:

Initially, render more than one chart to export, and then add button to export the multiple charts. In button click, call the export method in charts, and then pass the multiple chart objects in the export method.

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

## Exporting chart using base64 string

The chart can be exported as an image in the form of a base64 string by utilizing HTML canvas. This process involves rendering the chart onto a canvas element and then converting the canvas content to a base64 string.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/chart/print-cs8/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/chart/print-cs8/app/index.tsx %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/chart/print-cs8/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/chart/print-cs8" %}