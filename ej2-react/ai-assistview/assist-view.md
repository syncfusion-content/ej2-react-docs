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

You can use the [prompt](https://ej2.syncfusion.com/react/documentation/api/ai-assist-view/#prompt) property to define the prompt text for the AI AssistView component.

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

You can use the [promptPlaceholder](https://ej2.syncfusion.com/react/documentation/api/ai-assist-view/#promptplaceholder) property to set the placeholder text for the prompt textarea. The default value is `Type prompt for assistance...`.

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

You can use the [prompts](https://ej2.syncfusion.com/react/documentation/api/ai-assist-view/#prompts) property to initialize the component with the configured data as a collection of prompts and responses or individual entries.

> The `prompts` collection stores all the prompts and responses generated.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/ai-assistview/assist-view/prompts/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/ai-assistview/assist-view/prompts/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/ai-assistview/assist-view/prompts" %}

## Adding prompt suggestions

You can use the [promptSuggestions](https://ej2.syncfusion.com/react/documentation/api/ai-assist-view/#promptsuggestions) property, to add the suggestions in both initial and on-demand which help users to refine their prompts. Additionally, custom header can be set for suggestions further enhancing the user experience.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/ai-assistview/assist-view/suggestions/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/ai-assistview/assist-view/suggestions/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/ai-assistview/assist-view/suggestions" %}

### Adding suggestion headers

You can use the [promptSuggestionsHeader](https://ej2.syncfusion.com/react/documentation/api/ai-assist-view/#promptsuggestionsheader) property to set the header text for the prompt suggestions in the AI AssistView.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/ai-assistview/assist-view/suggestion-header/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/ai-assistview/assist-view/suggestion-header/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/ai-assistview/assist-view/suggestion-header" %}

## Adding prompt iconCss

You can customize the appearance of the prompter avatar by using the [promptIconCss](https://ej2.syncfusion.com/react/documentation/api/ai-assist-view/#prompticoncss) property.

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

You can use the [responseIconCss](https://ej2.syncfusion.com/react/documentation/api/ai-assist-view/#responseiconcss) property to customize the appearance of the responder avatar. By default, the `e-assistview-icon` class is added as the built-in AI AssistView response icon.

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

You can use the [showClearButton](https://ej2.syncfusion.com/react/documentation/api/ai-assist-view/#showclearbutton) property to show or hide the clear button. By default, its value is `false`, when the clear button is clicked, the prompt text entered will be cleared.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/ai-assistview/assist-view/clearbtn/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/ai-assistview/assist-view/clearbtn/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/ai-assistview/assist-view/clearbtn" %}
