---
layout: post
title: Footer in React Chat UI component | Syncfusion
description:  Checkout and learn about Footer with React Chat UI component of Syncfusion Essential JS 2 and more details.
platform: ej2-react
control: Chat UI
documentation: ug
domainurl: ##DomainURL##
---

# Footer in the React Chat UI component

The footer of the Syncfusion React Chat UI component is the area at the bottom that typically contains the message input field and the send button. It is enabled by default to provide a standard chat interface where users can type and send messages.

## Show or hide footer

You can control the visibility of the footer using the [showFooter](../api/chat-ui/#showfooter) property. By default, this property is set to `true`.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/chat-ui/footer/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/chat-ui/footer/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/chat-ui/footer" %}

## Footer template

>For advanced customization beyond simply showing or hiding the footer, refer to the [Footer Template](./templates#footer-template) documentation to learn how to define your own custom footer content and layout.