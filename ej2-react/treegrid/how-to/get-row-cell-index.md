---
layout: post
title: Get row cell index in React TreeGrid | Syncfusion
description: Learn here all about Get row cell index in Syncfusion React TreeGrid component of Syncfusion Essential JS 2 and more.
control: Get row cell index 
platform: ej2-react
documentation: ug
domainurl: ##DomainURL##
---

# Get row cell index in React TreeGrid

Obtain the specific row and cell index in the TreeGrid by using the [rowSelected](https://ej2.syncfusion.com/react/documentation/api/treegrid/#rowselected) event. Retrieve the row index from the *aria-rowindex* attribute of the table row (tr) element and the column index from the **aria-colindex** attribute of the table cell (td) element.

{% tabs %}
{% highlight js tabtitle="app.jsx" %}
{% include code-snippet/treegrid/refresh-cs6/app/App.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="app.tsx" %}
{% include code-snippet/treegrid/refresh-cs6/app/App.tsx %}
{% endhighlight %}
{% highlight js tabtitle="datasource.jsx" %}
{% include code-snippet/treegrid/refresh-cs6/app/datasource.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="datasource.tsx" %}
{% include code-snippet/treegrid/refresh-cs6/app/datasource.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/treegrid/refresh-cs6" %}

> Refer to the [React TreeGrid](https://www.syncfusion.com/react-ui-components/react-tree-grid) feature tour page for highlights. Explore the [React TreeGrid example](https://ej2.syncfusion.com/react/demos/#/material/treegrid/treegrid-overview) to learn how to present and manipulate data.