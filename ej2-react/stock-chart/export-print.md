---
layout: post
title: Export and Print in React Stock Chart | Syncfusion
description: Learn how to export and print the Syncfusion React Stock Chart Component to PDF, image, or SVG using the public export and print methods.
control: Export print
platform: ej2-react
documentation: ug
domainurl: ##DomainURL##
---

# Export and Print in React Stock Chart

The rendered stock chart can be exported to `JPEG`, `PNG`, `SVG`, or `PDF` format using the export dropdown button in the period selector toolbar. You can choose the required format using the export dropdown button in stock-chart.

The rendered stock chart can be printed directly using print button in period selector toolbar.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/stock-chart/code-path/export-print-cs1/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/stock-chart/code-path/export-print-cs1/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/stock-chart/export-print-cs1" %}

## Disable Export and print

To empty the value of `exportType` to disable the Export button.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/stock-chart/code-path/export-print-cs2/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/stock-chart/code-path/export-print-cs2/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/stock-chart/export-print-cs2" %}