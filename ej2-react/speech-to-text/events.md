---
layout: post
title: Events in React Speech To Text | Syncfusion®
description: Handle Syncfusion React Speech To Text lifecycle with events for created, onStart, onStop, onError, and transcriptChanged during recognition.
control: SpeechToText
platform: ej2-react
documentation: ug
domainurl: ##DomainURL##
---

# Events in ##Platform_Name## Speech To Text

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