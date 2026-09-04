---
layout: post
title: Animation in React Stepper | Syncfusion
description: Animate the step-to-step transition in the Syncfusion React Stepper by configuring `duration` and `delay` on the `animation` property.
control: Stepper
platform: ej2-react
documentation: ug
domainurl: ##DomainURL##
---

# Animation in React Stepper

The React Stepper progress state can be animated, smoothly transitioning from one step to another. You can customize the animation's `duration` and `delay` by using the [animation](https://ej2.syncfusion.com/react/documentation/api/stepper/#animation) property.

You can disable the animation by setting the [enable](https://ej2.syncfusion.com/react/documentation/api/stepper/animationModel/#enable) property to `false`. By default, the value is `true`.

| Fields | Type | Description |
|------|------|-------------|
| [duration](https://ej2.syncfusion.com/react/documentation/api/stepper/animationModel/#duration) | `number` | Specifies the duration of the animated transition for each step. The default value is `2000` milliseconds. |
| [delay](https://ej2.syncfusion.com/react/documentation/api/stepper/animationModel/#delay) | `number` | Specifies the delay to initiate the animated transition for each step in milliseconds. The default value is `0`. |

The example demonstrates the animation `duration` and `delay` settings for the Stepper.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/stepper/animation/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/stepper/animation/app/index.tsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.css" %}
{% include code-snippet/stepper/animation/index.css %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/stepper/animation" %}
