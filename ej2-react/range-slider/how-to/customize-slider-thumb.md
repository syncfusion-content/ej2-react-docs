---
layout: post
title: Customize slider thumb in React Range slider component | Syncfusion
description: Learn here all about Customize slider thumb in Syncfusion React Range slider component of Syncfusion Essential JS 2 and more.
control: Customize slider thumb 
platform: ej2-react
documentation: ug
domainurl: ##DomainURL##
---

# Customize slider thumb in React Range slider component

Slider appearance can be customized through CSS. By overriding the slider CSS classes, you can customize the thumb. By default, slider has unique class `e-handle` for slider thumb. You can override the following class as per your requirement.

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

Here, in the sample, the slider thumb has been customized to square, circle, oval shapes, and background image has also been customized.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/slider/thumb-custom-cs2/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/slider/thumb-custom-cs2/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/slider/thumb-custom-cs2" %}
