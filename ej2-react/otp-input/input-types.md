---
layout: post
title: Input Types in React OTP Input | Syncfusion
description: Choose the React OTP Input type such as number or text to control which characters are accepted in each verification code field.
platform: ej2-react
control: OTP Input
documentation: ug
domainurl: ##DomainURL##
---

# Input Types in React OTP Input

## Types

This section explains the various OTP (One-Time Password) input types, their default behaviors, and appropriate use cases.

### Number type

Set the [type](https://ej2.syncfusion.com/react/documentation/api/otp-input/#type) property to [number](https://ej2.syncfusion.com/react/documentation/api/otp-input/otpInputType/) to use numeric input. This is ideal for OTP codes containing only digits. The default value is `number`.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/otp-input/input-types/number/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/otp-input/input-types/number/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/otp-input/input-types/number" %}

### Text type

Set the [type](https://ej2.syncfusion.com/react/documentation/api/otp-input/#type) property to [text](https://ej2.syncfusion.com/react/documentation/api/otp-input/otpInputType/) to use text input. This is suitable when the OTP includes both letters and numbers.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/otp-input/input-types/text/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/otp-input/input-types/text/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/otp-input/input-types/text" %}

### Password type

Set the [type](https://ej2.syncfusion.com/react/documentation/api/otp-input/#type) property to [password](https://ej2.syncfusion.com/react/documentation/api/otp-input/otpInputType/) to mask the OTP values for security purposes.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/otp-input/input-types/password/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/otp-input/input-types/password/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/otp-input/input-types/password" %}

## Value

You can specify the value of React OTP Input by using the [value](https://ej2.syncfusion.com/react/documentation/api/otp-input/#value) property.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/otp-input/input-types/value/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/otp-input/input-types/value/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/otp-input/input-types/value" %}
