---
layout: post
title: Infinite scroll in React Grid component | Syncfusion
description: Learn here all about Infinite scroll in Syncfusion React Grid component of Syncfusion Essential JS 2 and more.
control: Infinite scroll 
platform: ej2-react
documentation: ug
domainurl: ##DomainURL##
---

# Infinite scroll in React Grid component

Infinite scrolling is used to load a huge amount of data without degrading the Grid performance. This feature works like the lazy loading concept, which means the buffer data is loaded only when the scrollbar reaches the end of the scroller.

To enable Infinite scrolling, set `enableInfiniteScrolling` property as true.

> * In this feature, Grid will not make a new data request when you visit the same page again.

{% tabs %}
{% highlight js tabtitle="App.jsx" %}
{% include code-snippet/grid/virtual-scroll-cs1/app/App.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="App.tsx" %}
{% include code-snippet/grid/virtual-scroll-cs1/app/App.tsx %}
{% endhighlight %}
{% highlight js tabtitle="largeData.jsx" %}
{% include code-snippet/grid/virtual-scroll-cs1/app/largeData.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="largeData.tsx" %}
{% include code-snippet/grid/virtual-scroll-cs1/app/largeData.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/grid/virtual-scroll-cs1" %}

## InitialBlocks

You can define the initial loading pages count by using `infiniteScrollSettings.initialBlocks` property. By default, this feature loads three pages in initial rendering.

In the below demo, we have changed this property value to load five page records instead of three.

{% tabs %}
{% highlight js tabtitle="App.jsx" %}
{% include code-snippet/grid/virtual-scroll-cs2/app/App.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="App.tsx" %}
{% include code-snippet/grid/virtual-scroll-cs2/app/App.tsx %}
{% endhighlight %}
{% highlight js tabtitle="largeData.jsx" %}
{% include code-snippet/grid/virtual-scroll-cs2/app/largeData.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="largeData.tsx" %}
{% include code-snippet/grid/virtual-scroll-cs2/app/largeData.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/grid/virtual-scroll-cs2" %}

## Cache Mode

Cache is used to store the loaded rows object in the Grid instance which can be reused for creating the row elements whenever you scroll to already visited page. Also, this mode maintains row elements based on the `infiniteScrollSettings.maxBlocks` count value, once this limit exceeds then it will remove row elements from DOM for new rows.

To enable the cache mode in Infinite scrolling, set `infiniteScrollSettings.enableCache` property as true.

{% tabs %}
{% highlight js tabtitle="App.jsx" %}
{% include code-snippet/grid/virtual-scroll-cs3/app/App.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="App.tsx" %}
{% include code-snippet/grid/virtual-scroll-cs3/app/App.tsx %}
{% endhighlight %}
{% highlight js tabtitle="largeData.jsx" %}
{% include code-snippet/grid/virtual-scroll-cs3/app/largeData.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="largeData.tsx" %}
{% include code-snippet/grid/virtual-scroll-cs3/app/largeData.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/grid/virtual-scroll-cs3" %}

## Limitations for Infinite Scrolling

* Due to the element height limitation in browsers, the maximum number of records loaded by the grid is limited due to the browser capability.
* Initial loading rows total height must be greater than the viewport height.
* Cell selection will not be persisted in cache mode.
* Infinite scrolling is not compatible with batch editing, detail template and hierarchy features.
* The group records cannot be collapsed in cache mode.
* The aggregated information and total group items are displayed based on the current view items. To get these information regardless of the view items, refer to the [`Group with Page`](./grouping/#Group-with-paging) topic.
* Programmatic selection using the [`selectRows`](https://ej2.syncfusion.com/angular/documentation/api/grid/#selectrows) and [`selectRow`](https://ej2.syncfusion.com/angular/documentation/api/grid/#selectrow) method is not supported in infinite scrolling.
