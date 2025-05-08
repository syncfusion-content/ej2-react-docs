---
layout: post
title: Events in React SpeechToText Component | Syncfusion
description: Checkout and learn about events in Syncfusion Essential React SpeechToText component, its elements, and more details.
control: SpeechToText
platform: ej2-react
documentation: ug
domainurl: ##DomainURL##
---

# Events in ##Platform_Name## SpeechToText component

This section describes the SpeechToText events that will be triggered when appropriate actions are performed. The following events are available in the SpeechToText component.
 
|Name|Args|Description|
|---|---|---|
|created|-|Triggers when the SpeechToText component's rendering is fully completed|
|onStart|StartListeningEventArgs|Triggers when the speech recognition begins.|
|onStop|StopListeningEventArgs|Triggers when the speech recognition stops.|
|onError|ErrorEventArgs|Triggers when an error occurs during speech recognition or while listening. For list of possible errors, refer to the [Error handling](./speech-recognition#error-handling) section.|
|transcriptChanged|TranscriptChangedEventArgs|Triggers when an transcription change occurs during the speech recognition.|

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

 {% previewsample "page.domainurl/code-snippet/speech-to-text/events" %}