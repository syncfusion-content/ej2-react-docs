---
layout: post
title: Footer aggregate in React Grid component | Syncfusion
description: Learn here all about Footer aggregate in Syncfusion React Grid component of Syncfusion Essential JS 2 and more.
control: Footer aggregate 
platform: ej2-react
documentation: ug
domainurl: ##DomainURL##
---

# Footer aggregate in React Grid component

The Syncfusion<sup style="font-size:70%">&reg;</sup> React Grid component allows you to calculate and display aggregate values in the footer cells. The footer aggregate value is calculated from all the rows in the grid. You can use the [footerTemplate](https://ej2.syncfusion.com/react/documentation/api/grid/aggregateColumn/#footertemplate) property to render the aggregate value in the footer cells.

{% tabs %}
{% highlight js tabtitle="App.jsx" %}
{% include code-snippet/grid/aggregate-cs2/app/App.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="App.tsx" %}
{% include code-snippet/grid/aggregate-cs2/app/App.tsx %}
{% endhighlight %}
{% highlight js tabtitle="datasource.jsx" %}
{% include code-snippet/grid/aggregate-cs2/app/datasource.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="datasource.tsx" %}
{% include code-snippet/grid/aggregate-cs2/app/datasource.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/grid/aggregate-cs2" %}

> * Use the template reference variable name **#footerTemplate** to specify the footer template.
> * Inside the template, access the aggregate values using their corresponding [type](https://ej2.syncfusion.com/react/documentation/api/grid/aggregateColumn/#type) name. For example, to access the sum aggregate value, use **props.sum**.

## Format the aggregate value

To format the aggregate value result in the Syncfusion<sup style="font-size:70%">&reg;</sup> React Grid component, you can use the [format](https://helpej2.syncfusion.com/react/documentation/api/grid/aggregateColumn/#format) property of the[AggregateColumnDirective](https://helpej2.syncfusion.com/react/documentation/api/grid/aggregateColumn/). The `format` property allows you to specify a format string that determines how the aggregate value will be displayed.


{% tabs %}
{% highlight js tabtitle="App.jsx" %}
{% include code-snippet/grid/aggregate-cs3/app/App.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="App.tsx" %}
{% include code-snippet/grid/aggregate-cs3/app/App.tsx %}
{% endhighlight %}
{% highlight js tabtitle="datasource.jsx" %}
{% include code-snippet/grid/aggregate-cs3/app/datasource.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="datasource.tsx" %}
{% include code-snippet/grid/aggregate-cs3/app/datasource.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/grid/aggregate-cs3" %}

## How to place aggregates on top of the Grid

By default, the aggregated values are placed at the bottom of the footer section. It is possible to place the aggregated values at the top of the header. This is achieved by using the [dataBound](https://ej2.syncfusion.com/react/documentation/api/grid/#databound) event, [getHeaderContent](https://ej2.syncfusion.com/react/documentation/api/grid/#getheadercontent), and [getFooterContent](https://ej2.syncfusion.com/react/documentation/api/grid/#getfootercontent) methods of the Grid.

In the following, footer content is appended to the header content using the `dataBound` event of the Grid.

{% tabs %}
{% highlight js tabtitle="App.jsx" %}
{% include code-snippet/grid/aggregate-cs4/app/App.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="App.tsx" %}
{% include code-snippet/grid/aggregate-cs4/app/App.tsx %}
{% endhighlight %}
{% highlight js tabtitle="datasource.jsx" %}
{% include code-snippet/grid/aggregate-cs4/app/datasource.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="datasource.tsx" %}
{% include code-snippet/grid/aggregate-cs4/app/datasource.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/grid/aggregate-cs4" %}