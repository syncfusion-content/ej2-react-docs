---
layout: post
title: Get row cell index in React Grid component | Syncfusion
description: Learn here all about Get row cell index in Syncfusion React Grid component of Syncfusion Essential JS 2 and more.
control: Get row cell index 
platform: ej2-react
documentation: ug
domainurl: ##DomainURL##
---

# Get row cell index in React Grid component

You can get the specific row and cell index of the grid by using [rowSelected](https://ej2.syncfusion.com/react/documentation/api/grid/#rowselected) event of the grid. Here, we can get the row and cell index by using *aria-rowindex* (get row Index from *tr* element) and *aria-colindex* (column index from *td* element) attribute.

 {% tabs %}
{% highlight js tabtitle="App.jsx" %}
{% include code-snippet/grid/group-cs10/app/App.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="App.tsx" %}
{% include code-snippet/grid/group-cs10/app/App.tsx %}
{% endhighlight %}
{% highlight js tabtitle="datasource.jsx" %}
{% include code-snippet/grid/group-cs10/app/datasource.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="datasource.tsx" %}
{% include code-snippet/grid/group-cs10/app/datasource.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/grid/group-cs10" %}