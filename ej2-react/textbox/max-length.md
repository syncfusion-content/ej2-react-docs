---
layout: post
title: Maximum Length in React TextBox component | Syncfusion
description: Limiting the maximum number of characters in the React TextBox component of Syncfusion Essential JS 2 and more details.
control: Maximum Length
platform: ej2-react
documentation: ug
domainurl: ##DomainURL##
---

# Maximum Length in React TextBox Component

Enforce a maximum length limit using the `maxLength` property, which defines the maximum number of characters users can input. By setting this property, you control text length and prevent users from exceeding the specified limit.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/textbox/max-length-cs1/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/textbox/max-length-cs1/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/textbox/max-length-cs1" %}

When the user reaches the specified limit, the TextBox prevents further input, ensuring compliance with the defined character limit. This feature helps maintain data integrity and provides users with clear feedback on the allowed input length.
