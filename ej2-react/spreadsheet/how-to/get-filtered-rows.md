---
layout: post
title: Get the filtered rows in the React Spreadsheet component | Syncfusion
description: Learn here all about how to get the filtered rows in Syncfusion React Spreadsheet component of Syncfusion Essential JS 2 and more. 
control: Spreadsheet 
platform: ej2-react
documentation: ug
domainurl: ##DomainURL##
---

## Get the filtered rows in React Spreadsheet component

Filtering allows you to view specific rows in a spreadsheet while hiding the others. The [`allowFiltering`](https://ej2.syncfusion.com/react/documentation/api/spreadsheet/#allowfiltering) property allows you to enable or disable filtering functionality through the UI. You can also use the [`allowFiltering`](https://ej2.syncfusion.com/react/documentation/api/spreadsheet/#allowfiltering) property and [`applyFilter`](https://ej2.syncfusion.com/react/documentation/api/spreadsheet/#applyfilter) method combination to filter data via code behind. The filtered rows can be identified by iterating through the row collection on the sheet and using the `isFiltered` property available in each row object.

The following code example shows how to get the filtered rows.

{% tabs %}
{% highlight js tabtitle="app.jsx" %}
{% include code-snippet/spreadsheet/filter-cs2/app/app.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="app.tsx" %}
{% include code-snippet/spreadsheet/filter-cs2/app/app.tsx %}
{% endhighlight %}
{% highlight js tabtitle="datasource.jsx" %}
{% include code-snippet/spreadsheet/filter-cs2/app/datasource.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="datasource.tsx" %}
{% include code-snippet/spreadsheet/filter-cs2/app/datasource.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/spreadsheet/filter-cs2" %}