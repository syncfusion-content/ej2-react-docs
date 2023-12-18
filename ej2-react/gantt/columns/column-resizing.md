---
layout: post
title: Column resizing in React Gantt component | Syncfusion
description: Learn here all about Column resizing in Syncfusion React Gantt component of Syncfusion Essential JS 2 and more.
control: Column resizing 
platform: ej2-react
documentation: ug
domainurl: ##DomainURL##
---

# Column resizing in React Gantt component

The column width can be resized by clicking and dragging the right edge of the column header. While dragging, the width of the column will be resized immediately. Each column can be auto resized by double-clicking the right edge of the column header to fit the width of that column based on the widest cell content. To resize the column, set the [`allowResizing`](https://ej2.syncfusion.com/react/documentation/api/gantt/#allowresizing) property to `true`. The following code example shows how to enable the column resize feature in the Gantt component.

To resize the column, inject the `Resize` module into the Gantt component.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/gantt/columnresize-cs1/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/gantt/columnresize-cs1/app/index.tsx %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/gantt/columnresize-cs1/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/gantt/columnresize-cs1" %}

> You can disable resizing for a particular column by setting the [`columns.allowResizing`](https://ej2.syncfusion.com/react/documentation/api/gantt/column/#allowresizing) to `false`.

## Defining minimum and maximum column width

The column resizing can be restricted between minimum and maximum widths by defining the [`columns->minWidth`](https://ej2.syncfusion.com/react/documentation/api/gantt/column/#minwidth) and [`columns->maxWidth`](https://ej2.syncfusion.com/react/documentation/api/gantt/column/#maxwidth) properties.

In the following example, the minimum and maximum widths are defined for the `Duration`, and `Task Name` columns.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/gantt/columnwidth-cs1/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/gantt/columnwidth-cs1/app/index.tsx %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/gantt/columnwidth-cs1/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/gantt/columnwidth-cs1" %}

## Touch interaction

When the right edge of the column header cell is `tapped`, a floating handler will be visible over the right border of the column. To [`resize`](columns/#column-resizing) the column, drag the floating handler as needed.

The following screenshot represents the Gantt column resizing in touch device.

![Column resize](images/column-resize.png)