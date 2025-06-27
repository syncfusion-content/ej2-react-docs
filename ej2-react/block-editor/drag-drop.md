---
layout: post
title: Drag and drop in React Block Editor component | Syncfusion
description: Checkout and learn about Drag and drop with React Block Editor component of Syncfusion Essential JS 2 and more.
platform: ej2-react
control: Block Editor
documentation: ug
domainurl: ##DomainURL##
---

# Drag and drop in React Block Editor component

The drag and drop feature in Block Editor allows users to easily rearrange blocks within the editor by dragging them to different positions.

## Enable Drag and Drop

You can control drag and drop operations within Block Editor using the [enableDragAndDrop](../api/blockeditor/#enabledraganddrop) property. By default, it is set to `true`.

## Dragging blocks

When drag and drop is enabled, users can rearrange blocks in the following ways:

The Block Editor supports both single and multiple block dragging. Users can drag individual blocks or select multiple blocks and drag them together to a new position.

- **Single Block Dragging**: For single block, users can hover over a block to reveal the drag handle, then click and drag to move it to a new position.

- **Multiple Block Dragging**: For multiple blocks, users first select the blocks they want to move. Once selected, users can drag the entire group to a new position.

During the drag operation, the editor provides visual cues to indicate where the blocks will be positioned when dropped. This helps users precisely place blocks where they want it.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/block-editor/drag-drop/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/block-editor/drag-drop/app/index.tsx %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/block-editor/drag-drop" %}
