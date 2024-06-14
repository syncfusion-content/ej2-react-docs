---
layout: post
title: Columns in React MultiColumn Combobox component | Syncfusion
description: Checkout and learn about columns with React MultiColumn Combobox component of Syncfusion Essential JS 2 and more.
platform: ej2-react
control: MultiColumn Combobox
documentation: ug
domainurl: ##DomainURL##
---

# Columns in React MultiColumn ComboBox component

The [columns](https://ej2.syncfusion.com/react/documentation/api/multicolumn-combobox#columns) property allows to define what data fields is to be displayed in the MultiColumn Combobox.

You can customize the column by using [ColumnModel](https://ej2.syncfusion.com/react/documentation/api/multicolumn-combobox/columnModel/), which provides options such as `field`, `header`, `width`, `format`, `template` and more.

* [field](https://ej2.syncfusion.com/react/documentation/api/multicolumn-combobox/columnModel/#field) - Specifies the fields to be displayed in each column, mapped from the data source to the multicolumn combobox.

* [header](https://ej2.syncfusion.com/react/documentation/api/multicolumn-combobox/columnModel/#header) - Specifes the data to be displayed in the column header.

* [width](https://ej2.syncfusion.com/react/documentation/api/multicolumn-combobox/columnModel/#width) - Specifes the column width.

In the following example, the column is customized with `field`, `header` and `width` properties.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/multicolumn-combobox/columns/column-field/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/multicolumn-combobox/columns/column-field/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/multicolumn-combobox/columns/column-field" %}

## Setting text align

You can use the [textAlign](https://ej2.syncfusion.com/react/documentation/api/multicolumn-combobox/columnModel/#textalign) property to define the text alignment of the column.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/multicolumn-combobox/columns/column-textalign/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/multicolumn-combobox/columns/column-textalign/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/multicolumn-combobox/columns/column-textalign" %}

## Setting template

You can use the [template](https://ej2.syncfusion.com/react/documentation/api/multicolumn-combobox/columnModel/#textalign) property to customize the each cell of the column. It accepts either a template string or an HTML element.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/multicolumn-combobox/columns/column-template/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/multicolumn-combobox/columns/column-template/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/multicolumn-combobox/columns/column-template" %}

## Setting display as checkBox

You can use [displayAsCheckBox](https://ej2.syncfusion.com/react/documentation/api/multicolumn-combobox/columnModel/#displayascheckbox) property to display the column value as checkbox instead of a boolean value. By default, the value is `false`.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/multicolumn-combobox/columns/column-checkbox/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/multicolumn-combobox/columns/column-checkbox/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/multicolumn-combobox/columns/column-checkbox" %}

## Setting custom attributes

You can use the [customAttributes](https://ej2.syncfusion.com/react/documentation/api/multicolumn-combobox/columnModel/#customattributes) property to customize the CSS styles and attributes of each column's content cells.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/multicolumn-combobox/columns/column-attribute/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/multicolumn-combobox/columns/column-attribute/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/multicolumn-combobox/columns/column-attribute" %}
