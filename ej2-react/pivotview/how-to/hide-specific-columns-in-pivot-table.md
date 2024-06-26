---
layout: post
title: Hide specific columns in pivot table in React | Syncfusion
description: Learn here all about Hide specific columns in pivot table in Syncfusion React Pivotview component of Syncfusion Essential JS 2 and more.
platform: ej2-react
control: Hide specific columns in pivot table 
documentation: ug
domainurl: ##DomainURL##
---

# Hide specific columns in React Pivotview component

By using the [`columnRender`](https://ej2.syncfusion.com/react/documentation/api/pivotview/gridSettings/#columnrender) event in the [`gridSettings`](https://ej2.syncfusion.com/react/documentation/api/pivotview/gridSettings/), you can hide specific column(s) in the pivot table. In the example below, the **"Units Sold"** column under **"FY 2016"** is hidden by setting its **visible** property to **false** via the [`columnRender`](https://ej2.syncfusion.com/react/documentation/api/pivotview/gridSettings/#columnrender) event.

N> The **dot(.)** character in **FY 2016.Units Sold** is used by default to identify the header levels in the pivot table's row and column. It can be changed by setting the [`headerDelimiter`](https://helpej2.syncfusion.com/react/documentation/api/pivotview/valueSortSettingsModel/#headerdelimiter) in the [`valueSortSettings`](https://helpej2.syncfusion.com/react/documentation/api/pivotview/dataSourceSettings/#valuesortsettings) property to any other delimiter instead of the default separator.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/pivot-table/default-cs314/app/App.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
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
