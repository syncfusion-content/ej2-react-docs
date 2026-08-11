---
layout: post
title: Load On-Demand in React Chat UI | Syncfusion®
description: Enable load-on-demand in the React Chat UI to dynamically load older messages as users scroll up, improving performance for long conversations.
platform: ej2-react
control: Chat UI
documentation: ug
domainurl: ##DomainURL##
---

# Load On-Demand in React Chat UI

Load on-demand functionality allows messages to be loaded dynamically when users scroll to the top of the message list. This feature significantly improves application performance and reduces initial load times, especially beneficial for conversations with extensive message history. Instead of loading the entire conversation at once, messages are fetched progressively as needed, ensuring optimal user experience and resource utilization.

## Enabling load on-demand

Use the [loadOnDemand](https://ej2.syncfusion.com/react/documentation/api/chat-ui#loadondemand) property to enable dynamic message loading. When enabled, the component triggers a loading event when the user scrolls to the top of the message list, allowing implementation of custom data fetching logic.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/chat-ui/loadondemand/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/chat-ui/loadondemand/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/chat-ui/loadondemand" %}
