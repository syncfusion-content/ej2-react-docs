---
layout: post
title: Value sorting in React Pivotview component | Syncfusion
description: Learn how to sort data by value fields in the Syncfusion React Pivot Table to order rows or columns based on aggregated numeric values in ascending or descending order.
control: Value sorting 
platform: ej2-react
documentation: ug
domainurl: ##DomainURL##
---

# Value sorting in React Pivotview component

Value sorting allows you to sort individual column based on it's values either in ascending or descending order. It can been enabled by setting the `enableValueSorting` property to **true**. You can sort the column values by clicking the column header.

Value sorting can be configured using the `valueSortSettings` option through code behind. The settings required to sort value fields at initial rendering are:
* `headerText`: It allows to set the column header names with delimiters, that is used for value sorting.
* `headerDelimiter`: It allows to set the delimiters string to separate the given header text.
* `sortOrder`: It allows to set the sort direction of the value field.

{% tabs %}
{% highlight js tabtitle="App.jsx" %}
{% include code-snippet/pivot-table/default-cs307/app/App.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="App.tsx" %}
{% include code-snippet/pivot-table/default-cs307/app/App.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/pivot-table/default-cs307" %}

## See Also

* [Sorting](./sorting)