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

This section describes the AI AssistView events that will be triggered when appropriate actions are performed. The following events are available in the AI AssistView component.

## created

The AI AssistView component triggers the [created](https://ej2.syncfusion.com/react/documentation/api/ai-assistview/#created/) event when the component rendering is completed.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/ai-assistview/events/created/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/ai-assistview/events/created/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

## promptRequest

The [promptRequest](https://ej2.syncfusion.com/react/documentation/api/ai-assistview/#promptrequest/) event is triggered when the prompt request is made in the AI AssistView component.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/ai-assistview/events/promptRequest/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/ai-assistview/events/promptRequest/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

## promptChanged

The [promptChanged](https://ej2.syncfusion.com/react/documentation/api/ai-assistview/#promptchanged/) event is triggered when the prompt text is changed in the AI AssistView component.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/ai-assistview/events/prompt-changed/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/ai-assistview/events/prompt-changed/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

## beforeAttachmentUpload

The [beforeAttachmentUpload](../api/ai-assistview/#beforeattachmentupload/) event is triggered before the attached files upload begins in the AI AssistView

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/ai-assistview/events/before-attachment/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/ai-assistview/events/before-attachment/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

## attachmentUploadSuccess

The [attachmentUploadSuccess](../api/ai-assistview/#attachmentuploadsuccess/) event is triggered when the attached file is successfully uploaded in the AI AssistView.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/ai-assistview/events/attachment-success/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/ai-assistview/events/attachment-success/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

## attachmentUploadFailure

The [attachmentUploadFailure](../api/ai-assistview/#attachmentuploadfailure/) event is triggered when the attached file upload fails in the AI AssistView.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/ai-assistview/events/attachment-failure/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/ai-assistview/events/attachment-failure/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

## attachmentRemoved

The [attachmentRemoved](../api/ai-assistview/#attachmentremoved/) event is triggered when an attached file is removed in the AI AssistView.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/ai-assistview/events/attachment-removed/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/ai-assistview/events/attachment-removed/app/index.tsx %}
{% endhighlight %}
{% endtabs %}
