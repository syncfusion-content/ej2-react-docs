---
layout: post
title: Methods in React Inline AI Assist | Syncfusion
description:  Checkout and learn about methods with React Inline AI Assist component of Syncfusion Essential JS 2 and more details.
platform: ej2-react
control: Inline AI Assist
documentation: ug
domainurl: ##DomainURL##
---

# Methods in React Inline AI Assist component

## Adding response

You can use the [addResponse](../api/inline-ai-assist#addresponse) public method to add the response to the Inline AI Assist.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/inline-ai-assist/methods/add-response/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/inline-ai-assist/methods/add-response/app/index.tsx %}
{% endhighlight %}
{% highlight css tabtitle="index.css" %}
{% include code-snippet/inline-ai-assist/methods/add-response/index.css %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/inline-ai-assist/methods/add-response" %}

## Executing prompt

You can use the [executePrompt](../api/inline-ai-assist#executeprompt) method to execute the prompts dynamically in the Inline AI Assist. It accepts prompts as string values, which triggers the [promptRequest](../api/inline-ai-assist#promptrequest) event and performs the callback actions.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/inline-ai-assist/methods/execute-prompt/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/inline-ai-assist/methods/execute-prompt/app/index.tsx %}
{% endhighlight %}
{% highlight css tabtitle="index.css" %}
{% include code-snippet/inline-ai-assist/methods/execute-prompt/index.css %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/inline-ai-assist/methods/execute-prompt" %}

## Showing popup

You can use [showPopup](../api/inline-ai-assist#showPopup) method to open the Inline AI Assist popup and optionally position it at specified coordinates.

## Hiding popup

You can use [hidePopup](../api/inline-ai-assist#hidePopup) method to close the Inline AI Assist popup.

Below sample demonstrates the usage of show and hide popup in Inline Assist component

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/inline-ai-assist/methods/show-hide-componentpopup/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/inline-ai-assist/methods/show-hide-componentpopup/app/index.tsx %}
{% endhighlight %}
{% highlight css tabtitle="index.css" %}
{% include code-snippet/inline-ai-assist/methods/show-hide-componentpopup/index.css %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/inline-ai-assist/methods/show-hide-componentpopup" %}

## Showing command popup

Use [showCommandPopup](../api/inline-ai-assist#showCommandPopup) to open the command action popup; it only opens when the Inline AI Assist popup is already opened.

## Hiding command popup

You can use [hideCommandPopup](../api/inline-ai-assist#hideCommandPopup) to close the command action popup in the Inline AI Assist component.

Below sample demonstrates the usage of show and hide command popup in Inline Assist component

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/inline-ai-assist/methods/show-hide-commandpopup/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/inline-ai-assist/methods/show-hide-commandpopup/app/index.tsx %}
{% endhighlight %}
{% highlight css tabtitle="index.css" %}
{% include code-snippet/inline-ai-assist/methods/show-hide-commandpopup/index.css %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/inline-ai-assist/methods/show-hide-commandpopup" %}