---
layout: post
title: Animation in React Common control | Syncfusion
description: Learn here all about Animation in Syncfusion React Common control of Syncfusion Essential JS 2 and more.
control: common
platform: ej2-react
documentation: ug
domainurl: ##DomainURL##
---

# Animation

The **Animation** is used to perform animation effects on HTML elements by running a sequence of frames.

Syncfusion Essential JS2 library supports animating the HTML elements using the [animate](https://ej2.syncfusion.com/documentation/api/base/animation/#animate) method. This method adds the `e-animate`, `e-animation-id` attributes, and CSS style to the HTML element and removes them after the animation effect is completed. 

## Animation effects

The `Animation` library supports different types of [effects](https://ej2.syncfusion.com/documentation/api/base/effect/#effect). The [name](https://ej2.syncfusion.com/documentation/api/base/animationModel/#name) property of the `AnimationModel` is used to set the animation effect. Here is an example code snippet using the `FadeOut` and `ZoomOut` animation effects:

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

> To know more about the types of animation effects, refer to the [animation effects](https://ej2.syncfusion.com/documentation/api/base/effect/#effect) section.

## Animation duration

The [duration](https://ej2.syncfusion.com/documentation/api/base/animation/#duration) property of the `Animation` class is used to set the duration of the animation effect. Here is an example code snippet using the animation effects with the duration of `5000` milliseconds:

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

The [delay](https://ej2.syncfusion.com/documentation/api/base/animation/#delay) property of the `Animation` class is used to delay the start of the animation effect. Here is an example code snippet using the animation effects with the delay of `2000` milliseconds:

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