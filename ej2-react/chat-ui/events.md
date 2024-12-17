---
layout: post
title: Events in React Chat UI component | Syncfusion
description:  Checkout and learn about Events with React Chat UI component of Syncfusion Essential JS 2 and more details.
platform: ej2-react
control: Chat UI
documentation: ug
domainurl: ##DomainURL##
---

# Events in React Chat UI component

This section describes the Chat UI events that will be triggered when appropriate actions are performed. The following events are available in the Chat UI component.

## Created

The Chat UI component triggers the [created](../api/chat-ui#created) event when the component rendering is completed.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/chat-ui/events/created/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/chat-ui/events/created/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

## Sending message

The [messageSend](../api/chat-ui#messagesend) event is triggered before sending a message in the Chat UI component.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/chat-ui/events/messageSend/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/chat-ui/events/messageSend/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

## User typing

The [userTyping](../api/chat-ui#usertyping) event is triggered when the user is typing a message in the Chat UI component.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/chat-ui/events/userTyping/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/chat-ui/events/userTyping/app/index.tsx %}
{% endhighlight %}
{% endtabs %}
