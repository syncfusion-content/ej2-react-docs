---
layout: post
title: Print and Export in React Accumulation Chart | Syncfusion
description: Learn how to print or export the Syncfusion React Accumulation Chart to PDF, image, or SVG using the public print and export methods.
control: Chart print 
platform: ej2-react
documentation: ug
domainurl: ##DomainURL##
---

# Print and Export in React Accumulation Chart

## Print

The rendered chart can be printed directly from the browser by calling the public method print.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/chart/code-path/print-cs1/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/chart/code-path/print-cs1/app/index.tsx %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/chart/code-path/print-cs1/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/chart/preview-sample/print-cs1" %}

## Export

The rendered chart can be exported to `Image`(jpeg or png) or `SVG` or `PDF` format by using the export method. Input parameters for this method are `Export` Type for `format` and `fileName` of result.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/chart/code-path/print-cs2/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/chart/code-path/print-cs2/app/index.tsx %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/chart/code-path/print-cs2/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/chart/preview-sample/print-cs2" %}
