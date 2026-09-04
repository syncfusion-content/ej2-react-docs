---
layout: post
title: Animations and Transitions in React Carousel | Syncfusion
description: Switch between built-in Slide and Fade animations, apply custom CSS effects, and set per-slide interval durations in the Syncfusion React Carousel.
control: Animations and transitions 
platform: ej2-react
documentation: ug
domainurl: ##DomainURL##
---

# Animations and Transitions in React Carousel

## Animations

### Fade animation

In React Carousel, two built-in animations are provided for slide transitions. You can disable animation using the [`animationEffect`](https://ej2.syncfusion.com/react/documentation/api/carousel/index-default#animationeffect) property. By default, Slide animation is applied for the transition between slides.

The following demo depicts the example for fade animation.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/carousel/default-cs1/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/carousel/default-cs1/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/carousel/default-cs1" %}

### Custom animation

In React Carousel, you can use customized animation effects for slide transitions using the [`Custom`](https://ej2.syncfusion.com/react/documentation/api/carousel/carouselanimationeffect) option of the [`animationEffect`](https://ej2.syncfusion.com/react/documentation/api/carousel/index-default#animationEffect) property and apply custom animation css via [`cssClass`](https://ej2.syncfusion.com/react/documentation/api/carousel/index-default#cssClass) property.

The following demo depicts the example for `parallax` custom animation.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/carousel/custom-animation-cs1/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/carousel/custom-animation-cs1/app/index.tsx %}
{% endhighlight %}
{% highlight css tabtitle="index.css" %}
{% include code-snippet/carousel/custom-animation-cs1/index.css %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/carousel/custom-animation-cs1" %}

## Intervals between slides

Using the [`interval`](https://ej2.syncfusion.com/react/documentation/api/carousel/carouselitemmodel#interval) property of each React Carousel item, different intervals can be set for each item to transition between slides. The default interval is `5000 ms` (5 seconds).

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/carousel/default-cs2/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/carousel/default-cs2/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/carousel/default-cs2" %}

N> Interval property can accept value in terms of milliseconds.

## Auto play slides

In the React Carousel, all slides transitions are performed continuously after the specified or default intervals. You can enable or disable the auto slide transition using the [`autoPlay`](https://ej2.syncfusion.com/react/documentation/api/carousel/index-default#autoplay) property. The following example depicts the code to enable or disable the auto slide transitions.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/carousel/default-cs3/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/carousel/default-cs3/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/carousel/default-cs3" %}

## Pause on hover

By default, Slide transitions are paused when hovering the mouse pointer over the React Carousel element. You can enable or disable this functionality using the [`pauseOnHover`](https://ej2.syncfusion.com/react/documentation/api/carousel/index-default#pauseonhover) property.

The following example depicts the code to play the slides when hovering the mouse pointer over the React Carousel element.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/carousel/default-cs4/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/carousel/default-cs4/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/carousel/default-cs4" %}

## Looping slides

In the React Carousel, slides transitions are repeated continuously when you reach the last slide by default. You can enable or disable the infinite slide transition using the [`loop`](https://ej2.syncfusion.com/react/documentation/api/carousel/index-default#loop) property. The following example depicts the code to enable or disable the infinite slide transitions.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/carousel/default-cs5/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/carousel/default-cs5/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/carousel/default-cs5" %}

## Slide changing events

Using the [`slideChanging`](https://ej2.syncfusion.com/react/documentation/api/carousel/index-default#slidechanging) or [`slideChanged`](https://ej2.syncfusion.com/react/documentation/api/carousel/index-default#slidechanged) events of the React Carousel component, you can perform sample end customization while the React Carousel items are switched.

The following demo depicts the example for React Carousel events.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/carousel/default-cs6/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/carousel/default-cs6/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/carousel/default-cs6" %}

## Disable touch swiping

In the React Carousel, you can swipe the React Carousel slides using touch actions by default. The swipe action can be enabled or disabled using the [`enableTouchSwipe`](https://ej2.syncfusion.com/react/documentation/api/carousel/index-default#enabletouchswipe) property. The following example depicts the code to disable the swipe action for the slide.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/carousel/default-cs7/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/carousel/default-cs7/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/carousel/default-cs7" %}

## Swipe Modes

In the React Carousel, the [`swipeMode`](https://ej2.syncfusion.com/react/documentation/api/carousel/index-default#swipemode) property allows specifying whether the slide transition should occur while performing swiping via touch or mouse. The slide swiping is enabled or disabled using the bitwise operator.

The following are the different swipe modes available in the React Carousel:

* `CarouselSwipeMode.Touch` - Allows the user to slide the slides using touch actions.
* `CarouselSwipeMode.Mouse` - Allows the user to slide the slides using mouse actions.
* `CarouselSwipeMode.Touch & CarouselSwipeMode.Mouse` - Allows the user to slide the slides using both touch and mouse actions.
* `~CarouselSwipeMode.Touch & ~CarouselSwipeMode.Mouse` - Disables both touch and mouse actions.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/carousel/swipe-cs1/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/carousel/swipe-cs1/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/carousel/swipe-cs1" %}
