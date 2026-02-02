---
layout: post
title: Animation in React Common control | Syncfusion
description: Learn how to use the Animation utility in Syncfusion React components to create element transition effects, control timing, and configure global animation settings.
control: common
platform: ej2-react
documentation: ug
domainurl: ##DomainURL##
---

# Animation in React

The Animation utility creates smooth visual transitions for HTML elements by applying CSS-based animation effects over time, enhancing the user experience and interface responsiveness.

The Syncfusion<sup style="font-size:70%">&reg;</sup> [Animation](https://ej2.syncfusion.com/documentation/api/base/animation/) library enables animating HTML elements through the [animate](https://ej2.syncfusion.com/documentation/api/base/animation/#animate) method. This method applies the `e-animate` and `e-animation-id` attributes, along with the necessary CSS styles, to the target element during the animation and automatically removes them when the animation completes.

## Animation effects

Animation effects are visual transitions applied to HTML elements over a specified duration. The [Animation](https://ej2.syncfusion.com/documentation/api/base/animation/) library provides several built-in animation [effects](https://ej2.syncfusion.com/documentation/api/base/effect/#effect), selectable via the [name](https://ej2.syncfusion.com/documentation/api/base/animation/#name) property. Available effects include `FadeIn`, `FadeOut`, `FadeZoomIn`, `FadeZoomOut`, `FlipLeftDownIn`, `FlipLeftDownOut`, `FlipLeftUpIn`, `FlipLeftUpOut`, `FlipRightDownIn`, `FlipRightDownOut`, `FlipRightUpIn`, `FlipRightUpOut`, `FlipXDownIn`, `FlipXDownOut`, `FlipXUpIn`, `FlipXUpOut`, `FlipYLeftIn`, `FlipYLeftOut`, `FlipYRightIn`, `FlipYRightOut`, `SlideBottomIn`, `SlideBottomOut`, `SlideDownIn`, `SlideDownOut`, `SlideLeftIn`, `SlideLeftOut`, `SlideRightIn`, `SlideRightOut`, `SlideTopIn`, `SlideTopOut`, `SlideUpIn`, `SlideUpOut`, `ZoomIn`, `ZoomOut`, and `None`.

The following code snippets demonstrate the `FadeOut` and `ZoomOut` animation effects:

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/common/animation-multiple-cs1/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/common/animation-multiple-cs1/app/index.tsx %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/common/animation-multiple-cs1/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/common/animation-multiple-cs1" %}

## Animation duration

Animation [duration](https://ej2.syncfusion.com/documentation/api/base/animation/#duration) defines the total time, in milliseconds (ms), that an animation effect takes to complete from start to finish. Adjusting the duration controls the animation speed: shorter durations produce faster animations, while longer durations produce slower, more gradual animations. The default duration is `400` milliseconds.

The example below demonstrates an animation duration of `5000` milliseconds:

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/common/animation-multiple-cs2/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/common/animation-multiple-cs2/app/index.tsx %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/common/animation-multiple-cs2/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/common/animation-multiple-cs2" %}

## Animation delay

The animation [delay](https://ej2.syncfusion.com/documentation/api/base/animation/#delay) property specifies the time, in milliseconds (ms), to wait before an animation begins execution. Delay is particularly useful for coordinating sequential animations, creating staggered effects, or triggering animations after specific user interactions. The default delay is `0` milliseconds.

The example below demonstrates an animation delay of `2000` milliseconds:

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/common/animation-multiple-cs3/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/common/animation-multiple-cs3/app/index.tsx %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/common/animation-multiple-cs3/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/common/animation-multiple-cs3" %}

## Enable or disable animation globally

Animations can be enabled or disabled globally for all Syncfusion React components using the `setGlobalAnimation` method with one of the following modes:

* `GlobalAnimationMode.Enable` — Enables animations for all components, overriding individual component animation settings.
* `GlobalAnimationMode.Disable` — Disables animations for all components, overriding individual component animation settings.
* `GlobalAnimationMode.Default` — Uses each component's own animation configuration without global override.

The example below demonstrates globally disabling animations. This should be called in the application entry point (such as `index.js` or `App.js`) before components are initialized:

{% tabs %}
{% highlight js tabtitle="~/src/index.js" %}

import { GlobalAnimationMode, setGlobalAnimation } from "@syncfusion/ej2-base";

setGlobalAnimation(GlobalAnimationMode.Disable);

{% endhighlight %}
{% endtabs %}

> The `setGlobalAnimation` method controls JavaScript-based animations initiated through component APIs and the Animation library. It does not affect animations defined purely through CSS classes, stylesheets, or CSS property-based animations applied directly to elements.