---
layout: post
title: Animation in React DropDownButton | Syncfusion
description: Animate the React DropDownButton popup with the animationSettings property. Choose None, SlideDown, ZoomIn, or FadeIn for open and close.
control: Animation 
platform: ej2-react
documentation: ug
domainurl: ##DomainURL##
---

# Animation in React DropDownButton

Customize the DropDownButton popup animation using the [`animationSettings`](https://ej2.syncfusion.com/react/documentation/api/drop-down-button/#animationsettings) property. Choose from various animation effects to provide visual feedback when the popup opens and closes.

The following animation effects are supported:

| Effect | Description |
| ------------ | ----------------------- |
| None | No animation; popup appears instantly. |
| SlideDown | Popup slides down smoothly when opening. |
| ZoomIn | Popup zooms in with a scaling effect. |
| FadeIn | Popup fades in gradually when opening. |

The following example demonstrates three DropDownButtons, each with a different animation effect:

{% tabs %}
{% highlight js tabtitle="app.jsx" %}
{% include code-snippet/drop-down-button/animation-cs1/app/app.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="app.tsx" %}
{% include code-snippet/drop-down-button/animation-cs1/app/app.tsx %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/drop-down-button/animation-cs1" %}