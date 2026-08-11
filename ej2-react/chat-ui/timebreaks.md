---
layout: post
title: Time Breaks in React Chat UI | Syncfusion®
description: Show date-wise separators between messages in the React Chat UI to improve readability and conversation organization with custom time break templates.
platform: ej2-react
control: Chat UI
documentation: ug
domainurl: ##DomainURL##
---

# Time Breaks in React Chat UI

## Show or hide time breaks

The Syncfusion React Chat UI component allows you to display date-wise separators between messages using the [showTimeBreak](../api/chat-ui#showtimebreak) property. This feature enhances readability and improves message organization. By default, this property is `false`.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/chat-ui/timebreak/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/chat-ui/timebreak/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/chat-ui/timebreak" %}

## Time break template

> For advanced customization, you can define a custom appearance for the separator using a time break template. Refer to the [Templates](./templates#time-break-template) documentation for implementation details.
