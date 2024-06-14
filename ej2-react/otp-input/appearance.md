---
layout: post
title: Appearance in React OTP Input component | Syncfusion
description: Learn here all about Appearance in Syncfusion React OTP Input component of Syncfusion Essential JS 2 and more.
platform: ej2-react
control: OTP Input 
documentation: ug
domainurl: ##DomainURL##
---

# Appearance in React OTP Input component

You can also customize the appearance of OTP Input component.

## Setting input length

You can specify the length of OTP by using the [length](https://ej2.syncfusion.com/react/documentation/api/otp-input/#length) property. The default value is `4`.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/otp-input/appearance/length/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/otp-input/appearance/length/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/otp-input/appearance/length" %}

## Disable inputs

You can disable the OTP Input control by using the [disabled](https://ej2.syncfusion.com/react/documentation/api/otp-input/#disabled) property. By default the value is `false`.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/otp-input/appearance/disabled/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/otp-input/appearance/disabled/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/otp-input/appearance/disabled" %}

## CssClass

You can customize the appearance of the OTP Input component, such as by changing its colors, fonts, sizes or other visual aspects by using the [cssClass](https://ej2.syncfusion.com/react/documentation/api/otp-input/#cssclass) property.

The OTP input component supports the following predefined styles that can be defined using the `cssClass` property. You can customize by replacing the `cssClass` property with the below defined class names.

| cssClass | Description |
| -------- | -------- |
| `e-success` | Used to represent a positive action. |
| `e-warning` | Used to represent an action with caution. |
| `e-error` | Used to represent a negative action. |

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/otp-input/appearance/cssClass/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/otp-input/appearance/cssClass/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/otp-input/appearance/cssClass" %}
