---
layout: post
title: Globalization in React Speech To Text | Syncfusion®
description: Localize the Syncfusion React Speech To Text UI for any culture with L10n.load, error messages, ARIA labels, and right-to-left layout support.
control: SpeechToText
platform: ej2-react
documentation: ug
domainurl: ##DomainURL##
---

# Globalization in ##Platform_Name## Speech To Text

## Localization

The SpeechToText component can be localized for any culture. By default, its locale is `en-US`. To adapt the component to other languages, use the `L10n.load` method to load translation data for a specific locale.

|KEY|Text|
|----|----|
|abortedError|Speech recognition was aborted.|
|audioCaptureError|No microphone detected. Ensure your microphone is connected.|
|defaultError|An unknown error occurred.|
|networkError|Network error occurred. Check your internet connection.|
|noSpeechError|No speech detected. Please speak into the microphone.|
|notAllowedError|Microphone access denied. Allow microphone permissions.|
|serviceNotAllowedError|Speech recognition service is not allowed in this context.|
|unsupportedBrowserError|The browser does not support the SpeechRecognition API.|
|startAriaLabel|Press to start speaking and transcribe your words|
|stopAriaLabel|Press to stop speaking and end transcription|
|startTooltipText|Start listening|
|stopTooltipText|Stop listening|

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/speech-to-text/globalization/localization/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/speech-to-text/globalization/localization/app/index.tsx %}
{% endhighlight %}
{% highlight ts tabtitle="styles.css" %}
{% include code-snippet/speech-to-text/globalization/localization/styles.css %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/speech-to-text/globalization/localization/index" %}

## RTL

The Right-to-Left (RTL) feature provides support for languages that are read from right to left, such as Arabic, Hebrew, or Persian. Set the [enableRtl](../api/speech-to-text#enableRtl) property to `true` to reverse the component's layout and text direction, ensuring proper alignment and readability for RTL cultures.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/speech-to-text/globalization/rtl/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/speech-to-text/globalization/rtl/app/index.tsx %}
{% endhighlight %}
{% highlight ts tabtitle="styles.css" %}
{% include code-snippet/speech-to-text/globalization/rtl/styles.css %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/speech-to-text/globalization/rtl/index" %}