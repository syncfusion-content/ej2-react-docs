---
layout: post
title: Grouped row page size in React Grid component | Syncfusion
description: Learn here all about Grouped row page size in Syncfusion React Grid component of Syncfusion Essential JS 2 and more.
control: Grouped row page size 
platform: ej2-react
documentation: ug
domainurl: ##DomainURL##
---

# Grouped row page size in React Grid component

By default, we have displayed the no of records based on the [`pageSize`](https://ej2.syncfusion.com/angular/documentation/api/grid/pageSettings/#pagesize). If you want to show grouped column rows based on the [`pageSize`](https://ej2.syncfusion.com/angular/documentation/api/grid/pageSettings/#pagesize) then we suggest you to use the below way.

In the below sample, we have overridden the default *generateQuery* to display the grouped rows instead of grid rows based on the  [`pageSize`](https://ej2.syncfusion.com/angular/documentation/api/grid/pageSettings/#pagesize).

{% tabs %}
{% highlight js tabtitle="App.jsx" %}
{% include code-snippet/grid/group-cs11/app/App.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="App.tsx" %}
{% include code-snippet/grid/group-cs11/app/App.tsx %}
{% endhighlight %}
{% highlight js tabtitle="datasource.jsx" %}
{% include code-snippet/grid/group-cs11/app/datasource.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="datasource.tsx" %}
{% include code-snippet/grid/group-cs11/app/datasource.tsx %}
{% endhighlight %}
{% highlight js tabtitle="extendData.jsx" %}
{% include code-snippet/grid/group-cs11/app/extendData.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="extendData.tsx" %}
{% include code-snippet/grid/group-cs11/app/extendData.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/grid/group-cs11" %}