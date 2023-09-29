---
layout: post
title: Paging in React Grid component | Syncfusion
description: Learn here all about Paging in Syncfusion React Grid component of Syncfusion Essential JS 2 and more.
control: Paging 
platform: ej2-react
documentation: ug
domainurl: ##DomainURL##
---

# Paging in React Grid component

Paging provides an option to display Grid data in page segments.
To enable paging, set the [allowPaging](https://ej2.syncfusion.com/react/documentation/api/grid/#allowpaging) to true.
When paging is enabled, pager component renders at the bottom of the grid.
Paging options can be configured through the [pageSettings](https://ej2.syncfusion.com/react/documentation/api/grid/pageSettings/).

In the below sample, [pageSize](https://ej2.syncfusion.com/react/documentation/api/grid/pageSettings/#pagesize) is calculated based on the grid height by using the [load](https://ej2.syncfusion.com/react/documentation/api/grid/#load) event.

To use Paging, inject **Page** module in Grid.

{% tabs %}
{% highlight js tabtitle="App.jsx" %}
{% include code-snippet/grid/pager-cs2/app/App.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="App.tsx" %}
{% include code-snippet/grid/pager-cs2/app/App.tsx %}
{% endhighlight %}
{% highlight js tabtitle="datasource.jsx" %}
{% include code-snippet/grid/pager-cs2/app/datasource.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="datasource.tsx" %}
{% include code-snippet/grid/pager-cs2/app/datasource.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/grid/pager-cs2" %}

> Grid Paging enables you to achieve better performance by fetching only a predefined number of records from the data source.

## Template

You can use custom elements inside the pager instead of default elements. The custom elements can be defined by using the [template](https://ej2.syncfusion.com/react/documentation/api/grid/pageSettings/#template) property. Inside this template, you can access the [currentPage](https://ej2.syncfusion.com/react/documentation/api/grid/pageSettings/#currentpage), [pageSize](https://ej2.syncfusion.com/react/documentation/api/grid/pageSettings/#pagesize), [pageCount](https://ej2.syncfusion.com/react/documentation/api/grid/pageSettings/#pagecount), totalPage and totalRecordsCount values.

{% tabs %}
{% highlight js tabtitle="App.jsx" %}
{% include code-snippet/grid/pager-cs3/app/App.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="App.tsx" %}
{% include code-snippet/grid/pager-cs3/app/App.tsx %}
{% endhighlight %}
{% highlight js tabtitle="datasource.jsx" %}
{% include code-snippet/grid/pager-cs3/app/datasource.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="datasource.tsx" %}
{% include code-snippet/grid/pager-cs3/app/datasource.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/grid/pager-cs3" %}

## Pager with Page Size Dropdown

The pager Dropdown allows you to change the number of records in the Grid dynamically. It can be enabled by defining the [pageSettings.pageSizes](https://ej2.syncfusion.com/react/documentation/api/grid/pageSettings/#pagesizes) property as **true**.

{% tabs %}
{% highlight js tabtitle="App.jsx" %}
{% include code-snippet/grid/pager-cs4/app/App.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="App.tsx" %}
{% include code-snippet/grid/pager-cs4/app/App.tsx %}
{% endhighlight %}
{% highlight js tabtitle="datasource.jsx" %}
{% include code-snippet/grid/pager-cs4/app/datasource.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="datasource.tsx" %}
{% include code-snippet/grid/pager-cs4/app/datasource.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/grid/pager-cs4" %}

## How to render Pager at the Top of the Grid

By default, Pager will be rendered at the bottom of the Grid. You can also render the Pager at the top of the Grid by using the [dataBound](https://ej2.syncfusion.com/react/documentation/api/grid/#databound) event.

{% tabs %}
{% highlight js tabtitle="App.jsx" %}
{% include code-snippet/grid/pager-cs5/app/App.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="App.tsx" %}
{% include code-snippet/grid/pager-cs5/app/App.tsx %}
{% endhighlight %}
{% highlight js tabtitle="datasource.jsx" %}
{% include code-snippet/grid/pager-cs5/app/datasource.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="datasource.tsx" %}
{% include code-snippet/grid/pager-cs5/app/datasource.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/grid/pager-cs5" %}

> During the paging action, the pager component triggers the below three events.
> * The [created](https://ej2.syncfusion.com/react/documentation/api/pager/#created) event triggers when Pager is created.
> * The [click](https://ej2.syncfusion.com/react/documentation/api/pager/#click) event triggers when the numeric items in the pager is clicked.
> * The [dropDownChanged](https://ej2.syncfusion.com/react/documentation/api/pager/#dropdownchanged) event triggers when pageSize DropDownList value is selected.

## See Also

[Group with Paging](./grouping/grouping/#group-with-paging)
