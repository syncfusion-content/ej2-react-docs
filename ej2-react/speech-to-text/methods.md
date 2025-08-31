---
layout: post
title: Methods in React SpeechToText component | Syncfusion
description: Checkout and learn about Methods with React SpeechToText component of Syncfusion Essential JS 2 and more details.
control: SpeechToText
platform: ej2-react
documentation: ug
domainurl: ##DomainURL##
---

# Methods in ##Platform_Name## SpeechToText Component

## Start Listening

The [startListening](../api/speech-to-text/#startListening) method initiates speech recognition and begins converting speech to text. This is used to programmatically start the recognition process without user interaction on the microphone button.

## Stop Listening

The [stopListening](../api/speech-to-text/#stopListening) method terminates the speech recognition process. This can be used to programmatically stop the recognition when an action is completed.

The following example demonstrates how to use the `startListening` and `stopListening` methods in the SpeechToText component.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/speech-to-text/methods/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/speech-to-text/methods/app/index.tsx %}
{% endhighlight %}
{% highlight ts tabtitle="styles.css" %}
{% include code-snippet/speech-to-text/methods/styles.css %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/speech-to-text/methods/index" %}
