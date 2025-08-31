---
layout: post
title: Typing Indicator in React Chat UI component | Syncfusion
description:  Checkout and learn about Typing Indicator with React Chat UI component of Syncfusion Essential JS 2 and more details.
platform: ej2-react
control: Chat UI
documentation: ug
domainurl: ##DomainURL##
---

# Typing Indicator in React Chat UI Component

The typing indicator provides real-time visual feedback to show when other users are composing a message. This feature enhances the user experience by making conversations feel more interactive and responsive, indicating that a reply is in progress.

## Show or Hide Typing Indicator

You can use the [typingUsers](../api/chat-ui/#typingusers) property to display the current user’s who are typing to indicate the active participants typing response within the chat conversations. If the property is empty the typing indicators will be removed.
The visibility of the typing indicator is controlled by the [typingUsers](../api/chat-ui/#typingusers) property. This property accepts an array of `UserModel[]` objects, with each object representing a user who is currently typing. The indicator is automatically displayed when this collection is populated and hidden when it is empty.

The `UserModel[]` is a collection that requires a defined structure to display user information correctly. The following example illustrates how to dynamically update the `typingUsers` property to show and hide the indicator.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/chat-ui/typingUsers/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/chat-ui/typingUsers/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/chat-ui/typingUsers" %}

## Typing Indicator Template

> Refer to the [Templates](./templates#typing-users-template) section for more details about the Typing indicator template.