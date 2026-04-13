---
layout: post
title: Row drag and drop in React TreeGrid component | Syncfusion
description: Learn here all about Row drag and drop in Syncfusion React TreeGrid component of Syncfusion Essential JS 2 and more.
control: Row drag and drop 
platform: ej2-react
documentation: ug
domainurl: ##DomainURL##
---

# Row drag and drop in React TreeGrid

TreeGrid rows can be reordered or dropped into another TreeGrid or custom control by setting [allowRowDragAndDrop](https://ej2.syncfusion.com/react/documentation/api/treegrid/#allowrowdraganddrop) to true.

To use row drag and drop, inject the **RowDD** module into the TreeGrid.

## Drag and drop within TreeGrid

Row drag and drop supports reordering within the same TreeGrid using the drag icon. Enable it by setting [allowRowDragAndDrop](https://ej2.syncfusion.com/react/documentation/api/treegrid/#allowrowdraganddrop) to true. Rows can be dropped above, below, or as a child of the target row based on the drop position.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/treegrid/row-cs1/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/treegrid/row-cs1/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/treegrid/row-cs1" %}

> * Selection must be enabled for row drag and drop.
> * Multiple rows can be selected by clicking and dragging inside the TreeGrid.
> * For multiple row selection, set the [type](https://ej2.syncfusion.com/react/documentation/api/treegrid/selectionSettings/#type) property to `multiple`.
> * The [isPrimaryKey](https://ej2.syncfusion.com/react/documentation/api/treegrid/column/#isprimarykey) property is required to perform row drag-and-drop.

## Drag and drop to another TreeGrid

To drag and drop between two TreeGrids, enable [allowRowDragAndDrop](https://ej2.syncfusion.com/react/documentation/api/treegrid/#allowrowdraganddrop) and set the target TreeGrid ID in the [targetID](https://ej2.syncfusion.com/react/documentation/api/treegrid/rowDropSettings/#targetid) property of `rowDropSettings`.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/treegrid/row-cs2/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/treegrid/row-cs2/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/treegrid/row-cs2" %}

## Drag and drop events

The following events are triggered during row drag and drop:

* [rowDragStartHelper](https://ej2.syncfusion.com/react/documentation/api/treegrid/#rowdragstarthelper) - Triggers when the drag icon or row is clicked; customize the drag element based on criteria.
* [rowDragStart](https://ej2.syncfusion.com/react/documentation/api/treegrid/#rowdragstart) - Triggers when a row drag starts.
* [rowDrag](https://ej2.syncfusion.com/react/documentation/api/treegrid/#rowdrag) - Triggers while a row is being dragged.
* [rowDrop](https://ej2.syncfusion.com/react/documentation/api/treegrid/#rowdrop) - Triggers when the dragged element is dropped on the target element.

## Prevent reordering a row as child to another row

Prevent dropping rows as children by setting `cancel` to `true` in the [rowDrop](https://ej2.syncfusion.com/react/documentation/api/treegrid/#rowdrop) event arguments. After canceling, adjust the drop position programmatically using the [reorderRows](https://ej2.syncfusion.com/react/documentation/api/treegrid/#reorderrows) method.

In the following example, the drop action is canceled and the row is dropped above the target row.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/treegrid/row-cs3/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/treegrid/row-cs3/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/treegrid/row-cs3" %}