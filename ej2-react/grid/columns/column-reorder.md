---
layout: post
title: Column reorder in React Grid component | Syncfusion
description: Learn here all about Column reorder in Syncfusion React Grid component of Syncfusion Essential JS 2 and more.
platform: ej2-react
control: Column reorder 
documentation: ug
domainurl: ##DomainURL##
---

# Column reorder in React Grid component

The Syncfusion React Grid component allows to reorder columns by drag and drop of a particular column header from one index to another index within the grid. This feature can be enabled by injecting the **Reorder** module in the grid.

To reorder the columns, set the [allowReordering](https://ej2.syncfusion.com/react/documentation/api/grid/#allowreordering) property to **true** in the grid.

Here's an example for column reordering in your Grid component:

{% tabs %}
{% highlight js tabtitle="App.jsx" %}
{% include code-snippet/grid/column-cs11/app/App.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="App.tsx" %}
{% include code-snippet/grid/column-cs11/app/App.tsx %}
{% endhighlight %}
{% highlight js tabtitle="datasource.jsx" %}
{% include code-snippet/grid/column-cs11/app/datasource.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="datasource.tsx" %}
{% include code-snippet/grid/column-cs11/app/datasource.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/grid/column-cs11" %}

>* You can customize the appearance of the column headers during drag and drop by using the [columnDrag](https://ej2.syncfusion.com/react/documentation/api/grid/#columndrag) and [columnDrop](https://ej2.syncfusion.com/react/documentation/api/grid/#columndrop) events.
>* When columns are reordered, the position of the corresponding column data will also be changed. As a result, you should ensure that any additional code or logic that relies on the order of the column data is updated accordingly.

## Prevent reordering for particular column

By default, all columns in the Syncfusion React Grid can be reordered by dragging and dropping their headers to another location within the grid. However, there may be certain columns that you do not want to be reordered. In such cases, you can set the [allowReordering](https://ej2.syncfusion.com/react/documentation/api/grid/column/#allowreordering) property of that particular column to **false**. Here is an example that demonstrates how to prevent reordering for a specific column:

In this example, the **ShipCity** column is prevented from being reordered by setting the `allowReordering` property to **false**.

{% tabs %}
{% highlight js tabtitle="App.jsx" %}
{% include code-snippet/grid/reorder-cs1/app/App.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="App.tsx" %}
{% include code-snippet/grid/reorder-cs1/app/App.tsx %}
{% endhighlight %}
{% highlight js tabtitle="datasource.jsx" %}
{% include code-snippet/grid/reorder-cs1/app/datasource.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="datasource.tsx" %}
{% include code-snippet/grid/reorder-cs1/app/datasource.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/grid/reorder-cs1" %}

## Reorder columns externally

The Syncfusion Grid React allows you to reorder columns externally, which means that using methods you can programmatically move columns around within the grid, based on their index or target index, or by using their field name.

> When reordering columns externally, you must set the [allowReordering](https://ej2.syncfusion.com/react/documentation/api/grid/column/#allowreordering) property of the grid to **true**.

### Reorder column based on index

You can use the [reorderColumnByIndex](https://ej2.syncfusion.com/react/documentation/api/grid/#reordercolumnbyindex) method to reorder columns based on their current index. This method takes two arguments:

* **fromIndex** : Current index of the column to be reordered
* **toIndex** : New index of the column after the reordering

Here is an example of how to use the `reorderColumnByIndex` method:

In this example, we are moving the column at index **1** to index **3**.

{% tabs %}
{% highlight js tabtitle="App.jsx" %}
{% include code-snippet/grid/reorder-cs2/app/App.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="App.tsx" %}
{% include code-snippet/grid/reorder-cs2/app/App.tsx %}
{% endhighlight %}
{% highlight js tabtitle="datasource.jsx" %}
{% include code-snippet/grid/reorder-cs2/app/datasource.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="datasource.tsx" %}
{% include code-snippet/grid/reorder-cs2/app/datasource.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/grid/reorder-cs2" %}

### Reorder column based on target index

You can also use the [reorderColumnByTargetIndex](https://ej2.syncfusion.com/react/documentation/api/grid/#reordercolumnbytargetindex) method to reorder single column or multiple columns based on the target index. This method takes two arguments:

* **fieldName**: Field name of the column to be reordered
* **toIndex**: New index of the column after the reordering

Here is an example of how to use the `reorderColumnByTargetIndex` method to reorder single column and multiple columns based on target index:

{% tabs %}
{% highlight js tabtitle="App.jsx" %}
{% include code-snippet/grid/reorder-cs3/app/App.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="App.tsx" %}
{% include code-snippet/grid/reorder-cs3/app/App.tsx %}
{% endhighlight %}
{% highlight js tabtitle="datasource.jsx" %}
{% include code-snippet/grid/reorder-cs3/app/datasource.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="datasource.tsx" %}
{% include code-snippet/grid/reorder-cs3/app/datasource.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/grid/reorder-cs3" %}

### Reorder column based on field names

The [reorderColumns](https://ej2.syncfusion.com/react/documentation/api/grid/#reordercolumns) method of the Grid allows you to reorder single column or list of columns based on their field names. This method takes two arguments: 

* **fromFName**: The field name of the column you want to move.
* **toFName**: The field name of the column you want to move the column to.

Here is an example of how to use the `reorderColumns` method to reorder single column and multiple columns based on field names:

{% tabs %}
{% highlight js tabtitle="App.jsx" %}
{% include code-snippet/grid/column-cs13/app/App.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="App.tsx" %}
{% include code-snippet/grid/column-cs13/app/App.tsx %}
{% endhighlight %}
{% highlight js tabtitle="datasource.jsx" %}
{% include code-snippet/grid/column-cs13/app/datasource.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="datasource.tsx" %}
{% include code-snippet/grid/column-cs13/app/datasource.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/grid/column-cs13" %}

## Reorder events

When reordering columns in the Syncfusion React Grid component, you may want to take some specific action in response to the drag and drop events. To handle these events, you can define event handlers for the following events:

1.The [columnDragStart](https://ej2.syncfusion.com/react/documentation/api/grid/#columndragstart) event triggers when column header element drag (move) starts.

2.The [columnDrag](https://ej2.syncfusion.com/react/documentation/api/grid/#columndrag) event triggers when column header element is dragged (moved) continuously.

3.The [columnDrop](https://ej2.syncfusion.com/react/documentation/api/grid/#columndrop) event triggers when a column header element is dropped on the target column.

In the following example, we have implemented the `columnDragStart`, `columnDrag`, and `columnDrop` events in the Syncfusion Grid component.

{% tabs %}
{% highlight js tabtitle="App.jsx" %}
{% include code-snippet/grid/column-cs14/app/App.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="App.tsx" %}
{% include code-snippet/grid/column-cs14/app/App.tsx %}
{% endhighlight %}
{% highlight js tabtitle="datasource.jsx" %}
{% include code-snippet/grid/column-cs14/app/datasource.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="datasource.tsx" %}
{% include code-snippet/grid/column-cs14/app/datasource.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/grid/column-cs14" %}