---
layout: post
title: Select treegrid rows based on certain condition in React Treegrid component | Syncfusion
description: Learn here all about Select treegrid rows based on certain condition in Syncfusion React Treegrid component of Syncfusion Essential JS 2 and more.
control: Select treegrid rows based on certain condition 
platform: ej2-react
documentation: ug
domainurl: ##DomainURL##
---

# Select treegrid rows based on certain condition in React Treegrid component

You can select the specific row in the treegrid based on a certain condition by using the [`selectRows`](https://ej2.syncfusion.com/react/documentation/api/treegrid/#selectrows) method in the [`dataBound`](https://ej2.syncfusion.com/react/documentation/api/treegrid/#databound) event of TreeGrid.

In the below demo, we have selected the grid rows only when *Duration* column value greater than *4*.

{% tabs %}
{% highlight js tabtitle="app.jsx" %}
{% include code-snippet/treegrid/refresh-cs10/app/App.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="app.tsx" %}
{% include code-snippet/treegrid/refresh-cs10/app/App.tsx %}
{% endhighlight %}
{% highlight js tabtitle="datasource.jsx" %}
{% include code-snippet/treegrid/refresh-cs10/app/datasource.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="datasource.tsx" %}
{% include code-snippet/treegrid/refresh-cs10/app/datasource.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/treegrid/refresh-cs10" %}

> You can refer to our [`React Tree Grid`](https://www.syncfusion.com/react-components/react-tree-grid) feature tour page for its groundbreaking feature representations. You can also explore our [`React Tree Grid example`](https://ej2.syncfusion.com/react/demos/#/material/treegrid/treegrid-overview) to knows how to present and manipulate data.