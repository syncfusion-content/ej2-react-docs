---
layout: post
title: Placeholder in React OTP Input component | Syncfusion
description:  Checkout and learn about Placeholder with React OTP Input component of Syncfusion Essential JS 2 and more.
platform: ej2-react
control: OTP Input
documentation: ug
domainurl: ##DomainURL##
---

# Placeholder in React OTP Input component

The placeholder in OTP Input specifies the text that is shown as a hint or placeholder until the user enters a value in the input field. It acts as a guidance for the users regarding the expected input format or purpose of the input field.

You can set the placeholder text by using the [placeholder](https://ej2.syncfusion.com/react/documentation/api/otp-input/#placeholder) property. Additionally, when providing a single character as the placeholder value all input fields within the OTP Input component will display the same character.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/otp-input/placeholder/placeholder_char/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/otp-input/placeholder/placeholder_char/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/otp-input/placeholder/placeholder_char" %}

When a placeholder with multiple placeholder characters is provided each input field will display characters from the placeholder string in sequence based on the available OTP input length.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/otp-input/placeholder/placeholder_string/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/otp-input/placeholder/placeholder_string/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/otp-input/placeholder/placeholder_string" %}
