---
layout: post
title: Events in React SpeechToText component | Syncfusion
description: Checkout and learn about Events with React SpeechToText component of Syncfusion Essential JS 2 and more details.
control: SpeechToText
platform: ej2-react
documentation: ug
domainurl: ##DomainURL##
---

# Events in ##Platform_Name## SpeechToText Component

This section describes the events that are triggered when performing actions with the SpeechToText component. The following events are available:
 
|Name|Args|Description|
|---|---|---|
|created|-|Triggers when the SpeechToText component's rendering is fully completed.|
|onStart|StartListeningEventArgs|Triggers when speech recognition begins.|
|onStop|StopListeningEventArgs|Triggers when speech recognition stops.|
|onError|ErrorEventArgs|Triggers when an error occurs during speech recognition or listening. For a list of possible errors, refer to the [Error handling](./speech-recognition#error-handling) section.|
|transcriptChanged|TranscriptChangedEventArgs|Triggers when a transcription change occurs during speech recognition.|

The following example demonstrates how to configure the SpeechToText events.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/speech-to-text/events/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/speech-to-text/events/app/index.tsx %}
{% endhighlight %}
{% highlight ts tabtitle="styles.css" %}
{% include code-snippet/speech-to-text/events/styles.css %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/speech-to-text/events/index" %}