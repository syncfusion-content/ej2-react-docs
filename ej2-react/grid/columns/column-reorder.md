---
layout: post
title: Column reorder in React Grid component | Syncfusion
description: Learn here all about Column reorder in Syncfusion React Grid component of Syncfusion Essential JS 2 and more.
control: Column reorder 
platform: ej2-react
documentation: ug
domainurl: ##DomainURL##
---

# Column reorder in React Grid component

Reordering can be done by drag and drop of a particular column header from one index to another index within the Grid. To enable reordering, set the [`allowReordering`](https://ej2.syncfusion.com/angular/documentation/api/grid/#allowreordering) to true.

To use reordering, inject the [`Reorder`](https://ej2.syncfusion.com/angular/documentation/api/grid/reorder/) module in the grid.

{% tabs %}
{% highlight js tabtitle="App.jsx" %}
{% include code-snippet/grid/column-cs11/app/App.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="App.tsx" %}
{% include code-snippet/grid/column-cs11/app/App.tsx %}
{% endhighlight %}
{% highlight js tabtitle="datasource.jsx" %}
{% include code-snippet/grid/column-cs11/app/datasource.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="datasource.tsx" %}
{% include code-snippet/grid/column-cs11/app/datasource.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/grid/column-cs11" %}

> You can disable reordering a particular column by setting the [`columns.allowReordering`](https://ej2.syncfusion.com/angular/documentation/api/grid/column/#allowreordering) to false.

## Reorder single column

Grid have option to reorder Columns either by Interaction or by using the [`reorderColumns`](https://ej2.syncfusion.com/angular/documentation/api/grid/reorder/#reordercolumns) method. In the below sample, **ShipCity** column is reordered to last column position by using the method.

{% tabs %}
{% highlight js tabtitle="App.jsx" %}
{% include code-snippet/grid/column-cs12/app/App.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="App.tsx" %}
{% include code-snippet/grid/column-cs12/app/App.tsx %}
{% endhighlight %}
{% highlight js tabtitle="datasource.jsx" %}
{% include code-snippet/grid/column-cs12/app/datasource.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="datasource.tsx" %}
{% include code-snippet/grid/column-cs12/app/datasource.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/grid/column-cs12" %}

## Reorder multiple columns

User can reorder a single column at a time by Interaction. Sometimes we need to have reorder multiple columns at the same time, It can be achieved through programmatically by using [`reorderColumns`](https://ej2.syncfusion.com/angular/documentation/api/grid/reorder/#reordercolumns) method.

In the below sample, **Ship City** and **Ship Region** column is reordered to last column position.

{% tabs %}
{% highlight js tabtitle="App.jsx" %}
{% include code-snippet/grid/column-cs13/app/App.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="App.tsx" %}
{% include code-snippet/grid/column-cs13/app/App.tsx %}
{% endhighlight %}
{% highlight js tabtitle="datasource.jsx" %}
{% include code-snippet/grid/column-cs13/app/datasource.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="datasource.tsx" %}
{% include code-snippet/grid/column-cs13/app/datasource.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/grid/column-cs13" %}

## Reorder events

During the reorder action, the grid component triggers the below three events.

1. The [`columnDragStart`](https://ej2.syncfusion.com/angular/documentation/api/grid/#columndragstart) event triggers when column header element drag (move) starts.
2. The [`columnDrag`](https://ej2.syncfusion.com/angular/documentation/api/grid/#columnDrag) event triggers when column header element is dragged (moved) continuously.
3. The [`columnDrop`](https://ej2.syncfusion.com/angular/documentation/api/grid/#columnDrop) event triggers when a column header element is dropped on the target column.

{% tabs %}
{% highlight js tabtitle="App.jsx" %}
{% include code-snippet/grid/column-cs14/app/App.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="App.tsx" %}
{% include code-snippet/grid/column-cs14/app/App.tsx %}
{% endhighlight %}
{% highlight js tabtitle="datasource.jsx" %}
{% include code-snippet/grid/column-cs14/app/datasource.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="datasource.tsx" %}
{% include code-snippet/grid/column-cs14/app/datasource.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/grid/column-cs14" %}