---
layout: post
title: Select grid rows based on certain condition in React Grid component | Syncfusion
description: Learn here all about Select grid rows based on certain condition in Syncfusion React Grid component of Syncfusion Essential JS 2 and more.
control: Select grid rows based on certain condition 
platform: ej2-react
documentation: ug
domainurl: ##DomainURL##
---

# Select grid rows based on certain condition in React Grid component

You can select the specific row in the grid based on a certain condition by using the [`selectRows`](https://ej2.syncfusion.com/angular/documentation/api/grid/#selectrows) method in the [`dataBound`](https://ej2.syncfusion.com/angular/documentation/api/grid/#databound) event of Grid.

In the below demo, we have selected the grid rows only when *EmployeeID* column value greater than *3*.

{% tabs %}
{% highlight js tabtitle="app.jsx" %}
{% include code-snippet/grid/change-headertext-cs6/app/App.jsx %}
{% endhighlight %}
{% highlight js tabtitle="datasource.jsx" %}
{% include code-snippet/grid/change-headertext-cs6/app/datasource.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="app.tsx" %}
{% include code-snippet/grid/change-headertext-cs6/app/App.tsx %}
{% endhighlight %}
{% highlight ts tabtitle="datasource.tsx" %}
{% include code-snippet/grid/change-headertext-cs6/app/datasource.tsx %}
{% endhighlight %}
{% endtabs %}

{ % previewsample "page.domainurl/code-snippet/grid/change-headertext-cs6" % }