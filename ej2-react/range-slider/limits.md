---
layout: post
title: Limits in React Range Slider component | Syncfusion
description: Learn here all about Limits in Syncfusion React Range Slider component of Syncfusion Essential JS 2 and more.
control: Limits 
platform: ej2-react
documentation: ug
domainurl: ##DomainURL##
---

# Limits in React Range Slider component

Slider limits restrict the thumb movement within a specific range. This is useful when higher or lower values could affect the process or product using the Slider.

The following are the options available in the Slider's limits object. Each option is optional.

* [`enabled`](https://ej2.syncfusion.com/react/documentation/api/slider/limitDataModel/#enabled): Enables the limits in the Slider.
* [`minStart`](https://ej2.syncfusion.com/react/documentation/api/slider/limitDataModel/#minstart): Sets the minimum limit for the first handle.
* [`minEnd`](https://ej2.syncfusion.com/react/documentation/api/slider/limitDataModel/#minend): Sets the maximum limit for the first handle.
* [`maxStart`](https://ej2.syncfusion.com/react/documentation/api/slider/limitDataModel/#maxstart): Sets the minimum limit for the second handle.
* [`maxEnd`](https://ej2.syncfusion.com/react/documentation/api/slider/limitDataModel/#maxend): Sets the maximum limit for the second handle.
* [`startHandleFixed`](https://ej2.syncfusion.com/react/documentation/api/slider/limitDataModel/#starthandlefixed): Locks the first handle.
* [`endHandleFixed`](https://ej2.syncfusion.com/react/documentation/api/slider/limitDataModel/#endhandlefixed): Locks the second handle.

## Default and MinRange Slider limits

The Default and MinRange Slider has a single handle, so you can use [`minStart`](https://ej2.syncfusion.com/react/documentation/api/slider/limitDataModel/#minstart), [`minEnd`](https://ej2.syncfusion.com/react/documentation/api/slider/limitDataModel/#minend), and [`startHandleFixed`](https://ej2.syncfusion.com/react/documentation/api/slider/limitDataModel/#starthandlefixed) options.
When limits are enabled, the restricted area appears darkened, allowing you to clearly distinguish between allowed and restricted ranges.
The following snippet shows how to enable limits in the Slider.

```ts

    ......

    limits: { enabled: true, minStart: 10, minEnd: 40 }

    ......

```

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/slider/limits-cs1/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/slider/limits-cs1/app/index.tsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.css" %}
{% include code-snippet/slider/limits-cs1/index.css %}
{% endhighlight %}
{% highlight ts tabtitle="index.html" %}
{% include code-snippet/slider/limits-cs1/index.html %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/slider/limits-cs1" %}

## Range Slider limits

In the Range Slider, both handles can be restricted and locked using the limits object. The following example limits the first handle between 10 and 40, and the second handle between 60 and 90.

```ts

    ......

    limits: { enabled: true, minStart: 10, minEnd: 40, maxStart: 60, maxEnd: 90 }

    ......

```

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/slider/limits-cs2/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/slider/limits-cs2/app/index.tsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.css" %}
{% include code-snippet/slider/limits-cs2/index.css %}
{% endhighlight %}
{% highlight ts tabtitle="index.html" %}
{% include code-snippet/slider/limits-cs2/index.html %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/slider/limits-cs2" %}

## Handle lock

Lock Slider handle movement by enabling the [`startHandleFixed`](https://ej2.syncfusion.com/react/documentation/api/slider/limitDataModel/#starthandlefixed) and [`endHandleFixed`](https://ej2.syncfusion.com/react/documentation/api/slider/limitDataModel/#endhandlefixed) properties in the limits object.
The following example locks both Slider handles in place.

```ts

    ......

    limits: { enabled: true, startHandleFixed: true, endHandleFixed: true }

    ......

```

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/slider/limits-cs3/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/slider/limits-cs3/app/index.tsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.css" %}
{% include code-snippet/slider/limits-cs3/index.css %}
{% endhighlight %}
{% highlight ts tabtitle="index.html" %}
{% include code-snippet/slider/limits-cs3/index.html %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/slider/limits-cs3" %}