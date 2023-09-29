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

Footer aggregate value is calculated for all the rows, and it is displayed in the footer cells. Use the [footerTemplate](https://ej2.syncfusion.com/react/documentation/api/grid/aggregateColumn/#footertemplate) property to render the aggregate value in footer cells.

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

> The aggregate values must be accessed inside the template using their corresponding [type](https://ej2.syncfusion.com/react/documentation/api/grid/aggregateColumn/#type) name.

## How to format aggregate value

You can format the aggregate value result by using the [format](https://ej2.syncfusion.com/react/documentation/api/grid/aggregateColumn/#format) property.

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

In the following sample, the footer element is appended to the header element using the `getHeaderContent` and `getFooterContent` methods in the `dataBound` event.

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