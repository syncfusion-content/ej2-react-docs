---
layout: post
title: Smithchart print in React Smithchart component | Syncfusion
description: Learn here all about Smithchart print in Syncfusion React Smithchart component of Syncfusion Essential JS 2 and more.
control: Smithchart print 
platform: ej2-react
documentation: ug
domainurl: ##DomainURL##
---

# Smithchart print in React Smithchart component

## Print

The rendered Smith chart can be printed directly from browser by calling the public method print. The ID of the Smith chart's div element must be passed as an argument to the public method.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/smithchart/smithchart-print-cs1/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/smithchart/smithchart-print-cs1/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/smithchart/smithchart-print-cs1" %}

## Export

The rendered Smith chart can be exported to JPEG, PNG, SVG, or PDF format using the export method. The input parameters for this method are Export Type for format and fileName for result.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/smithchart/smithchart-print-cs2/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/smithchart/smithchart-print-cs2/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/smithchart/smithchart-print-cs2" %}