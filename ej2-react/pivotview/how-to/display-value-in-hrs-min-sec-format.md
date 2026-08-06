---
layout: post
title: How to display a custom string in value cells in React Pivot Table | Syncfusion
description: Step-by-step example showing how to display a custom string in value cells in the React Pivot Table using the aggregateCellInfo event.
platform: ej2-react
control: Pivot Table
documentation: ug
domainurl: ##DomainURL##
---

<!-- markdownlint-disable MD009 -->

# How to display a custom string in value cells in React Pivot Table

The Pivot Table allows users to display custom string values in value cells by using the [`aggregateCellInfo`](https://ej2.syncfusion.com/react/documentation/api/pivotview/index-default#aggregatecellinfo) event. This is useful when you need to format numeric values into readable strings, such as converting seconds to time format or applying custom formatting rules.

## Converting numeric values to time format

The following example demonstrates how to convert numeric values in the **Sold** field to time format (HH:MM:SS) using the [`aggregateCellInfo`](https://ej2.syncfusion.com/react/documentation/api/pivotview/index-default#aggregatecellinfo) event. The event provides access to cell data through [`args.cellSets`](https://helpej2.syncfusion.com/react/documentation/api/pivotview/aggregateeventargs#cellsets), allowing you to customize the display value based on the underlying data.

{% tabs %}
{% highlight js tabtitle="App.jsx" %}
{% include code-snippet/pivot-table/default-cs316/app/App.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="App.tsx" %}
{% include code-snippet/pivot-table/default-cs316/app/App.tsx %}
{% endhighlight %}
{% highlight js tabtitle="datasource.jsx" %}
{% include code-snippet/pivot-table/default-cs316/app/datasource.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="datasource.tsx" %}
{% include code-snippet/pivot-table/default-cs316/app/datasource.tsx %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/pivot-table/default-cs316" %}