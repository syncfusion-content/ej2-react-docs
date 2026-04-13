---
layout: post
title: Animation in React Tooltip component | Syncfusion
description: Learn here all about Animation in Syncfusion React Tooltip component of Syncfusion Essential JS 2 and more.
control: Animation 
platform: ej2-react
documentation: ug
domainurl: ##DomainURL##
---

# Animation in React Tooltip component

The Tooltip can be animated using specific animation effects controlled through the [`animation`](https://ej2.syncfusion.com/react/documentation/api/tooltip/#animation) property.

The animation property also allows you to set delay, duration, and various other effects of your choice.

The [`AnimationModel`](https://ej2.syncfusion.com/react/documentation/api/tooltip/animationModel/) is derived from the base model to apply the chosen animation effect, duration, and other properties to Tooltips.

By default, Tooltip entrance occurs over 150 ms using the `ease-out` timing function. It exits also at 150 ms, but uses `ease-in` timing function.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/tooltip/animation-cs1/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/tooltip/animation-cs1/app/index.tsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.css" %}
{% include code-snippet/tooltip/animation-cs1/index.css %}
{% endhighlight %}
{% highlight ts tabtitle="index.html" %}
{% include code-snippet/tooltip/animation-cs1/index.html %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/tooltip/animation-cs1" %}

The default animation effect for the Tooltip is set to `FadeIn` for its open action, and `FadeOut` for its close action.
The default `duration` is set to 150 ms and `delay` is set to 0.

## Animation effects

The following animation effects are available for Tooltips:

* FadeIn
* FadeOut
* FadeZoomIn
* FadeZoomOut
* FlipXDownIn
* FlipXDownOut
* FlipXUpIn
* FlipXUpOut
* FlipYLeftIn
* FlipYLeftOut
* FlipYRightIn
* FlipYRightOut
* ZoomIn
* ZoomOut
* None

When the `effect` is specified as `none`, no effect will be applied to the Tooltip, and animation is considered to be set to `off`.

> Some of the above animation effects suit the Tooltip better when its tip pointer is hidden.
> This can be achieved by setting the [`showTipPointer`](https://ej2.syncfusion.com/react/documentation/api/tooltip/#showtippointer) to false.

## Animating via open/close methods

Animations can also be applied on Tooltips dynamically through [`open`](https://ej2.syncfusion.com/react/documentation/api/tooltip/#open) and [`close`](https://ej2.syncfusion.com/react/documentation/api/tooltip/#close) methods. These methods accept the animation model as an optional parameter. If you pass [`TooltipAnimationSettings`](https://ej2.syncfusion.com/react/documentation/api/tooltip/tooltipAnimationSettings/), the animation uses this model; otherwise, it uses the values from the [`animation`](https://ej2.syncfusion.com/react/documentation/api/tooltip/#animation) property. It is also possible to apply different animations to Tooltips for each target element.

Refer to the code snippet below to apply animations using public methods.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/tooltip/effects-cs1/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/tooltip/effects-cs1/app/index.tsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.css" %}
{% include code-snippet/tooltip/effects-cs1/index.css %}
{% endhighlight %}
{% highlight ts tabtitle="index.html" %}
{% include code-snippet/tooltip/effects-cs1/index.html %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/tooltip/effects-cs1" %}

## Apply transition

A transition effect can be applied to Tooltips by using the [`beforeRender`](https://ej2.syncfusion.com/react/documentation/api/tooltip/#beforerender) event, as demonstrated in the following code example.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/tooltip/transition-cs1/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/tooltip/transition-cs1/app/index.tsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.css" %}
{% include code-snippet/tooltip/transition-cs1/index.css %}
{% endhighlight %}
{% highlight ts tabtitle="index.html" %}
{% include code-snippet/tooltip/transition-cs1/index.html %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/tooltip/transition-cs1" %}
