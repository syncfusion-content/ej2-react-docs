---
layout: post
title: How to hide specific columns in React Pivot Table | Syncfusion
description: Step-by-step example showing how to hide specific columns in the React Pivot Table using the columnRender event in gridSettings.
platform: ej2-react
control: Pivot Table
documentation: ug
domainurl: ##DomainURL##
---

# How to hide specific columns in React Pivot Table

By using the [`columnRender`](https://ej2.syncfusion.com/react/documentation/api/pivotview/gridSettings#columnrender) event in the [`gridSettings`](https://ej2.syncfusion.com/react/documentation/api/pivotview/gridSettings), you can hide specific column(s) in the pivot table. In the example below, the **"Units Sold"** column under **"FY 2016"** is hidden by setting its **visible** property to **false** via the [`columnRender`](https://ej2.syncfusion.com/react/documentation/api/pivotview/gridSettings#columnrender) event.

N> The **dot(.)** character in **FY 2016.Units Sold** is used by default to identify the header levels in the pivot table's row and column. It can be changed by setting the [`headerDelimiter`](https://ej2.syncfusion.com/react/documentation/api/pivotview/valuesortsettingsmodel#headerdelimiter) in the [`valueSortSettings`](https://ej2.syncfusion.com/react/documentation/api/pivotview/datasourcesettings#valuesortsettings) property to any other delimiter instead of the default separator.

{% tabs %}
{% highlight js tabtitle="App.jsx" %}
{% include code-snippet/pivot-table/default-cs314/app/App.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="App.tsx" %}
{% include code-snippet/pivot-table/default-cs314/app/App.tsx %}
{% endhighlight %}
{% highlight js tabtitle="datasource.jsx" %}
{% include code-snippet/pivot-table/default-cs314/app/datasource.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="datasource.tsx" %}
{% include code-snippet/pivot-table/default-cs314/app/datasource.tsx %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/pivot-table/default-cs314" %}
