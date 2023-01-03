---
layout: post
title: Select grid rows based on certain condition in React Grid component | Syncfusion
description: Learn here all about Select grid rows based on certain condition in Syncfusion React Grid component of Syncfusion Essential JS 2 and more.
control: Select grid rows based on certain condition 
publishingplatform: React
documentation: ug
domainurl: ##DomainURL##
---

# Select grid rows based on certain condition in React Grid component

You can select the specific row in the grid based on a certain condition by using the [`selectRows`](https://ej2.syncfusion.com/angular/documentation/api/grid/#selectrows) method in the [`dataBound`](https://ej2.syncfusion.com/angular/documentation/api/grid/#databound) event of Grid.

In the below demo, we have selected the grid rows only when *EmployeeID* column value greater than *3*.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/grid/change-headertext-cs6/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/grid/change-headertext-cs6/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

{ % previewsample "page.domainurl/code-snippet/grid/change-headertext-cs6" % }