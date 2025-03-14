---
layout: post
title: Customizing Markdown Syntax in React Markdown Editor component | Syncfusion
description: Learn here all about Customizing Markdown Syntax in Syncfusion React Markdown Editor component of Syncfusion Essential JS 2 and more.
control: Customizing Markdown Syntax 
platform: ej2-react
documentation: ug
domainurl: ##DomainURL##
---

# Customizing Markdown Syntax in React Markdown Editor Component

The React Markdown Editor allows you to modify the default Markdown syntax to match your preferred formatting style. You can override the default syntax using the [formatter](https://ej2.syncfusion.com/react/documentation/api/rich-text-editor/#formatter) property, enabling a customized Markdown experience.

For instance, you can define custom symbols for different formatting options:

* Use + for unordered lists instead of `-`.
* Use 1., 2., 3. for ordered lists.
* Use __text__ for bold text instead of **text**.
* Use _text_ for italic text instead of *text*.

The following example demonstrates how to customize Markdown tags in the editor:

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