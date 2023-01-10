---
layout: post
title: Collapse grouped rows at initial render in React Grid component | Syncfusion
description: Learn here all about Collapse grouped rows at initial render in Syncfusion React Grid component of Syncfusion Essential JS 2 and more.
control: Collapse grouped rows at initial render 
platform: ej2-react
documentation: ug
domainurl: ##DomainURL##
---

# Collapse grouped rows at initial render in React Grid component

You can collapse all the grouped rows at initial rendering by using [`dataBound`](https://ej2.syncfusion.com/angular/documentation/api/grid/#databound) event with  [`collapseAll`](https://ej2.syncfusion.com/angular/documentation/api/grid/group/#collapseall) method of the grid.

In the below demo, all the grouped rows are collapsed at initial rendering.

 {% tabs %}
{% highlight js tabtitle="App.jsx" %}
{% include code-snippet/grid/group-cs9/app/App.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="App.tsx" %}
{% include code-snippet/grid/group-cs9/app/App.tsx %}
{% endhighlight %}
{% highlight js tabtitle="datasource.jsx" %}
{% include code-snippet/grid/group-cs9/app/datasource.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="datasource.tsx" %}
{% include code-snippet/grid/group-cs9/app/datasource.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/grid/group-cs9" %}