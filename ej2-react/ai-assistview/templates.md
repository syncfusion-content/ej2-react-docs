---
layout: post
title: Templates in React AI AssistView component | Syncfusion
description:  Checkout and learn about Templates with React AI AssistView component of Syncfusion Essential JS 2 and more details.
platform: ej2-react
control: AI AssistView
documentation: ug
domainurl: ##DomainURL##
---

# Templates in React AI AssistView component

The AI AssistView component offers several template options to customize the banner, prompt items, response items, suggestions, and footer.

## Banner template

The [bannerTemplate](https://ej2.syncfusion.com/react/documentation/api/ai-assistview/#bannertemplate) property allows for the display of custom content, such as a welcome note or introductory instructions, at the top of the AI AssistView's conversation area.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/ai-assistview/template/banner-template/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/ai-assistview/template/banner-template/app/index.tsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.css" %}
{% include code-snippet/ai-assistview/template/banner-template/index.css %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/ai-assistview/template/banner-template" %}

## Prompt item template

To customize the appearance of prompt items, use the [promptItemTemplate](https://ej2.syncfusion.com/react/documentation/api/ai-assistview/#promptitemtemplate). The template's context provides:
- `prompt`: The text content of the user's message
- `toolbarItems`: Available toolbar actions for this prompt
- `index`: The numerical position of this prompt in the conversation sequence

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/ai-assistview/template/prompt-item-template/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/ai-assistview/template/prompt-item-template/app/index.tsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.css" %}
{% include code-snippet/ai-assistview/template/prompt-item-template/index.css %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/ai-assistview/template/prompt-item-template" %}

## Response item template

The [responseItemTemplate](https://ej2.syncfusion.com/react/documentation/api/ai-assistview/#responseitemtemplate) can be utilized to modify the layout of response items. The available context includes :
- `prompt`: The original user prompt that triggered this response
- `response`: The text content of the AI's response
- `index`: The numerical position in the conversation
- `toolbarItems`: Available toolbar actions for this response
- `output`: Additional output data associated with the response

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/ai-assistview/template/response-item-template/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/ai-assistview/template/response-item-template/app/index.tsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.css" %}
{% include code-snippet/ai-assistview/template/response-item-template/index.css %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/ai-assistview/template/response-item-template" %}

## Prompt suggestion item template

For customizing the prompt suggestion items, the [promptSuggestionItemTemplate](https://ej2.syncfusion.com/react/documentation/api/ai-assistview/#promptsuggestionitemtemplate) property can be implemented. The context for this template includes :
- `index`: The position of this suggestion in the suggestions list
- `promptSuggestion`: The suggestion object containing text and other properties

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/ai-assistview/template/suggestions-template/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/ai-assistview/template/suggestions-template/app/index.tsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.css" %}
{% include code-snippet/ai-assistview/template/suggestions-template/index.css %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/ai-assistview/template/suggestions-template" %}

## Footer template

The [footerTemplate](https://ej2.syncfusion.com/react/documentation/api/ai-assistview/#footertemplate) property offers a way to replace the default footer and manage prompt request actions. This enables the creation of unique footers that can include custom functionalities, such as a character counter or a button to clear the conversation.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/ai-assistview/template/footer-template/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/ai-assistview/template/footer-template/app/index.tsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.css" %}
{% include code-snippet/ai-assistview/template/footer-template/index.css %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/ai-assistview/template/footer-template" %}