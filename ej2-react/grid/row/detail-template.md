---
layout: post
title: Detail template in React Grid component | Syncfusion
description: Learn here all about Detail template in Syncfusion React Grid component of Syncfusion Essential JS 2 and more.
control: Detail template 
platform: ej2-react
documentation: ug
domainurl: ##DomainURL##
---

# Detail template in React Grid component

The detail template provides additional information about a particular row by expanding or collapsing detail content. The [detailTemplate](https://ej2.syncfusion.com/angular/documentation/api/grid/#detailtemplate) property accepts the template for the detail row.

{% tabs %}
{% highlight js tabtitle="app.jsx" %}
{% include code-snippet/grid/row-template-cs1/app/App.jsx %}
{% endhighlight %}
{% highlight js tabtitle="datasource.jsx" %}
{% include code-snippet/grid/row-template-cs1/app/datasource.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="app.tsx" %}
{% include code-snippet/grid/row-template-cs1/app/App.tsx %}
{% endhighlight %}
{% highlight ts tabtitle="datasource.tsx" %}
{% include code-snippet/grid/row-template-cs1/app/datasource.tsx %}
{% endhighlight %}
{% endtabs %}

{ % previewsample "page.domainurl/code-snippet/grid/row-template-cs1" % }

## Rendering custom component

To render the custom component inside the detail row, define the template in the [detailTemplate](https://ej2.syncfusion.com/angular/documentation/api/grid/#detailtemplate) and render the
component in the [detailDataBound](https://ej2.syncfusion.com/angular/documentation/api/grid/#detaildatabound-emittypedetaildataboundeventargs) event.

For example, to render grid inside the detail row, place an HTML div element as the [detailTemplate](https://ej2.syncfusion.com/angular/documentation/api/grid/#detailtemplate) and render the DIV element as grid component in the [detailDataBound](https://ej2.syncfusion.com/angular/documentation/api/grid/#detaildatabound-emittypedetaildataboundeventargs) event.

{% tabs %}
{% highlight js tabtitle="app.jsx" %}
{% include code-snippet/grid/row-template-cs2/app/App.jsx %}
{% endhighlight %}
{% highlight js tabtitle="datasource.jsx" %}
{% include code-snippet/grid/row-template-cs2/app/datasource.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="app.tsx" %}
{% include code-snippet/grid/row-template-cs2/app/App.tsx %}
{% endhighlight %}
{% highlight ts tabtitle="datasource.tsx" %}
{% include code-snippet/grid/row-template-cs2/app/datasource.tsx %}
{% endhighlight %}
{% endtabs %}

{ % previewsample "page.domainurl/code-snippet/grid/row-template-cs2" % }

## Expand by external button

By default, detail rows render in collapsed state. You can expand a detail row by invoking the [expand](https://ej2.syncfusion.com/angular/documentation/api/grid/detailRow/#expand) method using the external button.

{% tabs %}
{% highlight js tabtitle="app.jsx" %}
{% include code-snippet/grid/detail-template-cs1/app/App.jsx %}
{% endhighlight %}
{% highlight js tabtitle="datasource.jsx" %}
{% include code-snippet/grid/detail-template-cs1/app/datasource.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="app.tsx" %}
{% include code-snippet/grid/detail-template-cs1/app/App.tsx %}
{% endhighlight %}
{% highlight ts tabtitle="datasource.tsx" %}
{% include code-snippet/grid/detail-template-cs1/app/datasource.tsx %}
{% endhighlight %}
{% endtabs %}

{ % previewsample "page.domainurl/code-snippet/grid/detail-template-cs1" % }

## Limitations for detail template

Detail template is not supported with the following features:

* Frozen rows and columns
* Immutable mode
* Infinite scrolling
* Virtual scrolling
* Pdf export
* Excel export
* Print
* Row template
* Row spanning
* Column spanning
* Lazy load grouping
* State persistence
* Hierarchy Grid