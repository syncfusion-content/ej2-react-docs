---
layout: post
title: Customize slider bar in React Range slider component | Syncfusion
description: Learn here all about Customize slider bar in Syncfusion React Range slider component of Syncfusion Essential JS 2 and more.
control: Customize slider bar 
platform: ej2-react
documentation: ug
domainurl: ##DomainURL##
---

# Customize slider bar in React Range slider component

Slider appearance can be customized through CSS. By overriding the slider CSS classes, you can customize the slider bar.
The slider bar can be customized with different themes. By default, slider have class name e-slider-track for bar. The
class can be overridden with our own color values like the following code snippet.

```css
.e-control.e-slider .e-slider-track .e-range {
  background: linear-gradient(left, #e1451d 0, #fdff47 17%, #86f9fe 50%, #2900f8 65%, #6e00f8 74%, #e33df9 83%, #e14423 100%);
}
```

```ts
function change(args: SliderChangeEventArgs) {
  if (args.value > 0 && args.value <= 25) {
      // Change handle and range bar color to green when
      (sliderHandle as HTMLElement).style.backgroundColor = 'green';
      (sliderTrack as HTMLElement).style.backgroundColor = 'green';
  } else if (args.value > 25 && args.value <= 50) {
      // Change handle and range bar color to royal blue
      (sliderHandle as HTMLElement).style.backgroundColor = 'royalblue';
      (sliderTrack as HTMLElement).style.backgroundColor = 'royalblue';
  } else if (args.value > 50 && args.value <= 75) {
      // Change handle and range bar color to dark orange
      (sliderHandle as HTMLElement).style.backgroundColor = 'darkorange';
      (sliderTrack as HTMLElement).style.backgroundColor = 'darkorange';
  } else if (args.value > 75 && args.value <= 100) {
      // Change handle and range bar color to red
      (sliderHandle as HTMLElement).style.backgroundColor = 'red';
      (sliderTrack as HTMLElement).style.backgroundColor = 'red';
  }
}
```

You can also apply background color for a certain range depending upon slider values, using change event.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/slider/bar-cs2/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/slider/bar-cs2/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/slider/bar-cs2" %}
