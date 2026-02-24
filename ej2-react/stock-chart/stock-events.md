---
layout: post
title: Stock events in React Stock chart component | Syncfusion
description: Learn here all about Stock events in Syncfusion React Stock chart component of Syncfusion Essential JS 2 and more.
control: Stock events 
platform: ej2-react
documentation: ug
domainurl: ##DomainURL##
---
<!-- markdownlint-disable MD036 -->

# Stock events in React Stock chart component

Stock Events visualizes stock events in stock chart. 'SplineSeries' is used to represent selected data value. You can customize the specific data value using `stockEvents` event.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/stock-chart/working-with-data-cs1/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/stock-chart/working-with-data-cs1/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/stock-chart/working-with-data-cs1" %}

**Stock Events for individual series**

By default, stock events will be showed for all series. Now, you can set the stock events for particular series using `seriesIndexes` property.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/stock-chart/working-with-data-cs2/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/stock-chart/working-with-data-cs2/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/stock-chart/working-with-data-cs2" %}

## See Also

* [Series Types](./series-types)