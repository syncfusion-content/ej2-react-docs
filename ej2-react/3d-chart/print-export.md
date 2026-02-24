---
layout: post
title: Print and Export in React 3D Chart component | Syncfusion
description: Learn here all about print and export in Syncfusion React 3D Chart component of Syncfusion Essential JS 2 and more.
control: 3D Chart
platform: ej2-react
documentation: ug
domainurl: ##DomainURL##
---

# Print and Export in React 3D Chart control

## Print

The rendered 3D chart can be printed directly from the browser by calling the public method [`print`](https://helpej2.syncfusion.com/react/documentation/api/chart3d/printUtils#print). The ID of the 3D chart's div element must be passed as the input parameter to that method.

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

The rendered 3D chart can be exported to `JPEG`, `PNG`, `SVG`, or `PDF` format using the [`export`](https://helpej2.syncfusion.com/react/documentation/api/chart3d/exportUtils#export) method. The input parameters for this method are: `type` for format and `fileName` for result.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/3d-chart/print-export/print-cs2/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/3d-chart/print-export/print-cs2/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/3d-chart/print-export/print-cs2" %}