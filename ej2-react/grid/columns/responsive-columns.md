---
layout: post
title: Responsive columns in React Grid component | Syncfusion
description: Learn here all about Responsive columns in Syncfusion React Grid component of Syncfusion Essential JS 2 and more.
control: Responsive columns 
platform: ej2-react
documentation: ug
domainurl: ##DomainURL##
---

# Responsive columns in React Grid component

You can toggle column visibility based on media queries which are defined at the [`hideAtMedia`](https://ej2.syncfusion.com/angular/documentation/api/grid/column/#hideatmedia). The [`hideAtMedia`](https://ej2.syncfusion.com/angular/documentation/api/grid/column/#hideatmedia) accepts valid [`Media Queries`]( http://cssmediaqueries.com/what-are-css-media-queries.html ). In the below sample, for **OrderID** column, [`hideAtMedia`](https://ej2.syncfusion.com/angular/documentation/api/grid/column/#hideatmedia) property value is set as **(min-width: 700px)** so that **OrderID** column will gets hidden when the browser screen width is **lessthan 700px**.

{% tabs %}
{% highlight js tabtitle="datasource.jsx" %}
{% include code-snippet/grid/column-cs30/app/datasource.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="datasource.tsx" %}
{% include code-snippet/grid/column-cs30/app/datasource.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/grid/column-cs30" %}