---
layout: post
title: Row in React Treegrid component | Syncfusion
description: Learn here all about Row in Syncfusion React Treegrid component of Syncfusion Essential JS 2 and more.
control: Row 
platform: ej2-react
documentation: ug
domainurl: ##DomainURL##
---

# Row in React Treegrid component

The row represents record details fetched from data source.

To get start quickly with features in Row, you can check on this video:
{% youtube "https://www.youtube.com/watch?v=mHo_WLeNtWI" %}

## Customize rows

You can customize the appearance of a row by using the [`rowDataBound`](https://ej2.syncfusion.com/react/documentation/api/treegrid/#rowdatabound) event. The [`rowDataBound`](https://ej2.syncfusion.com/react/documentation/api/treegrid/#rowdatabound) event triggers for every row. In the event handler, you can get the [`RowDataBoundEventArgs`](https://ej2.syncfusion.com/react/documentation/api/grid/rowDataBoundEventArgs/) that contains details of the row.

{% tabs %}
{% highlight js tabtitle="app.jsx" %}
{% include code-snippet/treegrid/rows-cs3/app/App.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="app.tsx" %}
{% include code-snippet/treegrid/rows-cs3/app/App.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/treegrid/rows-cs3" %}

## Styling alternate row

You can change the treegrid's alternative rows' background color by overriding the *.e-altrow* class.

```css
.e-treegrid .e-altrow {
    background-color: #fafafa;
}
```

Please refer the following example.

{% tabs %}
{% highlight js tabtitle="app.jsx" %}
{% include code-snippet/treegrid/alt-row-cs1/app/App.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="app.tsx" %}
{% include code-snippet/treegrid/alt-row-cs1/app/App.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/treegrid/alt-row-cs1" %}

> Refer to our [`React Tree Grid`](https://www.syncfusion.com/react-components/react-tree-grid) feature tour page for its groundbreaking feature representations. You can also explore our [`React Tree Grid example`](https://ej2.syncfusion.com/react/demos/#/material/treegrid/treegrid-overview) to know how to present and manipulate data.
