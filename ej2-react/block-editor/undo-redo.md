---
layout: post
title: Undo redo in React Block Editor component | Syncfusion
description: Checkout and learn about Undo redo with React Block Editor component of Syncfusion Essential JS 2 and more.
platform: ej2-react
control: Block Editor
documentation: ug
domainurl: ##DomainURL##
---

# Undo redo in React Block Editor component

The undo/redo feature in Block Editor enables users to revert or reapply changes made to the content, offering a safety net for edits and enhancing the overall editing experience.

## Keyboard shortcuts

| Action | Windows | Mac | Description |
|------------|--------------|---------|-----------------|
| Undo       | Ctrl + Z     | ⌘ + Z   | Reverts the last action. |
| Redo       | Ctrl + Y     | ⌘ + Y | Reapplies the last undone action. |

## Configuring Undo/Redo stack

Block Editor allows up to `30` Undo/Redo actions by default. You can modify the number of undo/redo steps using the [undoRedoStack](../api/blockeditor/#undoRedoStack) property.

Below example demonstrates the Block Editor with undo/redo stack set to `20` actions.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/block-editor/undo-redo/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/block-editor/undo-redo/app/index.tsx %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/block-editor/undo-redo" %}
