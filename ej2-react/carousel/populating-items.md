---
layout: post
title: Populating items in React Carousel component | Syncfusion
description: Learn here all about Populating items in Syncfusion React Carousel component of Syncfusion Essential JS 2 and more.
control: Populating items 
platform: ej2-react
documentation: ug
domainurl: ##DomainURL##
---

# Populating items in React Carousel component

In the Carousel, slides can be rendered in two ways as follows,

* Populating items using carousel item.
* Populating Items using data source.

## Populating items using carousel item

When rendering the Carousel component using items binding, you can assign templates for each item separately or assign a common template to each item. You can also customize the slide transition interval for each item separately. The following example code depicts the functionality as item property binding.

Each `CarouselItemDirective` supports the following key properties from [`CarouselItemModel`](https://ej2.syncfusion.com/react/documentation/api/carousel/carouselitemmodel):

* [`template`](https://ej2.syncfusion.com/react/documentation/api/carousel/carouselitemmodel#template) — Accepts a string or a function that returns the HTML content or React template to be rendered as the slide content. This allows each slide to have a unique layout, image, or custom markup independently of other slides.

* [`interval`](https://ej2.syncfusion.com/react/documentation/api/carousel/carouselitemmodel#interval) — Specifies the duration (in milliseconds) for which a particular slide remains visible before automatically transitioning to the next slide. When set on individual items, it overrides the global `interval` property of the Carousel component, enabling different auto-play durations per slide.

* [`cssClass`](https://ej2.syncfusion.com/react/documentation/api/carousel/carouselitemmodel#cssclass) — Accepts single or multiple CSS class names (separated by a space) used to customize the appearance of an individual carousel item independently of the others.

* [`htmlAttributes`](https://ej2.syncfusion.com/react/documentation/api/carousel/carouselitemmodel#htmlattributes) — Accepts HTML or custom attributes as a key-value pair to be added to an individual carousel item, allowing further customization of the rendered slide element.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/carousel/default-cs14/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/carousel/default-cs14/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/carousel/default-cs14" %}

## Populating Items using data source

When rendering the Carousel component using data binding, you can assign a common template only for all items using the [`itemTemplate`](https://ej2.syncfusion.com/react/documentation/api/carousel/index-default#itemtemplate) property. You cannot set the interval for each item. The following example code depicts the functionality as data binding.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/carousel/default-cs15/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/carousel/default-cs15/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/carousel/default-cs15" %}

## Selection

The Carousel items will be populated from the first index of the Carousel items and can be customized using the following ways,

* Select an item using the property.
* Select an item using the method.

### Select an item using the property

Using the [`selectedIndex`](https://ej2.syncfusion.com/react/documentation/api/carousel/index-default#selectedindex) property of the Carousel component, you can set the slide to be populated at the time of initial rendering else you can switch to the particular slide item.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/carousel/default-cs16/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/carousel/default-cs16/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/carousel/default-cs16" %}

### Select an item using the method

Using the [`prev`](https://ej2.syncfusion.com/react/documentation/api/carousel/index-default#prev) or [`next`](https://ej2.syncfusion.com/react/documentation/api/carousel/index-default#next) public method of the Carousel component, you can switch the current populating slide to a previous or next slide.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/carousel/default-cs17/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/carousel/default-cs17/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/carousel/default-cs17" %}

## Partial visible slides

The Carousel component supports to show one complete slide and a partial view of adjacent (previous and next) slides at the same time. You can enable or disable the partial slides using the [`partialVisible`](https://ej2.syncfusion.com/react/documentation/api/carousel/index-default#partialvisible) property.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/carousel/partial-visible-cs1/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/carousel/partial-visible-cs1/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/carousel/partial-visible-cs1" %}

> Slide animation only applicable if the `partialVisible` is enabled.

The last slide will be displayed as a partial slide at the initial rendering when the [`loop`](https://ej2.syncfusion.com/react/documentation/api/carousel/index-default#loop) and [`partialVisible`](https://ej2.syncfusion.com/react/documentation/api/carousel/index-default#partialvisible) properties are enabled.

The previous slide is not displayed at the initial rendering when the `loop` is disabled.

The following example code depicts the functionality of `partialVisible` and without `loop` functionalities.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/carousel/partial-visible-cs2/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/carousel/partial-visible-cs2/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/carousel/partial-visible-cs2" %}

## See Also

* [Customizing partial slides area size](https://ej2.syncfusion.com/react/documentation/carousel/styles-and-appearance#customizing-partial-slides-size)