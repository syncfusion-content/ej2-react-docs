---
layout: post
title: Editor mode in React Rich Text Editor Component | Syncfusion
description: Learn here all about Editor mode in Syncfusion React Rich Text Editor Component of Syncfusion Essential JS 2 and more.
control: Editor mode
platform: ej2-react
documentation: ug
domainurl: ##DomainURL##
---

# Editor Modes in React Rich Text Editor Component

The Rich Text Editor component allows you to create and edit content, returning it as either valid HTML or Markdown (MD). It supports the following two editing formats:

* HTML editor
* Markdown editor

## HTML editor

Rich Text Editor is a WYSIWYG editing control for formatting the word content as HTML.

HTML editing is the default mode of the Rich Text Editor. In this mode, you can format content using the available toolbar commands, and the editor will return valid HTML markup. To explicitly set this mode, set the [editorMode](https://ej2.syncfusion.com/react/documentation/api/rich-text-editor/#editormode) property as `HTML`.

> To create Rich Text Editor with HTML editing feature, inject the `HtmlEditor` module to the RTE using the `RichTextEditor.Inject(HtmlEditor)` method.

`[Class-component]`

{% tabs %}
{% highlight js tabtitle="app.jsx" %}
{% include code-snippet/rich-text-editor/basic-cs3/app/App.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="app.tsx" %}
{% include code-snippet/rich-text-editor/basic-cs3/app/App.tsx %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/rich-text-editor/basic-cs3" %}

`[Functional-component]`

{% tabs %}
{% highlight js tabtitle="app.jsx" %}
{% include code-snippet/rich-text-editor/basic-cs4/app/App.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="app.tsx" %}
{% include code-snippet/rich-text-editor/basic-cs4/app/App.tsx %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/rich-text-editor/basic-cs4" %}

## IFrame editor

The IFrame editor mode enables content editing within an iframe, isolating styles from the main page.

For more details, refer to the [Iframe Editor](https://ej2.syncfusion.com/react/documentation/rich-text-editor/iframe) documentation.

## Markdown editor

To create or edit content in Markdown format, set the [editorMode](https://ej2.syncfusion.com/react/documentation/api/rich-text-editor/#editormode) property as **Markdown**, to create or edit the content and apply formatting to view markdown formatted content.

The third-party library such as `Marked` or any other library is used to convert markdown into HTML content.

* The Supported Tags are `h6`, `h5`, `h4`, `h3`, `h2`, `h1`, `blockquote`, `pre`, `p`, `ol`, `ul`.
* Supported selection tags are `Bold`, `Italic`, `StrikeThrough`, `InlineCode`, `SubScript`, `SuperScript`, `UpperCase`, and `LowerCase`.

> To create Rich Text Editor with Markdown editing feature, inject the `MarkdownEditor` module to the Rich Text Editor using the `RichTextEditor.Inject(MarkdownEditor)` method.

`[Class-component]`

{% tabs %}
{% highlight js tabtitle="app.jsx" %}
{% include code-snippet/rich-text-editor/markdown-cs1/app/App.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="app.tsx" %}
{% include code-snippet/rich-text-editor/markdown-cs1/app/App.tsx %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/rich-text-editor/markdown-cs1" %}

`[Functional-component]`

{% tabs %}
{% highlight js tabtitle="app.jsx" %}
{% include code-snippet/rich-text-editor/markdown-cs2/app/App.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="app.tsx" %}
{% include code-snippet/rich-text-editor/markdown-cs2/app/App.tsx %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/rich-text-editor/markdown-cs2" %}

For further details on Markdown editing, refer to the [Markdown](../../markdown-editor/getting-started) section.

## See also

* [Markdown Editor](https://ej2.syncfusion.com/react/documentation/markdown-editor/getting-started)