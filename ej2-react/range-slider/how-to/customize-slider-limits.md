---
layout: post
title: Customize slider limits in React Range slider component | Syncfusion
description: Learn here all about Customize slider limits in Syncfusion React Range slider component of Syncfusion Essential JS 2 and more.
control: Customize slider limits 
platform: ej2-react
documentation: ug
domainurl: ##DomainURL##
---

# Customize slider limits in React Range slider component

Slider appearance can be customized via CSS. By overriding the slider CSS classes, the slider limit bar can be customized.

   ```css
    .e-slider-container.e-horizontal .e-limits {
    background-color: rgba(69, 100, 233, 0.46);
   }
  ```

Here, the limit bar is customized with different background color. By default, the slider has class `e-limits` for limits bar.
You can override the class with our own color values as given in the following code snippet.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/slider/limits-custom-cs2/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/slider/limits-custom-cs2/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/slider/limits-custom-cs2" %}
