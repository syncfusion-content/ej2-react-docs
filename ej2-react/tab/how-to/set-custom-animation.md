---
layout: post
title: Set custom animation in React Tab component | Syncfusion
description: Learn here all about Set custom animation in Syncfusion React Tab component of Syncfusion Essential JS 2 and more.
control: Set custom animation 
platform: ej2-react
documentation: ug
domainurl: ##DomainURL##
---

# Set custom animation in React Tab component

Tab supports custom animations for both previous and next actions from the provided animation option of `Animation` library. The [`animation`](https://ej2.syncfusion.com/react/documentation/api/tab#animation) property also allows you to set [`easing`](https://ej2.syncfusion.com/react/documentation/api/tab/tabActionSettings#easing), [`duration`](https://ej2.syncfusion.com/react/documentation/api/tab/tabActionSettings#duration), and various other [`effect`](https://ej2.syncfusion.com/react/documentation/api/tab/tabActionSettings#effect).

Default animation is given as `SlideLeftIn` for [`previous`](https://ej2.syncfusion.com/react/documentation/api/tab/tabAnimationSettingsModel#previous) tab animation and `SlideRightIn` for [`next`](https://ej2.syncfusion.com/react/documentation/api/tab/tabAnimationSettingsModel#next) tab animation. You can also disable the animation by setting the animation effect as `None`. Also, please use the following CSS to disable indicator animation for animation effect as `None`.

```css

.e-tab .e-tab-header:not(.e-vertical) .e-indicator, .e-tab .e-tab-header.e-vertical .e-indicator {
    transition: none;
}

```

The sample demonstrates some types of animation that suits Tab. You can check all the animation effects here.

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