---
layout: post
title: Disabling the Rich Text Editor | Syncfusion
description: Learn here all about Disabling editor in Syncfusion React Rich text editor component of Syncfusion Essential JS 2 and more.
control: Disabling editor
platform: ej2-react
documentation: ug
domainurl: ##DomainURL##
---

# Disabling the Editor in the React Rich Text Editor Component

The React Rich Text Editor component offers a feature to disable the editor, preventing any user interaction.This functionality is particularly useful when you need to display content without allowing modifications or when you want to temporarily restrict user input.

### How to Disable the Editor

 To disable the editor, set the [enabled](https://ej2.syncfusion.com/react/documentation/api/rich-text-editor/#enabled) property to `false`.

When disabled, the editor becomes non-interactive, ensuring that users cannot edit or modify the content.

Below are examples and code snippets demonstrating how to disable the Rich Text Editor by setting the `enabled` property to `false`.

`[Class-component]`

{% tabs %}
{% highlight js tabtitle="app.jsx" %}
{% include code-snippet/rich-text-editor/disable-editor-cs1/app/App.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="app.tsx" %}
{% include code-snippet/rich-text-editor/disable-editor-cs1/app/App.tsx %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/rich-text-editor/disable-editor-cs1" %}

`[Functional-component]`

{% tabs %}
{% highlight js tabtitle="app.jsx" %}
{% include code-snippet/rich-text-editor/disable-editor-cs2/app/App.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="app.tsx" %}
{% include code-snippet/rich-text-editor/disable-editor-cs2/app/App.tsx %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/rich-text-editor/disable-editor-cs2" %}
