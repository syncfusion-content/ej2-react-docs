---
layout: post
title: Customize cells elements in React Pivotview component | Syncfusion
description: Learn here all about Customize cells elements in Syncfusion React Pivotview component of Syncfusion Essential JS 2 and more.
control: Customize cells elements 
platform: ej2-react
documentation: ug
domainurl: ##DomainURL##
---

# Customize cells elements in React Pivotview component

You can customize the pivot table cell element by using the `cellTemplate` property.
The cellTemplate property accepts either an HTML string or the element's ID, which can be used to append additional HTML elements to showcase each cell with custom format.

In this demo, the revenue cost for each year is represented with trend icons.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/pivot-table/default-cs159/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/pivot-table/default-cs159/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/pivot-table/default-cs159" %}
