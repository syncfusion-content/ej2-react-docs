---
layout: post
title: Customize slider ticks label in React Range slider component | Syncfusion
description: Learn here all about Customize slider ticks label in Syncfusion React Range slider component of Syncfusion Essential JS 2 and more.
control: Customize slider ticks label 
platform: ej2-react
documentation: ug
domainurl: ##DomainURL##
---

# Customize slider ticks label in React Range slider component

Slider view can be customized via CSS. By overriding the slider CSS classes, you can customize the ticks. The ticks in slider allows you to easily identify the current value/values of the slider. It contains [`smallStep`](https://ej2.syncfusion.com/documentation/slider/api-ticksData.html?lang=typescript#smallstep) and [`largeStep`](https://ej2.syncfusion.com/documentation/slider/api-ticksData.html?lang=typescript#largestep). By default, slider has class `e-tick` for slider ticks. You can override the class as per your requirement. Refer to the following code snippet to render ticks.

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

Here, the color for rendered ticks has been applied through nth-child(`child_number`). The color is applied to the value of the `child_number` in the slider.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/slider/ticks-custom-cs2/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/slider/ticks-custom-cs2/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/slider/ticks-custom-cs2" %}
