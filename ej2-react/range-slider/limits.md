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

The Slider limits restrict the Slider thumb between a particular range. This is used if higher or lower value affect the process or product where the Slider is being used.

The following are the six options in the slider's limits object. Each API in the limits object is optional.

* [`enabled`](https://ej2.syncfusion.com/react/documentation/api/slider/limitDataModel/#enabled): Enables the limits in the Slider.
* [`minStart`](https://ej2.syncfusion.com/react/documentation/api/slider/limitDataModel/#minstart): Sets the minimum limit for the first handle.
* [`minEnd`](https://ej2.syncfusion.com/react/documentation/api/slider/limitDataModel/#minend): Sets the maximum limit for the first handle.
* [`maxStart`](https://ej2.syncfusion.com/react/documentation/api/slider/limitDataModel/#maxstart): Sets the minimum limit for the second handle.
* [`maxEnd`](https://ej2.syncfusion.com/react/documentation/api/slider/limitDataModel/#maxend): Sets the maximum limit for the second handle.
* [`startHandleFixed`](https://ej2.syncfusion.com/react/documentation/api/slider/limitDataModel/#starthandlefixed): Locks the first handle.
* [`endHandleFixed`](https://ej2.syncfusion.com/react/documentation/api/slider/limitDataModel/#endhandlefixed): Locks the second handle.

## Default and MinRange Slider limits

There is only one handle in the Default and MinRange Slider, so [`minStart`](https://ej2.syncfusion.com/react/documentation/api/slider/limitDataModel/#minstart), [`minEnd`](https://ej2.syncfusion.com/react/documentation/api/slider/limitDataModel/#minend), and [`startHandleFixed`](https://ej2.syncfusion.com/react/documentation/api/slider/limitDataModel/#starthandlefixed) options can be used.
When the limits are enabled in the Slider, the limited area becomes darkened. This allows you to differentiate between the allowed and restricted areas.
Refer to the following snippet to enable the limits in the Slider.

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

In the range slider, both handles can be restricted and locked from the limit's object. In this example, the first handle is limited to between 10 and 40, and the second handle is limited to between 60 and 90.

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

The movement of Slider handles can be locked by enabling the [`startHandleFixed`](https://ej2.syncfusion.com/react/documentation/api/slider/limitDataModel/#starthandlefixed) and [`endHandleFixed`](https://ej2.syncfusion.com/react/documentation/api/slider/limitDataModel/#endhandlefixed) properties in the limits object.
In this example, the movements of both Slider handles have been locked.

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