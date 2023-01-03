---
layout: post
title: Cell in React Grid component | Syncfusion
description: Learn here all about Cell in Syncfusion React Grid component of Syncfusion Essential JS 2 and more.
control: Cell 
publishingplatform: React
documentation: ug
domainurl: ##DomainURL##
---

# Cell in React Grid component

## Cell customization

The appearance of cells can be customized by using the [`queryCellInfo`](https://ej2.syncfusion.com/angular/documentation/api/grid/#querycellinfo) event.
The [`queryCellInfo`](https://ej2.syncfusion.com/angular/documentation/api/grid/#querycellinfo) event triggers for every cell.
In that event handler, you can get [`QueryCellInfoEventArgs`](https://ej2.syncfusion.com/angular/documentation/api/grid/queryCellInfoEventArgs/) that contains the details of the cell.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/grid/rows-cs1/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/grid/rows-cs1/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

{ % previewsample "page.domainurl/code-snippet/grid/rows-cs1" % }

## Custom attributes

You can customize the grid cells by adding a CSS class to the [`customAttribute`](https://ej2.syncfusion.com/angular/documentation/api/grid/column#customattributes) property of the column.

```CSS
.e-attr {
    background: #d7f0f4;
}
```

```typescript
<ColumnDirective
    field="ShipCity" headerText="Ship City" :customAttributes={{class: 'e-attr'}} width="80">
</ColumnDirective>
```

In the below example, we have customized the cells of **OrderID** and **ShipCity** columns.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/grid/customize-cell-cs1/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/grid/customize-cell-cs1/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

{ % previewsample "page.domainurl/code-snippet/grid/customize-cell-cs1" % }

## Grid lines

The [`gridLines`](https://ej2.syncfusion.com/angular/documentation/api/grid/#gridlines) have option to display cell border and it can be defined by the [`gridLines`](https://ej2.syncfusion.com/angular/documentation/api/grid/#gridlines) property.

The available modes of grid lines are:

| Modes | Actions |
|-------|---------|
| Both | Displays both the horizontal and vertical grid lines.|
| None | No grid lines are displayed.|
| Horizontal | Displays the horizontal grid lines only.|
| Vertical | Displays the vertical grid lines only.|
| Default | Displays grid lines based on the theme.|

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/grid/autowrap-cs2/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/grid/autowrap-cs2/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

{ % previewsample "page.domainurl/code-snippet/grid/autowrap-cs2" % }

>By default, the Grid renders with **Default** mode.

## See Also

* [How could I disable default behavior for all cells and for special cells in React Grid](https://www.syncfusion.com/forums/164559/how-could-i-disable-default-behavior-for-all-cells-and-for-special-cells-in-react-grid)