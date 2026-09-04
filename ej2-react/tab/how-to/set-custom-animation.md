---
layout: post
title: How to set custom animation in Tab in React | Syncfusion
description: Configure the show and hide animation of the Syncfusion React Tab content by setting animation previous and next effects.
control: Set custom animation 
platform: ej2-react
documentation: ug
domainurl: ##DomainURL##
---

# How to set custom animation in Tab in React

Tab supports custom animations for both previous and next actions from the provided animation option of `Animation` library. The [`animation`](https://ej2.syncfusion.com/react/documentation/api/tab#animation) property also allows you to set [`easing`](https://ej2.syncfusion.com/react/documentation/api/tab/tabActionSettings#easing), [`duration`](https://ej2.syncfusion.com/react/documentation/api/tab/tabActionSettings#duration), and various other [`effect`](https://ej2.syncfusion.com/react/documentation/api/tab/tabActionSettings#effect).

Default animation is given as `SlideLeftIn` for both the [`previous`](https://ej2.syncfusion.com/react/documentation/api/tab/tabAnimationSettingsModel#previous) and [`next`](https://ej2.syncfusion.com/react/documentation/api/tab/tabAnimationSettingsModel#next) React tab animation. You can disable the animation by setting the animation effect to `None`. Also, use the following CSS to disable the indicator animation when the animation effect is set to `None`.

```css

.e-tab .e-tab-header:not(.e-vertical) .e-indicator, .e-tab .e-tab-header.e-vertical .e-indicator {
    transition: none;
}

```

The sample demonstrates some types of animation that suits React Tab. You can check all the animation effects here.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/tab/persistence-cs1/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/tab/persistence-cs1/app/index.tsx %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/tab/persistence-cs1/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/tab/persistence-cs1" %}