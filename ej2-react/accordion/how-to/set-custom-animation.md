---
layout: post
title: How to set custom animation in React Accordion | Syncfusion
description: Configure expand and collapse animations for the Syncfusion React Accordion with custom easing, duration, and effects.
control: Set custom animation 
platform: ej2-react
documentation: ug
domainurl: ##DomainURL##
---

# How to set custom animation in React Accordion

Accordion supports custom animations for both expand and collapse actions from the provided animation option of `Animation` library.  The [`animation`](https://ej2.syncfusion.com/react/documentation/api/accordion#animation) property also allows you to set [`easing`](https://ej2.syncfusion.com/react/documentation/api/accordion/accordionActionSettingsModel#easing), [`duration`](https://ej2.syncfusion.com/react/documentation/api/accordion/accordionActionSettingsModel#duration), and various other effects of your choice.

Default animation is given as `SlideDown` for expanding the panel using [`expand`](https://ej2.syncfusion.com/react/documentation/api/accordion/accordionAnimationSettingsModel#expand) animation property and `SlideUp` for collapsing the panel using [`collapse`](https://ej2.syncfusion.com/react/documentation/api/accordion/accordionAnimationSettingsModel#collapse) animation property. You can also disable the animation by setting animation [`effect`](https://ej2.syncfusion.com/react/documentation/api/accordion/accordionActionSettingsModel#effect) as `none`.

The sample demonstrates some types of animation that suits for Accordion. You can check all the animation effects here.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/accordion/accordion-custom-cs1/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/accordion/accordion-custom-cs1/app/index.tsx %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/accordion/accordion-custom-cs1/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/accordion/accordion-custom-cs1" %}
