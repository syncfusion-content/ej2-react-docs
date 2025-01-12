---
layout: post
title: Ticks in React Range slider component | Syncfusion
description: Learn here all about Ticks in Syncfusion React Range slider component of Syncfusion Essential JS 2 and more.
control: Ticks 
platform: ej2-react
documentation: ug
domainurl: ##DomainURL##
---

# Ticks in React Range slider component

The Ticks in Slider help you to easily identify the current value/values of the Slider. It includes [`smallStep`](https://ej2.syncfusion.com/react/documentation/api/slider/ticksDataModel/#smallstep) and [`largeStep`](https://ej2.syncfusion.com/react/documentation/api/slider/ticksDataModel/#largestep). The value of the major ticks alone will be displayed in the slider. To enable or disable the small ticks, use the [`showSmallTicks`](https://ej2.syncfusion.com/react/documentation/api/slider/ticksDataModel/#showsmallticks) property.

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

When the Slider is moved, it increases or decreases the value based on the step value. By default, the value changes by 1. Use the [`step`](https://ej2.syncfusion.com/react/documentation/api/slider/#step) property to change the increment step value.

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

Sets the minimum (starting) and maximum (ending) values of the Slider, by using the [`min`](https://ej2.syncfusion.com/react/documentation/api/slider/#min) and [`max`](https://ej2.syncfusion.com/react/documentation/api/slider/#max) property. By default, the minimum value is 1 and the maximum value is 100. In the following example, the slider is rendered with the min value as 100 and max value as 1000.

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
