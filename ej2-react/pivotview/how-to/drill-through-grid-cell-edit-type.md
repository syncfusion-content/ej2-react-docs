---
layout: post
title: Drill through grid cell edit type in React | Syncfusion
description: Learn here all about Drill through grid cell edit type in Syncfusion React Pivotview component of Syncfusion Essential JS 2 and more.
control: Drill through grid cell edit type 
platform: ej2-react
documentation: ug
domainurl: ##DomainURL##
---

# Drill through grid cell edit type in React Pivotview component

Using the [`drillThrough`](https://ej2.syncfusion.com/react/documentation/api/pivotview/#drillthrough) event in the pivot table, you can define the edit type of a particular column in the grid present inside the drill-through dialog. To do so, check the column name in the [`drillThrough`](https://ej2.syncfusion.com/react/documentation/api/pivotview/#drillthrough) event and then specify the edit type of that column using the [`gridColumns.editType`](https://ej2.syncfusion.com/react/documentation/api/grid/column/#edittype) event argument.

> The [`gridColumns.editType`](https://ej2.syncfusion.com/react/documentation/api/grid/column/#edittype) property must be set based on the column's data type. For example, the string data type will not be applicable for the numeric text box edit type.

* [`NumericTextBox`](https://ej2.syncfusion.com/react/documentation/numerictextbox/) control for integer, double, and decimal data types.
* [`TextBox`](https://ej2.syncfusion.com/react/documentation/textbox/) control for string data type.
* [`DropDownList`](https://ej2.syncfusion.com/react/documentation/drop-down-list/) control to show all unique values related to that field.
* [`CheckBox`](https://ej2.syncfusion.com/react/documentation/check-box/) control for boolean data type.
* [`DatePicker`](https://ej2.syncfusion.com/react/documentation/datepicker/) control for date data type.
* [`DateTimePicker`](https://ej2.syncfusion.com/react/documentation/datetimepicker/) control for date time data type.

In the below example, the data type of the `Country` column is set to `DropDownList`.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/pivot-table/default-cs164/app/App.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/pivot-table/default-cs164/app/App.tsx %}
{% endhighlight %}
{% highlight js tabtitle="datasource.jsx" %}
{% include code-snippet/pivot-table/default-cs164/app/datasource.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="datasource.tsx" %}
{% include code-snippet/pivot-table/default-cs164/app/datasource.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/pivot-table/default-cs164" %}