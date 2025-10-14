---
layout: post
title: Text-to-Speech With React AI AssistView component | Syncfusion
description:  Checkout and learn about configuration of Text-to-Speech With Azure OpenAI in React AI AssistView component of Syncfusion Essential JS 2 and more details.
platform: ej2-react
control: AI AssistView
documentation: ug
domainurl: ##DomainURL##
---

# Text-to-Speech in React AI AssistView 

The Syncfusion React AI AssistView component supports `Text-to-Speech` (TTS) functionality using the browser's Web Speech API specifically using the [SpeechSynthesisUtterance](https://developer.mozilla.org/en-US/docs/Web/API/SpeechSynthesisUtterance) interface to convert AI-generated response into spoken audio.

## Prerequisites

Before integrating `Text-to-Speech`, ensure the following:

1. The Syncfusion AI AssistView component is properly set up in your React application.
    - [React Getting Started Guide](../getting-started)

2. The AI AssistView component is integrated with [Azure OpenAI](https://microsoft.github.io/PartnerResources/skilling/ai-ml-academy/resources/openai).
    - [Integration of Azure OpenAI With React AI AssistView component](../ai-integrations/openai-integration.md)

## Configure Text-to-Speech

To enable Text-to-Speech functionality, modify the `src/App.jsx` or `src/App.tsx` file to incorporate the Web Speech API. A custom `Read Aloud` button is added to the response toolbar using the [responseToolbarSettings](https://ej2.syncfusion.com/react/documentation/api/ai-assistview/#responsetoolbarsettings) property. When clicked, the [itemClicked](https://ej2.syncfusion.com/react/documentation/api/ai-assistview/responseToolbarSettings/#itemclicked) event extracts plain text from the generated AI response and use the browser SpeechSynthesis API to read it aloud.

{% tabs %}
{% highlight js tabtitle="app.jsx" %}
{% include code-snippet/ai-assistview/speech/tts/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="app.tsx" %}
{% include code-snippet/ai-assistview/speech/tts/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/ai-assistview/speech/tts" %}

## See Also

* [Speech-to-Text](./speech-to-text.md)
