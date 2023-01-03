---
layout: post
title: Column chooser in React Grid component | Syncfusion
description: Learn here all about Column chooser in Syncfusion React Grid component of Syncfusion Essential JS 2 and more.
control: Column chooser 
publishingplatform: React
documentation: ug
domainurl: ##DomainURL##
---

# Column chooser in React Grid component

The column chooser has options to show or hide columns dynamically. It can be enabled by defining the [`showColumnChooser`](https://ej2.syncfusion.com/angular/documentation/api/grid/#showcolumnchooser) as true.

To use the column chooser, inject the **ColumnChooser** module in the grid.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/grid/column-cs5/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/grid/column-cs5/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

{ % previewsample "page.domainurl/code-snippet/grid/column-cs5" % }

> You can hide the column names in column chooser by defining the [`columns.showInColumnChooser`](https://ej2.syncfusion.com/angular/documentation/api/grid/column/#showincolumnchooser) as **false**.

## Open column chooser by external button

The Column chooser can be displayed on a page through external button by invoking
the [`openColumnChooser`](https://ej2.syncfusion.com/angular/documentation/api/grid/columnChooser/#opencolumnchooser) method with **X** and **Y** axis positions.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/grid/column-cs6/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/grid/column-cs6/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

{ % previewsample "page.domainurl/code-snippet/grid/column-cs6" % }