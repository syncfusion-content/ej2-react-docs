---
layout: post
title: Add params for filtering in React Grid component | Syncfusion
description: Learn here all about Add params for filtering in Syncfusion React Grid component of Syncfusion Essential JS 2 and more.
control: Add params for filtering 
publishingplatform: React
documentation: ug
domainurl: ##DomainURL##
---

# Add params for filtering in React Grid component

You can customize the default settings of the components which are used in Menu filter by using params of filter property in column definition.
In the below sample, OrderID and Freight Columns are numeric columns, while open the filter dialog then you can see that NumericTextBox with spin button is displayed to change/set the filter value. Now using the params option we hide the spin button in NumericTextBox for OrderID Column.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/grid/column-cs31/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/grid/column-cs31/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

{ % previewsample "page.domainurl/code-snippet/grid/column-cs31" % }