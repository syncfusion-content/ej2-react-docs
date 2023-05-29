---
layout: post
title: Grid customization in React Pivotview component | Syncfusion
description: Learn here all about Grid customization in Syncfusion React Pivotview component of Syncfusion Essential JS 2 and more.
control: Grid customization 
platform: ej2-react
documentation: ug
domainurl: ##DomainURL##
---

# Grid customization in React Pivotview component

## Width And Height

In pivot table component, the `height` and `width` properties are used to set the pivot table's height and width  respectively. Based on these options, the vertical and horizontal scrollbars will be displayed in the pivot table.

To set the `width` and `height`, you can provide the pixel values either in number or string format. Also, you can specify the `width` and `height` as `100%` to make the grid element fill its parent container.

> The pivot table will not be displayed less than **500px**, since it's the minimum width of the.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/pivot-table/default-cs113/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/pivot-table/default-cs113/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/pivot-table/default-cs113" %}

## Grid Settings

The grid settings provides some additional options to customize the pivot table using `gridSettings` property.

### Row Height

You can customize the row height of pivot table through the `rowHeight` property in `gridSettings`. The `rowHeight` property is used to change the row height of entire grid rows.

> The height of the column headers alone may vary when grouping bar feature is enabled.

In the below example, the `rowHeight` is set as '60px'.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/pivot-table/default-cs114/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/pivot-table/default-cs114/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/pivot-table/default-cs114" %}

### Column Width

You can customize the column width of pivot table using `columnWidth` property in `gridSettings`. The `columnWidth` property is used to change the column width of entire grid columns.

In the below example, the `columnWidth` is set as '120px'.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/pivot-table/default-cs115/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/pivot-table/default-cs115/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/pivot-table/default-cs115" %}

### Reorder

Reordering can be done by simple drag and drop of a particular column header from one index to another index within the pivot table. To enable reordering, set the `allowReordering` property to true.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/pivot-table/default-cs116/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/pivot-table/default-cs116/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/pivot-table/default-cs116" %}

### Column Resizing

Column width can be resized by clicking and dragging the right edge of the column header. While dragging, the width of the respective column will be resized immediately. To enable column resize option, set the `allowResizing` property to true.

> By default, column resizing option is enabled.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/pivot-table/default-cs117/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/pivot-table/default-cs117/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/pivot-table/default-cs117" %}

> In RTL mode, you can click and drag the left edge of the header cell to resize the column.

### Text Wrap

The text wrap allows to wrap the cell content to the next line when it exceeds the boundary of the cell width. To enable text wrap, set the `allowTextWrap` property to `true`.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/pivot-table/default-cs118/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/pivot-table/default-cs118/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/pivot-table/default-cs118" %}

## Grid Lines

The pivot table have options to display cell border using `gridLines` property in `gridSettings`.

Available modes of grid lines are:

| Modes | Actions |
|-------|---------|
| Both | Displays both the horizontal and vertical grid lines.|
| None | No grid lines are displayed.|
| Horizontal | Displays the horizontal grid lines only.|
| Vertical | Displays the vertical grid lines only.|
| Default | Displays grid lines based on the theme.|

> By default, pivot table renders grid lines in **Both** mode.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/pivot-table/default-cs119/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/pivot-table/default-cs119/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/pivot-table/default-cs119" %}

### Selection

Selection provides an option to highlight a row or a cell. It can be done through simple mouse down or arrow keys. To enable selection in the pivot table, set the `allowSelection` property to true.

The pivot table supports two types of selection that can be set using `selectionSettings.type`. They are:

* **`Single`**: The `Single` value is set by default, and it only allows selection of a single row or a column or a cell.
* **`Multiple`**: Allows you to select multiple rows or columns or cells. To perform the multi-selection, press and hold CTRL key and click the desired rows or cells. To select range of rows or cells, press and hold the SHIFT key and click the rows or columns or cells.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/pivot-table/default-cs120/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/pivot-table/default-cs120/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/pivot-table/default-cs120" %}

#### Selection Mode

The pivot table supports four types of selection mode that can be set using `selectionSettings.mode`. They are:

* **`Row`**: The `Row` value is set by default, and allows you to select only rows.
* **`Column`**: Allows you to select only columns.
* **`Cell`**: Allows you to select only cells.
* **`Both`**: Allows you to select rows and columns at the same time.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/pivot-table/default-cs121/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/pivot-table/default-cs121/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/pivot-table/default-cs121" %}

#### Cell Selection

Cell selection can be done through simple mouse down or arrow keys (up, down, left, and right).

The pivot table supports two types of cell selection mode that can be set using `selectionSettings.cellSelectionMode`. They are:

* **`Flow`**: The `Flow` value is set by default. The range of cells are selected between the start index and end index that includes in between cells of rows.
* **`Box`**: Range of cells are selected from the start and end column indexes that includes in between cells of rows within the range.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/pivot-table/default-cs122/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/pivot-table/default-cs122/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/pivot-table/default-cs122" %}

> Cell selection requires `selectionSettings.mode` property to be `Cell` or `Both`, and `selectionSettings.type` property should be `Multiple`.

### Clip Mode

The clip mode provides options to display its overflow cell content in the pivot table. It can be configured using the `clipMode` property. The pivot table supports three types of clip modes. They are:

* **`Clip`**: Truncates the cell content when it overflows its area.
* **`Ellipsis`**: Displays ellipsis when the cell content overflows its area.
* **`EllipsisWithTooltip`**: Displays ellipsis when the cell content overflows its area, also it will display the tooltip while hover on ellipsis is applied.

>By default, `columns.clipMode` value is set to `Ellipsis`.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/pivot-table/default-cs123/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/pivot-table/default-cs123/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/pivot-table/default-cs123" %}

## See Also

* [Show/hide tooltip](./how-to/show-hide-tool-tip)
* [Perform cell selection and get selected cells information](./how-to/perform-cell-selection-and-get-selected-cells-information)