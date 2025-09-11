---
layout: post
title: Classic layout in React Pivotview component | Syncfusion
description: Learn here all about Classic layout in Syncfusion React Pivotview component of Syncfusion Essential JS 2 and more.
control: Classic Layout
platform: ej2-react
documentation: ug
domainurl: ##DomainURL##
---

# Classic Layout in React Pivot Table component

N> The classic layout is compatible only with relational data sources and operates in both client-side and server-side engines.

The classic layout in the Syncfusion Pivot Table offers a structured, tabular presentation of data, improving both readability and usability. In this layout, fields in the row axis are displayed side by side in separate columns, making data interpretation and analysis easier. By default, grand totals appear at the end of all rows, while subtotals are placed in a separate row beneath each group. All other features of the pivot table, such as filtering, sorting, drag-and-drop, expand/collapse functionality, and more, remain the same as in the compact layout, which serves as the default hierarchical format of the pivot table.

To enable the classic layout, set the [layout](https://ej2.syncfusion.com/react/documentation/api/pivotview/gridSettings/#layout) property in the [gridSettings](https://ej2.syncfusion.com/react/documentation/api/pivotview/gridSettings/) of the Pivot Table to **Tabular**.

{% tabs %}
{% highlight js tabtitle="App.jsx" %}
{% include code-snippet/pivot-table/classic-layout-cs1/app/App.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="App.tsx" %}
{% include code-snippet/pivot-table/classic-layout-cs1/app/App.tsx %}
{% endhighlight %}
{% highlight js tabtitle="datasource.jsx" %}
{% include code-snippet/pivot-table/classic-layout-cs1/app/datasource.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="datasource.tsx" %}
{% include code-snippet/pivot-table/classic-layout-cs1/app/datasource.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/pivot-table/classic-layout-cs1" %}

**Limitations**

* Subtotals at the "Top" position are not supported for row subtotals.
