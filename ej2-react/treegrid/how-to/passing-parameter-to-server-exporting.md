---
layout: post
title: Passing parameter to server exporting in React Treegrid component | Syncfusion
description: Learn here all about Passing parameter to server exporting in Syncfusion React Treegrid component of Syncfusion Essential JS 2 and more.
control: Passing parameter to server exporting 
platform: ej2-react
documentation: ug
domainurl: ##DomainURL##
---

# Passing parameter to server exporting in React Treegrid component

You can pass the additional parameter in the [`query`](https://ej2.syncfusion.com/react/documentation/api/treegrid/#query) property by invoking [`addParams`](https://ej2.syncfusion.com/documentation/api/data/query/#addparams) method. In the [`toolbarClick`](https://ej2.syncfusion.com/react/documentation/api/treegrid/#toolbarclick) event, you can define params as key and value pair so it will receive at the server side when exporting.

In the below example, we have passed *recordcount* as *12* using [`addParams`](https://ej2.syncfusion.com/documentation/api/data/query/#addparams) method.

{% tabs %}
{% highlight js tabtitle="app.jsx" %}
{% include code-snippet/treegrid/refresh-cs7/app/App.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="app.tsx" %}
{% include code-snippet/treegrid/refresh-cs7/app/App.tsx %}
{% endhighlight %}
{% highlight js tabtitle="datasource.jsx" %}
{% include code-snippet/treegrid/refresh-cs7/app/datasource.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="datasource.tsx" %}
{% include code-snippet/treegrid/refresh-cs7/app/datasource.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/treegrid/refresh-cs7" %}

> You can refer to our [`React Tree Grid`](https://www.syncfusion.com/react-ui-components/react-tree-grid) feature tour page for its groundbreaking feature representations. You can also explore our [`React Tree Grid example`](https://ej2.syncfusion.com/react/demos/#/material/treegrid/treegrid-overview) to knows how to present and manipulate data.