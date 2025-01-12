---
layout: post
title: Reversible Range Slider in React Range Slider component | Syncfusion
description: Learn here all about Reversible Range Slider in Syncfusion React Range Slider component of Syncfusion Essential JS 2 and more.
control: Reversible Range Slider 
platform: ej2-react
documentation: ug
domainurl: ##DomainURL##
---

# Reversible Range Slider in React

You can create a Range Slider with values in reverse order by setting the [min](https://ej2.syncfusion.com/react/documentation/api/slider/#min) property to the maximum value and the [max](https://ej2.syncfusion.com/react/documentation/api/slider/#max) property to the minimum value. An example of how to achieve a reversible Range Slider is shown below.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/slider/getting-started-cs13/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/slider/getting-started-cs13/app/index.tsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.css" %}
{% include code-snippet/slider/getting-started-cs13/index.css %}
{% endhighlight %}
{% highlight ts tabtitle="index.html" %}
{% include code-snippet/slider/getting-started-cs13/index.html %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/slider/getting-started-cs13" %}


> Reversible order can also be achieved with a [Horizontal](https://helpej2.syncfusion.com/react/documentation/api/slider/sliderOrientation/) orientation Slider by setting [enableRtl](https://ej2.syncfusion.com/react/documentation/api/slider/#enablertl) to true.