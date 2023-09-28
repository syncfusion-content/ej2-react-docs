---
layout: post
title: Row spanning in React Grid component | Syncfusion
description: Learn here all about Row spanning in Syncfusion React Grid component of Syncfusion Essential JS 2 and more.
control: Row spanning 
platform: ej2-react
documentation: ug
domainurl: ##DomainURL##
---

# Row spanning in React Grid component

The grid has option to span row cells. To achieve this, You need to define the [rowSpan](https://ej2.syncfusion.com/react/documentation/api/grid/queryCellInfoEventArgs/#rowspan) attribute to span cells in the [QueryCellInfo](https://ej2.syncfusion.com/react/documentation/api/grid/#querycellinfo) event.

In the following demo, **Davolio** cell is spanned to two rows in the **EmployeeName** column.

Also Grid supports the spanning of rows and columns for same cells. **Lunch Break** cell is spanned to all the rows and three columns in the **1:00** column.

{% tabs %}
{% highlight js tabtitle="App.jsx" %}
{% include code-snippet/grid/spanning-cs2/app/App.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="App.tsx" %}
{% include code-snippet/grid/spanning-cs2/app/App.tsx %}
{% endhighlight %}
{% highlight js tabtitle="ColumnSpanDataType.jsx" %}
{% include code-snippet/grid/spanning-cs2/app/ColumnSpanDataType.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="ColumnSpanDataType.tsx" %}
{% include code-snippet/grid/spanning-cs2/app/ColumnSpanDataType.tsx %}
{% endhighlight %}
{% highlight js tabtitle="datasource.jsx" %}
{% include code-snippet/grid/spanning-cs2/app/datasource.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="datasource.tsx" %}
{% include code-snippet/grid/spanning-cs2/app/datasource.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/grid/spanning-cs2" %}

> To disable the spanning for particular Grid page, use [requestType](https://ej2.syncfusion.com/react/documentation/api/grid/queryCellInfoEventArgs/#requesttype) from [QueryCellInfo](https://ej2.syncfusion.com/react/documentation/api/grid/#querycellinfo) event argument.