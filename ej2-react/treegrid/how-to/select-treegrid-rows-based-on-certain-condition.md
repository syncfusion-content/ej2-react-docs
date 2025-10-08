---
layout: post
title: Condition-Based Row Selection in React TreeGrid | Syncfusion
description: Learn here all about Select TreeGrid rows based on certain condition in Syncfusion React TreeGrid component of Syncfusion Essential JS 2 and more.
control: Select TreeGrid rows based on certain condition 
platform: ej2-react
documentation: ug
domainurl: ##DomainURL##
---

# Select TreeGrid rows based on certain condition in React TreeGrid

Select specific rows in the TreeGrid based on a condition by using the [selectRows](https://ej2.syncfusion.com/react/documentation/api/treegrid/#selectrows) method within the [dataBound](https://ej2.syncfusion.com/react/documentation/api/treegrid/#databound) event.

In the following demo, rows are selected when the value in the **Duration** column is greater than 4.

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

> Refer to the [React TreeGrid](https://www.syncfusion.com/react-ui-components/react-tree-grid) feature tour page for highlights. Explore the [React Tree Grid example](https://ej2.syncfusion.com/react/demos/#/material/treegrid/treegrid-overview) to learn how to present and manipulate data.