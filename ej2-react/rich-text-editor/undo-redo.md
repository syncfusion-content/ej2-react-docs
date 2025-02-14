---
layout: post
title: Undo redo in React Rich text editor component | Syncfusion
description: Learn here all about Undo redo in Syncfusion React Rich text editor component of Syncfusion Essential JS 2 and more.
control: Undo redo 
platform: ej2-react
documentation: ug
domainurl: ##DomainURL##
---

# Undo redo in the Angular Rich Text Editor component

The Undo and Redo features in the Rich Text Editor allowing you to reverse or restore recent changes, providing a safety net for text edits and enhancing the overall editing experience.

There are two ways to perform Undo and Redo operations:

1. Click the Undo or Redo buttons on the toolbar.
2. Use keyboard shortcuts:
   - For Undo: `Ctrl + Z` (Windows) or `Cmd + Z` (Mac)
   - For Redo: `Ctrl + Y` (Windows) or `Cmd + Shift + Z` (Mac)

## Customizing Undo/Redo Timer

By default, the time interval for storing Undo/Redo actions is 300 milliseconds. You can adjust this interval using the [undoRedoTimer](https://ej2.syncfusion.com/react/documentation/api/rich-text-editor/#undoredotimer) property.

## Configuring Undo/Redo Steps

The editor allows up to 30 Undo/Redo actions by default. You can modify the number of undo/redo steps using the [undoRedoSteps](https://ej2.syncfusion.com/react/documentation/api/rich-text-editor/#undoredosteps) property.

Here's an example of how to customize both the Undo/Redo timer and steps:

`[Class-component]`

{% tabs %}
{% highlight js tabtitle="app.jsx" %}
{% include code-snippet/rich-text-editor/basic-cs50/app/App.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="app.tsx" %}
{% include code-snippet/rich-text-editor/basic-cs50/app/App.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/rich-text-editor/basic-cs50" %}

`[Functional-component]`

{% tabs %}
{% highlight js tabtitle="app.jsx" %}
{% include code-snippet/rich-text-editor/basic-cs51/app/App.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="app.tsx" %}
{% include code-snippet/rich-text-editor/basic-cs51/app/App.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/rich-text-editor/basic-cs51" %}