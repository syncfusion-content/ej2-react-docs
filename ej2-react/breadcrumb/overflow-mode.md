---
layout: post
title: Overflow in React Breadcrumb component | Syncfusion
description: Learn here all about Overflow mode in Syncfusion React Breadcrumb component of Syncfusion Essential JS 2 and more.
control: Breadcrumb 
platform: ej2-react
documentation: ug
domainurl: ##DomainURL##
---

# Overflow in React Breadcrumb component

## Overflow Mode

The Breadcrumb component uses the [`maxItems`](https://ej2.syncfusion.com/react/documentation/api/breadcrumb/#maxitems) and [`overflowMode`](https://ej2.syncfusion.com/react/documentation/api/breadcrumb/#overflowmode) properties to control how breadcrumb items are displayed when they exceed the available container space. The `maxItems` property sets the maximum number of items to display, while  [`overflowMode`](https://ej2.syncfusion.com/react/documentation/api/breadcrumb/#overflowmode) determines the behavior for handling additional items.

In the following example, maxItems is set to 3 with overflowMode as Menu (default). To prevent breadcrumb item navigation, the [`enableNavigation`](https://ej2.syncfusion.com/react/documentation/api/breadcrumb/#enablenavigation) property has been set to false in the Breadcrumb component.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/breadcrumb/overflow-cs1/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/breadcrumb/overflow-cs1/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/breadcrumb/overflow-cs1" %}

The following overflow modes are available in the Breadcrumb component.

* Collapsed
* Menu
* Wrap
* Scroll
* Hidden
* None

## Collapsed

Collapsed mode displays the first and last breadcrumb items while hiding intermediate items behind a collapsed icon (ellipsis). When the collapsed icon is clicked, all hidden items become visible and navigable, providing a compact view that maintains access to all navigation levels.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/breadcrumb/overflow-cs2/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/breadcrumb/overflow-cs2/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/breadcrumb/overflow-cs2" %}

## Menu

Menu mode displays the maximum number of breadcrumb items that fit within the container space and organizes the remaining items into a dropdown submenu. This mode provides efficient space utilization while keeping all items accessible through the overflow menu.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/breadcrumb/overflow-cs3/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/breadcrumb/overflow-cs3/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/breadcrumb/overflow-cs3" %}

## Wrap

Wrap mode automatically wraps breadcrumb items to multiple lines when the total width exceeds the container space.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/breadcrumb/overflow-cs4/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/breadcrumb/overflow-cs4/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/breadcrumb/overflow-cs4" %}

## Scroll

Scroll mode displays an HTML scroll bar when the breadcrumb width exceeds the container space, allowing users to horizontally scroll to view hidden items. This mode maintains the single-line layout while providing access to all items through scrolling.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/breadcrumb/overflow-cs5/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/breadcrumb/overflow-cs5/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/breadcrumb/overflow-cs5" %}

## Hidden

Hidden mode displays the maximum number of items that fit within the container space and completely hides the remaining items. Hidden items become visible when users navigate to previous levels by clicking on visible breadcrumb items, creating a dynamic navigation experience.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/breadcrumb/overflow-cs6/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/breadcrumb/overflow-cs6/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/breadcrumb/overflow-cs6" %}

## None

None mode shows all the items on a single line.
