---
layout: post
title: Column resizing in React Treegrid component | Syncfusion
description: Learn here all about Column resizing in Syncfusion React Treegrid component of Syncfusion Essential JS 2 and more.
control: Column resizing 
platform: ej2-react
documentation: ug
domainurl: ##DomainURL##
---

# Column resizing in React Treegrid component

Column width can be resized by clicking and dragging the right edge of the column header. While dragging, the width of the respective column will be resized immediately. Each column can be auto resized by double-clicking the right edge of the column header to fit the width of that column based on the widest cell content. To enable column resize, set the [`allowResizing`](https://ej2.syncfusion.com/react/documentation/api/treegrid/#allowresizing) property to true.

To use the column resize, inject **Resize** module in the treegrid.

{% tabs %}
{% highlight js tabtitle="app.jsx" %}
{% include code-snippet/treegrid/column-cs5/app/App.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="app.tsx" %}
{% include code-snippet/treegrid/column-cs5/app/App.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/treegrid/column-cs5" %}

> You can disable Resizing for a particular column, by specifying [`columns.allowResizing`](https://ej2.syncfusion.com/react/documentation/api/treegrid/columnModel/#allowresizing) to false.
> In RTL mode, you can click and drag the left edge of header cell to resize the column.

## Min and max width

Column resize can be restricted between minimum and maximum width by defining the [`columns->minWidth`](https://ej2.syncfusion.com/react/documentation/api/treegrid/column/#minwidth) and [`columns->maxWidth`](https://ej2.syncfusion.com/react/documentation/api/treegrid/column/#maxwidth).

In the following sample, minimum and maximum width are defined for **Duration**, and **Task Name** columns.

{% tabs %}
{% highlight js tabtitle="app.jsx" %}
{% include code-snippet/treegrid/column-cs6/app/App.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="app.tsx" %}
{% include code-snippet/treegrid/column-cs6/app/App.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/treegrid/column-cs6" %}

## Resize stacked column

Stacked columns can be resized by clicking and dragging the right edge of the stacked column header. While dragging, the width of the respective child columns will be resized at the same time. You can disable resize for particular stacked column by setting [`allowResizing`](https://ej2.syncfusion.com/react/documentation/api/treegrid/column/#allowresizing) as **false** to its columns.

{% tabs %}
{% highlight js tabtitle="app.jsx" %}
{% include code-snippet/treegrid/column-cs7/app/App.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="app.tsx" %}
{% include code-snippet/treegrid/column-cs7/app/App.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/treegrid/column-cs7" %}

## Touch interaction

When the right edge of the header cell is tapped, a floating handler will be visible over the right border of the column. To resize the column, tap and drag the floating handler as needed.

The following screenshot represents the column resizing in touch device.

<!-- markdownlint-disable MD033 -->
<img src="../images/column-resizing.png" alt="Touch interaction image" style="width:320px;height: 620px">
<!-- markdownlint-enable MD033 -->