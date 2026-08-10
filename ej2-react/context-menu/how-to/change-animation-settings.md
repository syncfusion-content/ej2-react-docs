---
layout: post
title: How to change animation settings in React | Syncfusion
description: Configure the React Context Menu open and close animation by setting `effect`, `duration`, and `easing` on the `animationSettings` property.
control: Context Menu
platform: ej2-react
documentation: ug
domainurl: ##DomainURL##
---

# How to change animation settings in React

The ContextMenu component provides customizable animation effects through the [`animationSettings`](https://ej2.syncfusion.com/react/documentation/api/context-menu/menuAnimationSettingsModel/) property. This allows you to control how the context menu appears and disappears, enhancing the user experience with smooth visual transitions.

The supported animation effects for ContextMenu are:

| Effect | Functionality |
| ------------ | ----------------------- |
| None | Displays the context menu instantly without any animation effect. |
| SlideDown | Animates the context menu with a sliding motion from top to bottom. |
| ZoomIn | Scales the context menu from small to full size with a zoom effect. |
| FadeIn | Gradually increases the opacity of the context menu from transparent to visible. |

The `animationSettings` property accepts an object with three configurable options: [`effect`](https://ej2.syncfusion.com/react/documentation/api/context-menu/menuAnimationSettingsModel/#effect) (animation type), [`duration`](https://ej2.syncfusion.com/react/documentation/api/context-menu/menuAnimationSettingsModel/#duration) (animation time in milliseconds), and [`easing`](https://ej2.syncfusion.com/react/documentation/api/context-menu/menuAnimationSettingsModel/#easing) (transition timing function). The default settings use SlideDown effect with 400ms duration and ease timing.

The following sample demonstrates how to configure ContextMenu with `FadeIn` effect and a custom `duration` of `800ms`.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/context-menu/getting-started-cs3/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/context-menu/getting-started-cs3/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/context-menu/getting-started-cs3" %}
