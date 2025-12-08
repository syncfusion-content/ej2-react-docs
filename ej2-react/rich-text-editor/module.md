---
layout: post
title: Feature Modules with React Rich Text Editor component | Syncfusion
description:  Learn about feature modules in the Syncfusion React Rich Text Editor component of Syncfusion Essential JS 2 and more details.
control: Modules
platform: ej2-react
documentation: ug
domainurl: ##DomainURL##
---

# Module in React Rich Text Editor

The React Rich Text Editor employs a modular architecture, allowing selective inclusion of features to optimize performance and customize functionality. This approach reduces bundle size and enhances flexibility for developers adapting the editor to specific use cases.

## What are modules in React Rich Text Editor?

Modules in the React Rich Text Editor are self-contained features that can be enabled or disabled based on application requirements. These modules,  @syncfusion/ej2-react-richtexteditor package, can be injected to extend and enhance the editor's functionality.

For example, modules such as `Toolbar`, `Link`, `Image`, `HtmlEditor`, and `QuickToolbar` enable specific tools and behavior in the Rich Text Editor interface.

## How to import and inject modules

To utilize a module, in the React Rich Text Editor, you must:

* Import the required module from the Syncfusion package.

* Inject it using the `<Inject>` component inside the Rich Text Editor.

The following example demonstrates how to import and inject modules.

`[Class-component]`

{% tabs %}
{% highlight js tabtitle="app.jsx" %}
{% include code-snippet/rich-text-editor/basic-cs1/app/App.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="app.tsx" %}
{% include code-snippet/rich-text-editor/basic-cs1/app/App.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/rich-text-editor/basic-cs1" %}

`[Functional-component]`

{% tabs %}
{% highlight js tabtitle="app.jsx" %}
{% include code-snippet/rich-text-editor/basic-cs2/app/App.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="app.tsx" %}
{% include code-snippet/rich-text-editor/basic-cs2/app/App.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/rich-text-editor/basic-cs2" %}

## Available modules in Rich Text Editor

| Module | Description |
|------|-------------|
| `Toolbar` | Inject this module to enable the toolbar to access text formatting and Rich Text Editor features like bold, italic, font settings, and alignment tools. |
| `Link` | Inject this module to insert, edit, and remove hyperlinks within the content. |
| `Image` | Inject this module to insert and manage images in the Rich Text Editor. |
| `Table` | Inject this module for inserting and editing HTML tables in the Rich Text Editor. |
| `Count` | Inject this module to enable live character counting capabilities in the Rich Text Editor. |
| `HtmlEditor` | Inject this module to support the HTML source editing view, allowing users to switch between preview and source code modes. |
| `MarkdownEditor` | Inject this module to enable editing support, allowing users to write and preview content using standard Markdown syntax |
| `QuickToolbar` | Inject this module to displays a floating toolbar near selected content like images or links for quick actions. |
| `Resize` | Injecting this module enables users to resize the height and width of the editor area interactively using a resizable handle in the Rich Text Editor. |
| `FileManager` | Injecting this module provides users with a dialog interface to browse, upload, and insert files (especially images) from a server or cloud storage provider directly into the Rich Text Editor. |
| `PasteCleanup` | Inject this module to keep or clean up the formatting of pasted content in Rich Text Editor. |
| `FormatPainter` | Injecting this module allows users to copy formatting (like bold, italic, font size, color, etc.) from one section of text and apply it to another in the Rich Text Editor. |
| `EmojiPicker` | Injecting this module allows users to search, and insert emojis into the Rich Text Editor. |
| `SlashMenu` | Injecting this module allows users to apply formats, open dialogs by typing "/" in the Rich Text Editor. |
| `ImportExport` | Injecting this module allows users to import content from Word documents into the Rich Text Editor and export the Rich Text Editor's content into Word and PDF files |
| `CodeBlock` | Injecting this module allows users to format the selected text as inline code, highlighting code snippets within the text in the Rich Text Editor. |
| `AutoFormat` | Injecting this module automatically converts Markdown syntax into HTML as you type, supporting inline and block-level formatting for a seamless editing experience. |
| `Audio` | Injecting this module allows users to insert and manage audios in the Rich Text Editor. |
| `Video` | Injecting this module allows users to insert and manage videos in the Rich Text Editor. |
| `ClipboardCleanup` | Injecting this module allows to automatically clean clipboard content during copy and cut—removing unwanted inline styles while preserving structure. |

These modules should be injected using the `<Inject>` component inside the Rich Text Editor component.