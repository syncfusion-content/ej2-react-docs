---
layout: post
title: Print in React Pivotview component | Syncfusion
description: Learn here all about Print in Syncfusion React Pivotview component of Syncfusion Essential JS 2 and more.
platform: ej2-react
control: Print 
documentation: ug
domainurl: ##DomainURL##
---

# Print in React Pivotview component

The React Pivot Table component supports print functionality, allowing users to print the current state of the pivot table or pivot chart. This feature enables users to generate hard copies of pivot table reports for convenient review and data sharing.

## Print pivot table

The rendered pivot table can be printed by invoking the [print](https://ej2.syncfusion.com/react/documentation/api/grid/#print) method from the underlying [`Grid`](https://ej2.syncfusion.com/react/documentation/grid/getting-started) component instance. The [`Grid`](https://ej2.syncfusion.com/react/documentation/grid/getting-started) control manages the print functionality and captures the current state of the pivot table, including all applied filters, sorting, and formatting. The sample code below demonstrates how to trigger the print operation using an external button click.

{% tabs %}
{% highlight js tabtitle="App.jsx" %}
{% include code-snippet/pivot-table/default-cs320/app/App.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="App.tsx" %}
{% include code-snippet/pivot-table/default-cs320/app/App.tsx %}
{% endhighlight %}
{% highlight js tabtitle="datasource.jsx" %}
{% include code-snippet/pivot-table/default-cs320/app/datasource.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="datasource.tsx" %}
{% include code-snippet/pivot-table/default-cs320/app/datasource.tsx %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/pivot-table/default-cs320" %}

## Print pivot chart

To print the pivot chart, use the [print](https://ej2.syncfusion.com/react/documentation/api/chart/#print) method from the underlying [`Chart`](https://ej2.syncfusion.com/react/documentation/chart/getting-started) component instance. The [`Chart`](https://ej2.syncfusion.com/react/documentation/chart/getting-started) control manages the print functionality and preserves all visual elements, including colors, legends, and data labels, in the printed output.

> To use pivot chart functionality, inject the `PivotChart` module into the pivot table.

> To display the pivot chart, set the [`displayOption`](https://ej2.syncfusion.com/react/documentation/api/pivotview/#displayoption) property to either **Chart** or **Both**.

The sample code below illustrates how to print the pivot chart through an external button click.

{% tabs %}
{% highlight js tabtitle="App.jsx" %}
{% include code-snippet/pivot-table/default-cs321/app/App.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="App.tsx" %}
{% include code-snippet/pivot-table/default-cs321/app/App.tsx %}
{% endhighlight %}
{% highlight js tabtitle="datasource.jsx" %}
{% include code-snippet/pivot-table/default-cs321/app/datasource.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="datasource.tsx" %}
{% include code-snippet/pivot-table/default-cs321/app/datasource.tsx %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/pivot-table/default-cs321" %}

## See Also

* [PivotGrid Printing](https://www.syncfusion.com/blogs/post/pivotgrid-printing)