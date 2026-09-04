---
layout: post
title: Maximum Length in React TextBox | Syncfusion
description: Cap the React TextBox input length by setting the maxLength property to prevent users from entering more than N characters.
control: Maximum Length
platform: ej2-react
documentation: ug
domainurl: ##DomainURL##
---

# Maximum Length in React TextBox

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

When the user reaches the specified limit, the React TextBox prevents further input, ensuring compliance with the defined character limit. This feature helps maintain data integrity and provides users with clear feedback on the allowed input length.
