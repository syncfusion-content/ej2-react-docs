---
layout: post
title: Import excel data in to React Grid component | Syncfusion
description: Learn here all about import excel data in to Syncfusion React Grid component of Syncfusion Essential JS 2 and more.
platform: ej2-react
control: Import excel data in to grid
documentation: ug
domainurl: ##DomainURL##
---

# Import excel data in to grid

The Syncfusion Grid component allows you to import data from Excel files into your web application for display and manipulation within the grid. This functionality is particularly useful for scenarios where data needs to be easily loaded into the grid from Excel files. This can be achieved by using Uploader component [change](https://ej2.syncfusion.com/react/documentation/api/uploader#change) event.

To import excel data in to grid, you can follow these steps:

1. Import excel file using uploader control. 
2. Parse the excel file data to JSON using the **XLSX** library. 
3. Bind the JSON to the grid control. 

The following example demonstrates how to import Excel data into the grid by utilizing the **Uploader** component's `change` event along with the **XLSX** library:

{% tabs %}
{% highlight js tabtitle="App.jsx" %}
{% include code-snippet/grid/imported-data/app/App.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="App.tsx" %}
{% include code-snippet/grid/imported-data/app/App.tsx %}
{% endhighlight %}
{% highlight js tabtitle="datasource.jsx" %}
{% include code-snippet/grid/imported-data/app/datasource.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="datasource.tsx" %}
{% include code-snippet/grid/imported-data/app/datasource.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/grid/imported-data" %}