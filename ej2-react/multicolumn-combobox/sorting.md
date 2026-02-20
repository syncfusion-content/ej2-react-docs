---
layout: post
title: Sorting in React MultiColumn Combobox component | Syncfusion
description: Checkout and learn about Sorting in React MultiColumn Combobox component of Syncfusion Essential JS 2 and more.
platform: ej2-react
control: MultiColumn Combobox
documentation: ug
domainurl: ##DomainURL##
---

# Sorting in React MultiColumn ComboBox component

The MultiColumn ComboBox component provides built-in support for sorting data-bound columns in ascending or descending order by using the [allowSorting](https://ej2.syncfusion.com/react/documentation/api/multicolumn-combobox/#allowsorting) property. By default, the value is `true`.

To sort a particular column in the MultiColumn ComboBox, click on the grid column header in the popup. Each click on the header toggles the sorting order of the column between `Ascending` and `Descending`

## Setting the sort order

You can use the [sortOrder](https://ej2.syncfusion.com/react/documentation/api/multicolumn-combobox/#sortorder) property to set the order of the column. It supports three types of sorting [None](https://ej2.syncfusion.com/react/documentation/api/multicolumn-combobox/sortOrder/), [Ascending](https://ej2.syncfusion.com/react/documentation/api/multicolumn-combobox/sortOrder/) and [Descending](https://ej2.syncfusion.com/react/documentation/api/multicolumn-combobox/sortOrder/).

Click a column header to sort in ascending order. Click again to sort in descending order. Click a third time to clear the sorting.

The following examples demonstrate sorting in `Descending` order:

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/multicolumn-combobox/sorting/sortOrder/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/multicolumn-combobox/sorting/sortOrder/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/multicolumn-combobox/sorting/sortOrder" %}

## Sort type

Use the [sortType](https://ej2.syncfusion.com/react/documentation/api/multicolumn-combobox/#sorttype) property to set the sorting type for columns. It supports two types: [OneColumn](https://ej2.syncfusion.com/react/documentation/api/multicolumn-combobox/sortType/) and [MultipleColumns](https://ej2.syncfusion.com/react/documentation/api/multicolumn-combobox/sortType/). By default, `sortType` is `OneColumn`.

Sort multiple columns by holding CTRL and clicking column headers. This feature is useful for sorting data based on multiple criteria.

The following examples demonstrate sorting with `MultipleColumns`:

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/multicolumn-combobox/sorting/sortType/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/multicolumn-combobox/sorting/sortType/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/multicolumn-combobox/sorting/sortType" %}
