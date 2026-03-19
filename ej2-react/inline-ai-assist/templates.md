---
layout: post
title: Template customization in React Inline AI Assist | Syncfusion
description:  Checkout and learn about templates with React Inline AI Assist component of Syncfusion Essential JS 2 and more details.
platform: ej2-react
control: Inline AI Assist
documentation: ug
domainurl: ##DomainURL##
---

# Template customization in React Inline AI Assist component

The Inline AI Assist provides the template options to customize the response and footer items.

## Editor template

You can use the [editorTemplate](../api/inline-ai-assist#editortemplate) property to customize the default footer area and manage prompt request actions in the Inline AI Assist. This allows users to create unique footers that meet their specific needs.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/inline-ai-assist/templates/editor-template/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/inline-ai-assist/templates/editor-template/app/index.tsx %}
{% endhighlight %}
{% highlight css tabtitle="index.css" %}
{% include code-snippet/inline-ai-assist/templates/editor-template/index.css %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/inline-ai-assist/templates/editor-template" %}

## Response template

You can use the [responseTemplate](../api/inline-ai-assist#responsetemplate) property to customize response items within the Inline AI Assist. The template context includes the `response` and `toolbarItems` values.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/inline-ai-assist/templates/response-template/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/inline-ai-assist/templates/response-template/app/index.tsx %}
{% endhighlight %}
{% highlight css tabtitle="index.css" %}
{% include code-snippet/inline-ai-assist/templates/response-template/index.css %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/inline-ai-assist/templates/response-template" %}
