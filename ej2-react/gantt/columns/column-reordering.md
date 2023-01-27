---
layout: post
title: Column reordering in React Gantt component | Syncfusion
description: Learn here all about Column reordering in Syncfusion React Gantt component of Syncfusion Essential JS 2 and more.
control: Column reordering 
platform: ej2-react
documentation: ug
domainurl: ##DomainURL##
---

# Column reordering in React Gantt component

The column reordering can be done by dragging a column header from one index to another index within the TreeGrid. To enable reordering, set the [`allowReordering`](https://ej2.syncfusion.com/react/documentation/api/gantt/#allowreordering) property to true.

To use the column reordering feature, inject the `Reorder` module to the Gantt component.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/gantt/columnreorder-cs1/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/gantt/columnreorder-cs1/app/index.tsx %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/gantt/columnreorder-cs1/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/gantt/columnreorder-cs1" %}

> You can disable the reordering of a particular column by setting the [`columns.allowReordering`](https://ej2.syncfusion.com/react/documentation/api/gantt/column/#allowreordering) property to `false`.

## Reorder Events

During the reorder action, the gantt component triggers the below three events.

1. The [`columnDragStart`](https://ej2.syncfusion.com/react/documentation/api/gantt/#columndragstart) event triggers when column header element drag (move) starts.
2. The [`columnDrag`](https://ej2.syncfusion.com/react/documentation/api/gantt/#columndrag) event triggers when column header element is dragged (moved) continuously.
3. The [`columnDrop`](https://ej2.syncfusion.com/react/documentation/api/gantt/#columndrop) event triggers when a column header element is dropped on the target column.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/gantt/reorder-events-cs1/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/gantt/reorder-events-cs1/app/index.tsx %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/gantt/reorder-events-cs1/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/gantt/reorder-events-cs1" %}

## Reorder multiple columns

Multiple columns can be reordered at a time by using the [`reorderColumns`](https://ej2.syncfusion.com/react/documentation/api/gantt/#reordercolumns) method.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/gantt/multiplereorder-cs1/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/gantt/multiplereorder-cs1/app/index.tsx %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/gantt/multiplereorder-cs1/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/gantt/multiplereorder-cs1" %}