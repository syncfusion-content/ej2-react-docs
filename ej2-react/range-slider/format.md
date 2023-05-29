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

The `format` feature used to customize the units of Slider values to desired format. The formatted values will also be applied to the ARIA attributes of the slider. There are two ways of achieving formatting in slider.

* Use the `format` API of slider which utilizes our `Internationalization` to format values.

* Customize using the events namely `renderingTicks` and `tooltipChange`.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/slider/getting-started-cs2/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/slider/getting-started-cs2/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/slider/getting-started-cs2" %}

## Using format API

In this method, we have different predefined formatting styles like Numeric (N), Percentage (P), Currency (C) and `#` specifiers. In this below example we have formatted the `ticks` and `tooltip` values into percentage.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/slider/getting-started-cs3/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/slider/getting-started-cs3/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/slider/getting-started-cs3" %}

## Using Events

In this method, we will be retrieving the values from the slider events then process them to desired formatted the values.
In this sample we have customized the `ticks` values into weekdays as one formatting and `tooltip` values into day of the week as another formatting.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/slider/getting-started-cs4/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/slider/getting-started-cs4/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/slider/getting-started-cs4" %}
