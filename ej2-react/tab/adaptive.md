---
layout: post
title: Responsive Modes in React Tab | Syncfusion
description: Switch the Syncfusion React Tab header layout between Scrollable, Popup, and None based on container width with the overflowMode property.
control: Adaptive 
platform: ej2-react
documentation: ug
domainurl: ##DomainURL##
---

# Responsive Modes in React Tab

The following section explains about rendering React Tab when its width exceeds the viewable area or particularly in a given [`width`](https://ej2.syncfusion.com/react/documentation/api/tab#width).
The available modes are as follows:

* Scrollable
* Popup

## Scrollable

The default overflow mode is Scrollable. Scrollable display mode supports displaying the React Tab header items in a single line with horizontal scrolling enabled, when the item overflows to the available space.

* The right and left navigation arrows are added at the start and end of the React Tab header through which the user can navigate towards overflowed items of the React Tab header.
* You can also see the overflowed items using touch and swipe actions on the header and content section.
* By default, the navigation icon in the left direction is disabled; you can see the overflowed items by moving in the right direction.
* By clicking the arrow or by holding the arrow continuously, you can see the overflowed items.

![Scrollable React tab](images/tabscroll.gif)

* In devices the navigation icons are not available. You can touch and swipe to see the overflowed items of the React Tab header.

![Touch scroll](images/touchscroll.gif)

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/tab/adaptive-scroll-cs2/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/tab/adaptive-scroll-cs2/app/index.tsx %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/tab/adaptive-scroll-cs2/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/tab/adaptive-scroll-cs2" %}

## Popup

The Popup is another type of [`overflowMode`](https://ej2.syncfusion.com/react/documentation/api/tab#overflowmode) in which the React Tab container holds the items that can be placed within the available space. The remaining overflowing items, for which there is no space to fit within the viewing area, are moved to the overflow popup container.

* The items placed in popup can be viewed by opening the popup with the help of drop-down icon given at the end of the React Tab header.

* If the popup height exceeds the height of the visible area, you can scroll through the popup items and select one.

![Tab with popup](images/popup.gif)

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/tab/adaptive-scroll-cs3/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/tab/adaptive-scroll-cs3/app/index.tsx %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/tab/adaptive-scroll-cs3/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/tab/adaptive-scroll-cs3" %}

## See Also

* [How to prevent content swipe selection](./how-to/prevent-content-swipe-selection)
* [Collapsible React Tab](./how-to/create-collapsible-tabs)