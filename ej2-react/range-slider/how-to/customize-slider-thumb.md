---
layout: post
title: Customize Slider thumb in React Range Slider component | Syncfusion
description: Learn here all about Customize Slider thumb in Syncfusion React Range Slider component of Syncfusion Essential JS 2 and more.
control: Customize Slider thumb 
platform: ej2-react
documentation: ug
domainurl: ##DomainURL##
---

# Customize Slider thumb in React Range Slider component

The Slider appearance can be customized using CSS. By overriding the Slider CSS classes, you can customize the thumb's appearance. By default, the Slider has a unique class `e-handle` for the Slider thumb. You can override the following class as per your requirement.

```css
.e-control.e-slider .e-handle {
    background-image: url('https://ej2.syncfusion.com/demos/src/slider/images/thumb.png');
    background-color: transparent;
    height: 25px;
    width: 25px;
}
#square_slider.e-control.e-slider .e-handle {
    border-radius: 0%;
    background-color: #f9920b;
    border: 0;
}
#circle_slider.e-control.e-slider .e-handle {
    border-radius: 50%;
    background-color: #f9920b;
    border: 0;
}
#oval_slider.e-control.e-slider .e-handle {
    height: 25px;
    width: 8px;
    top: 3px;
    border-radius: 15px;
    background-color: #f9920b;
}
```

In this example, the Slider thumb has been customized to square, circle, and oval shapes. Additionally, a custom background image has been applied to one of the sliders.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/slider/thumb-custom-cs2/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/slider/thumb-custom-cs2/app/index.tsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.css" %}
{% include code-snippet/slider/thumb-custom-cs2/index.css %}
{% endhighlight %}
{% highlight ts tabtitle="index.html" %}
{% include code-snippet/slider/thumb-custom-cs2/index.html %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/slider/thumb-custom-cs2" %}
