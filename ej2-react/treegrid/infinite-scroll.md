---
layout: post
title: Infinite scroll in React TreeGrid | Syncfusion
description: Learn here all about Infinite scroll in Syncfusion React TreeGrid component of Syncfusion Essential JS 2 and more.
control: Infinite scroll
platform: ej2-react
documentation: ug
domainurl: ##DomainURL##
---

# Infinite scroll in React TreeGrid

Infinite scrolling loads large data sets without degrading TreeGrid performance. This feature uses lazy loading, buffer data is fetched only when the scrollbar reaches the end of the scroller.
To enable Infinite scrolling, set the `enableInfiniteScrolling` property to true and inject the **InfiniteScroll** module in the TreeGrid.
> * In this feature, TreeGrid does not make a new data request when the same page is revisited.

{% tabs %}
{% highlight js tabtitle="app.jsx" %}
{% include code-snippet/treegrid/infinitescroll-cs1/app/App.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="app.tsx" %}
{% include code-snippet/treegrid/infinitescroll-cs1/app/App.tsx %}
{% endhighlight %}
{% endtabs %}
{% previewsample "page.domainurl/code-snippet/treegrid/infinitescroll-cs1" %}

## InitialBlocks

Define the number of pages loaded initially using the `infiniteScrollSettings.initialBlocks` property. By default, three pages load during initial rendering.
In the demo below, this property is configured to load five pages instead of three.

{% tabs %}
{% highlight js tabtitle="app.jsx" %}
{% include code-snippet/treegrid/infinitescroll-cs2/app/App.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="app.tsx" %}
{% include code-snippet/treegrid/infinitescroll-cs2/app/App.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/treegrid/infinitescroll-cs2" %}

## Cache Mode

Cache mode stores loaded row objects in the TreeGrid instance and reuses them to create row elements when scrolling back to previously visited pages. This mode maintains row elements based on the `infiniteScrollSettings.maxBlocks` value; after the limit is exceeded, older row elements are removed from the DOM to accommodate new rows.
To enable cache mode in Infinite scrolling, set the `infiniteScrollSettings.enableCache` property to true.

{% tabs %}
{% highlight js tabtitle="app.jsx" %}
{% include code-snippet/treegrid/infinitescroll-cs3/app/App.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="app.tsx" %}
{% include code-snippet/treegrid/infinitescroll-cs3/app/App.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/treegrid/infinitescroll-cs3" %}

## Limitations for Infinite Scrolling

* Due to browser element height limitations, the maximum number of records loaded by the TreeGrid is constrained by browser capabilities.
* The total height of initially loaded rows must exceed the viewport height.
* Cell selection is not persisted in cache mode.
* Infinite scrolling is not compatible with batch editing, cell editing, and detail template.
* Aggregates and total group items reflect only the current view items. To compute across all items regardless of view, refer to the corresponding aggregate documentation.
* Programmatic selection using the [selectRows](https://ej2.syncfusion.com/react/documentation/api/treegrid/#selectrows) and [selectRow](https://ej2.syncfusion.com/react/documentation/api/treegrid/#selectrow) methods is not supported with Infinite scrolling.
* Infinite scrolling does not support rendering records in a collapsed state. All records must be fully expanded at initial rendering.

> Refer to the [React TreeGrid](https://www.syncfusion.com/react-ui-components/react-tree-grid) feature tour page for feature highlights. Explore the [React TreeGrid example](https://ej2.syncfusion.com/react/demos/#/material/treegrid/treegrid-overview) to learn how to present and manipulate data.