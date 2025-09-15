---
layout: post
title: Cell in React Treegrid component | Syncfusion
description: Learn here all about Cell in Syncfusion React Treegrid component of Syncfusion Essential JS 2 and more.
control: Cell 
platform: ej2-react
documentation: ug
domainurl: ##DomainURL##
---

# Cell in React TreeGrid 

In the Syncfusion React TreeGrid, a cell represents the intersection of a row and column, displaying specific data values. Each cell can contain text, numbers, HTML content, or custom templates. The TreeGrid provides comprehensive options to customize cell appearance, behavior, and content rendering to create interactive and visually appealing data presentations.

## Displaying the HTML content

Displaying HTML content in a TreeGrid can be useful in scenarios where you want to display formatted content, such as images, links, or tables, in a tabular format. TreeGrid allows you to display HTML tags in the TreeGrid header and content. By default, the HTML content is encoded to prevent potential security vulnerabilities. However, you can enable the [disableHtmlEncode](https://ej2.syncfusion.com/react/documentation/api/treegrid/column/#disablehtmlencode) property by setting the value as false to display HTML tags without encoding. This feature is useful when you want to display HTML content in a TreeGrid cell.

The following example demonstrates how to display HTML content in TreeGrid headers and cells by configuring the `disableHtmlEncode` property:

{% tabs %}
{% highlight js tabtitle="app.jsx" %}
{% include code-snippet/treegrid/cell-cs5/app/App.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="app.tsx" %}
{% include code-snippet/treegrid/cell-cs5/app/App.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/treegrid/cell-cs5" %}

## Autowrap the TreeGrid content

The auto wrap allows the cell content of the TreeGrid to wrap to the next line when it exceeds the boundary of the cell width. The cell content wrapping works based on the position of white space between words. To enable auto wrap, set the [allowTextWrap](https://ej2.syncfusion.com/react/documentation/api/treegrid/#allowtextwrap) property to **true**. You can configure the auto wrap mode by setting the [textWrapSettings.wrapMode](https://ej2.syncfusion.com/react/documentation/api/treegrid/#textwrapsettings) property.

There are three types of **wrapMode**. They are:

* **Both**: This value is set by default. Auto wrap will be enabled for both the content and the header.
* **Header**: Auto wrap will be enabled only for the header.
* **Content**: Auto wrap will be enabled only for the content.

> When a column width is not specified, then auto wrap of columns will be adjusted with respect to the TreeGrid's width.

The following example demonstrates how to set the `allowTextWrap` property to **true** and specify the wrap mode as **Content** by setting the `textWrapSettings.wrapMode` property.

{% tabs %}
{% highlight js tabtitle="app.jsx" %}
{% include code-snippet/treegrid/cell-cs1/app/App.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="app.tsx" %}
{% include code-snippet/treegrid/cell-cs1/app/App.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/treegrid/cell-cs1" %}

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

## Clip mode

The clip mode feature is useful when you have a long text or content in a TreeGrid cell, which overflows the cell’s width or height. It provides options to display the overflow content by either truncating it, displaying an ellipsis or displaying an ellipsis with a tooltip. You can enable this feature by setting [clipMode](https://ej2.syncfusion.com/react/documentation/api/treegrid/column/#clipmode) property to one of the below available options.

There are three types of `clipMode` available:

* **Clip**: Truncates the cell content when it overflows its area.
* **Ellipsis**: Displays ellipsis when the cell content overflows its area.
* **EllipsisWithTooltip**: Displays ellipsis when the cell content overflows its area, also it will display the tooltip while hover on ellipsis is applied.

The following example demonstrates, how to set the `clipMode` property:

{% tabs %}
{% highlight js tabtitle="app.jsx" %}
{% include code-snippet/treegrid/cell-cs4/app/App.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="app.tsx" %}
{% include code-snippet/treegrid/cell-cs4/app/App.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/treegrid/cell-cs4" %}

> By default, `columns.clipMode` value is **Ellipsis**.

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
> You can refer to our [`React Tree Grid`](https://www.syncfusion.com/react-ui-components/react-tree-grid) feature tour page for its groundbreaking feature representations. You can also explore our [`React Tree Grid example`](https://ej2.syncfusion.com/react/demos/#/material/treegrid/treegrid-overview) to knows how to present and manipulate data.