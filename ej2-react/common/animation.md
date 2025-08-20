---
layout: post
title: Animation in React Common control | Syncfusion
description: Learn here all about Animation in Syncfusion React Common control of Syncfusion Essential JS 2 and more.
control: common
platform: ej2-react
documentation: ug
domainurl: ##DomainURL##
---

# Animation in React

The **Animation** utility is designed to produce animation effects on HTML elements by rendering sequences of frames, enhancing the overall user experience.

The Syncfusion<sup style="font-size:70%">&reg;</sup> [Animation](https://ej2.syncfusion.com/documentation/api/base/animation/) library supports animating HTML elements through the [animate](https://ej2.syncfusion.com/documentation/api/base/animation/#animate) method. This method applies the `e-animate` and `e-animation-id` attributes, along with relevant CSS styles, to the HTML element during the animation and removes them upon completion of the effect.

## Animation effects

Animation effects refer to the visual transitions applied to HTML elements over a set duration, contributing to dynamic and engaging interfaces. The [Animation](https://ej2.syncfusion.com/documentation/api/base/animation/) library offers a range of animation [effects](https://ej2.syncfusion.com/documentation/api/base/effect/#effect), which can be specified using the [name](https://ej2.syncfusion.com/documentation/api/base/animation/#name) property.

The following code snippets demonstrate use of the `FadeOut` and `ZoomOut` animation effects:

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

Animation [duration](https://ej2.syncfusion.com/documentation/api/base/animation/#duration) defines the total time, in milliseconds (ms), that an animation effect takes to complete. This property determines the pacing of visual transitions and allows for adjustment to achieve desired animation speeds.

For example, if an animation has a duration of 2 seconds, it will take 2 seconds to complete from start to finish. The duration of an animation affects the overall pace of the animation and can be adjusted to match the desired speed and style of the animation.

The value of the animation duration can be adjusted to change the speed of the animation, with shorter durations resulting in faster animations and longer durations resulting in slower animations.

Here is an example code snippet using the animation effects with a duration of `5000` milliseconds:

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

The animation [delay](https://ej2.syncfusion.com/documentation/api/base/animation/#delay) property specifies the length of time, in milliseconds (ms), to wait before an animation begins. This setting enables designers to coordinate complex animation sequences or trigger animations after specific user interactions.

For example, if an animation has a delay of 2 seconds, it will wait for 2 seconds before starting. This can be useful in creating more complex animations, where multiple elements are animated in sequence, or in creating animations that start only after a user interaction has taken place.

Here is an example code snippet using the animation effects with a delay of `2000` milliseconds:

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

Animations can be enabled or disabled globally for all React components using the `setGlobalAnimation` method with any of the following modes:

* `GlobalAnimationMode.Enable` — Enables animations for all components, regardless of individual settings.
* `GlobalAnimationMode.Disable` — Disables animations for all components, regardless of individual settings.
* `GlobalAnimationMode.Default` — Uses each component’s own animation configuration.

Below, animation is globally disabled:

{% tabs %}
{% highlight js tabtitle="~/src/index.js" %}

import { GlobalAnimationMode, setGlobalAnimation } from "@syncfusion/ej2-base";

setGlobalAnimation(GlobalAnimationMode.Disable);

{% endhighlight %}
{% endtabs %}

> `setGlobalAnimation` method controls script-level animations only, and it is not applicable for direct CSS-level animations (animations defined from CSS classes or properties).