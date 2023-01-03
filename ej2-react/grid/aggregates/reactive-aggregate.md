---
layout: post
title: Reactive aggregate in React Grid component | Syncfusion
description: Learn here all about Reactive aggregate in Syncfusion React Grid component of Syncfusion Essential JS 2 and more.
control: Reactive aggregate 
publishingplatform: React
documentation: ug
domainurl: ##DomainURL##
---

# Reactive aggregate in React Grid component

## Auto update aggregate value in batch editing

When using batch editing, the aggregate values will be refreshed on every cell save. The footer, group footer, and group caption aggregate values will be refreshed.

> Adding a new record to the grouped grid will not refresh the aggregate values.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/grid/aggregate-cs6/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/grid/aggregate-cs6/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

{ % previewsample "page.domainurl/code-snippet/grid/aggregate-cs6" % }

## Refresh aggregate values in inline editing

By default, reactive aggregate update is not supported by inline and dialog edit modes as it is not feasible to anticipate the value change event for every editor. But, you can refresh the aggregates manually in the inline edit mode using the refresh method of aggregate module.

In the following code, the input event for the Freight column editor has been registered and the aggregate value has been refreshed manually.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/grid/aggregate-cs7/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/grid/aggregate-cs7/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

{ % previewsample "page.domainurl/code-snippet/grid/aggregate-cs7" % }