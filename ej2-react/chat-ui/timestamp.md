---
layout: post
title: Timestamp in React Chat UI component | Syncfusion
description:  Checkout and learn about Timestamp with React Chat UI component of Syncfusion Essential JS 2 and more details.
platform: ej2-react
control: Chat UI
documentation: ug
domainurl: ##DomainURL##
---

# Timestamp in  the React Chat UI Component

## Show or Hide Timestamp

The [showTimeStamp](../api/chat-ui/#showtimestamp) property is used to enable or disable timestamps for all messages. Timestamps display the exact date and time that a message was sent. By default, this property is set to `true`.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/chat-ui/timestamp/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/chat-ui/timestamp/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/chat-ui/timestamp" %}

## Setting the Timestamp Format

The [timeStampFormat](../api/chat-ui/#timestampformat) property defines the display format for timestamps that appear with each message. The default format is `dd/MM/yyyy hh:mm a`. The format string conforms to the standard date and time formatting rules.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/chat-ui/timestampFormat/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/chat-ui/timestampFormat/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/chat-ui/timestampFormat" %}
