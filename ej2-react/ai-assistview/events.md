---
layout: post
title: Events in React AI AssistView component | Syncfusion
description:  Checkout and learn about Events with React AI AssistView component of Syncfusion Essential JS 2 and more details.
platform: ej2-react
control: AI AssistView
documentation: ug
domainurl: ##DomainURL##
---

# Events in React AI AssistView component

The React AI AssistView component provides a comprehensive set of events that enable developers to customize behavior and handle user interactions effectively. The following events are available in the AI AssistView component.

## created

The [created](https://ej2.syncfusion.com/react/documentation/api/ai-assistview/#created/) event is triggered when the AI AssistView component rendering is completed.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/ai-assistview/events/created/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/ai-assistview/events/created/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

## promptRequest

The [promptRequest](https://ej2.syncfusion.com/react/documentation/api/ai-assistview/#promptrequest/) event is triggered when a user sends a prompt request in the AI AssistView component.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/ai-assistview/events/promptRequest/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/ai-assistview/events/promptRequest/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

## promptChanged

The [promptChanged](https://ej2.syncfusion.com/react/documentation/api/ai-assistview/#promptchanged/) event is triggered whenever the prompt text is modified in the AI AssistView component.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/ai-assistview/events/prompt-changed/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/ai-assistview/events/prompt-changed/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

## beforeAttachmentUpload

The [beforeAttachmentUpload](../api/ai-assistview/#beforeattachmentupload/) event is triggered before attached files begin uploading in the AI AssistView.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/ai-assistview/events/before-attachment/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/ai-assistview/events/before-attachment/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

## attachmentUploadSuccess

The [attachmentUploadSuccess](../api/ai-assistview/#attachmentuploadsuccess/) event is triggered when an attached file is successfully uploaded in the AI AssistView.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/ai-assistview/events/attachment-success/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/ai-assistview/events/attachment-success/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

## attachmentUploadFailure

The [attachmentUploadFailure](../api/ai-assistview/#attachmentuploadfailure/) event is triggered when an attached file upload fails in the AI AssistView.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/ai-assistview/events/attachment-failure/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/ai-assistview/events/attachment-failure/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

## attachmentRemoved

The [attachmentRemoved](../api/ai-assistview/#attachmentremoved/) event is triggered when an attached file is removed from the AI AssistView.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/ai-assistview/events/attachment-removed/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/ai-assistview/events/attachment-removed/app/index.tsx %}
{% endhighlight %}
{% endtabs %}