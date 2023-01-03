---
layout: post
title: Get row cell index in React Grid component | Syncfusion
description: Learn here all about Get row cell index in Syncfusion React Grid component of Syncfusion Essential JS 2 and more.
control: Get row cell index 
publishingplatform: React
documentation: ug
domainurl: ##DomainURL##
---

# Get row cell index in React Grid component

You can get the specific row and cell index of the grid by using [`rowSelected`](https://ej2.syncfusion.com/angular/documentation/api/grid/#rowselected) event of the grid. Here, we can get the row and cell index by using *aria-rowindex* (get row Index from *tr* element) and *aria-colindex* (column index from *td* element) attribute.

 {% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/grid/group-cs9/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/grid/group-cs9/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

{ % previewsample "page.domainurl/code-snippet/grid/group-cs9" % }