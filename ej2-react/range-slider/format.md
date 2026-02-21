---
layout: post
title: Format in React Range Slider component | Syncfusion
description: Learn here all about Format in Syncfusion React Range Slider component of Syncfusion Essential JS 2 and more.
control: Format 
platform: ej2-react
documentation: ug
domainurl: ##DomainURL##
---

# Format in React Range Slider component

The [`format`](https://ej2.syncfusion.com/react/documentation/api/slider/ticksDataModel/#format) feature customizes the units of Slider values to your desired format. Formatted values are also applied to the ARIA attributes. There are two ways to achieve formatting:

* Use the [`format`](https://ej2.syncfusion.com/react/documentation/api/slider/ticksDataModel/#format) API, which uses our `Internationalization` feature to format values.

* Customize using the [`renderingTicks`](https://ej2.syncfusion.com/react/documentation/api/slider/#renderingticks) and [`tooltipChange`](https://ej2.syncfusion.com/react/documentation/api/slider/#tooltipchange) events.

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

This method provides predefined formatting styles such as Numeric (N), Percentage (P), Currency (C), and `#` specifiers. The following example formats the [`ticks`](https://ej2.syncfusion.com/react/documentation/api/slider/#ticks) and [`tooltip`](https://ej2.syncfusion.com/react/documentation/api/slider/#tooltip) values as percentages.

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

In this method, we retrieve the values from the Slider events then process them to the desired formatted values.
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
