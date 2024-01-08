---
layout: post
title: Print in React 3D Chart component | Syncfusion
description: Learn here all about chart print in Syncfusion React 3D Chart component of Syncfusion Essential JS 2 and more.
control: 3D Chart
platform: ej2-react
documentation: ug
domainurl: ##DomainURL##
---

# Chart print in React 3D Chart control

## Print

The rendered chart can be printed directly from the browser by calling the public method print. ID of the chart div element must be passed as argument to that method.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/3d-chart/print-export/print-cs1/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/3d-chart/print-export/print-cs1/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/3d-chart/print-export/print-cs1" %}

## Export

The rendered chart can be exported to `JPEG`, `PNG`, `SVG`, or `PDF` format using the export method in chart. The input parameters for this method are `type` for format and `fileName` for result.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/3d-chart/print-export/print-cs2/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/3d-chart/print-export/print-cs2/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/3d-chart/print-export/print-cs2" %}