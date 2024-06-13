---
layout: post
title: Events in React OTP Input component | Syncfusion
description: Learn here all about Events in Syncfusion React OTP Input component of Syncfusion Essential JS 2 and more.
platform: ej2-react
control: OTP Input 
documentation: ug
domainurl: ##DomainURL##
---

# Events in React OTP Input component

This section describes the OTP Input events that will be triggered when appropriate actions are performed. The following events are available in the OTP Input component.

## created

The OTP Input component triggers the [created](https://ej2.syncfusion.com/react/documentation/api/otp-input/#created) event when the component rendering is completed.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/otp-input/events/created/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/otp-input/events/created/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

## focus 

The OTP Input component triggers the [focus](https://ej2.syncfusion.com/react/documentation/api/otp-input/#focus) event when the OTP Input is focused. The [OtpFocusEventArgs](https://ej2.syncfusion.com/react/documentation/api/otp-input/otpFocusEventArgs/) passed as an event argument provides the details of the focus event.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/otp-input/events/focus/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/otp-input/events/focus/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

## blur

The OTP Input component triggers the [blur](https://ej2.syncfusion.com/react/documentation/api/otp-input/#blur) event when the OTP input is focused out. The [OtpFocusEventArgs](https://ej2.syncfusion.com/react/documentation/api/otp-input/otpFocusEventArgs/) passed as an event argument provides the details of the blur event.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/otp-input/events/blur/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/otp-input/events/blur/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

## input

The OTP Input component triggers the [input](https://ej2.syncfusion.com/react/documentation/api/otp-input/#input) event when the value of each OTP Input is changed. The [OtpInputEventArgs](https://ej2.syncfusion.com/react/documentation/api/otp-input/otpInputEventArgs/) passed as an event argument provides the details of the each value is changed.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/otp-input/events/input/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/otp-input/events/input/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

## valueChanged

The OTP Input control triggers the [valueChanged](https://ej2.syncfusion.com/react/documentation/api/otp-input/#valuechanged) event when the value of the OTP Input is changed and matching the OTP Input length. The [OtpChangedEventArgs](https://ej2.syncfusion.com/react/documentation/api/otp-input/otpChangedEventArgs/) passed as an event argument provides the details when value is changed.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/otp-input/events/valueChanged/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/otp-input/events/valueChanged/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

Below example demonstrates the valueChanged event of the OTP Input control.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/otp-input/events/valueChangedEvent/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/otp-input/events/valueChangedEvent/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/otp-input/events/valueChangedEvent" %}
