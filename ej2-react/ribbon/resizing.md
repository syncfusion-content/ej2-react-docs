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

The Ribbon effectively resizes the ribbon elements while being resized. It extends when the ribbon size is increased and collapses when the ribbon size is decreased. The resizing can be performed in both the classic and simplified modes.

By default, the ribbon elements are resized based on the group size with larger groups collapsing first, later the medium and small sized items.

## Defining items allowed size

The [allowedSizes](https://ej2.syncfusion.com/react/documentation/api/ribbon/ribbonItemModel/#allowedsizes) property is used to maintain a constant size for an item when being resized. You can limit an items size by specifying its `allowedSizes` which keeps the size constant even when the Ribbon is being resized.

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

The [activeSize](https://ej2.syncfusion.com/react/documentation/api/ribbon/ribbonItemModel/#activesize) read-only property is used to set the size of the item which is displayed intially before it is being resized.

> On resizing, the items size will be changed based on the available width of the tab content from the order of Large-> Medium-> Small and viceversa.