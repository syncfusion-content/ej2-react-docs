---
layout: post
title: Columns in React Grid component | Syncfusion
description: Learn here all about Columns in Syncfusion React Grid component of Syncfusion Essential JS 2 and more.
control: Columns 
platform: ej2-react
documentation: ug
domainurl: ##DomainURL##
---

# Columns in React Grid Component

In Syncfusion<sup style="font-size:70%">&reg;</sup> React Grid, columns are the fundamental building blocks that display data from a data source. Each column maps to a specific field in the data source and is responsible for rendering values in the required format. For example, a dataset containing customer details such as "ID", "Name", "Email", and "Purchase Date" will present each field as an individual column in the Grid.

A column definition commonly includes the following properties:
- `field`: The [field](https://ej2.syncfusion.com/react/documentation/api/grid/column#field) property establishes the connection between the dataset and the column by mapping a data source field to a grid column. This property is required for performing data operations between the Grid and the data source.
- `headerText`: The [headerText](https://ej2.syncfusion.com/react/documentation/api/grid/column#headertext) property defines the text displayed in the column header. It provides a clear label for the column, making the grid easier to read and understand.

```ts
import { ColumnDirective, ColumnsDirective, GridComponent } from '@syncfusion/ej2-react-grids';
<GridComponent dataSource={data}> 
  <ColumnsDirective> 
    <ColumnDirective field='CustomerID' headerText='ID' /> 
    <ColumnDirective field='Name' headerText='Name' />
    <ColumnDirective field='Email' headerText='Email' /> 
    <ColumnDirective field='PurchaseDate' headerText='Purchase Date' /> 
  </ColumnsDirective> 
</GridComponent>
```

- `GridComponent`: The main grid container.
- `ColumnsDirective`: A container component that wraps all individual column definitions.
- `ColumnDirective`: Defines an individual column.


## Column types

The [type](https://ej2.syncfusion.com/react/documentation/api/grid/column#type) property defines the data type of the values in a column. Defining the correct column type is important because it determines the way the Grid formats, filters, and sorts the data.

The `type` property applies formatting rules, such as number formats or date formats, to ensure proper display of column values. By default, the Grid automatically assigns the column type based on the first value in that column. If the first value is **null**, **undefined**, or **empty**, the type cannot be inferred and must be set manually to ensure correct formatting and data operations.

### Supported column types

The Grid provides column types to represent different data types. Each type ensures that values are displayed accurately and that operations such as sorting and filtering function properly. The supported column types are:

* `string` — Contains text values. This is the default type. If the first value is **null**, **undefined**, or **empty**, and no type is set, the column defaults to `string`.
* `number` — Contains numeric values.
* `boolean` — Represents `true` or `false` values. By default, these values are displayed as text in the grid cell. To show them as checkboxes with checked or unchecked states, set the `displayAsCheckBox` property for the column.
* `date` — Represents date values.
* `datetime` — Represents date and time values.
* `checkbox` — Provides checkboxes for row selection.

{% tabs %}
{% highlight js tabtitle="App.jsx" %}
{% include code-snippet/grid/column-type-cs1/app/App.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="App.tsx" %}
{% include code-snippet/grid/column-type-cs1/app/App.tsx %}
{% endhighlight %}
{% highlight js tabtitle="datasource.jsx" %}
{% include code-snippet/grid/column-type-cs1/app/datasource.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="datasource.tsx" %}
{% include code-snippet/grid/column-type-cs1/app/datasource.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/grid/column-type-cs1" %}

### Difference between boolean and checkbox types

* `boolean` — Represents `true` or `false` values from the data source. Values can be edited. By default, values are displayed as text, but can be shown as checkboxes by setting the `displayAsCheckBox` property.
* `checkbox` — When a column type is set to `checkbox`, it enables row selection. By default, the Grid allows multiple records to be selected, as the `selectionSettings` automatically defaults to multiple selection.


## Column width 

The Grid allocates column space using the [width](https://ej2.syncfusion.com/react/documentation/api/grid#width) property. Widths can be defined in **pixels** (e.g., "100" for "100px"), as a **percentage** (e.g., "25%" for one‑quarter of the grid width), or set to **auto** to let the Grid size the column automatically based on its content.

### Understanding column width distribution  

| **Scenario**                                   | **Result**                                                                 |
|------------------------------------------------|----------------------------------------------------------------------------|
| **No widths defined for any columns**          | The Grid divides the total width equally among all columns. Example: 4 columns in an "800px" grid → each column gets "200px". |
| **Some columns have widths, others do not**    | The remaining space is shared equally among the columns without a defined width. |
| **All columns use percentage widths**          | Columns resize responsively based on the grid size. Example: "50%" → column always takes half of the grid width. |
| **Combined column widths exceed grid size**    | A horizontal scrollbar appears automatically to allow scrolling.           |
| **Columns set to auto width**                  | The Grid calculates the width based on the widest cell in the column. If content is too long, it is truncated with an ellipsis (…). |
| **Parent container has a fixed width**         | The Grid inherits that fixed width from its parent.                        |
| **Parent container has a flexible width**      | The Grid adjusts dynamically to fit the available space.                   |

### Supported column width types

Syncfusion<sup style="font-size:70%">&reg;</sup> Grid supports the following three types of column width:

**1. Auto**

Column width is automatically calculated based on the content within the column cells. If the content exceeds the specified width in the `ColumnDirective`, it is truncated with an ellipsis (…) at the end. To allow a column to adjust its width dynamically based on content, set the width property of the `ColumnDirective` to "auto".

A Grid can combine both flexible and fixed-width columns to create a balanced layout. For example, consider three columns "Order ID", "Customer Name", and "Freight". The "Customer Name" column automatically adjusts its width based on the length of the names, while the "Order ID" and "Freight" columns remain fixed. This ensures that numeric fields stay consistent while text fields expand as needed.



```ts
<ColumnsDirective>
  <ColumnDirective field='OrderID' headerText='Order ID' width='120' textAlign='Right' />
  <ColumnDirective field='CustomerName' headerText='Customer Name' width='auto' />
  <ColumnDirective field='Freight' headerText='Freight' width='100' format='C2' textAlign='Right' />
</ColumnsDirective>
```

**2. Percentage**

Column width can be defined as a percentage relative to the total width of the grid container. For example, assigning "25%" to a column will allocate one-fourth of the grid's width to that column. This approach is useful for distributing space proportionally across columns.

```ts
<ColumnsDirective>
  <ColumnDirective field='OrderID' headerText='Order ID' width='20%' textAlign='Right' />
  <ColumnDirective field='CustomerName' headerText='Customer Name' width='30%' />
  <ColumnDirective field='Freight' headerText='Freight' width='25%' format='C2' textAlign='Right' />
  <ColumnDirective field='ShipCity' headerText='Ship City' width='25%' />
</ColumnsDirective>
```

**3. Pixel**

The column width can be defined using an absolute pixel value. For example, setting a column width to "100px" means the column will always occupy "100" pixels, regardless of the grid container's size. The width for `ColumnDirective` can be set as pixels in the Grid configuration as shown below:

```ts
<ColumnsDirective>
  <ColumnDirective field='OrderID' headerText='Order ID' width='100px' textAlign='Right' />
  <ColumnDirective field='CustomerName' headerText='Customer Name' width='200px' />
  <ColumnDirective field='Freight' headerText='Freight' width='120px' format='C2' textAlign='Right' />
  <ColumnDirective field='ShipCity' headerText='Ship City' width='150px' />
</ColumnsDirective>
```

{% tabs %}
{% highlight js tabtitle="App.jsx" %}
{% include code-snippet/grid/column-width-cs1/app/App.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="App.tsx" %}
{% include code-snippet/grid/column-width-cs1/app/App.tsx %}
{% endhighlight %}
{% highlight js tabtitle="datasource.jsx" %}
{% include code-snippet/grid/column-width-cs1/app/datasource.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="datasource.tsx" %}
{% include code-snippet/grid/column-width-cs1/app/datasource.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/grid/column-width-cs1" %}

## Column formatting

Column formatting serves as a powerful feature in Syncfusion<sup style="font-size:70%">&reg;</sup> Grid, enabling customization of data display in grid columns. Different formatting options can be applied to columns to meet specific needs, including number formatting with defined patterns, date formatting according to particular locales, and the use of templates for column values.

The [format](https://ej2.syncfusion.com/react/documentation/api/grid/column#format) property specifies the format for column values.

{% tabs %}
{% highlight js tabtitle="App.jsx" %}
{% include code-snippet/grid/column-cs20/app/App.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="App.tsx" %}
{% include code-snippet/grid/column-cs20/app/App.tsx %}
{% endhighlight %}
{% highlight js tabtitle="datasource.jsx" %}
{% include code-snippet/grid/column-cs20/app/datasource.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="datasource.tsx" %}
{% include code-snippet/grid/column-cs20/app/datasource.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/grid/column-cs20" %}

> * The Grid uses the [Internalization](https://ej2.syncfusion.com/react/documentation/common/globalization/internationalization) library to format values based on the specified format and culture.
> * By default, the [number](https://ej2.syncfusion.com/react/documentation/common/globalization/internationalization#number-formatting) and [date](https://ej2.syncfusion.com/react/documentation/common/globalization/internationalization#manipulating-datetime) values are formatted in "en-US" locale. Localization of currency, date, number formats, and other culture-specific elements to different locales is supported as explained in the [localization documentation](https://ej2.syncfusion.com/react/documentation/common/globalization/localization).
> * The available format codes may vary depending on the data type of the column.
> * Column formatting allows advanced customization by assigning a custom function to the `format` property, rather than using a predefined format string.
> * Ensure that the format string is valid and compatible with the data type of the column to avoid unexpected results.

### Number formatting

Number formatting enables customization of numeric value display in Syncfusion<sup style="font-size:70%">&reg;</sup> Grid columns. Standard numeric format strings or custom numeric format strings specify the desired presentation. The `format` property of Grid columns can be used to specify the number format for numeric columns.

Format |Description |Remarks
-------|-------|-------
`N` | Denotes numeric type. | The numeric format is followed by integer value as `N2`, `N3`, etc., where the number specifies the number of decimal places to display.
`C` | Denotes currency type. | The currency format is followed by integer value as `C2`, `C3`, etc., where the number specifies the number of decimal places to display.
`P` | Denotes percentage type. | The percentage format expects input values in the range of 0 to 1. For example, a cell value of "0.2" is displayed as "20%". The format can include an integer value such as `P2`, `P3`, etc., where the number indicates the number of decimal places to display.

The following example code demonstrates the formatting of data for "Mark 1" and "Mark 2" using the `N` format, "Percentage of Marks" using the `P` format, and "Fees" using the `C` format.

{% tabs %}
{% highlight js tabtitle="App.jsx" %}
{% include code-snippet/grid/column-format-cs3/app/App.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="App.tsx" %}
{% include code-snippet/grid/column-format-cs3/app/App.tsx %}
{% endhighlight %}
{% highlight js tabtitle="datasource.jsx" %}
{% include code-snippet/grid/column-format-cs3/app/datasource.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="datasource.tsx" %}
{% include code-snippet/grid/column-format-cs3/app/datasource.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/grid/column-format-cs3" %}

> For additional details on number formatting options supported by the Grid component, refer to the [number formatting](https://ej2.syncfusion.com/react/documentation/common/globalization/internationalization#number-formatting) section in the Internationalization documentation.

### Date formatting

Date formatting customizes the display of date values in Grid columns. It supports standard date format strings (such as "d", "D", or "MMM dd, yyyy"), built-in skeletons (such as "yMd"), and custom format strings. The `format` property of Grid columns specifies the desired date format.

Additionally, custom format strings provide precise control over the way date values are displayed, and the table below shows examples of custom formats with their corresponding outputs.

Format | Formatted value
-----|-----
`{ type:'date', format:'dd/MM/yyyy' }` | 04/07/1996
`{ type:'date', format:'dd.MM.yyyy' }` | 04.07.1996
`{ type:'date', skeleton:'short' }` | 7/4/96
`{ type: 'dateTime', format: 'dd/MM/yyyy hh:mm a' }` | 04/07/1996 12:00 AM
`{ type: 'dateTime', format: 'MM/dd/yyyy hh:mm:ss a' }` | 07/04/1996 12:00:00 AM

{% tabs %}
{% highlight js tabtitle="App.jsx" %}
{% include code-snippet/grid/column-cs21/app/App.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="App.tsx" %}
{% include code-snippet/grid/column-cs21/app/App.tsx %}
{% endhighlight %}
{% highlight js tabtitle="datasource.jsx" %}
{% include code-snippet/grid/column-cs21/app/datasource.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="datasource.tsx" %}
{% include code-snippet/grid/column-cs21/app/datasource.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/grid/column-cs21" %}

### Format the date and currency column based on localization

The Grid columns can be formatted according to the browser’s localization settings by using the `format` property together with the [locale](https://ej2.syncfusion.com/react/documentation/api/grid#locale) property. The `format` property defines the format used to display values, while the `locale` property applies culture-specific rules for both dates and numbers.

For example:
- Setting `format` to "yyyy-MMM-dd" and `locale` to "es-AR" (Spanish, Argentina) displays dates with localized month names and formatting conventions.
- Applying `format` as "C2" formats numeric values with the correct currency symbol and separators for the selected culture.

**Install Syncfusion CLDR Data:**

Localization in the Grid requires [CLDR](https://cldr.unicode.org/) files. These files provide culture-specific information for calendars, numbers, and currencies. Install the Syncfusion® CLDR data package using the following command:

```
npm install @syncfusion/ej2-cldr-data
```

**Load CLDR Files:**

Once installed, import and load the required CLDR files. Syncfusion® uses these files internally to apply the correct formatting:

- "ca-gregorian.json" and "timeZoneNames.json": Localized date and time patterns.
- "numbers.json": Number formatting rules (decimal and grouping separators).
- "currencies.json": Currency symbols and formatting rules.

{% tabs %}
{% highlight js tabtitle="App.jsx" %}
{% include code-snippet/grid/column-localization-cs1/app/App.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="App.tsx" %}
{% include code-snippet/grid/column-localization-cs1/app/App.tsx %}
{% endhighlight %}
{% highlight js tabtitle="datasource.jsx" %}
{% include code-snippet/grid/column-localization-cs1/app/datasource.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="datasource.tsx" %}
{% include code-snippet/grid/column-localization-cs1/app/datasource.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/grid/column-localization-cs1" %}

For more details about loading culture files and working with globalization in Syncfusion®, refer to the official [documentation](https://ej2.syncfusion.com/react/documentation/common/globalization/internationalization#installing-cldr-data).

### Format template column value

Template columns in Syncfusion<sup style="font-size:70%">&reg;</sup> Grid enable customization of column value appearance through HTML templates. Number formatting can also be applied within template columns to control the display of values. To format values in a column template, use the React pipes and the `format` property.

In this example, the date pipe formats the "OrderDate" value as a date in the format "dd/MMM/yyyy".

{% tabs %}
{% highlight js tabtitle="App.jsx" %}
{% include code-snippet/grid/column-format-cs1/app/App.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="App.tsx" %}
{% include code-snippet/grid/column-format-cs1/app/App.tsx %}
{% endhighlight %}
{% highlight js tabtitle="datasource.jsx" %}
{% include code-snippet/grid/column-format-cs1/app/datasource.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="datasource.tsx" %}
{% include code-snippet/grid/column-format-cs1/app/datasource.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/grid/column-format-cs1" %}

> Other React pipes, such as `currency`, `decimal`, `percent`, and similar utilities, enable formatting of various value types within column templates.

### Custom formatting

Syncfusion<sup style="font-size:70%">&reg;</sup> Grid supports customizing the formatting of data in its columns. Custom formats can be applied to numeric or date fields to display values in a specific style as required. The `format` property is used to define these custom formats.

A custom format string must contain one or more of the following standard date/time symbols.

| Symbol         | Description             | Format                                      | Formatted Value     |
|----------------|-------------------------|-----------------------------------------------------|---------------------|
| G              | Era (for example: AD (Anno Domini, after year 0), BC (Before Christ, before year 0) )      | `{ type: 'Date', format: 'G' }`           | AD or BC (for example: September 17, 2025, the era is AD)                 |
| y              | Year                    | `{ type: 'Date', format: 'yyyy' }`        | 2025                |
| M / L          | Month                   | `{ type: 'Date', format: 'MM' }`          | 09                  |
| E / c          | Day of the week         | `{ type: 'Date', format: 'EEEE' }`        | Wednesday           |
| d              | Day of the month        | `{ type: 'Date', format: 'dd' }`          | 17                  |
| m              | Minutes                 | `{ type: 'DateTime', format: 'mm' }`               | 09                  |
| h / H          | Hour (12/24-hour)       | `{ type: 'DateTime', format: 'hh a' }`<br />`{ type: 'DateTime', format: 'HH' }` | 04 PM<br />16         |
| s              | Seconds                 | `{ type: 'DateTime', format: 'ss' }`               | 00                  |
| f              | Milliseconds            | `{ type: 'DateTime', format: 'fff' }`              | 000                 |
| a              | AM/PM (with 12-hour)    | `{ type: 'DateTime', format: 'hh:mm a' }`          | 04:09 PM            |
| z              | Time zone               | `{ type: 'DateTime', format: 'z' }`                | IST                 |
| ' (single quotes) | Literal text in format | `{ type: 'Date', format: "'Date:' yyyy-MM-dd" }` | Date: 2025-09-17 |

The custom format specifiers listed in the table below can be used to create custom number format.

| Specifier | Description | Example Input | Format Output |
|-----------|-------------|---------------|----------------|
| 0         | Displays digit or zero if absent. | `{ format: '0000' }` | 0123 |
| #         | Displays digit if present; hides if absent. | `{ format: '####' }` | 1234 |
| .         | Defines decimal precision. | `{ format: '###0.##0#' }` | 546321.000 |
| %         | Converts value to percentage. | `{ format: '0000 %' }` | 0100 % |
| $         | Formats value as currency. | `{ format: '$ ###.00' }` | $ 13.00 |
| ;         | Separates formats for positive, negative, and zero. | `{ format: '###.##;(###.00);-0' }` | (120.00) |
| 'String' (single Quotes)  | Displays literal text in output. | `{ format: "####.## '@'" }` | 123.44 @ |

In the below example, the "numberFormatOptions" object is used as the `format` property for the "Freight" column to apply a custom numeric format with four decimal places. Similarly, the "dateFormatOptions" object is used as the `format` property for the "OrderDate" column to apply a custom date format displaying the date in the format of day-of-the-week, month abbreviation, day, and 2-digit year (e.g. Sun, May 8, ‘23).

{% tabs %}
{% highlight js tabtitle="App.jsx" %}
{% include code-snippet/grid/column-format-cs2/app/App.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="App.tsx" %}
{% include code-snippet/grid/column-format-cs2/app/App.tsx %}
{% endhighlight %}
{% highlight js tabtitle="datasource.jsx" %}
{% include code-snippet/grid/column-format-cs2/app/datasource.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="datasource.tsx" %}
{% include code-snippet/grid/column-format-cs2/app/datasource.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/grid/column-format-cs2" %}

> For additional details on custom formatting, refer to the documentation for [Custom Date formatting](https://ej2.syncfusion.com/react/documentation/common/globalization/internationalization#custom-formats) and [Custom Number formatting](https://ej2.syncfusion.com/react/documentation/common/globalization/internationalization#custom-number-formatting-and-parsing).

## Text align

The alignment of text within Grid column cells can be controlled using the [textAlign](https://ej2.syncfusion.com/react/documentation/api/grid/column#textalign) property. This property specifies the alignment of text within the cells of a particular column. By default, text is aligned to the `left`, but the alignment can be changed by setting the `textAlign` property to one of the following options:

* `Left` — Aligns the text to the left (default).
* `Center` — Aligns the text to the center.
* `Right` — Aligns the text to the right.
* `Justify` — Align the text to the justify.

{% tabs %}
{% highlight js tabtitle="App.jsx" %}
{% raw %}
import { ColumnDirective, ColumnsDirective, GridComponent } from '@syncfusion/ej2-react-grids';
import { DropDownListComponent } from '@syncfusion/ej2-react-dropdowns';
import * as React from 'react';
import { data } from './datasource';

function App() {
  let grid;
  const alignmentData = [
    { text: 'Left', value: 'Left' },
    { text: 'Right', value: 'Right' },
    { text: 'Center', value: 'Center' },
    { text: 'Justify', value: 'Justify' }
  ];
  const changeAlignment = ((args) => {
    grid.columns.forEach((col) => {
      col.textAlign = args.value;
    });
    grid.refreshColumns();
  })
  return (
    <div>
      <label style={{ padding: '30px 17px 0 0' }}>Align the text for columns :</label>
      <DropDownListComponent dataSource={alignmentData} index={0} width="100" change={changeAlignment}></DropDownListComponent>
      <div style={{ padding: '40px 0 0 0' }}>
        <GridComponent dataSource={data} height={315} ref={g => grid = g}>
          <ColumnsDirective>
            <ColumnDirective field='OrderID' headerText='Order ID' width='100' />
            <ColumnDirective field='CustomerID' headerText='Customer ID' width='100' />
            <ColumnDirective field='Freight' headerText='Freight' width='100' />
            <ColumnDirective field='OrderDate' headerText='Order Date' width='140' />
          </ColumnsDirective>
        </GridComponent></div></div>)
}
export default App;
{% endraw %}
{% endhighlight %}
{% highlight ts tabtitle="App.tsx" %}
{% raw %}
import { ColumnDirective, ColumnsDirective, Grid, GridComponent } from '@syncfusion/ej2-react-grids';
import { DropDownListComponent } from '@syncfusion/ej2-react-dropdowns';
import * as React from 'react';
import { data } from './datasource';

function App() {
  let grid: Grid | null;
  const alignmentData: any = [
    { text: 'Left', value: 'Left' },
    { text: 'Right', value: 'Right' },
    { text: 'Center', value: 'Center' },
    { text: 'Justify', value: 'Justify' },
  ];
  const changeAlignment = ((args: any) => {
    (grid as any).columns.forEach((col: any) => {
      col.textAlign = (args as any).value;
    });
    (grid as any).refreshColumns();
  })
  return (
    <div>
      <label style={{ padding: '30px 17px 0 0' }}>Align the text for columns :</label>
      <DropDownListComponent dataSource={alignmentData} index={0} width="100" change={changeAlignment}></DropDownListComponent>
      <div style={{ padding: '40px 0 0 0' }}>
        <GridComponent dataSource={data} height={315} ref={g => grid = g}>
          <ColumnsDirective>
            <ColumnDirective field='OrderID' headerText='Order ID' width='100' />
            <ColumnDirective field='CustomerID' headerText='Customer ID' width='100' />
            <ColumnDirective field='Freight' headerText='Freight' width='100' />
            <ColumnDirective field='OrderDate' headerText='Order Date' width='140' />
          </ColumnsDirective>
        </GridComponent></div></div>)
}
export default App;
{% endraw %}
{% endhighlight %}
{% highlight js tabtitle="datasource.jsx" %}
{% include code-snippet/grid/column-cs27/app/datasource.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="datasource.tsx" %}
{% include code-snippet/grid/column-cs27/app/datasource.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/grid/column-cs27" %}

> The `textAlign` property controls alignment for both header and content cells in a column. The [headerTextAlign](https://ej2.syncfusion.com/react/documentation/api/grid/column#headertextalign) property provides alignment control for header text only.

## Render boolean value as checkbox

The Grid component allows rendering boolean values as checkboxes in columns. This can be achieved using the [displayAsCheckBox](https://ej2.syncfusion.com/react/documentation/api/grid/column#displayascheckbox) property of the [ColumnDirective](https://ej2.syncfusion.com/react/documentation/api/grid/column). This property is useful for displaying boolean column values as checkboxes instead of the default text representation of `true` or `false`.

To enable the rendering of boolean values as checkboxes, set the `displayAsCheckBox` property of the `ColumnDirective` to `true`. This property works only with boolean values in Grid columns.

{% tabs %}
{% highlight js tabtitle="App.jsx" %}
{% include code-snippet/grid/column-cs22/app/App.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="App.tsx" %}
{% include code-snippet/grid/column-cs22/app/App.tsx %}
{% endhighlight %}
{% highlight js tabtitle="datasource.jsx" %}
{% include code-snippet/grid/column-cs22/app/datasource.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="datasource.tsx" %}
{% include code-snippet/grid/column-cs22/app/datasource.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/grid/column-cs22" %}

### Preventing checkbox in blank rows

To prevent the checkbox in blank rows of the Grid, even when the [displayAsCheckBox](https://ej2.syncfusion.com/react/documentation/api/grid/column#displayascheckbox) property is set to `true` for that column, use the [rowDataBound](https://ej2.syncfusion.com/react/documentation/api/grid#rowdatabound) event to detect **empty** or **null** values in the row data. If all values in the row are **empty** or **null**, set the inner HTML of the corresponding cell to an empty string to hide the checkbox.

{% tabs %}
{% highlight js tabtitle="App.jsx" %}
{% include code-snippet/grid/blank-row-cs1/app/App.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="App.tsx" %}
{% include code-snippet/grid/blank-row-cs1/app/App.tsx %}
{% endhighlight %}
{% highlight js tabtitle="datasource.jsx" %}
{% include code-snippet/grid/blank-row-cs1/app/datasource.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="datasource.tsx" %}
{% include code-snippet/grid/blank-row-cs1/app/datasource.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/grid/blank-row-cs1" %}

## Lock columns

The Syncfusion<sup style="font-size:70%">&reg;</sup> Grid allows locking columns to prevent reordering and automatically position them first. This can be achieved by setting the [lockColumn](https://ej2.syncfusion.com/react/documentation/api/grid/column#lockcolumn) property to `true`.

{% tabs %}
{% highlight js tabtitle="App.jsx" %}
{% raw %}
import { ColumnDirective, ColumnsDirective, GridComponent, Inject, Reorder } from '@syncfusion/ej2-react-grids';
import * as React from 'react';
import { data } from './datasource';
function App() {
    const customAttributes = { class: 'customcss' };
    return <GridComponent dataSource={data} allowReordering={true} allowSelection={false} height={315}>
    <Inject services={[Reorder]}/>
    <ColumnsDirective>
      <ColumnDirective field='OrderID' width='100' textAlign="Right"/>
      <ColumnDirective field='CustomerID' width='100'/>
      <ColumnDirective field='ShipCity' width='100' lockColumn={true} customAttributes={{ class: 'customcss' }}/>
      <ColumnDirective field='ShipName' width='100'/>
      <ColumnDirective field='ShipPostalCode' width='120'/>
      <ColumnDirective field='ShipRegion' width='140'/>
    </ColumnsDirective>
  </GridComponent>;
}
;
export default App;
{% endraw %}
{% endhighlight %}
{% highlight ts tabtitle="App.tsx" %}
{% raw %}
import { ColumnDirective, ColumnsDirective, GridComponent, Inject, Reorder } from '@syncfusion/ej2-react-grids';
import * as React from 'react';
import { data } from './datasource';

function App() {
  const customAttributes: any = { class: 'customcss' };
  return <GridComponent dataSource={data} allowReordering={true} allowSelection={false} height={315}>
    <Inject services={[Reorder]} />
    <ColumnsDirective>
      <ColumnDirective field='OrderID' width='100' textAlign="Right" />
      <ColumnDirective field='CustomerID' width='100' />
      <ColumnDirective field='ShipCity' width='100' lockColumn={true} customAttributes={{ class: 'customcss' }} />
      <ColumnDirective field='ShipName' width='100' />
      <ColumnDirective field='ShipPostalCode' width='120' />
      <ColumnDirective field='ShipRegion' width='140' />
    </ColumnsDirective>
  </GridComponent>
};
export default App;
{% endraw %}
{% endhighlight %}
{% highlight js tabtitle="datasource.jsx" %}
{% include code-snippet/grid/column-cs24/app/datasource.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="datasource.tsx" %}
{% include code-snippet/grid/column-cs24/app/datasource.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/grid/column-cs24" %}

## Show or hide columns

Column visibility in the Syncfusion<sup style="font-size:70%">&reg;</sup> Grid can be shown or hidden dynamically through built-in properties and methods. This feature helps customize which columns appear based on specific needs.

**Using property**

The [visible](https://ej2.syncfusion.com/react/documentation/api/grid/column#visible) property controls whether columns appear in the React Grid. Setting this property to `true` shows the column, while `false` hides it.

In the below example, the "ShipCity" column is defined with `visible` property set to `false`, which will hide the column in the rendered grid.

{% tabs %}
{% highlight js tabtitle="App.jsx" %}
{% include code-snippet/grid/column-property-cs1/app/App.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="App.tsx" %}
{% include code-snippet/grid/column-property-cs1/app/App.tsx %}
{% endhighlight %}
{% highlight js tabtitle="datasource.jsx" %}
{% include code-snippet/grid/column-property-cs1/app/datasource.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="datasource.tsx" %}
{% include code-snippet/grid/column-property-cs1/app/datasource.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/grid/column-property-cs1" %}

> * Hiding a column using the `visible` property only affects the UI representation of the Grid. The data for hidden columns still exists in the data source and can be accessed or modified through code.
> * The width of hidden columns is excluded from the total Grid width calculation.
> * Columns can be permanently hidden by setting the `visible` property to `false` in the column definition, or by removing the column entirely.

**Using methods**

The [showColumns](https://ej2.syncfusion.com/react/documentation/api/grid#showcolumns) and [hideColumns](https://ej2.syncfusion.com/react/documentation/api/grid#hidecolumns) methods provide another way to control column visibility in the React Grid. These methods work by specifying either the `headerText` or the `field` name of the column.

**Based on header text**

The `showColumns` and `hideColumns` methods enable dynamic control of column visibility using header text. These methods require an array of column header texts as the first parameter and the value `headerText` as the second parameter to indicate the operation is based on header text.

{% tabs %}
{% highlight js tabtitle="App.jsx" %}
{% raw %}
import { ColumnDirective, ColumnsDirective, GridComponent } from '@syncfusion/ej2-react-grids';
import {ButtonComponent} from '@syncfusion/ej2-react-buttons';
import * as React from 'react';
import { data } from './datasource';

function App() {
  let grid;
  const show = () => {
    if (grid) {
      grid.showColumns('Customer ID', 'headerText'); //show by HeaderText
    }
  }
  const hide = () => {
    if (grid) {
      grid.hideColumns('Customer ID', 'headerText'); //hide by HeaderText
    }
  }
  return (<div>
    <ButtonComponent cssClass='e-info' onClick={show}>Show</ButtonComponent>
    <ButtonComponent style={{marginLeft:'20px'}} cssClass='e-info' onClick={hide}>Hide</ButtonComponent>
    <GridComponent dataSource={data} height={295} ref={g => grid = g}>
      <ColumnsDirective>
        <ColumnDirective field='OrderID' headerText='Order ID' width='100' textAlign="Right" />
        <ColumnDirective field='CustomerID' headerText='Customer ID' width='100' />
        <ColumnDirective field='EmployeeID' headerText='Employee ID' width='100' textAlign="Right" />
        <ColumnDirective field='Freight' headerText='Freight' width='100' format="C2" textAlign="Right" />
        <ColumnDirective field='ShipCountry' headerText='Ship Country' width='100' />
      </ColumnsDirective>
    </GridComponent>
  </div>)
};
export default App;
{% endraw %}
{% endhighlight %}
{% highlight ts tabtitle="App.tsx" %}
{% raw %}
import { ColumnDirective, ColumnsDirective, Grid, GridComponent } from '@syncfusion/ej2-react-grids';
import {ButtonComponent} from '@syncfusion/ej2-react-buttons';
import * as React from 'react';
import { data } from './datasource';

function App() {
  let grid: Grid | null;
  const show = () => {
    if (grid) {
      grid.showColumns('Customer ID', 'headerText'); //show by HeaderText
    }
  }
  const hide = () => {
    if (grid) {
      grid.hideColumns('Customer ID', 'headerText'); //hide by HeaderText
    }
  }
  return (<div>
    <ButtonComponent cssClass='e-info' onClick={show}>Show</ButtonComponent>
    <ButtonComponent style={{marginLeft:'20px'}} cssClass='e-info' onClick={hide}>Hide</ButtonComponent>
    <GridComponent dataSource={data} height={295} ref={g => grid = g}>
      <ColumnsDirective>
        <ColumnDirective field='OrderID' headerText='Order ID' width='100' textAlign="Right" />
        <ColumnDirective field='CustomerID' headerText='Customer ID' width='100' />
        <ColumnDirective field='EmployeeID' headerText='Employee ID' width='100' textAlign="Right" />
        <ColumnDirective field='Freight' headerText='Freight' width='100' format="C2" textAlign="Right" />
        <ColumnDirective field='ShipCountry' headerText='Ship Country' width='100' />
      </ColumnsDirective>
    </GridComponent>
  </div>)
};
export default App;
{% endraw %}
{% endhighlight %}
{% highlight js tabtitle="datasource.jsx" %}
{% include code-snippet/grid/column-cs26/app/datasource.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="datasource.tsx" %}
{% include code-snippet/grid/column-cs26/app/datasource.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/grid/column-cs26" %}

**Based on field**

External buttons can control column visibility by field name using the `showColumns` or `hideColumns` methods. These methods require an array of column field names as the first parameter and the value `field` as the second parameter to indicate the operation is based on field names.

{% tabs %}
{% highlight js tabtitle="App.jsx" %}
{% raw %}
import { ColumnDirective, ColumnsDirective, GridComponent } from '@syncfusion/ej2-react-grids';
import {ButtonComponent} from '@syncfusion/ej2-react-buttons';
import * as React from 'react';
import { data } from './datasource';

function App() {
  let grid;
  const show = () => {
    if (grid) {
      grid.showColumns('CustomerID', 'field'); //show by field
    }
  }
  const hide = () => {
    if (grid) {
      grid.hideColumns('CustomerID', 'field'); //hide by field
    }
  }
  return (<div>
    <ButtonComponent cssClass='e-info' onClick={show}>Show</ButtonComponent>
    <ButtonComponent style={{marginLeft:'20px'}} cssClass='e-info' onClick={hide}>Hide</ButtonComponent>
    <GridComponent dataSource={data} height={295} ref={g => grid = g}>
      <ColumnsDirective>
        <ColumnDirective field='OrderID' headerText='Order ID' width='100' textAlign="Right" />
        <ColumnDirective field='CustomerID' headerText='Customer ID' width='100' />
        <ColumnDirective field='EmployeeID' headerText='Employee ID' width='100' textAlign="Right" />
        <ColumnDirective field='Freight' headerText='Freight' width='100' format="C2" textAlign="Right" />
        <ColumnDirective field='ShipCountry' headerText='Ship Country' width='100' />
      </ColumnsDirective>
    </GridComponent>
  </div>)
};
export default App;
{% endraw %}
{% endhighlight %}
{% highlight ts tabtitle="App.tsx" %}
{% raw %}
import { ColumnDirective, ColumnsDirective, Grid, GridComponent } from '@syncfusion/ej2-react-grids';
import {ButtonComponent} from '@syncfusion/ej2-react-buttons';
import * as React from 'react';
import { data } from './datasource';

function App() {
  let grid: Grid | null;
  const show = () => {
    if (grid) {
      grid.showColumns('CustomerID', 'field'); //show by field
    }
  }
  const hide = () => {
    if (grid) {
      grid.hideColumns('CustomerID', 'field'); //hide by field
    }
  }
  return (<div>
    <ButtonComponent cssClass='e-info' onClick={show}>Show</ButtonComponent>
    <ButtonComponent style={{marginLeft:'20px'}} cssClass='e-info' onClick={hide}>Hide</ButtonComponent>
    <GridComponent dataSource={data} height={295} ref={g => grid = g}>
      <ColumnsDirective>
        <ColumnDirective field='OrderID' headerText='Order ID' width='100' textAlign="Right" />
        <ColumnDirective field='CustomerID' headerText='Customer ID' width='100' />
        <ColumnDirective field='EmployeeID' headerText='Employee ID' width='100' textAlign="Right" />
        <ColumnDirective field='Freight' headerText='Freight' width='100' format="C2" textAlign="Right" />
        <ColumnDirective field='ShipCountry' headerText='Ship Country' width='100' />
      </ColumnsDirective>
    </GridComponent>
  </div>)
};
export default App;
{% endraw %}
{% endhighlight %}
{% highlight js tabtitle="datasource.jsx" %}
{% include code-snippet/grid/column-field-cs1/app/datasource.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="datasource.tsx" %}
{% include code-snippet/grid/column-field-cs1/app/datasource.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/grid/column-field-cs1" %}

## Controlling grid actions

Column-specific actions like filtering, grouping, sorting, resizing, reordering, editing, and searching in the Syncfusion<sup style="font-size:70%">&reg;</sup> React Grid can be enabled or disabled using these properties:

* [allowEditing](https://ej2.syncfusion.com/react/documentation/api/grid/columnModel#allowediting): Controls editing capability for a column.
* [allowFiltering](https://ej2.syncfusion.com/react/documentation/api/grid/columnModel#allowfiltering): Controls filtering capability for a column.
* [allowGrouping](https://ej2.syncfusion.com/react/documentation/api/grid/columnModel#allowgrouping): Controls grouping capability for a column.
* [allowSorting](https://ej2.syncfusion.com/react/documentation/api/grid/columnModel#allowsorting): Controls sorting capability for a column.
* [allowReordering](https://ej2.syncfusion.com/react/documentation/api/grid/columnModel#allowreordering): Controls reordering capability for a column.
* [allowResizing](https://ej2.syncfusion.com/react/documentation/api/grid/columnModel#allowresizing): Controls resizing capability for a column.
* [allowSearching](https://ej2.syncfusion.com/react/documentation/api/grid/columnModel#allowsearching): Controls searching capability for a column.

{% tabs %}
{% highlight js tabtitle="App.jsx" %}
{% include code-snippet/grid/column-cs25/app/App.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="App.tsx" %}
{% include code-snippet/grid/column-cs25/app/App.tsx %}
{% endhighlight %}
{% highlight js tabtitle="datasource.jsx" %}
{% include code-snippet/grid/column-cs25/app/datasource.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="datasource.tsx" %}
{% include code-snippet/grid/column-cs25/app/datasource.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/grid/column-cs25" %}

## Customize column styles

Column style customization enables changes to the appearance of columns in the Grid control based on design needs. Properties like font, background color, and other styles can be modified. Grid events, CSS, properties, or methods can be used to customize column styles.

For more information, refer to this [documentation](https://ej2.syncfusion.com/react/documentation/grid/cell#customize-cell-styles).

## Manipulating columns

This section explains working with columns in the Syncfusion<sup style="font-size:70%">&reg;</sup> React Grid, including accessing columns, changing column settings, and adding or removing columns using the Grid's properties, methods, and events.

### Accessing columns

Accessing columns in the Syncfusion<sup style="font-size:70%">&reg;</sup> Grid is done using these grid methods:

| Method | Description | Example |
|--------|-------------|---------|
| [getColumns](https://ej2.syncfusion.com/react/documentation/api/grid#getcolumns) | Returns the array of all columns defined in the grid. | `let columns = grid.getColumns();` |
| [getColumnByField](https://ej2.syncfusion.com/react/documentation/api/grid#getcolumnbyfield) | Returns the column object that matches the specified field name. | `let column = grid.getColumnByField('ProductName');` |
| [getColumnByUid](https://ej2.syncfusion.com/react/documentation/api/grid#getcolumnbyuid) | Returns the column object that matches the specified UID. | `let column = grid.getColumnByUid();` |
| [getVisibleColumns](https://ej2.syncfusion.com/react/documentation/api/grid#getvisiblecolumns) | Returns the array of all visible columns. | `let visibleColumns = grid.getVisibleColumns();` |
| [getForeignKeyColumns](https://ej2.syncfusion.com/react/documentation/api/grid#getforeignkeycolumns) | Returns the array of all foreign key columns. | `let foreignKeyColumns = grid.getForeignKeyColumns();` |
| [getColumnFieldNames](https://ej2.syncfusion.com/react/documentation/api/grid#getcolumnfieldnames) | Returns an array of field names of all the columns in the Grid. | `let fieldNames = grid.getColumnFieldNames();` |

> All available column properties can be found in this [section](https://ej2.syncfusion.com/react/documentation/api/grid/column).

### Updating column definitions

The [columns](https://ej2.syncfusion.com/react/documentation/api/grid/index-default#columns) property enables updating column definitions in the Grid. Column properties like `headerText`, `width`, `visible`, and others can be modified in the columns array to change the way columns appear and behave. After making changes, the [refreshColumns](https://ej2.syncfusion.com/react/documentation/api/grid/index-default#refreshcolumns) method applies the updates to the Grid.

{% tabs %}
{% highlight js tabtitle="App.jsx" %}
{% include code-snippet/grid/column-update-cs1/app/App.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="App.tsx" %}
{% include code-snippet/grid/column-update-cs1/app/App.tsx %}
{% endhighlight %}
{% highlight js tabtitle="datasource.jsx" %}
{% include code-snippet/grid/column-update-cs1/app/datasource.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="datasource.tsx" %}
{% include code-snippet/grid/column-update-cs1/app/datasource.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/grid/column-update-cs1" %}

### Adding/Removing Columns

Adding or removing columns dynamically in the Grid component is possible through the `columns` property, accessible via the Grid instance.

New columns can be added using the `push` method to add the column object to the `columns` property. Columns can be removed using the `pop` method to delete the last column, or the `splice` method to remove a specific column from the columns array.

{% tabs %}
{% highlight js tabtitle="App.jsx" %}
{% include code-snippet/grid/column-cs37/app/App.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="App.tsx" %}
{% include code-snippet/grid/column-cs37/app/App.tsx %}
{% endhighlight %}
{% highlight js tabtitle="datasource.jsx" %}
{% include code-snippet/grid/column-cs37/app/datasource.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="datasource.tsx" %}
{% include code-snippet/grid/column-cs37/app/datasource.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/grid/column-cs37" %}

### Refreshing columns

The [refreshColumns](https://ej2.syncfusion.com/react/documentation/api/grid/index-default#refreshcolumns) method of the Syncfusion<sup style="font-size:70%">&reg;</sup> Grid can be used to refresh the columns in the grid. This method is useful when grid columns need to be updated dynamically based on user actions or data changes.

```ts
grid.refreshColumns();
```

## Responsive columns

Column visibility in the Syncfusion<sup style="font-size:70%">&reg;</sup> React Grid can be toggled based on screen size using the [hideAtMedia](https://ej2.syncfusion.com/react/documentation/api/grid/column#hideatmedia) property. This property accepts valid [Media Queries](http://cssmediaqueries.com/what-are-css-media-queries.html) to control when columns appear or hide.

This example shows a Grid with three columns: "Order ID", "Customer ID", and "Freight". The "OrderID" column uses `hideAtMedia` set to "(min-width: 700px)", hiding the column when the browser width is "700px" or less.

{% tabs %}
{% highlight js tabtitle="App.jsx" %}
{% include code-snippet/grid/column-cs30/app/App.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="App.tsx" %}
{% include code-snippet/grid/column-cs30/app/App.tsx %}
{% endhighlight %}
{% highlight js tabtitle="datasource.jsx" %}
{% include code-snippet/grid/column-cs30/app/datasource.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="datasource.tsx" %}
{% include code-snippet/grid/column-cs30/app/datasource.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/grid/column-cs30" %}

## See also

* [Group Column by Format](../grouping#group-by-format)
