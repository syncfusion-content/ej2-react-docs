---
layout: post
title: Format in React Range slider component | Syncfusion
description: Learn here all about Format in Syncfusion React Range slider component of Syncfusion Essential JS 2 and more.
control: Format 
platform: ej2-react
documentation: ug
domainurl: ##DomainURL##
---

# Format in React Range slider component

The [`format`](https://ej2.syncfusion.com/react/documentation/api/slider/ticksDataModel/#format) feature is used to customize the units of Slider values to desired format. The formatted values will also be applied to the ARIA attributes of the slider. There are two ways to achieve formatting in the slider.

* Use the [`format`](https://ej2.syncfusion.com/react/documentation/api/slider/ticksDataModel/#format) API of the slider which utilizes our `Internationalization` to format values.

* Customize using events namely [`renderingTicks`](https://ej2.syncfusion.com/react/documentation/api/slider/#renderingticks) and [`tooltipChange`](https://ej2.syncfusion.com/react/documentation/api/slider/#tooltipchange).

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/slider/getting-started-cs2/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/slider/getting-started-cs2/app/index.tsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.css" %}
{% include code-snippet/slider/getting-started-cs2/index.css %}
{% endhighlight %}
{% highlight ts tabtitle="index.html" %}
{% include code-snippet/slider/getting-started-cs2/index.html %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/slider/getting-started-cs2" %}

## Using format API

In this method, we have different predefined formatting styles like Numeric (N), Percentage (P), Currency (C) and `#` specifiers. In the example below, we have formatted the [`ticks`](https://ej2.syncfusion.com/react/documentation/api/slider/#ticks) and [`tooltip`](https://ej2.syncfusion.com/react/documentation/api/slider/#tooltip) values into percentage.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/slider/getting-started-cs3/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/slider/getting-started-cs3/app/index.tsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.css" %}
{% include code-snippet/slider/getting-started-cs3/index.css %}
{% endhighlight %}
{% highlight ts tabtitle="index.html" %}
{% include code-snippet/slider/getting-started-cs3/index.html %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/slider/getting-started-cs3" %}

## Using Events

In this method, we retrieve the values from the slider events then process them to the desired formatted values.
In this sample, we have customized the [`ticks`](https://ej2.syncfusion.com/react/documentation/api/slider/#ticks) values into weekdays as one formatting and [`tooltip`](https://ej2.syncfusion.com/react/documentation/api/slider/#tooltip) values into day of the week as another formatting.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/slider/getting-started-cs4/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/slider/getting-started-cs4/app/index.tsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.css" %}
{% include code-snippet/slider/getting-started-cs4/index.css %}
{% endhighlight %}
{% highlight ts tabtitle="index.html" %}
{% include code-snippet/slider/getting-started-cs4/index.html %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/slider/getting-started-cs4" %}
