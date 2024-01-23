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

The column spanning feature in the Syncfusion Grid allows you to merge adjacent cells horizontally, creating a visually appealing and informative layout. By defining the [colSpan](https://ej2.syncfusion.com/react/documentation/api/grid/queryCellInfoEventArgs/#colspan) attribute in the [QueryCellInfo](https://ej2.syncfusion.com/react/documentation/api/grid/queryCellInfoEventArgs) event, you can easily span cells and customize the appearance of the grid.

In the following demo, Employee **Davolio** doing analysis from 9.00 AM to 10.00 AM, so that cells have spanned.

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

You can change the border color for the spanned cells by the using [QueryCellInfo](https://ej2.syncfusion.com/react/documentation/api/grid/#querycellinfo) event. This event triggers before the cell element is appended to the Grid element.

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

## Limitations

* The [updateCell](https://ej2.syncfusion.com/react/documentation/api/grid/#updatecell) method does not support column spanning.
* Column spanning is not compatible with the following features:
    1. Virtual scrolling
    2. Infinite scrolling
    3. Lazy load grouping