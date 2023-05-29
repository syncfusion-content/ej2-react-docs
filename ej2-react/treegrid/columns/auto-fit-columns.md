---
layout: post
title: Auto fit columns in React Treegrid component | Syncfusion
description: Learn here all about Auto fit columns in Syncfusion React Treegrid component of Syncfusion Essential JS 2 and more.
control: Auto fit columns 
platform: ej2-react
documentation: ug
domainurl: ##DomainURL##
---

# Auto fit columns in React Treegrid component

The [`autoFitColumns`](https://ej2.syncfusion.com/react/documentation/api/treegrid/#autofitcolumns) method resizes the column to fit the widest cell's content without wrapping. You can autofit a specific column at initial rendering by invoking the [`autoFitColumns`](https://ej2.syncfusion.com/react/documentation/api/treegrid/#autofitcolumns) method in [`dataBound`](https://ej2.syncfusion.com/react/documentation/api/treegrid/#databound) event.

{% tabs %}
{% highlight js tabtitle="app.jsx" %}
{% include code-snippet/treegrid/column-cs1/app/App.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="app.tsx" %}
{% include code-snippet/treegrid/column-cs1/app/App.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/treegrid/column-cs1" %}

> You can autofit all columns, by invoking [`autoFitColumns`](https://ej2.syncfusion.com/react/documentation/api/treegrid/#autofitcolumns) method without column name.