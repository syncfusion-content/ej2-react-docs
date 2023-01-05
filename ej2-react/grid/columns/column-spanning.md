---
layout: post
title: Column spanning in React Grid component | Syncfusion
description: Learn here all about Column spanning in Syncfusion React Grid component of Syncfusion Essential JS 2 and more.
control: Column spanning 
platform: ej2-react
documentation: ug
domainurl: ##DomainURL##
---

# Column spanning in React Grid component

Grid has option to span the adjacent cells. You need to define [`colSpan`](https://ej2.syncfusion.com/angular/documentation/api/grid/queryCellInfoEventArgs/#colspan) attribute to span the cells in [`queryCellInfo`](https://ej2.syncfusion.com/angular/documentation/api/grid/queryCellInfoEventArgs/) event.

In the following demo, Employee **Davolio** doing analysis from 9.00 AM to 10.00 AM, so that cells have spanned.

{% tabs %}
{% highlight js tabtitle="app.jsx" %}
{% include code-snippet/grid/spanning-cs1/app/app.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="datasource.jsx" %}
{% include code-snippet/grid/spanning-cs1/datasource.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="app.tsx" %}
{% include code-snippet/grid/spanning-cs1/app/app.tsx %}
{% endhighlight %}
{% highlight ts tabtitle="datasource.tsx" %}
{% include code-snippet/grid/spanning-cs1/datasource.tsx %}
{% endhighlight %}
{% endtabs %}

{ % previewsample "page.domainurl/code-snippet/grid/spanning-cs1" % }