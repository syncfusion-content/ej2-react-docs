---
layout: post
title: Speech-to-Text With React AI AssistView component | Syncfusion
description:  Checkout and learn about configuration of Speech-to-Text With Azure OpenAI in React AI AssistView component of Syncfusion Essential JS 2 and more details.
platform: ej2-react
control: AI AssistView
documentation: ug
domainurl: ##DomainURL##
---

# Speech-to-Text in React AI AssistView 

The Syncfusion React AI AssistView component supports `Speech-to-Text` functionality through the browser's [Web Speech API](https://developer.mozilla.org/en-US/docs/Web/API/Web_Speech_API), enabling conversion of spoken words into text using the device's microphone.

## Prerequisites

Before integrating `Speech-to-Text`, ensure the following:

1. The Syncfusion AI AssistView component is properly set up in your React application.
    - [React Getting Started Guide](../getting-started)

2. The AI AssistView component is integrated with [Azure OpenAI](https://microsoft.github.io/PartnerResources/skilling/ai-ml-academy/resources/openai).
    - [Integration of Azure OpenAI With React AI AssistView component](../ai-integrations/openai-integration.md)

## Configure Speech-to-Text

To enable Speech-to-Text functionality, modify the `src/App.jsx` or `src/App.tsx` file to incorporate the Web Speech API. The [SpeechToText](https://ej2.syncfusion.com/react/documentation/speech-to-text/getting-started) component listens for microphone input, transcribes spoken words, and updates the AI AssistView's editable footer with the transcribed text. The transcribed text is then sent as a prompt to the Azure OpenAI service via the AI AssistView component.

{% tabs %}
{% highlight js tabtitle="app.jsx" %}
{% include code-snippet/ai-assistview/speech/stt/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="app.tsx" %}
{% include code-snippet/ai-assistview/speech/stt/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/ai-assistview/speech/stt" %}

## See Also

* [Text-to-Speech](./text-to-speech.md)
