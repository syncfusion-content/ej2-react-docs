---
layout: post
title: Column reorder in React TreeGrid | Syncfusion
description: Learn here all about Column reorder in Syncfusion React TreeGrid of Syncfusion Essential JS 2 and more.
control: Column reorder 
platform: ej2-react
documentation: ug
domainurl: ##DomainURL##
---

# Column reorder in React TreeGrid 

Columns can be reordered by drag and drop a column header from one index to another within the TreeGrid. Enable this behavior by setting [allowReordering](https://ej2.syncfusion.com/react/documentation/api/treegrid/#allowreordering) to true.

To use reordering, inject the [Reorder](https://ej2.syncfusion.com/react/documentation/api/treegrid/#reordermodule) module into the TreeGrid.

{% tabs %}
{% highlight js tabtitle="app.jsx" %}
{% include code-snippet/treegrid/column-cs3/app/App.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="app.tsx" %}
{% include code-snippet/treegrid/column-cs3/app/App.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/treegrid/column-cs3" %}

> Reordering can be disabled for a specific column by setting [columns.allowReordering](https://ej2.syncfusion.com/react/documentation/api/treegrid/column/#reordermodule) to false.

## Reorder multiple columns

Multiple columns can be reordered programmatically using the [reorderColumns](https://ej2.syncfusion.com/react/documentation/api/treegrid/column/#reordercolumns) method.

{% tabs %}
{% highlight js tabtitle="app.jsx" %}
{% include code-snippet/treegrid/column-cs4/app/App.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="app.tsx" %}
{% include code-snippet/treegrid/column-cs4/app/App.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/treegrid/column-cs4" %}