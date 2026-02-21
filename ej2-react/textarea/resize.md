---
layout: post
title: Resize in React TextArea component | Syncfusion
description: Checkout and learn about Resize in React TextArea component of Syncfusion Essential JS 2 and more details.
control: Resize
platform: ej2-react
documentation: ug
domainurl: ##DomainURL##
---

# Resize in React TextArea Component

The TextArea supports resizing to enhance user experience and accommodate varying content. Configure resizing behavior using the [resizeMode](https://ej2.syncfusion.com/react/documentation/api/textarea/#resizeMode) API, which offers several options:

| Type  | Description |
| -- | -- |
| Vertical  | Allows users to adjust the height of the TextArea vertically. It is suitable when users want to resize the TextArea only along the vertical axis, accommodating varying amounts of text input. |
| Horizontal | Users can adjust the width of the TextArea horizontally. This option is helpful for accommodating longer lines of text without altering the height of the control. |
| Both | Allows users to adjust both the height and width of the TextArea, offering maximum flexibility in resizing. It is ideal for situations where users need precise control over the dimensions of the TextArea. |
| None | Disables the resizing in the TextArea. This option is ideal for situations where maintaining a consistent layout is critical, and resizing by users is unnecessary. |

> In addition to the above options, the `resizeMode` property defaults to `Both`. In this case, the width of the TextArea will not be adjusted automatically. You can still update it manually through the [cols](https://ej2.syncfusion.com/react/documentation/api/textarea/#cols) property or with CSS.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/textarea/resize-cs1/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/textbox/resize-cs1/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/textarea/resize-cs1" %}

## Width of react TextArea component

Customize the TextArea width using the [width](https://ej2.syncfusion.com/react/documentation/api/textarea/#width) property for precise adjustment according to your layout requirements.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/textarea/resize-cs2/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/textbox/resize-cs2/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/textarea/resize-cs2" %}
