---
layout: post
title: Revealing Hidden Slider in React Range Slider component | Syncfusion
description: Learn here all about Show Slider from hidden state in Syncfusion React Range Slider component of Syncfusion Essential JS 2 and more.
control: Show Slider from hidden state 
platform: ej2-react
documentation: ug
domainurl: ##DomainURL##
---

# Show Slider from hidden state in React Range Slider component

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
