---
layout: post
title: Column spanning in React Grid component | Syncfusion
description: Learn here all about Column spanning in Syncfusion React Grid component of Syncfusion Essential JS 2 and more.
control: Column spanning 
platform: ej2-react
documentation: ug
domainurl: ##DomainURL##
---

# Column spanning in React Grid component

Column spanning merges adjacent cells with identical values horizontally, producing a cleaner and more structured layout. This feature reduces duplication in consecutive cells, highlights grouped information, and improves readability by presenting related data in a compact form. Reports and tabular views become easier to interpret when repetitive values are visually combined into a single spanned cell. 

The [enableColumnSpan](https://ej2.syncfusion.com/react/documentation/api/grid#enablecolumnspan) property, when set to "true", activates automatic merging of adjacent cells with identical values. This removes the need for manual configuration and results in a cleaner layout where merged cells highlight patterns and relationships within the data.


{% tabs %}
{% highlight js tabtitle="App.jsx" %}
{% include code-snippet/grid/column-spanning-cs1/app/App.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="App.tsx" %}
{% include code-snippet/grid/column-spanning-cs1/app/App.tsx %}
{% endhighlight %}
{% highlight js tabtitle="datasource.jsx" %}
{% include code-snippet/grid/column-spanning-cs1/app/datasource.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="datasource.tsx" %}
{% include code-snippet/grid/column-spanning-cs1/app/datasource.tsx %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/grid/column-spanning-cs1" %}

> Spanning can also be controlled at the column level by setting `enableColumnSpan` to "false" in the column definition to prevent merging for specific columns.

## Dynamic column spanning

Column spanning in the Syncfusion<sup style="font-size:70%">&reg;</sup> Grid merges adjacent cells horizontally to create a cleaner and more structured layout. Spanning can be controlled dynamically by setting the [colSpan](https://ej2.syncfusion.com/react/documentation/api/grid/queryCellInfoEventArgs#colspan) attribute within the [queryCellInfo](https://ej2.syncfusion.com/react/documentation/api/grid#querycellinfo) event, based on column values and specific conditions. This approach enables custom logic to span cells, allowing flexible presentation of time ranges, grouped values, or contextual highlights.

The following demo shows employee "Davolio" performing analysis from *"9:00 AM to 10:00 AM"*, with spanned cells representing the time range.


{% tabs %}
{% highlight js tabtitle="App.jsx" %}
{% include code-snippet/grid/spanning-cs1/app/App.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="App.tsx" %}
{% include code-snippet/grid/spanning-cs1/app/App.tsx %}
{% endhighlight %}
{% highlight js tabtitle="ColumnSpanDataType.jsx" %}
{% include code-snippet/grid/spanning-cs1/app/ColumnSpanDataType.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="ColumnSpanDataType.tsx" %}
{% include code-snippet/grid/spanning-cs1/app/ColumnSpanDataType.tsx %}
{% endhighlight %}
{% highlight js tabtitle="datasource.jsx" %}
{% include code-snippet/grid/spanning-cs1/app/datasource.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="datasource.tsx" %}
{% include code-snippet/grid/spanning-cs1/app/datasource.tsx %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/grid/spanning-cs1" %}

## Change the border color while column spanning

The border color of spanned cells can be customized through the `queryCellInfo` event. This event is triggered before the cell element is appended to the Grid, which makes it possible to apply styles programmatically.

{% tabs %}
{% highlight js tabtitle="App.jsx" %}
{% include code-snippet/grid/spanning-cs3/app/App.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="App.tsx" %}
{% include code-snippet/grid/spanning-cs3/app/App.tsx %}
{% endhighlight %}
{% highlight js tabtitle="ColumnSpanDataType.jsx" %}
{% include code-snippet/grid/spanning-cs3/app/ColumnSpanDataType.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="ColumnSpanDataType.tsx" %}
{% include code-snippet/grid/spanning-cs3/app/ColumnSpanDataType.tsx %}
{% endhighlight %}
{% highlight js tabtitle="datasource.jsx" %}
{% include code-snippet/grid/spanning-cs3/app/datasource.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="datasource.tsx" %}
{% include code-snippet/grid/spanning-cs3/app/datasource.tsx %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/grid/spanning-cs3" %}


### Limitations

* Virtualization
* Infinite Scrolling
* Grouping
* Lazy Load Grouping
* Row Drag and Drop
* Column Virtualization
* Detail Template
* Editing
* Export
* Foreign Key
* Hierarchy Grid
* [UpdateCell](https://ej2.syncfusion.com/react/documentation/api/grid#updatecell)
* Autofill
