---
layout: post
title: Display null values at bottom in React Treegrid component | Syncfusion
description: Learn here all about Display null values at bottom in Syncfusion React Treegrid component of Syncfusion Essential JS 2 and more.
control: Display null values at bottom 
platform: ej2-react
documentation: ug
domainurl: ##DomainURL##
---

# Display null values at bottom in React Treegrid component

By default the null values are displayed at bottom of the TreeGrid row while perform sorting in ascending order. As well as this values are displayed at top of the TreeGrid row while perform sorting with descending order. But you can customize this default order to display the null values at always bottom row of the TreeGrid by using [`column.sortComparer`](https://ej2.syncfusion.com/react/documentation/api/treegrid/column/#sortcomparer) method.

In the below demo we have displayed the null date values at bottom of the Grid row while sorting the **StartDate** column in both ways.

{% tabs %}
{% highlight js tabtitle="app.jsx" %}
{% include code-snippet/treegrid/null-date-value-cs1/app/App.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="app.tsx" %}
{% include code-snippet/treegrid/null-date-value-cs1/app/App.tsx %}
{% endhighlight %}
{% highlight js tabtitle="datasource.jsx" %}
{% include code-snippet/treegrid/null-date-value-cs1/app/datasource.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="datasource.tsx" %}
{% include code-snippet/treegrid/null-date-value-cs1/app/datasource.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/treegrid/null-date-value-cs1" %}

> You can refer to our [`React Tree Grid`](https://www.syncfusion.com/react-components/react-tree-grid) feature tour page for its groundbreaking feature representations. You can also explore our [`React Tree Grid example`](https://ej2.syncfusion.com/react/demos/#/material/treegrid/treegrid-overview) to knows how to present and manipulate data.