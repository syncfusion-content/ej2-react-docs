---
layout: post
title: Ticks in React Range Slider component | Syncfusion
description: Learn here all about Ticks in Syncfusion React Range Slider component of Syncfusion Essential JS 2 and more.
control: Ticks 
platform: ej2-react
documentation: ug
domainurl: ##DomainURL##
---

# Ticks in React Range Slider component

Ticks in the Slider help identify the current value or values. The slider supports [`smallStep`](https://ej2.syncfusion.com/react/documentation/api/slider/ticksDataModel/#smallstep) and [`largeStep`](https://ej2.syncfusion.com/react/documentation/api/slider/ticksDataModel/#largestep), with only major tick values displayed by default. Use the [`showSmallTicks`](https://ej2.syncfusion.com/react/documentation/api/slider/ticksDataModel/#showsmallticks) property to enable or disable small ticks.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/slider/getting-started-cs15/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/slider/getting-started-cs15/app/index.tsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.css" %}
{% include code-snippet/slider/getting-started-cs15/index.css %}
{% endhighlight %}
{% highlight ts tabtitle="index.html" %}
{% include code-snippet/slider/getting-started-cs15/index.html %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/slider/getting-started-cs15" %}

## Step

The Slider increases or decreases the value based on the step value. By default, the value changes by 1. Use the [`step`](https://ej2.syncfusion.com/react/documentation/api/slider/#step) property to change the increment step value.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/slider/getting-started-cs16/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/slider/getting-started-cs16/app/index.tsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.css" %}
{% include code-snippet/slider/getting-started-cs16/index.css %}
{% endhighlight %}
{% highlight ts tabtitle="index.html" %}
{% include code-snippet/slider/getting-started-cs16/index.html %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/slider/getting-started-cs16" %}

## Min and Max

Set the minimum and maximum values of the Slider using the [`min`](https://ej2.syncfusion.com/react/documentation/api/slider/#min) and [`max`](https://ej2.syncfusion.com/react/documentation/api/slider/#max) properties. By default, the minimum value is 1 and the maximum value is 100. The following example renders the Slider with minimum value 100 and maximum value 1000.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/slider/getting-started-cs17/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/slider/getting-started-cs17/app/index.tsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.css" %}
{% include code-snippet/slider/getting-started-cs17/index.css %}
{% endhighlight %}
{% highlight ts tabtitle="index.html" %}
{% include code-snippet/slider/getting-started-cs17/index.html %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/slider/getting-started-cs17" %}
