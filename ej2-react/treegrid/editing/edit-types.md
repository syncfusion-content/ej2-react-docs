---
layout: post
title: Edit types in React TreeGrid component | Syncfusion
description: Learn here all about Edit types in Syncfusion React TreeGrid component of Syncfusion Essential JS 2 and more.
control: Edit types 
platform: ej2-react
documentation: ug
domainurl: ##DomainURL##
---

# Edit types in React TreeGrid

## Cell edit type and its params

The [columns.editType](https://ej2.syncfusion.com/react/documentation/api/treegrid/column/#edittype) property customizes the editor used for a column. Set the edit type based on the column’s data type.

* `numericedit` - [NumericTextBox](../../numerictextbox) component for integer, double, and decimal types.
* `defaultedit` - [TextBox](../../textbox) component for string type.
* `dropdownedit` - [DropDownList](../../drop-down-list) component for list type.
* `booleanedit` - [CheckBox](../../check-box) component for boolean type.
* `datepickeredit` - [DatePicker](../../datepicker) component for date type.
* `datetimepickeredit` - [DateTimePicker](../../datetimepicker) component for date and time type.

Customize the editor model through [columns.edit.params](https://ej2.syncfusion.com/react/documentation/api/treegrid/column/#edit).

The following table lists editor components and example params.

Component | Example
-----|-----
[NumericTextBox](../../numerictextbox) | params: { decimals: 2, value: 5 }
[TextBox](../../textbox) | -
[DropDownList](../../drop-down-list) | params: { value: 'Germany' }
[CheckBox](../../check-box) | params: { checked: true }
[DatePicker](../../datepicker) | params: { format: 'dd.MM.yyyy' }
[DateTimePicker](../../datetimepicker) | params: { value: new Date() }

{% tabs %}
{% highlight js tabtitle="app.jsx" %}
{% include code-snippet/treegrid/editing-cs6/app/App.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="app.tsx" %}
{% include code-snippet/treegrid/editing-cs6/app/App.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/treegrid/editing-cs6" %}

> If an edit type is not defined for a column, it defaults to the *stringedit* type (TextBox component).

## Cell edit template

A cell edit template adds a custom component for a specific column by implementing the following functions:

* **create** - Create the element at initialization time.
* **write** - Render the custom component or assign a default value when editing begins.
* **read** - Retrieve the value from the component when saving.
* **destroy** - Dispose the component.

{% tabs %}
{% highlight js tabtitle="app.jsx" %}
{% include code-snippet/treegrid/editing-cs7/app/App.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="app.tsx" %}
{% include code-snippet/treegrid/editing-cs7/app/App.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/treegrid/editing-cs7" %}