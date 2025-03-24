---
layout: post
title: Speech recognition in React SpeechToText component | Syncfusion
description: Checkout and learn about Speech recognition with React SpeechToText component of Syncfusion Essential JS 2 and more details.
control: SpeechToText
platform: ej2-react
documentation: ug
domainurl: ##DomainURL##
---

# Speech recognition in ##Platform_Name## SpeechToText component

## Retrieving transcripts

You can use the [transcript](../api/speech-to-text#transcript) property to retrieve the transcribed text from the spoken text. This property allows to display the transcribed text once the speech recognition process is started.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/speech-to-text/speechRecognition/transcript/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/speech-to-text/speechRecognition/transcript/app/index.tsx %}
{% endhighlight %}
{% highlight ts tabtitle="styles.css" %}
{% include code-snippet/speech-to-text/speechRecognition/transcript/styles.css %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/speech-to-text/speechRecognition/transcript" %}

## Setting language

You can use the [lang](../api/speech-to-text#lang) property to specify the language for speech recognition. Setting this property ensures that the recognition engine interprets the spoken words correctly based on the specified locale such as `en-US` for American `English`, `fr-FR` for `French`, and more.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/speech-to-text/speechRecognition/language/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/speech-to-text/speechRecognition/language/app/index.tsx %}
{% endhighlight %}
{% highlight ts tabtitle="styles.css" %}
{% include code-snippet/speech-to-text/speechRecognition/language/styles.css %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/speech-to-text/speechRecognition/language" %}

## Allowing interim results

You can use the [allowInterimResults](../api/speech-to-text#allowInterimResults) property to enable or disable interim results. When set to `true`, the recognized speech will be displayed in real time as words are spoken. When set to `false`, only final results will be displayed after recognition is complete. By default, the value is `true`.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/speech-to-text/speechRecognition/interimResults/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/speech-to-text/speechRecognition/interimResults/app/index.tsx %}
{% endhighlight %}
{% highlight ts tabtitle="styles.css" %}
{% include code-snippet/speech-to-text/speechRecognition/interimResults/styles.css %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/speech-to-text/speechRecognition/interimResults" %}

## Managing listening state

You can use the [listeningState](../api/speech-to-text#listeningState) property to manage the listening state of the component. The possible values are [Inactive](../api/speech-to-text/speechToTextState/) , [Listening](../api/speech-to-text/speechToTextState/) and [Stopped](../api/speech-to-text/speechToTextState/). By default, the value is `Inactive`.

### Inactive

The component is in idle state with no active speech recognition.

### Listening

It is actively listening which captures and transcribes speech with a stop icon and blinking animation.

### Stopped

Denotes the speech recognition has ended, and no further speech is being processed.

Below sample demonstrates the usage of [listeningState](../api/speech-to-text#listeningState) property.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/speech-to-text/speechRecognition/listeningState/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/speech-to-text/speechRecognition/listeningState/app/index.tsx %}
{% endhighlight %}
{% highlight ts tabtitle="styles.css" %}
{% include code-snippet/speech-to-text/speechRecognition/listeningState/styles.css %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/speech-to-text/speechRecognition/listeningState" %}

## Show or hide tooltip

You can use the [showTooltip](../api/speech-to-text#showTooltip) property to specify the tooltip text to be displayed on hovering the SpeechToText button. By default, the value is `true`.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/speech-to-text/speechRecognition/showTooltip/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/speech-to-text/speechRecognition/showTooltip/app/index.tsx %}
{% endhighlight %}
{% highlight ts tabtitle="styles.css" %}
{% include code-snippet/speech-to-text/speechRecognition/showTooltip/styles.css %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/speech-to-text/speechRecognition/showTooltip" %}

## Setting disabled

You can use the [disabled](../api/speech-to-text#disabled) property to disable the SpeechToText, preventing user interaction when set to `true`. By default, the value is `false`.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/speech-to-text/speechRecognition/disabled/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/speech-to-text/speechRecognition/disabled/app/index.tsx %}
{% endhighlight %}
{% highlight ts tabtitle="styles.css" %}
{% include code-snippet/speech-to-text/speechRecognition/disabled/styles.css %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/speech-to-text/speechRecognition/disabled" %}

## Setting html attributes

You can use the [htmlAttributes](../api/speech-to-text#htmlAttributes) property to assign custom attributes to the SpeechToText component for the button element.

## Error handling

The SpeechToText component handles various errors that may occur during speech recognition. The following table lists the possible errors and their causes:

| Error                | Cause                                                                                        |
|----------------------|----------------------------------------------------------------------------------------------|
| `no-speech`            | The microphone did not detect any speech input.                                              |
| `aborted`              | The speech recognition process was intentionally terminated.                                 |
| `audio-capture`        | The system was unable to detect a microphone device.                                         |
| `not-allowed`          | Access to the microphone was denied by the user or browser settings.                         |
| `service-not-allowed`  | The current context does not permit the use of the speech recognition service.               |
| `network`              | A network issue is preventing the speech recognition service from functioning.               |
| `unsupported-browser`  | The browser being used does not support the SpeechRecognition API.                           |
| `default`              | An unidentified error occurred during the speech recognition process.                        |

## Browser support

The SpeechToText component relies on the [Speech Recognition API](https://developer.mozilla.org/en-US/docs/Web/API/SpeechRecognition) for processing the speech input. Ensure that the browser supports this API before implementation.

|    Browser    |    Supported versions    |
|--------------|---------------|
|    Chrome     |    25+    |
|    Edge     |    79+    |
|    Firefox     |    Not Supported    |
|    Safari     |    12+    |
|    Opera     |    30+    |
