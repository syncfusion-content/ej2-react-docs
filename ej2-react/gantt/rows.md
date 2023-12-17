---
layout: post
title: Rows in React Gantt component | Syncfusion
description: Learn here all about Rows in Syncfusion React Gantt component of Syncfusion Essential JS 2 and more.
control: Rows 
platform: ej2-react
documentation: ug
domainurl: ##DomainURL##
---

# Rows in React Gantt component

Row represents a task information from the data source, and it is possible to perform the following actions in Gantt rows.

## Row height

It is possible to change the height of the row in Gantt by setting row height in pixels to the [`rowHeight`](https://ej2.syncfusion.com/react/documentation/api/gantt/#rowheight) property. The following code example explains how to change the row height in Gantt at load time.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/gantt/rows-cs1/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/gantt/rows-cs1/app/index.tsx %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/gantt/rows-cs1/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/gantt/rows-cs1" %}

## Expand/Collapse Row

In Gantt parent tasks are expanded/collapsed by using expand/collapse icons, expand all/collapse all toolbar items and by using public methods. By default all tasks in Gantt was rendered in expanded state but we can change this status in Gantt.

### Collapse all tasks at Gantt load

All tasks available in Gantt was rendered in collapsed state by setting [`collapseAllParentTasks`](https://ej2.syncfusion.com/react/documentation/api/gantt/#collapseallparenttasks) property as `true`. The following code example shows how to use this property.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/gantt/enableCollapseAll-cs1/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/gantt/enableCollapseAll-cs1/app/index.tsx %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/gantt/enableCollapseAll-cs1/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/gantt/enableCollapseAll-cs1" %}

### Define expand/collapse status of tasks

In Gantt, we can render some tasks in collapsed state and some tasks in expanded state, this can done by defining expand status of the task in data source. This value was mapped to Gantt component by using [`expandState`](https://ej2.syncfusion.com/react/documentation/api/gantt/taskFields/#expandstate) property. The following code example shows how to use this property.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/gantt/rows-cs2/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/gantt/rows-cs2/app/index.tsx %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/gantt/rows-cs2/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/gantt/rows-cs2" %}

### Customize expand/collapse action

On expand action [`expanding`](https://ej2.syncfusion.com/react/documentation/api/gantt/#expanding) and [`expanded`](https://ej2.syncfusion.com/react/documentation/api/gantt/#expanded) event will be triggered with current expanding row’s information. Similarly on collapse action [`collapsing`](https://ej2.syncfusion.com/react/documentation/api/gantt/#collapsing) and [`collapsed`](https://ej2.syncfusion.com/react/documentation/api/gantt/#collapsed) event will be triggered. Using this events and it’s arguments we can customize the expand/collapse action. The following code example shows how to prevent the particular row from expand/collapse action using [`expanding`](https://ej2.syncfusion.com/react/documentation/api/gantt/#expanding) and [`collapsing`](https://ej2.syncfusion.com/react/documentation/api/gantt/#collapsing) event.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/gantt/rows-cs3/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/gantt/rows-cs3/app/index.tsx %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/gantt/rows-cs3/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/gantt/rows-cs3" %}

## Drag and drop

You can dynamically rearrange the rows in the Gantt control by using the `allowRowDragAndDrop` property. Using this property, row drag and drop can be enabled or disabled in Gantt. Using this feature, rows can be dropped at above and below as a sibling or child to the existing rows

To use row drag and drop, inject the `RowDD` and `Edit` module in the gantt.

To get start quickly with drag and drop and to know its type and behaviours, you can check on this video

{% youtube "https://www.youtube.com/watch?v=ZCEtHadA-5M" %}

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/gantt/rows-cs4/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/gantt/rows-cs4/app/index.tsx %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/gantt/rows-cs4/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/gantt/rows-cs4" %}

### Multiple row drag and drop

Gantt also supports dragging multiple rows at a time and drop them on any rows above, below, or at child positions. In Gantt, you can enable the multiple drag and drop by setting the `selectionSettings.type` to `Multiple` and you should enable the `allowRowDragAndDrop` property.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/gantt/rows-cs5/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/gantt/rows-cs5/app/index.tsx %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/gantt/rows-cs5/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/gantt/rows-cs5" %}

### Taskbar drag and drop between rows

The Gantt feature empowers users to efficiently reorganize records by seamlessly moving taskbar and rearranging their positions through a simple drag-and-drop action. Using this feature, rows can be dropped at above and below as a sibling or child to the existing rows.

This mode can be enable by setting the [allowTaskbarDragAndDrop](https://ej2.syncfusion.com/react/documentation/api/gantt/#allowtaskbardraganddrop) property to `true`.

To use row drag and drop feature, inject the `RowDD` and `Edit` module in Gantt.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/gantt/rows-cs12/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/gantt/rows-cs12/app/index.tsx %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/gantt/rows-cs12/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/gantt/rows-cs12" %}

### Drag and drop events

We provide various events to customize the row drag and drop action, the following table explains about the available events and its details.

Event Name |Description
-----|-----
`rowDragStartHelper`  |Triggers when clicking the drag icon or Gantt row.
`rowDragStart`  |Triggers when drag action starts in Gantt.
`rowDrag`  |Triggers while dragging the Gantt row.
`rowDrop`  |Triggers when a drag row was dropped on the target row.

### Customize row drag and drop action

In Gantt, the `rowDragStartHelper` and `rowDrop` events are triggered on row drag and drop action. Using this event, you can prevent dragging of particular record, validate the drop position, and cancel the drop action based on the target record and dragged record. The following topics explains about this.

#### Prevent dragging of particular record

You can prevent drag action of the particular record by setting the `cancel` property to `true`, which is available in the `rowDragStartHelper` event argument based on our requirement. In the following sample, drag action was restricted for first parent record and its child records.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/gantt/rows-cs6/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/gantt/rows-cs6/app/index.tsx %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/gantt/rows-cs6/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/gantt/rows-cs6" %}

#### Validating drop position

You can prevent drop action based on the drop position and target record, by this, you can prevent dropping particular task on a specific task or specific position. This can be achieved by setting the `cancel` property to `true`, which is available in the `rowDrop` event argument.

In the following sample, we have prevented the drop action based on the position. In this sample, you cannot drop row as child in any of the available rows.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/gantt/rows-cs7/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/gantt/rows-cs7/app/index.tsx %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/gantt/rows-cs7/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/gantt/rows-cs7" %}

### Prevent reordering a row as child to another row

You can prevent the default behavior of dropping rows as children to the target by setting the `cancel` property to `true` in [rowDrop](https://ej2.syncfusion.com/react/documentation/api/gantt/#rowdrop) event argument. You can also change the drop position after cancelling using [reorderRows](https://ej2.syncfusion.com/react/documentation/api/gantt/#reorderrows) method.

In the below example drop action is cancelled and dropped above to target row.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/gantt/rows-cs8/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/gantt/rows-cs8/app/index.tsx %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/gantt/rows-cs8/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/gantt/rows-cs8" %}

### Perform row drag and drop action programmatically

Gantt provides option to perform row drag and drop action programmatically by using the `reorderRows` method, this method can be used for any external actions like button click.
The following arguments are used to specify the positions to drag and drop a row:

* `fromIndexes`: Index value of source(dragging) row.
* `toIndex`: Value of target index.
* `position`: Drop positions such as above, below, or child.

The following code example shows how to drag and drop a row on button click action.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/gantt/rows-cs9/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/gantt/rows-cs9/app/index.tsx %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/gantt/rows-cs9/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/gantt/rows-cs9" %}

## Customize rows

You can customize the appearance of a row in grid side, by using the [`rowDataBound`](https://ej2.syncfusion.com/react/documentation/api/gantt/#rowdatabound) event and in chart side by using [`queryTaskbarInfo`](https://ej2.syncfusion.com/react/documentation/api/gantt/#querytaskbarinfo) event

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/gantt/rows-cs10/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/gantt/rows-cs10/app/index.tsx %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/gantt/rows-cs10/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/gantt/rows-cs10" %}

## Styling alternate rows

 You can change the background colour of alternative rows in Gantt chart, by overriding the class as shown below.

```css
.e-altrow, tr.e-chart-row:nth-child(even)  {
    background-color: #f2f2f2;
}
```

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/gantt/rowSpanning-cs1/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/gantt/rowSpanning-cs1/app/index.tsx %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/gantt/rowSpanning-cs1/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/gantt/rowSpanning-cs1" %}

## Row spanning

Gantt chart has an option to span row cells. You can achieve this using [`rowSpan`](https://ej2.syncfusion.com/react/documentation/api/gantt/queryCellInfoEventArgs/#rowspan) attribute to span cells in the [`QueryCellInfo`](https://ej2.syncfusion.com/react/documentation/api/gantt/queryCellInfoEventArgs) event.

In the following demo, **Soil test approval** cell is spanned to two rows in the **TaskName** column.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/gantt/rows-cs11/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/gantt/rows-cs11/app/index.tsx %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/gantt/rows-cs11/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/gantt/rows-cs11" %}
