---
layout: post
title: Row cell customization in React TreeGrid | Syncfusion
description: Learn here all about Row cell customization in Syncfusion React TreeGrid component of Syncfusion Essential JS 2 and more.
control: Row cell customization 
platform: ej2-react
documentation: ug
domainurl: ##DomainURL##
---

# Row cell customization in React TreeGrid

Customize rows and cells by using the TreeGrid events [queryCellInfo](https://ej2.syncfusion.com/react/documentation/api/treegrid/#querycellinfo) and [rowDataBound](https://ej2.syncfusion.com/react/documentation/api/treegrid/#rowdatabound).

In the following demo, command buttons are customized to appear only for parent rows using the [queryCellInfo](https://ej2.syncfusion.com/react/documentation/api/treegrid/#querycellinfo) and [rowDataBound](https://ej2.syncfusion.com/react/documentation/api/treegrid/#rowdatabound) events.

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

> Refer to the [React TreeGrid](https://www.syncfusion.com/react-ui-components/react-tree-grid) feature tour page for highlights. Explore the [React Tree Grid example](https://ej2.syncfusion.com/react/demos/#/material/treegrid/treegrid-overview) to learn how to present and manipulate data.