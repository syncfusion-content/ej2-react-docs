---
layout: post
title: Column reorder in React Treegrid component | Syncfusion
description: Learn here all about Column reorder in Syncfusion React Treegrid component of Syncfusion Essential JS 2 and more.
control: Column reorder 
platform: ej2-react
documentation: ug
domainurl: ##DomainURL##
---

# Column reorder in React Treegrid component

Reordering can be done by drag and drop of a particular column header from one index to another index within the treegrid. To enable reordering, set the [`allowReordering`](https://ej2.syncfusion.com/react/documentation/api/treegrid/#allowreordering) to true.

To use reordering, inject the [`Reorder`](https://ej2.syncfusion.com/react/documentation/api/treegrid/#reordermodule) module in the treegrid.

{% tabs %}
{% highlight js tabtitle="app.jsx" %}
{% include code-snippet/treegrid/column-cs3/app/App.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="app.tsx" %}
{% include code-snippet/treegrid/column-cs3/app/App.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/treegrid/column-cs3" %}

> You can disable reordering a particular column by setting the [`columns.allowReordering`](https://ej2.syncfusion.com/react/documentation/api/treegrid/column/#reordermodule) to false.

## Reorder multiple columns

Multiple columns can be reordered at a time by using the [`reorderColumns`](https://ej2.syncfusion.com/react/documentation/api/treegrid/column/#reordercolumns) method.

{% tabs %}
{% highlight js tabtitle="app.jsx" %}
{% include code-snippet/treegrid/column-cs4/app/App.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="app.tsx" %}
{% include code-snippet/treegrid/column-cs4/app/App.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/treegrid/column-cs4" %}