---
layout: post
title: Change animation settings in React Menu component | Syncfusion
description: Learn here all about Change animation settings in Syncfusion React Menu component of Syncfusion Essential JS 2 and more.
control: Change animation settings 
platform: ej2-react
documentation: ug
domainurl: ##DomainURL##
---

# Change animation settings in React Menu component

To change the animation of the Menu, [`animationSettings`](https://ej2.syncfusion.com/react/documentation/api/menu/menuAnimationSettingsModel/) property is used. The supported effects for Menu are,

| Effect | Functionality |
| ------------ | ----------------------- |
| None | Specifies the sub menu transform with no animation effect. |
| SlideDown | Specifies the sub menu transform with slide down effect. |
| ZoomIn | Specifies the sub menu transform with zoom in effect. |
| FadeIn | Specifies the sub menu transform with fade in effect. |

The following sample illustrates how to open Menu with `FadeIn` [`effect`](https://ej2.syncfusion.com/react/documentation/api/menu/menuAnimationSettingsModel/#effect) with the [`duration`](https://ej2.syncfusion.com/react/documentation/api/menu/menuAnimationSettingsModel/#duration) of `800ms`. Also we can set [`easing`](https://ej2.syncfusion.com/react/documentation/api/menu/menuAnimationSettingsModel/#easing) for menu items.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/menu/getting-started-cs6/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/menu/getting-started-cs6/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/menu/getting-started-cs6" %}
