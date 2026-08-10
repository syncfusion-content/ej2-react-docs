---
layout: post
title: How to customize the Slider limits in React Slider | Syncfusion
description: Style the React Slider limit bar by overriding the e-limits CSS class to highlight a restricted sub-range within the slider.
control: Customize Slider limits 
platform: ej2-react
documentation: ug
domainurl: ##DomainURL##
---

# How to customize the Slider limits in React Slider

The Slider appearance can be customized using CSS by overriding Slider CSS classes. By default, the Slider uses the `e-limits` class for the limit bar. You can override this class with custom color values as shown below:

```css
.e-slider-container.e-horizontal .e-limits {
  background-color: rgba(69, 100, 233, 0.46);
}
```

In this example, the limit bar is customized with a different background color.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/slider/limits-custom-cs2/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/slider/limits-custom-cs2/app/index.tsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.css" %}
{% include code-snippet/slider/limits-custom-cs2/index.css %}
{% endhighlight %}
{% highlight ts tabtitle="index.html" %}
{% include code-snippet/slider/limits-custom-cs2/index.html %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/slider/limits-custom-cs2" %}
