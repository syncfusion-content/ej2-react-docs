---
layout: post
title: Maximum Length in React TextArea component | Syncfusion
description: Limiting the maximum number of characters in the React TextArea component of Syncfusion Essential JS 2 and more details.
control: Maximum Length
platform: ej2-react
documentation: ug
domainurl: ##DomainURL##
---

# Maximum Length in React TextArea Component

You can enforce a maximum length limit for the text input in the TextArea using the [maxLength](https://ej2.syncfusion.com/react/documentation/api/textarea/#maxLength) property. This property allows to define the maximum number of characters that users can input into the TextArea.


* By setting the `maxLength` property, you can control the length of text input, preventing users from exceeding a specified character limit.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/textarea/max-length-cs1/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/textarea/max-length-cs1/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/textarea/max-length-cs1" %}

When the user reaches the specified limit, the TextArea prevents further input, ensuring compliance with the defined character limit. This feature helps maintain data integrity and provides users with clear feedback on the allowed input length.
