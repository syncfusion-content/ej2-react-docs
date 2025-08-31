---
layout: post
title: Methods in React Chat UI component | Syncfusion
description:  Checkout and learn about Methods with React Chat UI component of Syncfusion Essential JS 2 and more details.
platform: ej2-react
control: Chat UI
documentation: ug
domainurl: ##DomainURL##
---

# Methods in React Chat UI component

## Add message

The [addMessage](../api/chat-ui/#addmessage) method programmatically adds a new message to the chat. You can provide the new message as either a `string` or a `MessageModel` object.

The following sample demonstrates how to add a new message using both a `string` and a `MessageModel` object.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/chat-ui/methods/addMessageModel/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/chat-ui/methods/addMessageModel/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/chat-ui/methods/addMessageModel" %}

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/chat-ui/methods/addMessageString/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/chat-ui/methods/addMessageString/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/chat-ui/methods/addMessageString" %}

## Update message

The [updateMessage](../api/chat-ui/#updatemessage) method modifies an existing message in the Chat UI, which is useful for editing or correcting previously sent messages.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/chat-ui/methods/editMessage/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/chat-ui/methods/editMessage/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/chat-ui/methods/editMessage" %}

## Scroll to the bottom

The [scrollToBottom](../api/chat-ui/#scrolltobottom) method scrolls the chat view to the most recent message, ensuring that the latest content is visible to the user.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/chat-ui/methods/scrollToBottom/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/chat-ui/methods/scrollToBottom/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/chat-ui/methods/scrollToBottom" %}
