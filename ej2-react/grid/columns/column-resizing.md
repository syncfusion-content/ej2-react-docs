---
layout: post
title: Column resizing in React Grid component | Syncfusion
description: Learn here all about Column resizing in Syncfusion React Grid component of Syncfusion Essential JS 2 and more.
control: Column resizing 
platform: ej2-react
documentation: ug
domainurl: ##DomainURL##
---

# Column resizing in React Grid component

Columns width can be resized by clicking and dragging at the right edge of column header.
While dragging, the width of respective column will be resized immediately.
Each columns can be auto resized by double clicking at the right edge of column header.
It will fit the width of that column based on widest cell content.
To enable the column resize, set the [`allowResizing`](https://ej2.syncfusion.com/angular/documentation/api/grid/#allowresizing) property to true.

To use the column resize, inject **Resize** module in the grid.

{% tabs %}
{% highlight js tabtitle="App.jsx" %}
{% include code-snippet/grid/column-cs15/app/App.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="App.tsx" %}
{% include code-snippet/grid/column-cs15/app/App.tsx %}
{% endhighlight %}
{% highlight js tabtitle="datasource.jsx" %}
{% include code-snippet/grid/column-cs15/app/datasource.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="datasource.tsx" %}
{% include code-snippet/grid/column-cs15/app/datasource.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/grid/column-cs15" %}

> You can disable Resizing for a particular column, by specifying [`columns.allowResizing`](https://ej2.syncfusion.com/angular/documentation/api/grid/columnModel/#allowresizing) to false.
> In RTL mode, you can click and drag the left edge of header cell to resize the column.

## Min and max width

Columns can be restricted to resize in between minimum and maximum width by defining the
[`columns->minWidth`](https://ej2.syncfusion.com/angular/documentation/api/grid/columnModel/#minwidth) and [`columns->maxWidth`](https://ej2.syncfusion.com/angular/documentation/api/grid/columnModel/#maxwidth).

In the below sample, **OrderID**, **Ship Name** and **Ship Country** columns are defined with minimum and maximum width.

{% tabs %}
{% highlight js tabtitle="App.jsx" %}
{% include code-snippet/grid/column-cs16/app/App.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="App.tsx" %}
{% include code-snippet/grid/column-cs16/app/App.tsx %}
{% endhighlight %}
{% highlight js tabtitle="datasource.jsx" %}
{% include code-snippet/grid/column-cs16/app/datasource.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="datasource.tsx" %}
{% include code-snippet/grid/column-cs16/app/datasource.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/grid/column-cs16" %}

> The `maxWidth` and `minWidth` properties will be considered only when the user resizes the column. When resizing the window, these properties will not be considered. This is because columns cannot be re-rendered when resizing the window.

## Resize stacked column

Stacked columns can be resized by clicking and dragging the right edge of the stacked column header. While dragging, the width of the respective child columns will be resized at the same time. You can disable resize for any particular stacked column by setting [`allowResizing`](https://ej2.syncfusion.com/angular/documentation/api/grid/columnModel/#allowresizing) as **false** to its columns.

In this example, we have disabled resize for **Ship City** column.

{% tabs %}
{% highlight js tabtitle="App.jsx" %}
{% include code-snippet/grid/column-cs17/app/App.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="App.tsx" %}
{% include code-snippet/grid/column-cs17/app/App.tsx %}
{% endhighlight %}
{% highlight js tabtitle="datasource.jsx" %}
{% include code-snippet/grid/column-cs17/app/datasource.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="datasource.tsx" %}
{% include code-snippet/grid/column-cs17/app/datasource.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/grid/column-cs17" %}

## Touch interaction

When you tap at the right edge of header cell, a floating handler will be visible over the right border of column.
To resize the column, tap and drag the floating handler as much you need. You can also autoFit a column by using the Column menu of the grid.

The following screenshot represents the column resizing in the touch device.

![Touch Interaction](../images/column-resizing.jpg)

## Resizing events

During the resizing action, the grid component triggers the below three events.

1. The [`resizeStart`](https://ej2.syncfusion.com/angular/documentation/api/grid/#resizestart) event triggers when column resize starts.
2. The [`resizing`](https://ej2.syncfusion.com/angular/documentation/api/grid/#resizing) event triggers when column header element is dragged (moved) continuously..
3. The [`resizeStop`](https://ej2.syncfusion.com/angular/documentation/api/grid/#resizeStop) event triggers when column resize ends.

{% tabs %}
{% highlight js tabtitle="App.jsx" %}
{% include code-snippet/grid/column-cs18/app/App.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="App.tsx" %}
{% include code-snippet/grid/column-cs18/app/App.tsx %}
{% endhighlight %}
{% highlight js tabtitle="datasource.jsx" %}
{% include code-snippet/grid/column-cs18/app/datasource.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="datasource.tsx" %}
{% include code-snippet/grid/column-cs18/app/datasource.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/grid/column-cs18" %}