---
layout: post
title: Columns in React Grid component | Syncfusion
description: Learn here all about Columns in Syncfusion React Grid component of Syncfusion Essential JS 2 and more.
control: Columns 
platform: ej2-react
documentation: ug
domainurl: ##DomainURL##
---

# Columns in React Grid component

The column definitions are used as the [`dataSource`](https://ej2.syncfusion.com/angular/documentation/api/grid/#datasource) schema in the Grid.
This plays a vital role in rendering column values in the required format.
The grid operations such as sorting, filtering and grouping etc. are performed based on column definitions.
 The [`field`](https://ej2.syncfusion.com/angular/documentation/api/grid/column/#field) property of the [`columns`](https://ej2.syncfusion.com/angular/documentation/api/grid/column)
is necessary to map the data source values in Grid columns.

> 1. If the column with [`field`](https://ej2.syncfusion.com/angular/documentation/api/grid/column/#field) is not in the dataSource, then the column values will be displayed as empty.
> 2. If the [`field`](https://ej2.syncfusion.com/angular/documentation/api/grid/column/#field) name contains **“dot”** operator then it is considered as complex binding.

## Column types

Column type can be specified using the [`columns.type`](https://ej2.syncfusion.com/angular/documentation/api/grid/column/#type)
property. It specifies the type of the data the column bounded.

If the [`format`](https://ej2.syncfusion.com/angular/documentation/api/grid/column/#format)  is defined for a column, the column uses [`type`](https://ej2.syncfusion.com/angular/documentation/api/grid/column/#type) to select the appropriate format option ([number](../../common/internationalization/#number-formatting) or [date](../../common/internationalization/#date-formatting)).

Grid column supports the following types:

* string
* number
* boolean
* date
* datetime

> If the [`type`](https://ej2.syncfusion.com/angular/documentation/api/grid/column/#type) is not defined, then it will be determined from the first record of the [`dataSource`](https://ej2.syncfusion.com/angular/documentation/api/grid/#datasource).
> Incase if the first record of the [`dataSource`](https://ej2.syncfusion.com/angular/documentation/api/grid/#datasource) is null/blank value for a column then it is necessary to define the [`type`](https://ej2.syncfusion.com/angular/documentation/api/grid/column/#type) for that column.

## ValueAccessor

The [`valueAccessor`](https://ej2.syncfusion.com/angular/documentation/api/grid/column/#valueaccessor) is used to access/manipulate the value of display data.
You can achieve custom value formatting by using [`valueAccessor`](https://ej2.syncfusion.com/angular/documentation/api/grid/column/#valueaccessor).

{% tabs %}
{% highlight js tabtitle="app.jsx" %}
{% include code-snippet/grid/column-cs19/app/App.jsx %}
{% endhighlight %}
{% highlight js tabtitle="datasource.jsx" %}
{% include code-snippet/grid/column-cs19/app/datasource.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="app.tsx" %}
{% include code-snippet/grid/column-cs19/app/App.tsx %}
{% endhighlight %}
{% highlight ts tabtitle="datasource.tsx" %}
{% include code-snippet/grid/column-cs19/app/datasource.tsx %}
{% endhighlight %}
{% endtabs %}

{ % previewsample "page.domainurl/code-snippet/grid/column-cs19" % }

### Display array type columns

You can bind an Array of Objects in a column by using [`valueAccessor`](https://ej2.syncfusion.com/angular/documentation/api/grid/column/#valueaccessor) property.
In this example, the **Name** field has an **array** of two objects **FirstName** and **LastName**. These two objects are joined and bind to a column using [`valueAccessor`](https://ej2.syncfusion.com/angular/documentation/api/grid/column/#valueaccessor).

{% tabs %}
{% highlight js tabtitle="app.jsx" %}
{% include code-snippet/grid/array-of-string-cs1/app/App.jsx %}
{% endhighlight %}
{% highlight js tabtitle="datasource.jsx" %}
{% include code-snippet/grid/array-of-string-cs1/app/datasource.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="app.tsx" %}
{% include code-snippet/grid/array-of-string-cs1/app/App.tsx %}
{% endhighlight %}
{% highlight ts tabtitle="datasource.tsx" %}
{% include code-snippet/grid/array-of-string-cs1/app/datasource.tsx %}
{% endhighlight %}
{% endtabs %}

{ % previewsample "page.domainurl/code-snippet/grid/array-of-string-cs1" % }

### Expression column

You can achieve the expression column by using [`valueAccessor`](https://ej2.syncfusion.com/angular/documentation/api/grid/column/#valueaccessor) property.

{% tabs %}
{% highlight js tabtitle="app.jsx" %}
{% include code-snippet/grid/expression-cs1/app/App.jsx %}
{% endhighlight %}
{% highlight js tabtitle="datasource.jsx" %}
{% include code-snippet/grid/expression-cs1/app/datasource.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="app.tsx" %}
{% include code-snippet/grid/expression-cs1/app/App.tsx %}
{% endhighlight %}
{% highlight ts tabtitle="datasource.tsx" %}
{% include code-snippet/grid/expression-cs1/app/datasource.tsx %}
{% endhighlight %}
{% endtabs %}

{ % previewsample "page.domainurl/code-snippet/grid/expression-cs1" % }

## Format

To format cell values based on specific culture, use the
[`columns.format`](https://ej2.syncfusion.com/angular/documentation/api/grid/column/#format) property.
 The grid uses [Internalization](../../common/internationalization/) library to format [`number`](../../common/internationalization/#number-formatting) and
  [`date`](../../common/internationalization/#date-formatting)
values.

{% tabs %}
{% highlight js tabtitle="app.jsx" %}
{% include code-snippet/grid/column-cs20/app/App.jsx %}
{% endhighlight %}
{% highlight js tabtitle="datasource.jsx" %}
{% include code-snippet/grid/column-cs20/app/datasource.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="app.tsx" %}
{% include code-snippet/grid/column-cs20/app/App.tsx %}
{% endhighlight %}
{% highlight ts tabtitle="datasource.tsx" %}
{% include code-snippet/grid/column-cs20/app/datasource.tsx %}
{% endhighlight %}
{% endtabs %}

{ % previewsample "page.domainurl/code-snippet/grid/column-cs20" % }

> By default, the [`number`](../../common/internationalization/#number-formatting)
and [`date`](../../common/internationalization/#date-formatting) values are formatted in **en-US** locale. You can localize the **currency** and [`date`](../../common/internationalization/#date-formatting) in different locale as explained [`here`](../global-local).

### Number formatting

The number or integer values can be formatted using the below format strings.

Format |Description |Remarks
-----|-----|-----
N | Denotes numeric type. | The numeric format is followed by integer value as N2, N3. etc which denotes the number of precision to be allowed.
C | Denotes currency type. | The currency format is followed by integer value as C2, C3. etc which denotes the number of precision to be allowed.
P | Denotes percentage type | The percentage format expects the input value to be in the range of 0 to 1. For example the cell value **0.2** is formatted as **20%**. The percentage format is followed by integer value as P2, P3. etc which denotes the number of precision to be allowed.

Please refer to the link to know more about [`Number formatting`](../../common/internationalization/#number-formatting) format.

### Date formatting

You can format date values either using built-in date format string or custom format string.

For built-in date format you can specify [`columns.format`](https://ej2.syncfusion.com/angular/documentation/api/grid/column/#format) property as string   (Example: `yMd`). Please refer to the link to know more about [`Date formatting`](../../common/internationalization/#date-formatting).

You can also use custom format string to format the date values. Some of the custom formats and the formatted date values are given in the below table.

Format | Formatted value
-----|-----
{ type:'date', format:'dd/MM/yyyy' } | 04/07/1996
{ type:'date', format:'dd.MM.yyyy' } | 04.07.1996
{ type:'date', skeleton:'short' } | 7/4/96
{ type: 'dateTime', format: 'dd/MM/yyyy hh:mm a' } | 04/07/1996 12:00 AM
{ type: 'dateTime', format: 'MM/dd/yyyy hh:mm:ss a' } | 07/04/1996 12:00:00 AM

{% tabs %}
{% highlight js tabtitle="app.jsx" %}
{% include code-snippet/grid/column-cs21/app/App.jsx %}
{% endhighlight %}
{% highlight js tabtitle="datasource.jsx" %}
{% include code-snippet/grid/column-cs21/app/datasource.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="app.tsx" %}
{% include code-snippet/grid/column-cs21/app/App.tsx %}
{% endhighlight %}
{% highlight ts tabtitle="datasource.tsx" %}
{% include code-snippet/grid/column-cs21/app/datasource.tsx %}
{% endhighlight %}
{% endtabs %}

{ % previewsample "page.domainurl/code-snippet/grid/column-cs21" % }

## Render boolean value as checkbox

To render boolean values as checkbox in columns, you need to set [`displayAsCheckBox`](https://ej2.syncfusion.com/angular/documentation/api/grid/column/#displayascheckbox) property as **true**.

{% tabs %}
{% highlight js tabtitle="app.jsx" %}
{% include code-snippet/grid/column-cs22/app/App.jsx %}
{% endhighlight %}
{% highlight js tabtitle="datasource.jsx" %}
{% include code-snippet/grid/column-cs22/app/datasource.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="app.tsx" %}
{% include code-snippet/grid/column-cs22/app/App.tsx %}
{% endhighlight %}
{% highlight ts tabtitle="datasource.tsx" %}
{% include code-snippet/grid/column-cs22/app/datasource.tsx %}
{% endhighlight %}
{% endtabs %}

{ % previewsample "page.domainurl/code-snippet/grid/column-cs22" % }

## Visibility

You can hide any particular column in Grid before rendering by defining [`visible`](https://ej2.syncfusion.com/angular/documentation/api/grid/column/#visible) property as false. In the below sample **ShipCity** column is defined [`visible`](https://ej2.syncfusion.com/angular/documentation/api/grid/column/#visible) as **false**.

{% tabs %}
{% highlight js tabtitle="app.jsx" %}
{% include code-snippet/grid/column-cs23/app/App.jsx %}
{% endhighlight %}
{% highlight js tabtitle="datasource.jsx" %}
{% include code-snippet/grid/column-cs23/app/datasource.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="app.tsx" %}
{% include code-snippet/grid/column-cs23/app/App.tsx %}
{% endhighlight %}
{% highlight ts tabtitle="datasource.tsx" %}
{% include code-snippet/grid/column-cs23/app/datasource.tsx %}
{% endhighlight %}
{% endtabs %}

{ % previewsample "page.domainurl/code-snippet/grid/column-cs23" % }

## Lock columns

You can lock columns by using [`column.lockColumn`](https://ej2.syncfusion.com/angular/documentation/api/grid/column/#lockcolumn) property. The locked columns will be moved to the first position. Also you can’t reorder its position.

In the below example, **Ship City** column is locked and its reordering functionality is disabled.

{% tabs %}
{% highlight js tabtitle="app.jsx" %}
{% include code-snippet/grid/column-cs24/app/App.jsx %}
{% endhighlight %}
{% highlight js tabtitle="datasource.jsx" %}
{% include code-snippet/grid/column-cs24/app/datasource.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="app.tsx" %}
{% include code-snippet/grid/column-cs24/app/App.tsx %}
{% endhighlight %}
{% highlight ts tabtitle="datasource.tsx" %}
{% include code-snippet/grid/column-cs24/app/datasource.tsx %}
{% endhighlight %}
{% endtabs %}

{ % previewsample "page.domainurl/code-snippet/grid/column-cs24" % }

## Controlling Grid actions

You can enable or disable Grid any actions for a particular column by setting the [`allowFiltering`](https://ej2.syncfusion.com/angular/documentation/api/grid/columnModel/#allowfiltering), [`allowGrouping`](https://ej2.syncfusion.com/angular/documentation/api/grid/columnModel/#allowgrouping), [`allowSorting`](https://ej2.syncfusion.com/angular/documentation/api/grid/columnModel/#allowsorting), [`allowEditing`](https://ej2.syncfusion.com/angular/documentation/api/grid/columnModel/#allowediting) and [`allowReordering`](https://ej2.syncfusion.com/angular/documentation/api/grid/columnModel/#allowreordering) properties.

{% tabs %}
{% highlight js tabtitle="app.jsx" %}
{% include code-snippet/grid/column-cs24/app/App.jsx %}
{% endhighlight %}
{% highlight js tabtitle="datasource.jsx" %}
{% include code-snippet/grid/column-cs24/app/datasource.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="app.tsx" %}
{% include code-snippet/grid/column-cs24/app/App.tsx %}
{% endhighlight %}
{% highlight ts tabtitle="datasource.tsx" %}
{% include code-snippet/grid/column-cs24/app/datasource.tsx %}
{% endhighlight %}
{% endtabs %}

{ % previewsample "page.domainurl/code-snippet/grid/column-cs24" % }

## Show or hide columns by external button

You can show or hide the grid columns dynamically through external buttons by invoking the [`showColumns`](https://ej2.syncfusion.com/angular/documentation/api/grid/#showcolumns) and [`hideColumns`](https://ej2.syncfusion.com/angular/documentation/api/grid/#hidecolumns)
methods.

{% tabs %}
{% highlight js tabtitle="app.jsx" %}
{% include code-snippet/grid/column-cs26/app/App.jsx %}
{% endhighlight %}
{% highlight js tabtitle="datasource.jsx" %}
{% include code-snippet/grid/column-cs26/app/datasource.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="app.tsx" %}
{% include code-snippet/grid/column-cs26/app/App.tsx %}
{% endhighlight %}
{% highlight ts tabtitle="datasource.tsx" %}
{% include code-snippet/grid/column-cs26/app/datasource.tsx %}
{% endhighlight %}
{% endtabs %}

{ % previewsample "page.domainurl/code-snippet/grid/column-cs26" % }

## Customize column styles

You can customise the appearance of header and content of the particular column using the
[`customAttributes`](https://ej2.syncfusion.com/angular/documentation/api/grid/column/#customattributes) property.

To customize the grid column, follow the given steps:

**Step 1**:

Create a css class with custom style to override the default style for rowcell and headercell.

```css
.e-grid .e-rowcell.customcss{
    background-color: #ecedee;
    font-family: 'Bell MT';
    color: 'red';
    font-size: '20px';
}

.e-grid .e-headercell.customcss{
    background-color: #2382c3;
    color: white;
    font-family: 'Bell MT';
    font-size: '20px';
}

```

**Step 2**:

Add the custom css class to particular column by using [`customAttributes`](https://ej2.syncfusion.com/angular/documentation/api/grid/column/#customattributes) property.

```ts
<ColumnDirective field='CustomerID' width='130' customAttributes={customAttributes}></ColumnDirective>

```

{% tabs %}
{% highlight js tabtitle="app.jsx" %}
{% include code-snippet/grid/custom-column-cs1/app/App.jsx %}
{% endhighlight %}
{% highlight js tabtitle="datasource.jsx" %}
{% include code-snippet/grid/custom-column-cs1/app/datasource.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="app.tsx" %}
{% include code-snippet/grid/custom-column-cs1/app/App.tsx %}
{% endhighlight %}
{% highlight ts tabtitle="datasource.tsx" %}
{% include code-snippet/grid/custom-column-cs1/app/datasource.tsx %}
{% endhighlight %}
{% endtabs %}

{ % previewsample "page.domainurl/code-snippet/grid/custom-column-cs1" % }

## Display custom tooltip for columns

To display a custom ToolTip ([`EJ2 Tooltip`](../../../tooltip/getting-started)), you can render the Grid control inside the Tooltip component and set the target as “.e-rowcell”. The tooltip is displayed when hovering the grid cells.

Change the tooltip content for the grid cells by using the following code in the [`beforeRender`](https://ej2.syncfusion.com/angular/documentation/api/tooltip/#beforerender) event.

```ts

const beforeRender = (args) => {
  // event triggered before render the tooltip on target element.
  tooltip.content = args.target.closest("td").innerText;
}

```

{% tabs %}
{% highlight js tabtitle="app.jsx" %}
{% include code-snippet/grid/custom-tooltip-cs1/app/App.jsx %}
{% endhighlight %}
{% highlight js tabtitle="datasource.jsx" %}
{% include code-snippet/grid/custom-tooltip-cs1/app/datasource.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="app.tsx" %}
{% include code-snippet/grid/custom-tooltip-cs1/app/App.tsx %}
{% endhighlight %}
{% highlight ts tabtitle="datasource.tsx" %}
{% include code-snippet/grid/custom-tooltip-cs1/app/datasource.tsx %}
{% endhighlight %}
{% endtabs %}

{ % previewsample "page.domainurl/code-snippet/grid/custom-tooltip-cs1" % }

## Align the text of Grid content and header

For aligning the text of Grid content and header part, kindly use [textAlign](https://ej2.syncfusion.com/angular/documentation/api/grid/column/#textalign) and [headerTextAlign](https://ej2.syncfusion.com/angular/documentation/api/grid/column/#headertextalign) properties.

Grid column supports the following alignments:
* Left
* Right
* Center
* Justify

{% tabs %}
{% highlight js tabtitle="app.jsx" %}
{% include code-snippet/grid/column-cs27/app/App.jsx %}
{% endhighlight %}
{% highlight js tabtitle="datasource.jsx" %}
{% include code-snippet/grid/column-cs27/app/datasource.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="app.tsx" %}
{% include code-snippet/grid/column-cs27/app/App.tsx %}
{% endhighlight %}
{% highlight ts tabtitle="datasource.tsx" %}
{% include code-snippet/grid/column-cs27/app/datasource.tsx %}
{% endhighlight %}
{% endtabs %}

{ % previewsample "page.domainurl/code-snippet/grid/column-cs27" % }

## How to prevent checkbox in the blank row

By default, cells in the grid will be blank if the corresponding column values in the data source are null or undefined. The grid also has the option to prevent the rendering of checkboxes in such cases, even if the [displayAsCheckBox](https://ej2.syncfusion.com/angular/documentation/api/grid/column/#displayascheckbox) property is set to true for that column, by using the [rowDataBound](https://ej2.syncfusion.com/angular/documentation/api/grid/#rowdatabound) event of the Grid.

In the following sample, the `rowDataBound` event of the Grid is used to set the innerHTML of the checkbox element to empty.

{% tabs %}
{% highlight js tabtitle="app.jsx" %}
{% include code-snippet/grid/column-cs27/app/App.jsx %}
{% endhighlight %}
{% highlight js tabtitle="datasource.jsx" %}
{% include code-snippet/grid/column-cs27/app/datasource.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="app.tsx" %}
{% include code-snippet/grid/column-cs27/app/App.tsx %}
{% endhighlight %}
{% highlight ts tabtitle="datasource.tsx" %}
{% include code-snippet/grid/column-cs27/app/datasource.tsx %}
{% endhighlight %}
{% endtabs %}

{ % previewsample "page.domainurl/code-snippet/grid/column-cs27" % }

## See Also

* [Group Column by Format](../grouping#group-by-format)
* [How to set complex column as Foreignkey column](../how-to/complex-column-as-foreign-key-column)
* [Complex Data Binding with list of Array Of Objects](../how-to/list-of-array-of-objects)
* [How to render the color picker component on React Grid](https://www.syncfusion.com/forums/163831/how-to-render-the-color-picker-component-on-react-grid)