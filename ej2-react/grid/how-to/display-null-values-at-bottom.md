---
layout: post
title: Display null values at bottom in React Grid component | Syncfusion
description: Learn here all about Display null values at bottom in Syncfusion React Grid component of Syncfusion Essential JS 2 and more.
control: Display null values at bottom 
platform: ej2-react
documentation: ug
domainurl: ##DomainURL##
---

# Display null values at bottom in React Grid component

By default the null values are displayed at bottom of the Grid row while perform sorting in ascending order. As well as this values are displayed at top of the Grid row while perform sorting with descending order. But you can customize this default order to display the null values at always bottom row of the Grid by using [`column.sortComparer`](https://ej2.syncfusion.com/angular/documentation/api/grid/column/#sortcomparer) method.

In the below demo we have displayed the null date values at bottom of the Grid row while sorting the **OrderDate** column in both ways.

{% tabs %}
{% highlight js tabtitle="app.jsx" %}
{% include code-snippet/grid/null-date-value-cs1/app/App.jsx %}
{% endhighlight %}
{% highlight js tabtitle="datasource.jsx" %}
{% include code-snippet/grid/null-date-value-cs1/app/datasource.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="app.tsx" %}
{% include code-snippet/grid/null-date-value-cs1/app/App.tsx %}
{% endhighlight %}
{% highlight ts tabtitle="datasource.tsx" %}
{% include code-snippet/grid/null-date-value-cs1/app/datasource.tsx %}
{% endhighlight %}
{% endtabs %}

{ % previewsample "page.domainurl/code-snippet/grid/null-date-value-cs1" % }