---
layout: post
title: Row spanning in React Gantt component | Syncfusion
description: Learn here all about Row spanning in Syncfusion React Gantt component of Syncfusion Essential JS 2 and more.
platform: ej2-react
control: Row spanning 
documentation: ug
domainurl: ##DomainURL##
---

# Row Spanning in React Gantt Component

The Syncfusion<sup style="font-size:70%">&reg;</sup> React Gantt component supports row cell spanning, allowing multiple cells in a row to merge into a single cell. This is useful for displaying shared information across rows without duplication.

To enable row spanning, use the [rowSpan](https://ej2.syncfusion.com/react/documentation/api/gantt/queryCellInfoEventArgs/#rowspan) attribute inside the [queryCellInfo](https://ej2.syncfusion.com/react/documentation/gantt/events#querycellinfo) event. This event is triggered for each grid cell, where you can define the number of rows a cell should span based on its data.

In the example below, the **Soil test approval** cell spans across two rows in the **TaskName** column.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/gantt/row-span-cs1/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/gantt/row-span-cs1/app/index.tsx %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/gantt/row-span-cs1/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/gantt/row-span-cs1" %}

> * You can use both [rowSpan](https://ej2.syncfusion.com/react/documentation/api/gantt/queryCellInfoEventArgs/#rowspan) and [colSpan](https://ej2.syncfusion.com/react/documentation/api/gantt/queryCellInfoEventArgs/#colspan) together to merge grid cells vertically and horizontally.
