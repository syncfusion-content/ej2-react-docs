---
layout: post
title: Assist view in React AI AssistView component | Syncfusion
description:  Checkout and learn about Assist view with React AI AssistView component of Syncfusion Essential JS 2 and more details.
platform: ej2-react
control: AI AssistView
documentation: ug
domainurl: ##DomainURL##
---

# Assist view in React AI AssistView component

## Setting prompt text

The [prompt](https://ej2.syncfusion.com/react/documentation/api/ai-assistview/#prompt) property allows you to define initial or default text that appears in the prompt input area. This property is useful for pre-filling the input with context or guidance for users.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/ai-assistview/assist-view/prompt-text/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/ai-assistview/assist-view/prompt-text/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/ai-assistview/assist-view/prompt-text" %}

## Setting prompt placeholder

The [promptPlaceholder](https://ej2.syncfusion.com/react/documentation/api/ai-assistview/#promptplaceholder) property defines the placeholder text displayed in the prompt textarea when it's empty. The default placeholder text is `Type prompt for assistance...`.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/ai-assistview/assist-view/placeholder/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/ai-assistview/assist-view/placeholder/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/ai-assistview/assist-view/placeholder" %}

## Prompt-response collection

The [prompts](https://ej2.syncfusion.com/react/documentation/api/ai-assistview/#prompts) property enables you to initialize the component with pre-configured conversation data or retrieve the complete history of user interactions.

> The [prompts](https://ej2.syncfusion.com/react/documentation/api/ai-assistview/#prompts) collection automatically stores all user inputs and corresponding AI responses generated during the session, providing a complete conversation history that can be accessed programmatically.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/ai-assistview/assist-view/prompts/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/ai-assistview/assist-view/prompts/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/ai-assistview/assist-view/prompts" %}

## Configuring prompt suggestions

The [promptSuggestions](https://ej2.syncfusion.com/react/documentation/api/ai-assistview/#promptsuggestions) property provides users with helpful suggestions that can appear initially or on-demand. These suggestions help users formulate better prompts and discover available functionality, enhancing the overall user experience.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/ai-assistview/assist-view/suggestions/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/ai-assistview/assist-view/suggestions/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/ai-assistview/assist-view/suggestions" %}

### Customizing suggestions header

The [promptSuggestionsHeader](https://ej2.syncfusion.com/react/documentation/api/ai-assistview/#promptsuggestionsheader) property allows you to set a descriptive header text that appears above the prompt suggestions.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/ai-assistview/assist-view/suggestion-header/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/ai-assistview/assist-view/suggestion-header/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/ai-assistview/assist-view/suggestion-header" %}

## Customizing user avatar appearance

The [promptIconCss](https://ej2.syncfusion.com/react/documentation/api/ai-assistview/#prompticoncss) property enables customization of the user avatar icon that appears alongside user prompts.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/ai-assistview/assist-view/prompt-icon/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/ai-assistview/assist-view/prompt-icon/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/ai-assistview/assist-view/prompt-icon" %}

## Adding response iconCss

The [responseIconCss](https://ej2.syncfusion.com/react/documentation/api/ai-assistview/#responseiconcss) property allows customization of the AI assistant avatar that appears alongside AI responses. By default, the `e-assistview-icon` class is added as the built-in AI AssistView response icon.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/ai-assistview/assist-view/response-icon/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/ai-assistview/assist-view/response-icon/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/ai-assistview/assist-view/response-icon" %}

## Show or hide clear button

The [showClearButton](https://ej2.syncfusion.com/react/documentation/api/ai-assistview/#showclearbutton) property controls the visibility of the clear button in the prompt input area. By default, its value is `false`, When the clear button is clicked, only the current prompt text is cleared, while the conversation history remains intact.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/ai-assistview/assist-view/clearbtn/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/ai-assistview/assist-view/clearbtn/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/ai-assistview/assist-view/clearbtn" %}