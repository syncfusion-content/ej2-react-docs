---
layout: post
title: Immutable mode in React Grid component | Syncfusion
description: Learn here all about Immutable mode in Syncfusion React Grid component of Syncfusion Essential JS 2 and more.
control: Immutable mode 
publishingplatform: React
documentation: ug
domainurl: ##DomainURL##
---

# Immutable mode in React Grid component

The immutable mode optimizes the Grid re-rendering performance by using the object reference and [`deep compare`](https://dmitripavlutin.com/how-to-compare-objects-in-javascript/#4-deep-equality) concept. When performing the Grid actions, it will only re-render the modified or newly added rows and prevent the re-rendering of the unchanged rows.

To enable this feature, you have to set the [`enableImmutableMode`](https://ej2.syncfusion.com/angular/documentation/api/grid/#enableImmutableMode) property as **true**.

>* This feature uses the primary key value for data comparison. So, you need to provide the [`isPrimaryKey`](https://ej2.syncfusion.com/angular/documentation/api/grid/column/#isprimarykey) column.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/grid/immutable-mode-cs1/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/grid/immutable-mode-cs1/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

{ % previewsample "page.domainurl/code-snippet/grid/immutable-mode-cs1" % }

## Limitations

The following features are not supported in the immutable mode:

* Frozen rows and columns
* Row Template
* Detail Template
* Hierarchy Grid
* Column reorder
* Virtual scroll
* Infinite scroll
* Grouping
