---
layout: post
title: React Grid - Column Autofit | Syncfusion
description: React Grid column autofit supports automatically sizing columns to content and offers configuration options to improve readability and overall layout.
control: AutoFit Columns
platform: ej2-react
documentation: ug
domainurl: ##DomainURL##
---

# AutoFit Columns in React Grid Component

The AutoFit feature in the Syncfusion<sup style="font-size:70%">&reg;</sup> React Grid allows columns to automatically adjust their widths based on the maximum content width within each column. This ensures that all cell values are fully visible without truncation or wrapping.

**Usage:**

- Hover the mouse over a column header. A resizer icon appears on the right edge of the header.
- Double-click the resizer icon to resize the column to fit its longest content.

To display the resizer icon on column headers while hovering in the Syncfusion<sup style="font-size:70%">&reg;</sup> React Grid:

- Set the [allowResizing](https://ej2.syncfusion.com/react/documentation/api/grid#allowresizing) property to `true` in the Grid component.
- Inject the `Resize` module from `@syncfusion/ej2-react-grids`.

```ts
import React from 'react';
import { GridComponent, ColumnsDirective, ColumnDirective, Inject, Resize } from '@syncfusion/ej2-react-grids';

function App() {
  return (
    <GridComponent dataSource={...} allowResizing={true} height={300}>
      <ColumnsDirective>
        ...
      </ColumnsDirective>
      <Inject services={[Resize]} />
    </GridComponent>
  );
}

export default App;

```

## Resizing a column to fit its content using AutoFit method

The Grid can automatically adjust column widths to fit the widest cell content, ensuring that all data remains visible without wrapping. This behavior can also be triggered programmatically without user interaction by calling the [autoFitColumns](https://ej2.syncfusion.com/react/documentation/api/grid#autofitcolumns) method inside the [dataBound](https://ej2.syncfusion.com/react/documentation/api/grid#databound) event. Columns are resized immediately after the Grid finishes rendering its data.

**AutoFit all columns:**

Call `autoFitColumns()` without parameters to resize every column in the Grid:

```ts
if (gridRef.current) { 
    // Call autoFitColumns on the Grid instance 
    gridRef.current.autoFitColumns();
}
```

**AutoFit specific columns:**

Pass an array of column field names to resize only those columns. For example, the following adjusts the width of the "ShipName" and "ShipAddress" columns.

```ts
if (gridRef.current) { 
    // Call autoFitColumns on the Grid instance 
    gridRef.current.autoFitColumns(['ShipName', 'ShipAddress']);
}
```

{% tabs %}
{% highlight js tabtitle="App.jsx" %}
{% include code-snippet/grid/column-cs1/app/App.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="App.tsx" %}
{% include code-snippet/grid/column-cs1/app/App.tsx %}
{% endhighlight %}
{% highlight js tabtitle="datasource.jsx" %}
{% include code-snippet/grid/column-cs1/app/datasource.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="datasource.tsx" %}
{% include code-snippet/grid/column-cs1/app/datasource.tsx %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/grid/column-cs1" %}

> All columns can be auto-fitted by invoking the `autoFitColumns` method without specifying column names.

## AutoFit columns with empty space

The AutoFit feature adjusts column widths in the Grid based on the values defined in the column declarations. If the total width of all columns is smaller than the overall Grid width, the remaining space will appear as white space. In this case, the columns do not automatically adjust to fill the entire Grid width.

This feature can be enabled by setting the [autoFit](https://ej2.syncfusion.com/react/documentation/api/grid#autofit) property to `true`. When enabled, the column width is rendered strictly according to the values defined in the Grid's column definitions, without expanding to occupy unused space.

{% tabs %}
{% highlight js tabtitle="App.jsx" %}
{% include code-snippet/grid/autofit-cs1/app/App.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="App.tsx" %}
{% include code-snippet/grid/autofit-cs1/app/App.tsx %}
{% endhighlight %}
{% highlight js tabtitle="datasource.jsx" %}
{% include code-snippet/grid/autofit-cs1/app/datasource.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="datasource.tsx" %}
{% include code-snippet/grid/autofit-cs1/app/datasource.tsx %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/grid/autofit-cs1" %}

> If any one of the `ColumnDirective` widths is **undefined**, then the particular column will automatically adjust to fill the entire width of the Grid table, even if the `autoFit` property of Grid is enabled.

## AutoFit columns when changing column visibility using column chooser

In the Syncfusion<sup style="font-size:70%">&reg;</sup> React Grid, columns can be auto-fitted when their visibility is changed through the column chooser UI. This can be done by calling the `autoFitColumns` method inside the [actionComplete](https://ej2.syncfusion.com/react/documentation/api/grid#actioncomplete) event. The event arguments include a property called `requestType`, which indicates the type of action performed. When the `requestType` is `columnState`, the `autoFitColumns` method can be invoked to resize the affected columns automatically.

{% tabs %}
{% highlight js tabtitle="App.jsx" %}
{% include code-snippet/grid/autofit-cs2/app/App.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="App.tsx" %}
{% include code-snippet/grid/autofit-cs2/app/App.tsx %}
{% endhighlight %}
{% highlight js tabtitle="datasource.jsx" %}
{% include code-snippet/grid/autofit-cs2/app/datasource.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="datasource.tsx" %}
{% include code-snippet/grid/autofit-cs2/app/datasource.tsx %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/grid/autofit-cs2" %}

## AutoFit columns with specific rows

Column width adjustment for a specific range of rows based on their content can be achieved using the `autoFitColumns` method by passing the second and third parameters (optional) as the start and end index for the columns to fit.

This feature calculates the appropriate width based on the maximum content width of the specified range of rows or the header text width. Subsequently, the maximum width of the content of the specified rows or header text is applied to the entire column of the grid.

The following example demonstrates auto-fitting columns with specific rows. The first parameter is an array containing the specific column field names, such as "Inventor", "Number of INPADOC patents" and "Main fields of invention" to apply the auto-fit functionality to these columns. The second parameter (start index) is set to "1" and the third parameter (end index) is set to "3". When specifying these start and end indices, the auto-fit operation is applied only to the range of rows from "1" to "3" for column width adjustment.

{% tabs %}
{% highlight js tabtitle="App.jsx" %}
{% include code-snippet/grid/autofit-cs3/app/App.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="App.tsx" %}
{% include code-snippet/grid/autofit-cs3/app/App.tsx %}
{% endhighlight %}
{% highlight js tabtitle="datasource.jsx" %}
{% include code-snippet/grid/autofit-cs3/app/datasource.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="datasource.tsx" %}
{% include code-snippet/grid/autofit-cs3/app/datasource.tsx %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/grid/autofit-cs3" %}
