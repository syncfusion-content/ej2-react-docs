---
layout: post
title: How to Span Columns in React Gantt Component | Syncfusion
description: Learn how to span columns in the Syncfusion React Gantt component using the queryCellInfo event, customize borders, and understand limitations.
platform: ej2-react
control: Column Spanning
documentation: ug
domainurl: ##DomainURL##
---

# Column spanning in React Gantt component

The Syncfusion<sup style="font-size:70%">&reg;</sup> React Gantt component supports **column spanning**, allowing adjacent cells to merge horizontally for improved layout clarity. This feature is useful for grouping related data or enhancing visual structure.

To enable column spanning, use the [queryCellInfo](https://ej2.syncfusion.com/react/documentation/gantt/events#querycellinfo) event and set the [colSpan](https://ej2.syncfusion.com/react/documentation/api/gantt/queryCellInfoEventArgs/#colspan) property to define how many columns a cell should span.

In the following example, **Work** cells are spanned to improve visual clarity:

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/gantt/column-span-cs1/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/gantt/column-span-cs1/app/index.tsx %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/gantt/column-span-cs1/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/gantt/column-span-cs1" %}

## Customize border color of spanned columns

You can customize the border color of spanned cells using the [queryCellInfo](https://ej2.syncfusion.com/react/documentation/gantt/events#querycellinfo) event. This event triggers before the cell is rendered, allowing you to apply custom styles dynamically.

The following example demonstrates how to change the border color of spanned cells:

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/gantt/columns/columnspan-cs2/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/gantt/columns/columnspan-cs2/src/main.ts %}
{% endhighlight %}

{% highlight ts tabtitle="datasource.ts" %}
{% include code-snippet/gantt/columns/columntype-cs1/src/data.ts %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/samples/gantt/columns/columnspan-cs2" %}

## Limitations

Column spanning is not compatible with the following features:

1. Virtual scrolling
2. Infinite scrolling

Ensure these features are disabled when using column spanning to avoid rendering issues.