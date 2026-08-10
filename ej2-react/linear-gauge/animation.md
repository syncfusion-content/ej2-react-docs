---
layout: post
title: Animation in React Linear Gauge | Syncfusion
description: Animate the React Linear Gauge elements sequentially, including axis, ticks, labels, ranges, pointers, and annotations, using animationDuration.
control: Linear Gauge 
platform: ej2-react
documentation: ug
domainurl: ##DomainURL##
---

# Animation in React Linear Gauge

All of the elements in the Linear Gauge, such as the axis lines, ticks, labels, ranges, pointers, and annotations, can be animated sequentially by using the [animationDuration](https://ej2.syncfusion.com/react/documentation/api/linear-gauge#animationduration) property. The animation for the Linear Gauge is enabled when the `animationDuration` property is set to an appropriate value in milliseconds, providing a smooth rendering effect for the component. If the `animationDuration` property is set to **0**, which is the default value, the animation effect is disabled. If the animation is enabled, the component will behave in the following order.

1. The axis line, ticks, labels, and ranges will all be animated at the same time.
2. If available, pointers will be animated in the same way as [pointer animation](https://ej2.syncfusion.com/react/documentation/linear-gauge/pointers#pointer-animation).
3. If available, annotations will be animated.

The animation of the Linear Gauge is demonstrated in the following example.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/linear-gauge/code-path/animation-cs1/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/linear-gauge/code-path/animation-cs1/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/linear-gauge/animation-cs1" %}

> Only the pointer of the Linear Gauge can be animated individually, not the axis lines, ticks, labels, ranges, and annotations. You can refer this [link](https://ej2.syncfusion.com/react/documentation/linear-gauge/pointers#pointer-animation) to enable only pointer animation.