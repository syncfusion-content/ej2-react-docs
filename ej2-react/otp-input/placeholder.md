---
layout: post
title: Placeholder in React OTP Input | Syncfusion
description: Display a placeholder hint character in each React OTP Input field until the user enters a value to guide the expected format.
platform: ej2-react
control: OTP Input
documentation: ug
domainurl: ##DomainURL##
---

# Placeholder in React OTP Input

The placeholder in OTP Input displays text as a hint until the user enters a value. It provides guidance regarding the expected input format or purpose.

You can set the placeholder text using the [placeholder](https://ej2.syncfusion.com/react/documentation/api/otp-input/#placeholder) property. When providing a single character, all OTP input fields display that same character.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/otp-input/placeholder/placeholder_char/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/otp-input/placeholder/placeholder_char/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/otp-input/placeholder/placeholder_char" %}

When multiple placeholder characters are provided, each OTP input field displays characters from the placeholder string sequentially based on the OTP length.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/otp-input/placeholder/placeholder_string/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/otp-input/placeholder/placeholder_string/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/otp-input/placeholder/placeholder_string" %}
