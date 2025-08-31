---
layout: post
title: Templates in React Chat UI component | Syncfusion
description:  Checkout and learn about Templates with React Chat UI component of Syncfusion Essential JS 2 and more details.
platform: ej2-react
control: Chat UI
documentation: ug
domainurl: ##DomainURL##
---

# Templates in React Chat UI component

Elevate the user experience by fully customizing the Syncfusion React Chat UI component. With templating support for key areas like the conversation window, messages, and typing indicators, you can create a unique and personalized chat interface that aligns perfectly with your application's design.

## Empty chat template

The [emptyChatTemplate](../api/chat-ui/#emptychattemplate) property allows you to define custom content for the chat interface when it is empty. Use this template to display welcome messages, branding, or helpful instructions, creating an engaging starting point for users.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/chat-ui/templates/emptyChatTemplate/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/chat-ui/templates/emptyChatTemplate/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/chat-ui/templates/emptyChatTemplate" %}

## Message template

Customize the appearance of every chat message with the [messageTemplate](../api/chat-ui/#messagetemplate) property. This template gives you full control over the layout, styling, and design of messages. The template context provides the `message` object and its `index`, allowing you to apply conditional styling or logic based on message content or position.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/chat-ui/templates/messageTemplate/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/chat-ui/templates/messageTemplate/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/chat-ui/templates/messageTemplate" %}

## Time break template

Improve conversation organization with the [timeBreakTemplate](../api/chat-ui/#timebreaktemplate) property. This template lets you customize the time-based separators that appear between messages, such as "Today," "Yesterday," or specific dates, enhancing readability. The context includes the `messageDate` for precise formatting.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/chat-ui/templates/timebreakTemplate/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/chat-ui/templates/timebreakTemplate/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/chat-ui/templates/timebreakTemplate" %}

## Typing users template

Enhance user experience by customizing the typing indicator with the [typingUsersTemplate](../api/chat-ui/#typinguserstemplate) property. You can modify its appearance and positioning to provide clear, real-time feedback. The template's context includes a list of `users`, so you can display who is currently typing.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/chat-ui/templates/typingUsersTemplate/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/chat-ui/templates/typingUsersTemplate/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/chat-ui/templates/typingUsersTemplate" %}

## Suggestion template

Create visually engaging and functional quick replies using the [suggestionTemplate](../api/chat-ui/#suggestiontemplate) property. This template allows you to customize the layout and styling of suggestion items. The context includes the `suggestion` data and its `index`, enabling you to create dynamic and interactive suggestion buttons.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/chat-ui/templates/suggestionsTemplate/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/chat-ui/templates/suggestionsTemplate/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/chat-ui/templates/suggestionsTemplate" %}

## Footer template

Take control of the chat input area by defining a custom [footerTemplate](../api/chat-ui/#footertemplate). This allows you to replace the default footer, giving you the flexibility to add custom buttons, integrate additional functionality, and manage message sending actions with a personalized design.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/chat-ui/templates/footerTemplate/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/chat-ui/templates/footerTemplate/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/chat-ui/templates/footerTemplate" %}