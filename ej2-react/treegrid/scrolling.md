---
layout: post
title: Scrolling in React TreeGrid | Syncfusion
description: Learn here all about Scrolling in Syncfusion React TreeGrid component of Syncfusion Essential JS 2 and more.
control: Scrolling
platform: ej2-react
documentation: ug
domainurl: ##DomainURL##
---

# Scrolling in React TreeGrid

The scrollbar is displayed in the TreeGrid when content exceeds the element [width](https://ej2.syncfusion.com/react/documentation/api/treegrid/#width) or [height](https://ej2.syncfusion.com/react/documentation/api/treegrid/#height). The vertical and horizontal scrollbars appear based on the following criteria:

* The vertical scrollbar appears when the total height of rows in the TreeGrid exceeds its element height.

* The horizontal scrollbar appears when the sum of column widths exceeds the TreeGrid element width.

* The [height](https://ej2.syncfusion.com/react/documentation/api/treegrid/#height) and [width](https://ej2.syncfusion.com/react/documentation/api/treegrid/#width) properties set the TreeGrid height and width, respectively.

> The default value for [height](https://ej2.syncfusion.com/react/documentation/api/treegrid/#height) and [width](https://ej2.syncfusion.com/react/documentation/api/treegrid/#width) is *auto*.

## Set width and height

To specify the scroller [width](https://ej2.syncfusion.com/react/documentation/api/treegrid/#width) and [height](https://ej2.syncfusion.com/react/documentation/api/treegrid/#height) in pixels, assign a numeric pixel value.

{% tabs %}
{% highlight js tabtitle="app.jsx" %}
{% include code-snippet/treegrid/scrolling-cs1/app/App.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="app.tsx" %}
{% include code-snippet/treegrid/scrolling-cs1/app/App.tsx %}
{% endhighlight %}
{% endtabs %}
{% previewsample "page.domainurl/code-snippet/treegrid/scrolling-cs1" %}

## Responsive with parent container

Specify [width](https://ej2.syncfusion.com/react/documentation/api/treegrid/#width) and [height](https://ej2.syncfusion.com/react/documentation/api/treegrid/#height) as **100%** to make the TreeGrid fill its parent container. When [height](https://ej2.syncfusion.com/react/documentation/api/treegrid/#height) is set to **100%**, the parent element must have an explicit height.

{% tabs %}
{% highlight js tabtitle="app.jsx" %}
{% include code-snippet/treegrid/responsive-scrolling-cs1/app/App.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="app.tsx" %}
{% include code-snippet/treegrid/responsive-scrolling-cs1/app/App.tsx %}
{% endhighlight %}
{% endtabs %}
{% previewsample "page.domainurl/code-snippet/treegrid/responsive-scrolling-cs1" %}

## Sticky header

The Syncfusion React TreeGrid can keep column headers fixed (sticky) while scrolling through large datasets. Sticky headers remain visible to preserve column context during vertical scrolling, which is especially helpful with wide or lengthy hierarchical data.

Enabling sticky headers ensures that the header row remains anchored to the top of the TreeGrid container or its parent scrolling element, regardless of scroll position.

To enable sticky headers in the TreeGrid, set the `enableStickyHeader` property to **true**. This keeps column headers anchored to the top of the TreeGrid container or its parent scrolling container during vertical scroll.

The following sample demonstrates enabling or disabling the sticky header in the TreeGrid using a [Switch](https://ej2.syncfusion.com/react/documentation/switch/getting-started) and its [change](https://ej2.syncfusion.com/react/documentation/api/switch/#change) event:

{% tabs %}
{% highlight js tabtitle="app.jsx" %}
{% include code-snippet/treegrid/scrolling-sticky-header/app/App.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="app.tsx" %}
{% include code-snippet/treegrid/scrolling-sticky-header/app/App.tsx %}
{% endhighlight %}
{% endtabs %}
{% previewsample "page.domainurl/code-snippet/treegrid/scrolling-sticky-header" %}

## Scroll to selected row

Scroll the TreeGrid content to the selected row position by using the [rowSelected](https://ej2.syncfusion.com/react/documentation/api/treegrid/#rowselected) event.

{% tabs %}
{% highlight js tabtitle="app.jsx" %}
{% include code-snippet/treegrid/scrolling-cs2/app/App.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="app.tsx" %}
{% include code-snippet/treegrid/scrolling-cs2/app/App.tsx %}
{% endhighlight %}
{% endtabs %}
{% previewsample "page.domainurl/code-snippet/treegrid/scrolling-cs2" %}