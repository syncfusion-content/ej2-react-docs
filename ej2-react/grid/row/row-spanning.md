---
layout: post
title: Row spanning in React Grid component | Syncfusion
description: Learn here all about Row spanning in Syncfusion React Grid component of Syncfusion Essential JS 2 and more.
control: Row spanning 
platform: ej2-react
documentation: ug
domainurl: ##DomainURL##
---

# Row spanning in React Grid component

The grid provides an option to span row cells, allowing you to merge two or more cells in a row into a single cell. This feature can be useful in scenarios where you want to display information that spans across multiple rows, but want to avoid repeating the same information in each row.

To achieve this, You need to define the [rowSpan](https://ej2.syncfusion.com/react/documentation/api/grid/queryCellInfoEventArgs/#rowspan) attribute to span cells in the [queryCellInfo](https://ej2.syncfusion.com/react/documentation/api/grid/queryCellInfoEventArgs) event. The rowSpan attribute is used to specify the number of rows that the current cell should span.

The `queryCellInfo` event is triggered for each cell in the grid, and allows you to customize the cells in the grid. By handling this event, you can set the `rowSpan` attribute for a cell to achieve row spanning.

In the following demo, **Davolio** cell is spanned to two rows in the **EmployeeName** column. Also Grid supports the spanning of rows and columns for same cells. **Lunch Break** cell is spanned to two rows and three columns in the **1:00** column.

{% tabs %}
{% highlight js tabtitle="App.jsx" %}
{% include code-snippet/grid/spanning-cs2/app/App.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="App.tsx" %}
{% include code-snippet/grid/spanning-cs2/app/App.tsx %}
{% endhighlight %}
{% highlight js tabtitle="ColumnSpanDataType.jsx" %}
{% include code-snippet/grid/spanning-cs2/app/ColumnSpanDataType.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="ColumnSpanDataType.tsx" %}
{% include code-snippet/grid/spanning-cs2/app/ColumnSpanDataType.tsx %}
{% endhighlight %}
{% highlight js tabtitle="datasource.jsx" %}
{% include code-snippet/grid/spanning-cs2/app/datasource.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="datasource.tsx" %}
{% include code-snippet/grid/spanning-cs2/app/datasource.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/grid/spanning-cs2" %}

>* To disable the spanning for particular grid page, you need to use **requestType** from `queryCellInfo` event argument.
>* The `rowSpan` and `colSpan` attributes can be used together to merge cells both vertically and horizontally.

## Limitations

* The [updateCell](https://ej2.syncfusion.com/react/documentation/api/grid/#updatecell) method does not support row spanning.
* Row spanning is not compatible with the following features:
    1. Virtual scrolling
    2. Infinite scrolling
    3. Grouping
    4. Row drag and drop
    5. Autofill
    6. Inline editing
    7. Batch editing
    8. CRUD

## Row spanning using enableRowSpan property    

The Syncfusion React Grid introduces a simplified approach to vertically merge cells using the `enableRowSpan` property. 

When the `enableRowSpan` property is enabled, the Grid automatically merges cells with matching data across adjacent columns without requiring manual span configuration using the [queryCellInfo](https://ej2.syncfusion.com/react/documentation/api/grid/queryCellInfoEventArgs) event. These merged cells are visually combined into a single cell, improving readability.

Here is an example of how to use the `enableRowSpan` property to merge cells vertically:    

{% tabs %}
{% highlight js tabtitle="App.jsx" %}
{% include code-snippet/grid/row-spanning-cs1/app/App.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="App.tsx" %}
{% include code-snippet/grid/row-spanning-cs1/app/App.tsx %}
{% endhighlight %}
{% highlight js tabtitle="datasource.jsx" %}
{% include code-snippet/grid/row-spanning-cs1/app/datasource.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="datasource.tsx" %}
{% include code-snippet/grid/row-spanning-cs1/app/datasource.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/grid/row-spanning-cs1" %}

> You can also control spanning at the column level. To prevent merging for specific columns, set `enableRowSpan` to **false** in the column definition.

### Limitation

* Virtualization
* Infinite Scrolling
* Lazy Load Grouping
* Row Drag and Drop
* Column Virtualization
* Detail Template
* Editing
* Export
* Foreign Key
* Hierarchy Grid