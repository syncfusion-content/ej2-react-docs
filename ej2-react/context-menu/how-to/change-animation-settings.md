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

The ContextMenu component provides customizable animation effects through the [`animationSettings`](https://ej2.syncfusion.com/react/documentation/api/context-menu/menuanimationsettingsmodel) property. This allows you to control how the ContextMenu appears and disappears, enhancing the user experience with smooth visual transitions. The same `animationSettings` value is applied to both the root menu and any submenu popups.

The supported animation effects for the ContextMenu are:

| Effect | Description |
| ------------ | ----------------------- |
| None | No animation; the Context Menu appears instantly. |
| SlideDown | Animates the Context Menu with a sliding motion from top to bottom. |
| ZoomIn | Scales the Context Menu from small to full size with a zoom effect. |
| FadeIn | Gradually increases the opacity of the Context Menu from transparent to visible. |

The `animationSettings` property accepts an object with three configurable options: [`effect`](https://ej2.syncfusion.com/react/documentation/api/context-menu/menuanimationsettingsmodel#effect) (animation type), [`duration`](https://ej2.syncfusion.com/react/documentation/api/context-menu/menuanimationsettingsmodel#duration) (animation time in milliseconds), and [`easing`](https://ej2.syncfusion.com/react/documentation/api/context-menu/menuanimationsettingsmodel#easing) (transition timing function). The default settings use SlideDown effect with 400ms duration and ease timing.

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
