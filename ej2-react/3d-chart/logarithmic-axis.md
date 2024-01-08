---
layout: post
title: Logarithmic axis in React 3D Chart component | Syncfusion
description: Learn here all about logarithmic axis in Syncfusion React 3D Chart component of Syncfusion Essential JS 2 and more.
control: 3D Chart
platform: ej2-react
documentation: ug
domainurl: ##DomainURL##
---

# Logarithmic axis in React 3D Chart control

Logarithmic axis uses logarithmic scale and it is very useful in visualizing data, when it has numerical values in both lower order of magnitude (eg: 10<sup>-6</sup>) and higher order of magnitude (eg: 10<sup>6</sup>).

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/3d-chart/logarithmic-axis/logarithmic-axis-cs1/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/3d-chart/logarithmic-axis/logarithmic-axis-cs1/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/3d-chart/logarithmic-axis/logarithmic-axis-cs1" %}

>Note: To use log axis, we need to inject `Logarithmic3D` module into the services and set the [`valueType`](https://helpej2.syncfusion.com/react/documentation/api/chart3d/axis3DModel/#valuetype) of axis to `Logarithmic`.

## Range

Range of an axis, will be calculated automatically based on the provided data and it can also be customized by using the [`minimum`](https://helpej2.syncfusion.com/react/documentation/api/chart3d/axis3DModel/#minimum), [`maximum`](https://helpej2.syncfusion.com/react/documentation/api/chart3d/axis3DModel/#maximum) and [`interval`](https://helpej2.syncfusion.com/react/documentation/api/chart3d/axis3DModel/#interval) property of the axis.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/3d-chart/logarithmic-axis/logarithmic-axis-cs2/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/3d-chart/logarithmic-axis/logarithmic-axis-cs2/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/3d-chart/logarithmic-axis/logarithmic-axis-cs2" %}

## Logarithmic Base

Logarithmic base can be customized by using the [`logBase`](https://helpej2.syncfusion.com/react/documentation/api/chart3d/axis3DModel/#logbase) property of the axis. For example when the logBase is 5, the axis values follows 5<sup>-2</sup>, 5<sup>-1</sup>, 5<sup>0</sup>, 5<sup>1</sup>, 5<sup>2</sup> etc.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/3d-chart/logarithmic-axis/logarithmic-axis-cs3/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/3d-chart/logarithmic-axis/logarithmic-axis-cs3/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/3d-chart/logarithmic-axis/logarithmic-axis-cs3" %}

## Logarithmic interval

Logarithmic axis interval can be customized by using the [`interval`](https://helpej2.syncfusion.com/react/documentation/api/chart3d/axis3DModel/#interval) property of the axis. When the logarithmic base is 10 and logarithmic interval is 2, then the axis labels are placed at an interval of 10<sup>2</sup>. The default value of the interval is 1.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/3d-chart/logarithmic-axis/logarithmic-axis-cs4/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/3d-chart/logarithmic-axis/logarithmic-axis-cs4/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/3d-chart/logarithmic-axis/logarithmic-axis-cs4" %}