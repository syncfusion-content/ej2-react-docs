---
layout: post
title: Edit types in React Treegrid component | Syncfusion
description: Learn here all about Edit types in Syncfusion React Treegrid component of Syncfusion Essential JS 2 and more.
control: Edit types 
platform: ej2-react
documentation: ug
domainurl: ##DomainURL##
---

# Edit types in React Treegrid component

## Cell edit type and its params

The [`columns.editType`](https://ej2.syncfusion.com/react/documentation/api/treegrid/column/#edittype) is used to customize the edit type of the particular column. You can set the [`columns.editType`](https://ej2.syncfusion.com/react/documentation/api/treegrid/column/#edittype) based on data type of the column.

* `numericedit` - [`NumericTextBox`](../../numerictextbox) component for integers, double, and decimal data types.

* `defaultedit` - [`TextBox`](../../textbox) component for string data type.

* `dropdownedit` - [`DropDownList`](../../drop-down-list) component for list data type.

* `booleanedit` - [`CheckBox`](../../check-box) component for boolean data type.

* `datepickeredit` - [`DatePicker`](../../datepicker) component for date data type.

* `datetimepickeredit` - [`DateTimePicker`](../../datetimepicker) component for date time data type.

Also, you can customize model of the [`columns.editType`](https://ej2.syncfusion.com/react/documentation/api/treegrid/column/#edittype) component through the [`columns.edit.params`](https://ej2.syncfusion.com/react/documentation/api/treegrid/column/#edit).

The following table describes cell edit type component and their corresponding edit params of the column.

Component |Example
-----|-----
[`NumericTextBox`](../../numerictextbox) | params: { decimals: 2, value: 5 }
[`TextBox`](../../textbox) | -
[`DropDownList`](../../drop-down-list) | params: { value: 'Germany' }
[`Checkbox`](../../check-box) | params: { checked: true}
[`DatePicker`](../../datepicker) | params: { format:'dd.MM.yyyy' }
[`DateTimePicker`](../../datetimepicker) | params: { value: new Date() }

{% tabs %}
{% highlight js tabtitle="app.jsx" %}
{% include code-snippet/treegrid/editing-cs6/app/App.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="app.tsx" %}
{% include code-snippet/treegrid/editing-cs6/app/App.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/treegrid/editing-cs6" %}

> If edit type is not defined in the column, then it will be considered as the *stringedit* type (Textbox component).

## Cell edit template

The cell edit template is used to add a custom component for a particular column by invoking the following functions:

* **create** - It is used to create the element at time of initialization.

* **write** - It is used to create custom component or assign default value at time of editing.

* **read** - It is used to read the value from component at time of save.

* **destroy** - It is used to destroy the component.

{% tabs %}
{% highlight js tabtitle="app.jsx" %}
{% include code-snippet/treegrid/editing-cs7/app/App.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="app.tsx" %}
{% include code-snippet/treegrid/editing-cs7/app/App.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/treegrid/editing-cs7" %}