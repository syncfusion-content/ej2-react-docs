---
layout: post
title: Value sorting in React Pivot Table | Syncfusion
description: Learn how the React Pivot Table sorts columns by aggregated values in ascending or descending order using enableValueSorting and valueSortSettings.
control: Pivot Table
platform: ej2-react
documentation: ug
domainurl: ##DomainURL##
---

# Value sorting in React Pivot Table

Value sorting allows you to sort an individual column based on its values either in ascending or descending order. It can be enabled by setting the `enableValueSorting` property to **true** (default `false`). You can sort the column values at runtime by clicking the column header, or configure the sort order at initial render through `valueSortSettings`.

Value sorting can be configured using the `valueSortSettings` option through code-behind. The settings required to sort value fields at initial rendering are:

* `headerText`: Sets the column header names (delimiter-separated) used to identify which column to sort.
* `headerDelimiter`: Sets the delimiter string that separates the levels in `headerText`. Defaults to `'.'`.
* `sortOrder`: Sets the sort direction. Accepts `'Ascending'` or `'Descending'`.

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