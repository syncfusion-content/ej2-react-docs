---
layout: post
title: Cell in React Treegrid component | Syncfusion
description: Learn here all about Cell in Syncfusion React Treegrid component of Syncfusion Essential JS 2 and more.
control: Cell 
platform: ej2-react
documentation: ug
domainurl: ##DomainURL##
---

# Cell in React Treegrid component

## Customize cell styles

The appearance of cells can be customized by using the [`queryCellInfo`](https://ej2.syncfusion.com/react/documentation/api/treegrid/#querycellinfo) event. The [`queryCellInfo`](https://ej2.syncfusion.com/react/documentation/api/treegrid/#querycellinfo) event triggers for every cell. In that event handler, you can get [`QueryCellInfoEventArgs`](https://ej2.syncfusion.com/react/documentation/api/grid/queryCellInfoEventArgs/) that contains the details of the cell.

{% tabs %}
{% highlight js tabtitle="app.jsx" %}
{% include code-snippet/treegrid/cell-cs2/app/App.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="app.tsx" %}
{% include code-snippet/treegrid/cell-cs2/app/App.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/treegrid/cell-cs2" %}

## Custom attributes

You can customize the treegrid cells by adding a CSS class to the [`customAttribute`](https://ej2.syncfusion.com/react/documentation/api/treegrid/column/#customattributes) property of the column.

```css
.e-attr {
    background: #d7f0f4;
}
```

```ts

    const customAttr = {class: 'e-attr'};

    <ColumnDirective
        field="taskID" headerText="Task ID" customAttributes={customAttr} width="90" textAlign='Right'/>
```

In the below example, we have customized the cells of *TaskID* and *StartDate* columns.

{% tabs %}
{% highlight js tabtitle="app.jsx" %}
{% include code-snippet/treegrid/cell-attribute-cs1/app/App.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="app.tsx" %}
{% include code-snippet/treegrid/cell-attribute-cs1/app/App.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/treegrid/cell-attribute-cs1" %}

## TreeGrid lines

The [`gridLines`](https://ej2.syncfusion.com/react/documentation/api/treegrid/#gridlines) have option to display cell border and it can be defined by the [`gridLines`](https://ej2.syncfusion.com/react/documentation/api/treegrid/#gridlines) property.

The available modes of grid lines are:

| Modes | Actions |
|-------|---------|
| Both | Displays both the horizontal and vertical grid lines.|
| None | No grid lines are displayed.|
| Horizontal | Displays the horizontal grid lines only.|
| Vertical | Displays the vertical grid lines only.|
| Default | Displays grid lines based on the theme.|

{% tabs %}
{% highlight js tabtitle="app.jsx" %}
{% include code-snippet/treegrid/cell-cs3/app/App.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="app.tsx" %}
{% include code-snippet/treegrid/cell-cs3/app/App.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/treegrid/cell-cs3" %}

>By default, the treegrid renders with **Default** mode.
> You can refer to our [`React Tree Grid`](https://www.syncfusion.com/react-components/react-tree-grid) feature tour page for its groundbreaking feature representations. You can also explore our [`React Tree Grid example`](https://ej2.syncfusion.com/react/demos/#/material/treegrid/treegrid-overview) to knows how to present and manipulate data.