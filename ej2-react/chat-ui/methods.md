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

## Adding message

You can use the [addMessage](../api/chat-ui#addmessage) public method to add the messages in the Chat UI. You can add it either as a string or MessageModel collection. It programmatically adds a new message to the chat.

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

## Edit message

You can use the [updateMessage](../api/chat-ui#updatemessage) public method to update the messages in the ChatUI to modify an existing message within the chat, useful for editing or correcting sent messages.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/chat-ui/methods/editMessage/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/chat-ui/methods/editMessage/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/chat-ui/methods/editMessage" %}

## Scroll to bottom

You can use the [scrollToBottom](../api/chat-ui#scrolltobottom) public method to scroll the chat view to the latest message, ensuring users see the new content updated.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/chat-ui/methods/scrollToBottom/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/chat-ui/methods/scrollToBottom/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/chat-ui/methods/scrollToBottom" %}
