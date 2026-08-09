---
layout: post
title: How to show Slider from hidden state in React Slider | Syncfusion
description: Reveal a hidden React Slider on button click by toggling display and calling the refresh method to recompute its layout.
control: Show Slider from hidden state 
platform: ej2-react
documentation: ug
domainurl: ##DomainURL##
---

# How to show Slider from hidden state in React Slider

This section demonstrates how to render the Slider component in a hidden state and make it visible on button click. You can initialize the Slider in a hidden state by setting its display property to `none`.

When you click the button, the Slider becomes visible. You must also call the [`refresh`](https://ej2.syncfusion.com/javascript/documentation/api/base/component/#refresh) method to render it properly based on its original dimensions.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/slider/hidden-slider-cs1/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/slider/hidden-slider-cs1/app/index.tsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.css" %}
{% include code-snippet/slider/hidden-slider-cs1/index.css %}
{% endhighlight %}
{% highlight ts tabtitle="index.html" %}
{% include code-snippet/slider/hidden-slider-cs1/index.html %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/slider/hidden-slider-cs1" %}
