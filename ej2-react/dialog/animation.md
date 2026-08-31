---
layout: post
title: Animation in React Dialog | Syncfusion
description: Animate React Dialog open and close transitions with configurable delay, duration, and 16 built-in effects such as Fade, Zoom, Flip, and Slide.
control: Animation 
platform: ej2-react
documentation: ug
domainurl: ##DomainURL##
---

# Animation in React Dialog

The Dialog can be animated during the open and close actions. Animation properties such as [`delay`](https://ej2.syncfusion.com/react/documentation/api/dialog/animationSettings#delay), [`duration`](https://ej2.syncfusion.com/react/documentation/api/dialog/animationSettings#duration), and [`effect`](https://ej2.syncfusion.com/react/documentation/api/dialog/animationSettings#effect) can be customized using the [animationSettings](https://ej2.syncfusion.com/react/documentation/api/dialog#animationsettings) property.

> A single `effect` value governs both the open and close transitions; you cannot set separate effects for open and close. Each effect maps to an `In` variant on open and an `Out` variant on close (for example, `Fade` → `FadeIn` on open, `FadeOut` on close).

## Animation properties

| Property | Default value | Description |
|------|------|------|
| delay | 0 | The delay (in milliseconds) before the animation begins. |
| duration | 400 | The duration (in milliseconds) of one animation cycle. |
| effect | 'Fade' | Specifies the animation effect for the Dialog's open and close actions. |

## Supported effects

The following effects are supported by the `effect` property:

`Fade` | `FadeZoom` | `FlipLeftDown` | `FlipLeftUp` | `FlipRightDown` | `FlipRightUp` | `FlipXDown` | `FlipXUp` | `FlipYLeft` | `FlipYRight` | `SlideBottom` | `SlideLeft` | `SlideRight` | `SlideTop` | `Zoom` | `None`

Setting `effect` to 'None' disables the animation. For example, if the user sets 'Fade' effect, then the Dialog will open with 'FadeIn' effect and close with 'FadeOut' effect.

## Example

In the following sample, the `Zoom` effect is enabled. The Dialog will open with `ZoomIn` and close with `ZoomOut` effects.

`[Class-component]`

{% tabs %}
{% highlight js tabtitle="app.jsx" %}
{% include code-snippet/dialog/getting-started-cs3/app/App.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="app.tsx" %}
{% include code-snippet/dialog/getting-started-cs3/app/App.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/dialog/getting-started-cs3" %}

`[Functional-component]`

{% tabs %}
{% highlight js tabtitle="app.jsx" %}
{% include code-snippet/dialog/getting-started-cs4/app/App.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="app.tsx" %}
{% include code-snippet/dialog/getting-started-cs4/app/App.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/dialog/getting-started-cs4" %}

## See Also

* [Style and Appearance in React Dialog](./style)
* [Template in React Dialog](./template)
* [Dialog API Reference](https://ej2.syncfusion.com/react/documentation/api/dialog)