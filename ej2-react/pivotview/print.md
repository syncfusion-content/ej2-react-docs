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

The rendered pivot table can be printed directly from the browser by invoking the [`print`](https://ej2.syncfusion.com/react/documentation/api/grid/#print) method from the grid's instance. The below sample code illustrates the print option being invoked by an external button click.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/pivot-table/default-cs320/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/pivot-table/default-cs320/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/pivot-table/default-cs320" %}

Similarly, to print the pivot chart, use the [`print`](https://ej2.syncfusion.com/react/documentation/api/chart/#print) method from the chart's instance. The below sample code illustrates the print option being invoked by an external button click.

> To use pivot chart, you need to inject the `PivotChart` module in the pivot table.

> To display the pivot chart, set the [`displayOption`](https://ej2.syncfusion.com/react/documentation/api/pivotview/#displayoption) property to either **Chart** or **Both**. 

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/pivot-table/default-cs321/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/pivot-table/default-cs321/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/pivot-table/default-cs321" %}