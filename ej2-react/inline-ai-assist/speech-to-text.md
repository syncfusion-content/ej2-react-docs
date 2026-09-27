---
layout: post
title: Speech-to-Text in React Inline AI Assist | Syncfusion
description: Checkout and learn about the configuration of Speech-to-Text with Azure OpenAI in the React Inline AI Assist control of Syncfusion Essential JS 2 and more.
platform: ej2-react
control: Inline AI Assist
documentation: ug
domainurl: ##DomainURL##
---

# Speech-to-Text in React Inline AI Assist

The Syncfusion React Inline AI Assist component integrates `Speech-to-Text` functionality through the browser's [Web Speech API](https://developer.mozilla.org/en-US/docs/Web/API/Web_Speech_API). This enables the conversion of spoken words into text using the device's microphone, allowing users to provide voice input directly in the Inline AI Assist prompt area.

When content is selected, the recognized speech can be used as a prompt along with the selected content to provide contextual AI assistance. The generated response is displayed inline, where users can review and either accept or discard the suggestion.

## Prerequisites

Before integrating `Speech-to-Text`, ensure the following:

1. The Syncfusion Inline AI Assist component is properly set up in your React application.
    - [React Getting Started Guide](../getting-started)

2. The Inline AI Assist component is integrated with [Azure OpenAI](https://azure.microsoft.com/en-us/products/ai-foundry/models/openai).
    - [Integration of Azure OpenAI With React Inline AI Assist component](../ai-integrations/openai-integration.md)

## Enable built-in speech-to-text

You can enable speech-to-text support using the [speechToTextSettings](../api/inline-ai-assist#speechtotextsettings) property. Set the `enable` property to `true` within the `speechToTextSettings` configuration to activate this feature.

Once enabled, a microphone button appears in the Inline AI Assist prompt area. The recognized speech is converted into prompt text and passed through the `promptRequest` event when the prompt is submitted.

{% tabs %}
{% highlight js tabtitle="app.jsx" %}
{% include code-snippet/inline-ai-assist/speech/stt/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="app.tsx" %}
{% include code-snippet/inline-ai-assist/speech/stt/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/inline-ai-assist/speech/stt" %}

## Configure speech recognition language

The [lang](../api/inline-ai-assist#speechtotextsettings) property allows you to set the language code for speech recognition. By default, it uses the browser's language settings, but you can specify a custom language code, such as `en-US`, `es-ES`, or `fr-FR`. This ensures that the speech recognition engine recognizes and transcribes speech in the specified language accurately.

## Configure speech button settings

The [buttonSettings](../api/inline-ai-assist#speechtotextsettings) property lets you customize the microphone button's appearance and text content by configuring the `content` property for the text displayed when idle, `stopContent` for the text displayed while recording, `iconCss` for the icon shown when idle, and `stopIconCss` for the icon shown while recording. This allows you to customize the user interface and provide clear visual feedback while speech recognition is active.

## Enable interim results

The [allowInterimResults](../api/inline-ai-assist#speechtotextsettings) property enables real-time transcription while the user is speaking. When set to `true`, the speech recognition engine returns interim transcripts as it processes the audio. This provides immediate feedback by displaying partially recognized speech before the final transcript is generated.

This example demonstrates how to configure Inline AI Assist with the speech recognition language, microphone button settings, and interim results:

{% tabs %}
{% highlight js tabtitle="app.jsx" %}
{% include code-snippet/inline-ai-assist/speech/speech-configuration/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="app.tsx" %}
{% include code-snippet/inline-ai-assist/speech/speech-configuration/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/inline-ai-assist/speech/speech-configuration" %}

## Configure tooltip settings

You can customize the tooltips displayed for the microphone button using the [tooltipSettings](../api/inline-ai-assist#speechtotextsettings) property. The tooltip can provide different information based on whether speech recognition is idle or active.

{% tabs %}
{% highlight js tabtitle="app.jsx" %}
{% include code-snippet/inline-ai-assist/speech/tooltip-settings/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="app.tsx" %}
{% include code-snippet/inline-ai-assist/speech/tooltip-settings/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/inline-ai-assist/speech/tooltip-settings" %}

## Speech-to-text events

The speech-to-text functionality provides the `onStart`, `onStop`, `transcriptChanged`, and `onError` events. The `onStart` event is triggered when speech recognition starts, `onStop` is triggered when recognition stops, `transcriptChanged` is triggered when the recognized transcript is updated, and `onError` is triggered when an error occurs during speech recognition.

The recognized transcript is updated in the Inline AI Assist prompt area. When the prompt is submitted, both typed and speech-recognized input are available through the `prompt` property of the `promptRequest` event arguments.

{% tabs %}
{% highlight js tabtitle="app.jsx" %}
{% include code-snippet/inline-ai-assist/speech/speech-events/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="app.tsx" %}
{% include code-snippet/inline-ai-assist/speech/speech-events/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/inline-ai-assist/speech/speech-events" %}

## Browser compatibility

The speech-to-text functionality in Inline AI Assist relies on the browser's [Speech Recognition API](https://developer.mozilla.org/en-US/docs/Web/API/SpeechRecognition), which has limited browser support. Refer to the [Browser Compatibility](https://ej2.syncfusion.com/react/documentation/speech-to-text/speech-recognition#browser-support) section for detailed information.

The browser may request permission to access the device's microphone when speech recognition starts. Speech-to-text functionality is available only when microphone permission is granted and the browser supports the Speech Recognition API.