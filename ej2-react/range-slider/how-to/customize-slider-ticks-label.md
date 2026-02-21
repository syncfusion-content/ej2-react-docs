---
layout: post
title: Customize ticks label in React Range Slider component | Syncfusion
description: Learn here all about Customize Slider ticks label in Syncfusion React Range Slider component of Syncfusion Essential JS 2 and more.
control: Customize Slider ticks label 
platform: ej2-react
documentation: ug
domainurl: ##DomainURL##
---

# Customize Slider ticks label in React Range Slider component

The Slider ticks can be customized using CSS by overriding Slider CSS classes. Ticks help identify the current value(s) of the Slider and include [`smallStep`](https://ej2.syncfusion.com/documentation/slider/api-ticksData.html?lang=typescript/#smallstep) and [`largeStep`](https://ej2.syncfusion.com/documentation/slider/api-ticksData.html?lang=typescript/#largestep). By default, the Slider uses the `e-tick` class. You can override this class as needed to render customized ticks.

```css
.e-scale .e-tick.e-custom::before {
    content: '\e967';
    position: absolute;
}
```

```css
#ticks_slider .e-scale :nth-child(1)::before {
    color: red;
}
```

Here, the color for rendered ticks is applied using the nth-child(`child_number`). The color is applied to the tick corresponding to the `child_number` in the slider.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/slider/ticks-custom-cs2/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/slider/ticks-custom-cs2/app/index.tsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.css" %}
{% include code-snippet/slider/ticks-custom-cs2/index.css %}
{% endhighlight %}
{% highlight ts tabtitle="index.html" %}
{% include code-snippet/slider/ticks-custom-cs2/index.html %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/slider/ticks-custom-cs2" %}
