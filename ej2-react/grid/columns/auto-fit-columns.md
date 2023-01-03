---
layout: post
title: Auto fit columns in React Grid component | Syncfusion
description: Learn here all about Auto fit columns in Syncfusion React Grid component of Syncfusion Essential JS 2 and more.
control: Auto fit columns 
publishingplatform: React
documentation: ug
domainurl: ##DomainURL##
---

# Auto fit columns in React Grid component

The [`autoFitColumns`](https://ej2.syncfusion.com/angular/documentation/api/grid/#autofitcolumns) method resizes the column to fit the widest cell's content without wrapping. You can autofit a specific columns at initial rendering by invoking the [`autoFitColumns`](https://ej2.syncfusion.com/angular/documentation/api/grid/#autofitcolumns) method in [`dataBound`](https://ej2.syncfusion.com/angular/documentation/api/grid/#databound) event.

To use the [`autoFitColumns`](https://ej2.syncfusion.com/angular/documentation/api/grid/#autofitcolumns) method, inject the **Resize** module in the grid.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/grid/column-cs1/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/grid/column-cs1/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

{ % previewsample "page.domainurl/code-snippet/grid/column-cs1" % }

> You can autofit all columns, by invoking [`autoFitColumns`](https://ej2.syncfusion.com/angular/documentation/api/grid/#autofitcolumns) method without column name.