---
layout: post
title: Row in React TreeGrid component | Syncfusion
description: Learn here all about Row in Syncfusion React TreeGrid component of Syncfusion Essential JS 2 and more.
control: Row 
platform: ej2-react
documentation: ug
domainurl: ##DomainURL##
---

# Row in React TreeGrid

A row represents record details from the datasource.

The following video provides a quick start for row features:
{% youtube "https://www.youtube.com/watch?v=mHo_WLeNtWI" %}

## Customize rows

Customize the appearance of a row using the [rowDataBound](https://ej2.syncfusion.com/react/documentation/api/treegrid/#rowdatabound) event, which triggers for every row. In the event handler, [RowDataBoundEventArgs](https://ej2.syncfusion.com/react/documentation/api/grid/rowDataBoundEventArgs/) provides details of the row.

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

Change the TreeGrid’s alternating row background color by overriding the `.e-altrow` class.

```css
.e-treegrid .e-altrow {
    background-color: #fafafa;
}
```

The following example demonstrates this style override.

{% tabs %}
{% highlight js tabtitle="app.jsx" %}
{% include code-snippet/treegrid/alt-row-cs1/app/App.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="app.tsx" %}
{% include code-snippet/treegrid/alt-row-cs1/app/App.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/treegrid/alt-row-cs1" %}

## Row height

Row height can be customized using the [rowHeight](https://ej2.syncfusion.com/react/documentation/api/treegrid/#rowheight) property. This is useful for displaying more content in a row or reducing height to fit content. The property sets the height for all rows.

In the following example, `rowHeight` is set to 60px.

{% tabs %}
{% highlight js tabtitle="app.jsx" %}
{% include code-snippet/treegrid/rows-cs1/app/App.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="app.tsx" %}
{% include code-snippet/treegrid/rows-cs1/app/App.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/treegrid/rows-cs1" %}

### Customize row height for particular row

When a specific row requires a different height, apply a custom value during the [rowDataBound](https://ej2.syncfusion.com/react/documentation/api/treegrid/#rowdatabound) event based on the row data. This approach keeps the global `rowHeight` for all rows while selectively overriding the height for targeted rows.

In the following example, the row with `TaskID` as **3** is set to **90px** using `rowDataBound` event.

{% tabs %}
{% highlight js tabtitle="app.jsx" %}
{% include code-snippet/treegrid/rows-cs2/app/App.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="app.tsx" %}
{% include code-snippet/treegrid/rows-cs2/app/App.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/treegrid/rows-cs2" %}

> Refer to the [React TreeGrid](https://www.syncfusion.com/react-ui-components/react-tree-grid) feature tour for key capabilities. Explore the [React TreeGrid examples](https://ej2.syncfusion.com/react/demos/#/material/treegrid/treegrid-overview) to see data presentation and manipulation.