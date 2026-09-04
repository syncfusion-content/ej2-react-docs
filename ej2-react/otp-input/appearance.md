---
layout: post
title: Appearance in React OTP Input | Syncfusion
description: Customize the React OTP Input field count, size, and visual style with the length property and CSS for input and label elements.
platform: ej2-react
control: OTP Input 
documentation: ug
domainurl: ##DomainURL##
---

# Appearance in React OTP Input

You can also customize the appearance of React OTP Input component.

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

You can disable the React OTP Input by using the [disabled](https://ej2.syncfusion.com/react/documentation/api/otp-input/#disabled) property. The default value is `false`.

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

You can customize the React OTP Input appearance (colors, fonts, sizes, or other visual aspects) using the [cssClass](https://ej2.syncfusion.com/react/documentation/api/otp-input/#cssclass) property.

The React OTP Input component supports the following predefined CSS classes. You can apply these by setting the `cssClass` property to one of the following class names:

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
