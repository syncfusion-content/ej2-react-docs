---
layout: post
title: React Grid - Reactive Aggregate | Syncfusion
description: React Grid reactive aggregate supports live aggregate updates during editing or data changes, ensuring summaries always represent the current grid state.
control: Reactive aggregate 
platform: ej2-react
documentation: ug
domainurl: ##DomainURL##
---

# Reactive Aggregate in React Grid Component

The Syncfusion<sup style="font-size:70%">&reg;</sup> React Grid supports reactive aggregates, which automatically recalculate and update aggregate values in real time whenever the data changes.

## Auto-update aggregate values in Batch editing

When the Grid is in batch editing mode, aggregate values in the footer, group footer, and group caption rows are automatically refreshed after every cell save, ensuring the aggregate values always reflect the latest edited data.

{% tabs %}
{% highlight js tabtitle="App.jsx" %}
{% include code-snippet/grid/aggregate-cs6/app/App.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="App.tsx" %}
{% include code-snippet/grid/aggregate-cs6/app/App.tsx %}
{% endhighlight %}
{% highlight js tabtitle="datasource.jsx" %}
{% include code-snippet/grid/aggregate-cs6/app/datasource.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="datasource.tsx" %}
{% include code-snippet/grid/aggregate-cs6/app/datasource.tsx %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/grid/aggregate-cs6" %}

> Adding a new record to the grouped grid will not refresh the aggregate values.

## Auto-update aggregate values in Inline and Dialog edit modes

By default, reactive aggregate updates are not supported in Inline and Dialog edit modes because value changes cannot be automatically detected for all editor types.

To ensure aggregates are updated correctly, they must be refreshed manually using the `aggregateModule.refresh()` method:

- **Inline edit mode:** Register an `input` event on the editor (for example, the Freight column). Whenever the value changes, call `aggregateModule.refresh()` to update the aggregate values.
- **Dialog edit mode:** Since multiple editors are rendered inside a dialog, aggregates are refreshed automatically after the data is saved by clicking the Save button. In special cases where an immediate refresh is required for a particular editor before saving, apply the same approach as in Inline mode: bind an `input` event to that editor and call `aggregateModule.refresh()` to update the aggregate values instantly.

The code below registers an `input` event on the "Freight" column editor and manually refreshes aggregate value after changes.

{% tabs %}
{% highlight js tabtitle="App.jsx" %}
{% include code-snippet/grid/aggregate-cs7/app/App.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="App.tsx" %}
{% include code-snippet/grid/aggregate-cs7/app/App.tsx %}
{% endhighlight %}
{% highlight js tabtitle="datasource.jsx" %}
{% include code-snippet/grid/aggregate-cs7/app/datasource.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="datasource.tsx" %}
{% include code-snippet/grid/aggregate-cs7/app/datasource.tsx %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/grid/aggregate-cs7" %}

## See also
- [Aggregates overview](./aggregates)
- [Batch editing](../editing/batch-editing)
- [Inline editing](../editing/in-line-editing)
- [Aggregates API](https://ej2.syncfusion.com/react/documentation/api/grid/aggregateColumn)