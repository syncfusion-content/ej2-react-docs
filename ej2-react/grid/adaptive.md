---
layout: post
title: Adaptive in React Grid component | Syncfusion
description: Learn here all about Adaptive in Syncfusion React Grid component of Syncfusion Essential JS 2 and more.
control: Adaptive 
publishingplatform: React
documentation: ug
domainurl: ##DomainURL##
---

# Adaptive in React Grid component

The Grid user interface (UI) was redesigned to provide an optimal viewing experience and improve usability on small screens. This interface will render the filter, sort, and edit dialogs adaptively and have an option to render the grid row elements in the vertical direction.

## Render adaptive dialogs

When we enable the [`enableAdaptiveUI`](https://ej2.syncfusion.com/angular/documentation/api/grid/#enableadaptiveui) property, the grid will render the filter, sort, and edit dialogs in full screen for a better user experience. This behavior is demonstrated in the below demo.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/grid/adaptive-cs1/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/grid/adaptive-cs1/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

{ % previewsample "page.domainurl/code-snippet/grid/adaptive-cs1" % }

## Vertical row rendering

The grid will render the row elements in vertical order while setting the [`rowRenderingMode`](https://ej2.syncfusion.com/angular/documentation/api/grid/rowRenderingMode/) property value as **Vertical**.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/grid/adaptive-cs2/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/grid/adaptive-cs2/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

{ % previewsample "page.domainurl/code-snippet/grid/adaptive-cs2" % }

> * [`enableAdaptiveUI`](https://ej2.syncfusion.com/angular/documentation/api/grid/#enableadaptiveui) property must be enabled for vertical row rendering.

### Supported features by vertical row rendering

The following features are only supported in vertical row rendering:

* Paging
* Sorting
* Filtering
* Selection
* Dialog Editing
* Aggregate
* Infinite scroll
* Toolbar
