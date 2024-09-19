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

The AI AssistView provides several template options to customize the banner, prompt, response, suggestions and footer items.

## Banner template

You can use the `bannerTemplate` property to customize the banner view in the AI AssistView.

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

You can use the `promptItemTemplate` property to customize the prompt items in the AI AssistView. The template context includes `prompt`, `toolbarItems` and `index` items.

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

You can use the `responseItemTemplate` property to customize response items within the AI AssistView. The template context includes the `prompt`, `response`, `index`, `toolbarItems` and `output` items.

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

You can use the `promptSuggestionItemTemplate` property to customize the prompt suggestion items in the AI AssistView. The template context includes the `index` and `promptSuggestion`.

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

You can use the `footerTemplate` property to customize the footer items in the AI AssistView.

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
