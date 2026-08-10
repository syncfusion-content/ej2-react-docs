---
layout: post
title: Export and Print in React Range Navigator | Syncfusion
description: Learn how to export and print the Syncfusion React Range Navigator Component to PDF, image, or SVG using the export and print methods.
control: Export print
platform: ej2-react
documentation: ug
domainurl: ##DomainURL##
---

# Export and Print in React Range Navigator

## Export

The rendered Range Selector can be exported to **JPEG**, **PNG**, **SVG**, or **PDF** format by using the [`export`](https://ej2.syncfusion.com/react/documentation/api/range-navigator#export) method in the Range Selector. This method contains the following parameters:

* **Type** - To specify the export type. The component can be exported to **JPEG**, **PNG**, **SVG**, or **PDF** format.
* **File name** - To specify the file name to export.
* **Orientation** - To specify the orientation type. This is applicable only for PDF export type.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/rangenavigator/export-cs1/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/rangenavigator/export-cs1/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/rangenavigator/export-cs1" %}

## Print

The rendered Range Selector can be printed directly from the browser by calling the public method [`print`](https://ej2.syncfusion.com/react/documentation/api/range-navigator#print).

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/rangenavigator/print-cs1/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/rangenavigator/print-cs1/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/rangenavigator/print-cs1" %}