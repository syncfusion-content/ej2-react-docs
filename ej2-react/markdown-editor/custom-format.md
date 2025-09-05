---
layout: post
title: Custom Markdown Syntax in React Markdown Editor component | Syncfusion
description: Learn how to customize Markdown syntax in the Syncfusion React Markdown Editor component of Syncfusion Essential JS 2 and more.
control: Customizing Markdown Syntax 
platform: ej2-react
documentation: ug
domainurl: ##DomainURL##
---

# Custom Markdown Syntax in React Markdown Editor Component

The React Markdown Editor allows customization of default Markdown syntax to match preferred formatting styles. You can override the default syntax using the [formatter](https://ej2.syncfusion.com/react/documentation/api/rich-text-editor/#formatter) property, enabling a customized Markdown experience.

## Customizing markdown syntax  

You can define custom symbols for different Markdown formatting options:

* Use `+` for unordered lists instead of `-`.
* Use `__text__` for bold text instead of `**text**`.
* Use `_text_` for italic text instead of `*text*`.

The following example customizes Markdown tags:

`[Class-component]`

{% tabs %}
{% highlight js tabtitle="app.jsx" %}
{% include code-snippet/markdown-editor/custom-markdown-syntax-cs1/app/App.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="app.tsx" %}
{% include code-snippet/markdown-editor/custom-markdown-syntax-cs1/app/App.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/markdown-editor/custom-markdown-syntax-cs1" %}

`[Functional-component]`

{% tabs %}
{% highlight js tabtitle="app.jsx" %}
{% include code-snippet/markdown-editor/custom-markdown-syntax-cs2/app/App.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="app.tsx" %}
{% include code-snippet/markdown-editor/custom-markdown-syntax-cs2/app/App.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/markdown-editor/custom-markdown-syntax-cs2" %}