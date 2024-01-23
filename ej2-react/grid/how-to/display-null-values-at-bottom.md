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

By default, when sorting in ascending order, null values are displayed at the bottom of the Grid row, and in descending order, they appear at the top. However, you have the flexibility to customize this default behavior to consistently display null values at the bottom of the Grid row using the [sortComparer](https://ej2.syncfusion.com/react/documentation/api/grid/column/#sortcomparer) method.

In the following example demonstrates how to ensure that null date values are consistently displayed at the bottom of the Grid row when sorting the **OrderDate** column in both ascending and descending orders.

{% tabs %}
{% highlight js tabtitle="App.jsx" %}
{% include code-snippet/grid/null-date-value-cs1/app/App.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="App.tsx" %}
{% include code-snippet/grid/null-date-value-cs1/app/App.tsx %}
{% endhighlight %}
{% highlight js tabtitle="datasource.jsx" %}
{% include code-snippet/grid/null-date-value-cs1/app/datasource.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="datasource.tsx" %}
{% include code-snippet/grid/null-date-value-cs1/app/datasource.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/grid/null-date-value-cs1" %}