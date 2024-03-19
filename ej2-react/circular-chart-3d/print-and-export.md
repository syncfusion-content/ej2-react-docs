---
layout: post
title: Print and Export in React 3D Circular Chart | Syncfusion
description: Learn here all about print and export in Syncfusion React 3D Circular Chart component of Syncfusion Essential JS 2 and more.
control: Print and Export
platform: ej2-react
documentation: ug
domainurl: ##DomainURL##
---

# Print and Export in React 3D Circular Chart component

## Print

The rendered 3D Circular Chart can be printed directly from the browser by calling the public method `print`. The ID of the 3D Circular Chart div element must be passed as the input parameter to that method.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/circular-chart/print/print-cs1/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/circular-chart/print/print-cs1/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/circular-chart/print/print-cs1" %}

## Export

The rendered 3D Circular Chart can be exported to `JPEG`, `PNG`, or `SVG` format using the `export` method. Additionally, you can export the 3D Circular Chart as a `PDF` format using the `pdfExport` method. The input parameters for this method are `type` for the format and `fileName` for the result.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/circular-chart/print/export/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/circular-chart/print/export/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/circular-chart/print/export" %}