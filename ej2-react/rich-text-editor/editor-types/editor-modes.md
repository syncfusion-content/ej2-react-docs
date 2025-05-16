---
layout: post
title: Editor modes in React Rich Text Editor component | Syncfusion
description: Learn here all about Editor modes in Syncfusion React Rich text editor component of Syncfusion Essential JS 2 and more.
control: Editor modes 
platform: ej2-react
documentation: ug
domainurl: ##DomainURL##
---

# Editor Modes in React Rich Text Editor Component

The Rich Text Editor component used to create and edit the content and return valid HTML markup or markdown (MD) of the content. It supports the following two editing formation.

* HTML editor
* Markdown editor

## HTML editor

Rich Text Editor is a WYSIWYG editing control for formatting the word content as HTML.

The HTML editing mode is the default mode in Rich Text Editor to format the content through the available toolbar items to return the valid HTML markup. Set the [editorMode](https://ej2.syncfusion.com/react/documentation/api/rich-text-editor/#editormode) property as **HTML**.

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

Set the [editorMode](https://ej2.syncfusion.com/react/documentation/api/rich-text-editor/#editormode) property as **Markdown**, to create or edit the content and apply formatting to view markdown formatted content.

The third-party library such as `Marked` or any other library is used to convert markdown into HTML content.

* Supported tags are `h6`, `h5`, `h4`, `h3`, `h2`, `h1`, `blockquote`, `pre`, `p`, `OL`, and `UL`.
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

For further details on Markdown editing, refer to the [`Markdown`](../../markdown-editor/getting-started) section.

## See also

* [Markdown Editor](https://ej2.syncfusion.com/react/documentation/markdown-editor/getting-started)