---
layout: post
title: Methods in React AI AssistView component | Syncfusion
description:  Checkout and learn about Methods with React AI AssistView component of Syncfusion Essential JS 2 and more details.
platform: ej2-react
control: AI AssistView
documentation: ug
domainurl: ##DomainURL##
---

# Methods in React AI AssistView component

## Adding prompt response

You can use the `addPromptResponse` public method to add the prompts and responses to the AI AssistView. You can add the it either as a `string` or `object` collection.

### Adding responses as string.

You can add string response, by passing it as argument for the `addPromptResponse('Response')` method which adds as the response of last added prompt.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/ai-assistview/methods/string-response/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/ai-assistview/methods/string-response/app/index.tsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.css" %}
{% include code-snippet/ai-assistview/methods/string-response/index.css %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/ai-assistview/methods/string-response" %}

### Adding responses as object.

You can add object response, by passing the prompt and response as a collection as argument for the `addPromptResponse({prompt: 'Prompt text', response: 'Response text'})` method which adds as a new prompt and response in the AI AssistView.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/ai-assistview/methods/object-response/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/ai-assistview/methods/object-response/app/index.tsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.css" %}
{% include code-snippet/ai-assistview/methods/object-response/index.css %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/ai-assistview/methods/object-response" %}

## Executing prompt

You can use the `executePrompt` method to execute the prompts dynamically in the AI AssistView. It accepts prompts as string values, which triggers the `promptRequest` event and performs the callback actions.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/ai-assistview/methods/execute-prompt/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/ai-assistview/methods/execute-prompt/app/index.tsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.css" %}
{% include code-snippet/ai-assistview/methods/execute-prompt/index.css %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/ai-assistview/methods/execute-prompt" %}
