---
layout: post
title: Show slider from hidden state in React Range slider component | Syncfusion
description: Learn here all about Show slider from hidden state in Syncfusion React Range slider component of Syncfusion Essential JS 2 and more.
control: Show slider from hidden state 
platform: ej2-react
documentation: ug
domainurl: ##DomainURL##
---

# Show slider from hidden state in React Range slider component

This section demonstrates how to render the Slider component in a hidden state and make it visible on button click. We can initialize the Slider in a hidden state by setting its display property to `none`.

In the sample, by clicking the button, we can make the Slider visible from its hidden state, and we must also call the [`refresh`](https://ej2.syncfusion.com/javascript/documentation/api/base/component/#refresh) method of the Slider to render it properly based on its original dimensions.

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
