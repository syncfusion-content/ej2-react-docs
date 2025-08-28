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

You can use the [addPromptResponse](https://ej2.syncfusion.com/react/documentation/api/ai-assistview/#addpromptresponse) public method to add the prompts and responses to the AI AssistView. You can add the it either as a `string` or `object` collection.

### Adding Responses as a String

You can add a response as a string by passing it as an argument to the `addPromptResponse('Response')` method. This will append the response to the last prompt added to the conversation.

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

### Adding Responses as object.

You can add an object response by passing the prompt and response as a collection to the `addPromptResponse({prompt: 'Prompt text', response: 'Response text'})` method. This will add a new prompt and its corresponding response to the AI AssistView.

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

You can use the [executePrompt](https://ej2.syncfusion.com/react/documentation/api/ai-assistview/#executeprompt) method to execute the prompts dynamically in the AI AssistView. It accepts prompts as string values, which triggers the [promptRequest](https://ej2.syncfusion.com/react/documentation/api/ai-assistview/#promptrequest) event and performs the callback actions.

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