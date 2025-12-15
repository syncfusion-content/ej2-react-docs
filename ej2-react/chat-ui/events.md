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

This section describes the events that the Chat UI component triggers when specific actions are performed. The following events are available:

## created

The Chat UI component triggers the [created](../api/chat-ui#created) event after the component has been rendered. This event is useful for performing actions once the Chat UI is fully initialized and ready for interaction.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/chat-ui/events/created/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/chat-ui/events/created/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

## messageSend

The [messageSend](../api/chat-ui#messagesend) event is triggered before a message is sent from the Chat UI component.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/chat-ui/events/messageSend/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/chat-ui/events/messageSend/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

## userTyping

The [userTyping](../api/chat-ui#usertyping) event is triggered as a user types a message in the Chat UI input field. This is useful for implementing features like typing indicators ("User is typing...").

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/chat-ui/events/userTyping/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/chat-ui/events/userTyping/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

## beforeAttachmentUpload

The [beforeAttachmentUpload](../api/chat-ui#beforeattachmentupload) event is triggered before attached files begin uploading in the Chat UI.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/chat-ui/events/beforeAttachmentUpload/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/chat-ui/events/beforeAttachmentUpload/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

## attachmentUploadSuccess

The [attachmentUploadSuccess](../api/chat-ui#attachmentuploadsuccess) event is triggered when an attached file is successfully uploaded in the Chat UI.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/chat-ui/events/attachmentUploadSuccess/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/chat-ui/events/attachmentUploadSuccess/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

## attachmentUploadFailure

The [attachmentUploadFailure](../api/chat-ui#attachmentuploadfailure) event is triggered when an attached file upload fails in the Chat UI.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/chat-ui/events/attachmentUploadFailure/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/chat-ui/events/attachmentUploadFailure/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

## attachmentRemoved

The [attachmentRemoved](../api/chat-ui#attachmentremoved) event is triggered when an attached file is removed from the Chat UI.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/chat-ui/events/attachmentRemoved/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/chat-ui/events/attachmentRemoved/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

## attachmentClick

The [attachmentClick](../api/chat-ui#attachmentclick) event is triggered when an attached file is clicked in the Chat UI.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/chat-ui/events/attachmentClick/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/chat-ui/events/attachmentClick/app/index.tsx %}
{% endhighlight %}
{% endtabs %}
