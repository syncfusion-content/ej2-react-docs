---
layout: post
title: Working with Data in React Stock Chart | Syncfusion
description: Learn how to bind JSON data to the Syncfusion React Stock Chart Component by mapping fields to date, open, high, low, and close.
control: Working with data
platform: ej2-react
documentation: ug
domainurl: ##DomainURL##
---
<!-- markdownlint-disable MD036 -->

# Working with Data in React Stock Chart

Stock Chart can visualizes data bound from local or remote data.

## Local Data

You can bind a simple JSON data to the chart using [`dataSource`](https://ej2.syncfusion.com/react/documentation/api/stock-chart/stockSeriesModel#datasource) property in series.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/stock-chart/code-path/working-with-data-cs3/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/stock-chart/code-path/working-with-data-cs3/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/stock-chart/working-with-data-cs3" %}

## Handling No Data

When no data is available to render in the stock chart, the `noDataTemplate` property can be used to display a custom layout within the chart area. This layout may include a message indicating the absence of data, a relevant image, or a button to initiate data loading. Styled text, images, or interactive elements can be incorporated to maintain design consistency and improve user guidance. Once data becomes available, the chart automatically updates to display the appropriate visualization.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/stock-chart/code-path/working-with-data-cs4/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/stock-chart/code-path/working-with-data-cs4/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/stock-chart/working-with-data-cs4" %}

## See Also

* [Series Types](series-types)