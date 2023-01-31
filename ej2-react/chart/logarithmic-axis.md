---
layout: post
title: Logarithmic axis in React Chart component | Syncfusion
description: Learn here all about Logarithmic axis in Syncfusion React Chart component of Syncfusion Essential JS 2 and more.
control: Logarithmic axis 
platform: ej2-react
documentation: ug
domainurl: ##DomainURL##
---

# Logarithmic axis in React Chart component

<!-- markdownlint-disable MD033 -->

Logarithmic axis uses logarithmic scale and it is very useful in visualizing data, when it has numeric values in both lower order of magnitude (eg: 10<sup>-6</sup>) and higher order of magnitude (eg: 10<sup>6</sup>).

To get start quickly with React Logarithmic Axis, you can check out this video:

{% youtube "https://www.youtube.com/watch?v=v7ICR9tdMyI" %}

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/chart/axis/log-cs1/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/chart/axis/log-cs1/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/chart/axis/log-cs1" %}

>Note: To use log axis, we need to inject `Logarithmic` module into the `services` and
set the [`valueType`](https://ej2.syncfusion.com/react/documentation/api/chart/axis/#valuetype) of axis to `Logarithmic`.

## Range

Range of an axis, will be calculated automatically based on the provided data, you can also customize the range of the axis using [`minimum`](https://ej2.syncfusion.com/react/documentation/api/chart/axis/#minimum), [`maximum`](https://ej2.syncfusion.com/react/documentation/api/chart/axis/#maximum) and [`interval`](https://ej2.syncfusion.com/react/documentation/api/chart/axis/#interval) property of the axis.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/chart/axis/log-cs2/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/chart/axis/log-cs2/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/chart/axis/log-cs2" %}

## Logarithmic Base

Logarithmic base can be customized by using the [`logBase`](https://ej2.syncfusion.com/react/documentation/api/chart/axis/#logbase) property of the axis.For example when the logBase is 5, the axis values follows 5<sup>-2</sup>, 5<sup>-1</sup>, 5<sup>0</sup>,5<sup>1</sup>, 5<sup>2</sup> etc.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/chart/axis/log-cs3/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/chart/axis/log-cs3/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/chart/axis/log-cs3" %}

## Logarithmic Interval

Logarithmic axis interval can be customized by using the [`interval`](https://ej2.syncfusion.com/react/documentation/api/chart/axis/#interval) property of the axis. When the logarithmic base is 10 and logarithmic interval is 2, then the axis labels are placed at an interval of 10<sup>2</sup>. The default value of the interval is 1.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/chart/axis/log-cs4/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/chart/axis/log-cs4/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/chart/axis/log-cs4" %}