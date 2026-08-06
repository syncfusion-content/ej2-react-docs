---
layout: post
title: How to show the field list for empty pivot tables | Syncfusion
description: Step-by-step example showing how to show the field list for an empty pivot table in React by handling the dataBound event.
control: Pivot Table
platform: ej2-react
documentation: ug
domainurl: ##DomainURL##
---

# How to show the field list for empty pivot tables

When there are no fields configured in a pivot table's row, column, value, and filter axes, the field list can be automatically displayed to help users configure the pivot table. This is particularly useful in scenarios where users start with an empty pivot configuration and need immediate access to available fields for setup. To achieve this functionality, use the [`dataBound`](https://ej2.syncfusion.com/react/documentation/api/pivotview/index-default#databound) event and call the `onShowFieldList` method as demonstrated below.

{% tabs %}
{% highlight js tabtitle="App.jsx" %}
{% include code-snippet/pivot-table/default-cs168/app/App.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="App.tsx" %}
{% include code-snippet/pivot-table/default-cs168/app/App.tsx %}
{% endhighlight %}
{% highlight js tabtitle="datasource.jsx" %}
{% include code-snippet/pivot-table/default-cs168/app/datasource.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="datasource.tsx" %}
{% include code-snippet/pivot-table/default-cs168/app/datasource.tsx %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/pivot-table/default-cs168" %}