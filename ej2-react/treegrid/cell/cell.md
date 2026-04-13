---
layout: post
title: Cell in React TreeGrid component | Syncfusion
description: Learn here all about Cell in Syncfusion React TreeGrid component of Syncfusion Essential JS 2 and more.
control: Cell 
platform: ej2-react
documentation: ug
domainurl: ##DomainURL##
---

# Cell in React TreeGrid 

In the Syncfusion React TreeGrid, a cell represents the intersection of a row and column, displaying specific data values. Each cell can contain text, numbers, HTML content, or custom templates. The TreeGrid provides comprehensive options to customize cell appearance, behavior, and content rendering to create interactive and visually clear data presentations.

## Displaying the HTML content

Displaying HTML content is useful for formatted values such as images, links, or tables. HTML tags can be rendered in both headers and content. By default, HTML is encoded to prevent security risks.To render raw HTML tags without encoding, set the [disableHtmlEncode](https://ej2.syncfusion.com/react/documentation/api/treegrid/column/#disablehtmlencode) property to false.

The following example demonstrates rendering HTML content in headers and cells by configuring the `disableHtmlEncode` property:

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

Auto wrap allows cell content to flow to the next line when it exceeds the column width. Wrapping occurs at whitespace boundaries. Enable auto wrap by setting [allowTextWrap](https://ej2.syncfusion.com/react/documentation/api/treegrid/#allowtextwrap) to **true**, and configure behavior using [textWrapSettings.wrapMode](https://ej2.syncfusion.com/react/documentation/api/treegrid/#textwrapsettings).

There are three types of **wrapMode**:

* **Both**: Default. Wraps both content and header.
* **Header**: Wraps header only.
* **Content**: Wraps content only.

> When a column width is not specified, auto wrap adjusts based on the TreeGrid width.

The following example sets `allowTextWrap` to **true** and `textWrapSettings.wrapMode` to **Content**:

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

Cell appearance can be customized using the [queryCellInfo](https://ej2.syncfusion.com/react/documentation/api/treegrid/#querycellinfo) event, which triggers for every cell. The event provides [QueryCellInfoEventArgs](https://ej2.syncfusion.com/react/documentation/api/grid/queryCellInfoEventArgs/) with details of the cell.

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

Cells can be customized by adding a CSS class through the [customAttribute](https://ej2.syncfusion.com/react/documentation/api/treegrid/column/#customattributes) property of the column.

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

In the following example, cells in the *TaskID* and *StartDate* columns are customized.

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

Clip mode manages long text that overflows cell boundaries. It supports truncation, ellipsis, and ellipsis with tooltip. Configure the behavior using the [clipMode](https://ej2.syncfusion.com/react/documentation/api/treegrid/column/#clipmode) property.

There are three types of `clipMode`:

* **Clip**: Truncates overflow content.
* **Ellipsis**: Displays an ellipsis for overflow content.
* **EllipsisWithTooltip**: Displays an ellipsis and shows a tooltip on hover.

The following example demonstrates how to set the `clipMode` property:

{% tabs %}
{% highlight js tabtitle="app.jsx" %}
{% include code-snippet/treegrid/cell-cs4/app/App.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="app.tsx" %}
{% include code-snippet/treegrid/cell-cs4/app/App.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/treegrid/cell-cs4" %}

> By default, `columns.clipMode` is **Ellipsis**.

## TreeGrid lines

The [gridLines](https://ej2.syncfusion.com/react/documentation/api/treegrid/#gridlines) property controls cell borders.

The available modes are:

| Modes | Actions |
|-------|---------|
| Both | Displays both horizontal and vertical grid lines. |
| None | Displays no grid lines. |
| Horizontal | Displays horizontal grid lines only. |
| Vertical | Displays vertical grid lines only. |
| Default | Displays grid lines based on the theme. |

{% tabs %}
{% highlight js tabtitle="app.jsx" %}
{% include code-snippet/treegrid/cell-cs3/app/App.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="app.tsx" %}
{% include code-snippet/treegrid/cell-cs3/app/App.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/treegrid/cell-cs3" %}

> By default, the TreeGrid renders in **Default** mode.
> Refer to the [React Tree Grid](https://www.syncfusion.com/react-ui-components/react-tree-grid) feature tour for key capabilities. Explore the [React Tree Grid example](https://ej2.syncfusion.com/react/demos/#/material/treegrid/treegrid-overview) to learn how to present and manipulate data.