---
layout: post
title: Row cell customization in React Treegrid component | Syncfusion
description: Learn here all about Row cell customization in Syncfusion React Treegrid component of Syncfusion Essential JS 2 and more.
control: Row cell customization 
platform: ej2-react
documentation: ug
domainurl: ##DomainURL##
---

# Row cell customization in React Treegrid component

In TreeGrid we can customize the row and cell using [`queryCellInfo`](https://ej2.syncfusion.com/react/documentation/api/treegrid/#querycellinfo) and [`rowDataBound`](https://ej2.syncfusion.com/react/documentation/api/treegrid/#rowdatabound) events of treegrid.

In the below demo, we customize and show the command buttons only for the parent rows using [`queryCellInfo`](https://ej2.syncfusion.com/react/documentation/api/treegrid/#querycellinfo) and [`rowDataBound`](https://ej2.syncfusion.com/react/documentation/api/treegrid/#rowdatabound) events of treegrid.

{% tabs %}
{% highlight js tabtitle="app.jsx" %}
{% include code-snippet/treegrid/refresh-cs9/app/App.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="app.tsx" %}
{% include code-snippet/treegrid/refresh-cs9/app/App.tsx %}
{% endhighlight %}
{% highlight js tabtitle="datasource.jsx" %}
{% include code-snippet/treegrid/refresh-cs9/app/datasource.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="datasource.tsx" %}
{% include code-snippet/treegrid/refresh-cs9/app/datasource.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/treegrid/refresh-cs9" %}

> You can refer to our [`React Tree Grid`](https://www.syncfusion.com/react-ui-components/react-tree-grid) feature tour page for its groundbreaking feature representations. You can also explore our [`React Tree Grid example`](https://ej2.syncfusion.com/react/demos/#/material/treegrid/treegrid-overview) to knows how to present and manipulate data.