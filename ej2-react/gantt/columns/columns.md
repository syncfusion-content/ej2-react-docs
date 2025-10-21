---
layout: post
title: Columns in React Gantt component | Syncfusion
description: Learn here all about Columns in Syncfusion React Gantt component of Syncfusion Essential JS 2 and more.
control: Columns 
platform: ej2-react
documentation: ug
domainurl: ##DomainURL##
---

# Columns in React Gantt component

The column displays information from a bound data source, and you can edit the values of column to update the task details through TreeGrid. The operations such as sorting, filtering, and searching can be performed based on column definitions. To display a Gantt column, the [`field`](https://ej2.syncfusion.com/react/documentation/api/gantt/column/#field) property should be mapped from the data source to the column.

> If the column [`field`](https://ej2.syncfusion.com/react/documentation/api/gantt/column/#field) is not specified in the data source, the column values will be empty.

The [`treeColumnIndex`](https://ej2.syncfusion.com/react/documentation/api/gantt/#treecolumnindex) property is used to define the expander column in the Gantt component to expand and collapse the child rows.

## Defining columns

Using the [`columns`](https://ej2.syncfusion.com/react/documentation/api/gantt/#columns) property, you can define the columns in Gantt. If the columns are not defined, then the default columns will be rendered based on the mapped data source fields in the [`taskFields`](https://ej2.syncfusion.com/react/documentation/api/gantt/taskFields/) property. Refer to the following code example for defining the columns in Gantt along with their widths.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/gantt/headertemplate-cs1/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/gantt/headertemplate-cs1/app/index.tsx %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/gantt/headertemplate-cs1/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/gantt/headertemplate-cs1" %}

## Custom column header

The column header text can be defined using the [`headerText`](https://ej2.syncfusion.com/react/documentation/api/gantt/column/#headertext) property, and you can customize the column headers using the [`headerTemplate`](https://ej2.syncfusion.com/react/documentation/api/gantt/column/#headertemplate) property.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/gantt/headertemplate-cs2/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/gantt/headertemplate-cs2/app/index.tsx %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/gantt/headertemplate-cs2/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/gantt/headertemplate-cs2" %}

## Format

To format the cell values based on a specific culture, use the [`columns.format`](https://ej2.syncfusion.com/react/documentation/api/gantt/column/#format) property. The Gantt component uses the [`Internationalization`](https://ej2.syncfusion.com/react/documentation/common/globalization/internationalization) library to format [`number`](https://ej2.syncfusion.com/react/documentation/gantt/columns/columns#number-formatting) and [`date`](https://ej2.syncfusion.com/react/documentation/common/globalization/internationalization#manipulating-datetime) values.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/gantt/format-cs1/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/gantt/format-cs1/app/index.tsx %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/gantt/format-cs1/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/gantt/format-cs1" %}

> By default, the number and date values are formatted in `en-US` culture.

### Number formatting

The number or integer values can be formatted using the following format strings.

Format |Description |Remarks
-----|-----
N | Denotes numeric type. | The numeric format is followed by an integer value like N2 or N3, which denotes the number of precisions to be allowed.
C | Denotes currency type. | The currency format is followed by an integer value like C2 or C3, which denotes the number of precisions to be allowed.
P | Denotes percentage type | The percentage format expects the input value to be in the range of 0 to 100. For example, the cell value `0.2` is formatted as `20%`. The percentage format is followed by an integer value like P2, P3, which denotes the number of precisions to be allowed.

### Date formatting

You can format date values either using the built-in date format string or a custom format string.

For the built-in date format, you can specify the [`columns.format`](https://ej2.syncfusion.com/react/documentation/api/gantt/column/#format) property as string (example: `yMd`).

You can also use the custom format string to format the date values. Some of the custom formats and the formatted date values are given in the following table.

Format | Formatted value
-----|-----
{ type:'date', format:'dd/MM/yyyy' } | 04/07/2019
{ type:'date', format:'dd.MM.yyyy' } | 04.07.2019
{ type:'date', skeleton:'short' } | 7/4/19
{ type: 'dateTime', format: 'dd/MM/yyyy hh:mm a' } | 04/07/2019 12:00 AM
{ type: 'dateTime', format: 'MM/dd/yyyy hh:mm:ss a' } | 07/04/2019 12:00:00 AM
{ type: 'dateTime', format: 'MM/dd/yyyy HH:mm:ss' } | 07/04/2019 17:00:00

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/gantt/format-cs2/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/gantt/format-cs2/app/index.tsx %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/gantt/format-cs2/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/gantt/format-cs2" %}

## Change tree/expander column

The tree/expander column is a column in the Gantt component, that has icons to expand or collapse the parent records. You can define the tree column index in the Gantt component by using the [`treeColumnIndex`](https://ej2.syncfusion.com/react/documentation/api/gantt/#treecolumnindex) property and the default value of this property is `0`. The following code example shows how to use this property.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/gantt/treecolumnindex-cs1/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/gantt/treecolumnindex-cs1/app/index.tsx %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/gantt/treecolumnindex-cs1/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/gantt/treecolumnindex-cs1" %}

## Show or hide columns dynamically

You can show or hide gantt columns dynamically using external buttons by invoking the [`showColumn`](https://ej2.syncfusion.com/react/documentation/api/gantt/#showcolumn) or [`hideColumn`](https://ej2.syncfusion.com/react/documentation/api/gantt/#hidecolumn) method.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/gantt/show-hide-cs1/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/gantt/show-hide-cs1/app/index.tsx %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/gantt/show-hide-cs1/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/gantt/show-hide-cs1" %}

## Controlling Gantt column actions

You can enable or disable gantt action for a particular column by setting the [`allowFiltering`](https://ej2.syncfusion.com/react/documentation/api/gantt/#allowfiltering), [`allowSorting`](https://ej2.syncfusion.com/react/documentation/api/gantt/#allowsorting), [`allowReordering`](https://ej2.syncfusion.com/react/documentation/api/gantt/#allowreordering), and [`allowEditing`](https://ej2.syncfusion.com/react/documentation/api/gantt/#editsettings) properties.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/gantt/grid-actions-cs1/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/gantt/grid-actions-cs1/app/index.tsx %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/gantt/grid-actions-cs1/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/gantt/grid-actions-cs1" %}

## Column type

Column type can be specified using the `columns.type` property. It specifies the type of data the column binds.

If the `format` is defined for a column, the column uses `type` to select the appropriate format option [number](../common/internationalization#number-formatting) or [date](../common/internationalization#manipulating-datetime).

Gantt column supports the following types:
* string
* number
* boolean
* date
* datetime

> If the `type` is not defined, it will be determined from the first record of the [`dataSource`](https://ej2.syncfusion.com/react/documentation/api/gantt/#datasource).
> In case if the first record of the [`dataSource`](https://ej2.syncfusion.com/react/documentation/api/gantt/#datasource) is null/blank value for a column then it is necessary to define the `type` for that column.

## Render boolean value as checkbox

You can render boolean values as checkboxes in Gantt component by setting the [displayAsCheckBox](https://ej2.syncfusion.com/react/documentation/api/gantt/column/#displayascheckbox) property to **true** for the desired column. This replaces the default text representation of **true** or **false** with a checkbox, making boolean fields visually clearer and more intuitive.

The following sample demonstrates how to display a boolean value as a checkbox for the **Verified** column.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/gantt/checkbox-cs1/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/gantt/checkbox-cs1/app/index.tsx %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/gantt/checkbox-cs1/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/gantt/checkbox-cs1" %}

>* The `displayAsCheckBox` property is only applicable to boolean values in Gantt columns.
>* When `displayAsCheckBox` is set to **true**, the boolean values will be rendered as checkboxes in the Gantt column, with checked state indicating **true** and unchecked state indicating **false**.

## Responsive columns

The Syncfusion<sup style="font-size:70%">&reg;</sup> react Gantt component provides a built-in feature to control column visibility based on media queries using the `hideAtMedia` property in the column object. This method can be used to hide columns automatically when the screen width matches specified [media query](http://cssmediaqueries.com/what-are-css-media-queries.html) conditions.

The following example demonstrates a Gantt chart where the **Task Name** column is set to `(min-width: 700px)`, meaning it will be hidden when the browser width is less than or equal to 700px. Similarly, the **Duration** column is set to `(max-width: 500px)`, so it will be hidden when the browser width exceeds 500px.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/gantt/column-cs1/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/gantt/column-cs1/app/index.tsx %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/gantt/column-cs1/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/gantt/column-cs1" %}