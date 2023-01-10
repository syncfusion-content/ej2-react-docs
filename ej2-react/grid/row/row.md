---
layout: post
title: Row in React Grid component | Syncfusion
description: Learn here all about Row in Syncfusion React Grid component of Syncfusion Essential JS 2 and more.
control: Row 
platform: ej2-react
documentation: ug
domainurl: ##DomainURL##
---

# Row in React Grid component

It represents the record details that are fetched from the [`dataSource`](https://ej2.syncfusion.com/angular/documentation/api/grid/#datasource).

## Row Customization

### Using event

You can customize the appearance of the Row by using the [`rowDataBound`](https://ej2.syncfusion.com/angular/documentation/api/grid/#rowdatabound) event.
The [`rowDataBound`](https://ej2.syncfusion.com/angular/documentation/api/grid/#rowdatabound) event triggers for every row. In that event handler,
you can get [`RowDataBoundEventArgs`](https://ej2.syncfusion.com/angular/documentation/api/grid/rowDataBoundEventArgs/) which contain details of the row.

{% tabs %}
{% highlight js tabtitle="App.jsx" %}
{% include code-snippet/grid/rows-cs4/app/App.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="App.tsx" %}
{% include code-snippet/grid/rows-cs4/app/App.tsx %}
{% endhighlight %}
{% highlight js tabtitle="datasource.jsx" %}
{% include code-snippet/grid/rows-cs4/app/datasource.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="datasource.tsx" %}
{% include code-snippet/grid/rows-cs4/app/datasource.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/grid/rows-cs4" %}

### Using CSS customize alternate rows

Grid alternative rows has **e-altrow** class. So, you can change alternative background color by overriding **e-altrow** class.

```css
.e-grid .e-altrow {
    background-color: #fafafa;
}
```

Please refer the following example.

{% tabs %}
{% highlight js tabtitle="App.jsx" %}
{% include code-snippet/grid/rows-alt-cs1/app/App.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="App.tsx" %}
{% include code-snippet/grid/rows-alt-cs1/app/App.tsx %}
{% endhighlight %}
{% highlight js tabtitle="datasource.jsx" %}
{% include code-snippet/grid/rows-alt-cs1/app/datasource.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="datasource.tsx" %}
{% include code-snippet/grid/rows-alt-cs1/app/datasource.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/grid/rows-alt-cs1" %}

### Using CSS customize selected row

The background color of the selected row can be changed by overriding the following CSS style.

```css
.e-grid td.e-active {
    background-color: #f9920b;
}
```

This is demonstrated in the following sample:

{% tabs %}
{% highlight js tabtitle="App.jsx" %}
{% include code-snippet/grid/rows-alt-cs2/app/App.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="App.tsx" %}
{% include code-snippet/grid/rows-alt-cs2/app/App.tsx %}
{% endhighlight %}
{% highlight js tabtitle="datasource.jsx" %}
{% include code-snippet/grid/rows-alt-cs2/app/datasource.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="datasource.tsx" %}
{% include code-snippet/grid/rows-alt-cs2/app/datasource.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/grid/rows-alt-cs2" %}

## Adding a new row programmatically

The Grid can add a new row between the existing rows using the [addRecord](https://ej2.syncfusion.com/angular/documentation/api/grid/#addrecord) method of the Grid.

This is demonstrated in the following sample:

{% tabs %}
{% highlight js tabtitle="App.jsx" %}
{% include code-snippet/grid/rows-cs5/app/App.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="App.tsx" %}
{% include code-snippet/grid/rows-cs5/app/App.tsx %}
{% endhighlight %}
{% highlight js tabtitle="datasource.jsx" %}
{% include code-snippet/grid/rows-cs5/app/datasource.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="datasource.tsx" %}
{% include code-snippet/grid/rows-cs5/app/datasource.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/grid/rows-cs5" %}

> When working with remote data, it is impossible to add a new row between the existing rows.

## How to get the row information when hovering over the cell

It is possible to get the row information when hovering over the specific cell. This can be achieved by using the [rowDataBound](https://ej2.syncfusion.com/angular/documentation/api/grid#rowdatabound) event and [getRowInfo](https://ej2.syncfusion.com/angular/documentation/api/grid#getrowinfo) method of the Grid.

In the following sample, the `mouseover` event is bound to a grid row in the `rowDataBound` event, and when hovering over the specific cell, using the `getRowInfo` method, row information will be retrieved and displayed in the console.

{% tabs %}
{% highlight js tabtitle="App.jsx" %}
{% include code-snippet/grid/rows-alt-cs3/app/App.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="App.tsx" %}
{% include code-snippet/grid/rows-alt-cs3/app/App.tsx %}
{% endhighlight %}
{% highlight js tabtitle="datasource.jsx" %}
{% include code-snippet/grid/rows-alt-cs3/app/datasource.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="datasource.tsx" %}
{% include code-snippet/grid/rows-alt-cs3/app/datasource.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/grid/rows-alt-cs3" %}

## See Also

* [Row drag and drop within the Grid using remote data in React Grid](https://www.syncfusion.com/forums/147119/row-drag-and-drop-within-the-grid-using-remote-data-in-react-grid)