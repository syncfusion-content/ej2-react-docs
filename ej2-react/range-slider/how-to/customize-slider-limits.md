---
layout: post
title: Customize Slider limits in React Range Slider component | Syncfusion
description: Learn here all about Customize Slider limits in Syncfusion React Range Slider component of Syncfusion Essential JS 2 and more.
control: Customize Slider limits 
platform: ej2-react
documentation: ug
domainurl: ##DomainURL##
---

# Customize Slider limits in React Range Slider component

The Slider appearance can be customized using CSS. You can customize the Slider limit bar by overriding the Slider CSS classes.

   ```css
    .e-slider-container.e-horizontal .e-limits {
    background-color: rgba(69, 100, 233, 0.46);
   }
  ```

In this example, the limit bar is customized with a different background color. By default, the Slider uses the class `e-limits` for the limit bar.
You can override this class with your own color values as shown in the following example.

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
