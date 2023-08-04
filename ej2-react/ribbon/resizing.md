---
layout: post
title: Resizing in React Ribbon component | Syncfusion
description:  Checkout and learn about Resizing in Syncfusion React Ribbon component of Syncfusion Essential JS 2 and more.
control: Ribbon
platform: ej2-react
documentation: ug
domainurl: ##DomainURL##
---

# Ribbon Resizing

The Ribbon effectively resizes the ribbon elements while being resized. It extends when the ribbon size is increased and collapses when the ribbon size is decreased. The resizing can be performed in both the classic and simplified modes. Also, we have an option to resize the ribbon elements in the custom order.

In classic mode on resizing, the items size will be changed based on the available width of the tab content from the order of Large-> Medium-> Small and viceversa.

In simplified mode on resizing, the items size will be changed based on the available width of the tab content from the order of Medium-> Small and viceversa.

## Defining items allowed size

You can use the [allowedSizes](https://ej2.syncfusion.com/react/documentation/api/ribbon/ribbonItem/#allowedsizes) property to maintain a constant size for an item. If `allowedSizes` is set, it keeps the size constant even when being resized.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/ribbon/AllowedSize/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/ribbon/AllowedSize/app/index.tsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.css" %}
{% include code-snippet/ribbon/AllowedSize/index.css %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/ribbon/AllowedSize" %}


## Defining items active size

You can use the [activeSize](https://ej2.syncfusion.com/react/documentation/api/ribbon/ribbonItem/#activesize) property to define the item size intially, before it is being resized. When resized the `activeSize` property is updated based on the ribbon's overflow state, which is determined by the `allowedSizes` property being configured. By default, the value is `Medium`.