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

The **Animation** is used to perform animation effects on HTML elements by running a sequence of frames. It can be used to enhance the user experience.

Syncfusion<sup style="font-size:70%">&reg;</sup> [Animation](https://ej2.syncfusion.com/documentation/api/base/animation/) library supports animating the HTML elements using the [animate](https://ej2.syncfusion.com/documentation/api/base/animation/#animate) method. This method adds the `e-animate`, `e-animation-id` attributes, and CSS style to the HTML element and removes them after the animation effect is completed.

## Animation effects

An animation effect refers to the visual change that occurs over a period of time in HTML elements. The [Animation](https://ej2.syncfusion.com/documentation/api/base/animation/) library supports different types of animation [effects](https://ej2.syncfusion.com/documentation/api/base/effect/#effect). The [name](https://ej2.syncfusion.com/documentation/api/base/animation/#name) property is used to specify the animation effect of an animation.

Here is an example code snippet using the `FadeOut` and `ZoomOut` animation effects:

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

Animation [duration](https://ej2.syncfusion.com/documentation/api/base/animation/#duration) is the animation property that specifies the length of time that an animation should take to complete. The animation duration is specified in milliseconds (ms) and determines the total amount of time that an animation should run.

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

The animation [delay](https://ej2.syncfusion.com/documentation/api/base/animation/#delay) is the animation property that specifies the amount of time to wait before starting an animation. The animation delay is specified in milliseconds (ms) and determines the amount of time that should elapse before an animation begins.

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

Enable or disable animation for all React components globally by using the `setGlobalAnimation` method with one of the below options:

* `GlobalAnimationMode.Enable` - Enables the animation for all components, regardless of the individual component's animation settings.
* `GlobalAnimationMode.Disable` - Disables the animation for all components, regardless of the individual component's animation settings.
* `GlobalAnimationMode.Default` - Animation is enabled or disabled based on the component's animation settings.

In the below code snippet, animation is disabled.

{% tabs %}
{% highlight js tabtitle="~/src/index.js" %}

import { GlobalAnimationMode, setGlobalAnimation } from "@syncfusion/ej2-base";

setGlobalAnimation(GlobalAnimationMode.Disable);

{% endhighlight %}
{% endtabs %}

> `setGlobalAnimation` method controls script-level animations only, and it is not applicable for direct CSS-level animations (animations defined from CSS classes or properties).