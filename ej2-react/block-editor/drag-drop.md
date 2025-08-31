---
layout: post
title: Drag and drop in React Block Editor component | Syncfusion
description: Checkout and learn about Drag and drop with React Block Editor component of Syncfusion Essential JS 2 and more.
platform: ej2-react
control: Block Editor
documentation: ug
domainurl: ##DomainURL##
---

# Drag and drop in the React Block Editor component

The drag and drop feature in the Block Editor allows users to intuitively rearrange content blocks by dragging them to different positions within the editor.

## Enable Drag and Drop

You can control the drag and drop functionality within the Block Editor using the [enableDragAndDrop](../api/blockeditor/#enabledraganddrop) property. This feature is enabled by default (`true`).

When drag and drop is enabled, users can rearrange blocks in the following ways:

The Block Editor supports both single and multiple block dragging. Users can drag individual blocks or select multiple blocks and drag them together to a new position.

- **Single Block Dragging**: To drag a single block, hover over it to reveal the drag handle. Click and hold the handle, then drag the block to a new position.

- **Multiple Block Dragging**: To move multiple blocks, first select the desired blocks. Once selected, click and drag the entire group to a new location.

During the drag operation, a visual indicator will show precisely where the blocks will be placed when dropped, ensuring accurate placement.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/block-editor/drag-drop/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/block-editor/drag-drop/app/index.tsx %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/block-editor/drag-drop" %}
