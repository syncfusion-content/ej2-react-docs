---
layout: post
title: React Grid - Footer Aggregate | Syncfusion
description: React Grid footer aggregate enables setting footer values, applying formatting, and combining multiple aggregates for each column.
control: Footer aggregate 
platform: ej2-react
documentation: ug
domainurl: ##DomainURL##
---

# Footer Aggregate in React Grid Component

The Syncfusion<sup style="font-size:70%">&reg;</sup> React Grid supports calculating and displaying aggregate values in the footer cells. These footer aggregates are computed from all rows in the grid. The [footerTemplate](https://ej2.syncfusion.com/react/documentation/api/grid/aggregateColumn#footertemplate) property can be used to customize how the aggregate values are rendered in the footer cells, allowing formatted text or custom layouts to be displayed.

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

>  Inside the template, access each aggregate value using its [type](https://ej2.syncfusion.com/react/documentation/api/grid/aggregateColumn#type) name. For example, use `props.Sum` to read the sum aggregate.

## Format aggregate value

Aggregate values displayed in footer cells can be formatted using the [format](https://ej2.syncfusion.com/react/documentation/api/grid/aggregateColumn#format) property of the `AggregateColumnDirective`. This property accepts a format string that defines how the aggregate value should appear, such as specifying currency, number of decimal places, or percentage format.

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

## Display aggregates in the header

By default, aggregate values are displayed at the bottom of the grid in the footer section. It is also possible to place these values at the top of the header. This can be achieved by handling the [dataBound](https://ej2.syncfusion.com/react/documentation/api/grid#databound) event of the Grid and using the [getHeaderContent](https://ej2.syncfusion.com/react/documentation/api/grid#getheadercontent), and [getFooterContent](https://ej2.syncfusion.com/react/documentation/api/grid#getfootercontent) methods. In this approach, the footer content is programmatically appended to the header content once the grid has finished rendering.

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

## See also
- [Aggregates overview](./aggregates)
- [Group and caption aggregates](./group-and-caption-aggregate)
- [Reactive aggregates](./reactive-aggregate)
- [Aggregates API](https://ej2.syncfusion.com/react/documentation/api/grid/aggregateColumn)