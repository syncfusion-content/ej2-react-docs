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

* Populating items using carousel item
* Populating Items using data source

## Populating items using carousel item

When rendering the Carousel component using items binding, you can assign templates for each item separately or assign a common template to each item. You can also customize the slide transition interval for each item separately. The following example code depicts the functionality as item property binding.

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

When rendering the Carousel component using data binding, you can assign a common template only for all items using the [`itemTemplate`](https://ej2.syncfusion.com/react/documentation/api/carousel/#itemtemplate) property. You cannot set the interval for each item. The following example code depicts the functionality as data binding.

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

Using the [`selectedIndex`](https://ej2.syncfusion.com/react/documentation/api/carousel/#selectedindex) property of the Carousel component, you can set the slide to be populated at the time of initial rendering else you can switch to the particular slide item.

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

Using the [`prev`](https://ej2.syncfusion.com/react/documentation/api/carousel/#prev) or [`next`](https://ej2.syncfusion.com/react/documentation/api/carousel/#next) public method of the Carousel component, you can switch the current populating slide to a previous or next slide.

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

The Carousel component supports to show one complete slide and a partial view of adjacent (previous and next) slides at the same time. You can enable or disable the partial slides using the [`partialVisible`](https://ej2.syncfusion.com/react/documentation/api/carousel/#partialVisible) property.

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

The last slide will be displayed as a partial slide at the initial rendering when the [`loop`](https://ej2.syncfusion.com/react/documentation/api/carousel/#loop) and [`partialVisible`](https://ej2.syncfusion.com/react/documentation/api/carousel/#partialVisible) properties are enabled.

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

* [Customizing partial slides area size](./styles-and-appearance/#customizing-partial-slides-size)