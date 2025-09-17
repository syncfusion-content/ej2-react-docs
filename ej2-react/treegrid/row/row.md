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

## Row height

The Syncfusion TreeGrid allows you to customize the height of rows based on your needs. This feature can be useful when you need to display more content in a row or when you want to reduce the height of rows to fit its content. You can achieve this by using the [rowHeight](https://ej2.syncfusion.com/react/documentation/api/treegrid/#rowheight) property of the TreeGrid. This property allows you to change the height of the entire grid row to your desired value.

In the below example, the **rowHeight** is set as *60px*.

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

Customizing the row height for a particular row can be useful when you want to display more content in a particular row, reduce the height of a row to fit its content, or make a specific row stand out from the other rows in the TreeGrid. This can be achieved by using the `rowHeight` property of the TreeGrid along with the [rowDataBound](https://ej2.syncfusion.com/react/documentation/api/treegrid/#rowdatabound) event.

The `rowHeight` property of the TreeGrid allows you to set the height of all rows in the TreeGrid to a specific value. However, if you want to customize the row height for a specific row based on the row data, you can use the `rowDataBound` event. This event is triggered every time a request is made to access row information, element, or data, and before the row element is appended to the TreeGrid element.

In the below example, the row height for the row with **TaskID** as **3** is set as **90px** using the **rowDataBound** event.

{% tabs %}
{% highlight js tabtitle="app.jsx" %}
{% include code-snippet/treegrid/rows-cs2/app/App.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="app.tsx" %}
{% include code-snippet/treegrid/rows-cs2/app/App.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/treegrid/rows-cs2" %}

> Refer to our [`React Tree Grid`](https://www.syncfusion.com/react-ui-components/react-tree-grid) feature tour page for its groundbreaking feature representations. You can also explore our [`React Tree Grid example`](https://ej2.syncfusion.com/react/demos/#/material/treegrid/treegrid-overview) to know how to present and manipulate data.
