---
layout: post
title: Methods in React Block Editor component | Syncfusion
description: Checkout and learn about Methods with React Block Editor component of Syncfusion Essential JS 2 and more.
platform: ej2-react
control: Block Editor
documentation: ug
domainurl: ##DomainURL##
---

# Methods in React Block Editor component

The Block Editor component provides a comprehensive set of public methods that allow you to programmatically interact with and manipulate the editor content. These methods enable you to add, remove, update, and manage blocks, as well as control selection, formatting, and other editor operations.

## Block Management Methods

### Adding a block

You can add a new block to the editor at a specified position using the [addBlock](../api/blockeditor/#addblock) method. You can also insert the block before or after a target block.

{% raw %}
```typescript
// Add a new paragraph block after a specific block
const newBlock: BlockModel = {
    id: 'new-block-1',
    type: 'Paragraph',
    content: 'This is a new paragraph block'
};

editor.addBlock(newBlock, 'target-block-id', true); // true = after, false = before
```
{% endraw %}

### Removing a block

You can remove a block from the editor using the [removeBlock](../api/blockeditor/#removeblock) method.

{% raw %}
```typescript
// Remove a block by its ID
editor.removeBlock('block-to-remove-id');
```
{% endraw %}

### Moving a block

You can move a block from one position to another within the editor using the [moveBlock](../api/blockeditor/#moveblock) method.

{% raw %}
```typescript
// Move a block to a new position
editor.moveBlock('source-block-id', 'target-block-id');
```
{% endraw %}

### Updating a block

You can update the properties of an existing block using the [updateBlock](../api/blockeditor/#updateblock) method. Only the specified properties are modified while others remain unchanged. Returns `true` if the update was successful, `false` otherwise.

{% raw %}
```typescript
// Update block properties
editor.updateBlock('block-id', {
    isChecked: true
});
```
{% endraw %}

### Getting a block

You can retrieve a block model by its unique identifier using the [getBlock](../api/blockeditor/#getblock) method. Returns `null` if the block is not found.

{% raw %}
```typescript
// Get a specific block
const block: BlockModel = editor.getBlock('block-id');
if (block) {
    console.log('Block type:', block.type);
    console.log('Block content:', block.content);
}
```
{% endraw %}

### Getting block count

You can utilize the [getBlockCount](../api/blockeditor/#getblockcount) method to retrieve the total number of blocks in the editor.

{% raw %}
```typescript
// Get total block count
editor.getBlockCount();
```
{% endraw %}

Below example demonstrates the usage of the above methods.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/block-editor/methods/block/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/block-editor/methods/block/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/block-editor/methods/block" %}

## Selection and Cursor Methods

### Setting text selection

You can set the text selection within a specific content element using start and end positions with the [setSelection](../api/blockeditor/#setselection) method.

{% raw %}
```typescript
// Select text from position 5 to 15 in a content element
editor.setSelection('content-element-id', 5, 15);
```
{% endraw %}

### Setting cursor position

You can place the cursor at a specific position within a block using the [setCursorPosition](../api/blockeditor/#setcursorposition) method.

{% raw %}
```typescript
// Set cursor at position 10 in a block
editor.setCursorPosition('block-id', 10);
```
{% endraw %}

### Getting selected blocks

You can retrieve the currently selected blocks in the editor using the [getSelectedBlocks](../api/blockeditor/#getselectedblocks) method. Returns `null` if no blocks are selected.

{% raw %}
```typescript
// Get all selected blocks
const selectedBlocks: BlockModel[] = editor.getSelectedBlocks();
if (selectedBlocks) {
    console.log('Number of selected blocks:', selectedBlocks.length);
}
```
{% endraw %}

### Getting selection range

You can get the current selection range  in the editor using the [getRange](../api/blockeditor/#getrange) method. This method returns a `Range` object representing the selected text. Returns `null` if no selection is active.

{% raw %}
```typescript
// Get current selection range
const range: Range = editor.getRange();
if (range) {
    console.log('Selection start:', range.startOffset);
    console.log('Selection end:', range.endOffset);
}
```
{% endraw %}

### Setting selection range

You can set the selection range in the editor using the [selectRange](../api/blockeditor/#selectrange) method. This method accepts a `Range` object that defines the start and end positions of the selection within the editor.

{% raw %}
```typescript
// Create and select a custom range
const range: Range = document.createRange();
range.setStart(startNode, startOffset);
range.setEnd(endNode, endOffset);
editor.selectRange(range);
```
{% endraw %}

### Selecting a block

You can select a specific block in the editor using the [selectBlock](../api/blockeditor/#selectblock) method.

{% raw %}
```typescript
// Select a complete block
editor.selectBlock('block-id');
```
{% endraw %}

### Selecting all blocks

You can select all blocks in the editor using the [selectAllBlocks](../api/blockeditor/#selectallblocks) method.

{% raw %}
```typescript
// Select all content in the editor
editor.selectAllBlocks();
```
{% endraw %}

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/block-editor/methods/selection/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/block-editor/methods/selection/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/block-editor/methods/selection" %}

## Focus Management Methods

### FocusIn

You can utilize the [focusIn](../api/blockeditor/#focusin) method to give focus to the editor. This method ensures that the editor is ready for user input.

{% raw %}
```typescript
// Focus the editor
editor.focusIn();
```
{% endraw %}

### FocusOut

You can remove focus from the editor using the [focusOut](../api/blockeditor/#focusout) method. This method clears any active selections and makes the editor inactive for user input.

{% raw %}
```typescript
// Remove focus from the editor
editor.focusOut();
```
{% endraw %}

## Formatting Methods

### Executing toolbar action

You can execute a built-in toolbar formatting command using the [executeToolbarAction](../api/blockeditor/#executetoolbaraction) method. This method is used to apply formatting such as bold, italic, or color to the selected text.

{% raw %}
```typescript
// Apply bold formatting
editor.executeToolbarAction(BuiltInToolbar.Bold);

// Apply color formatting with a specific value
editor.executeToolbarAction(BuiltInToolbar.Color, '#ff0000');
```
{% endraw %}

### Enabling toolbar items

You can enable specific toolbar items in the inline toolbar using the [enableToolbarItems](../api/blockeditor/#enabletoolbaritems) method. This method accepts a single item or an array of items to be enabled.

{% raw %}
```typescript
// Enable specific toolbar item
editor.enableToolbarItems('bold');

// Work with multiple items
editor.enableToolbarItems(['bold', 'italic', 'underline']);
```
{% endraw %}

### Disabling toolbar items

You can disable specific toolbar items in the inline toolbar using the [disableToolbarItems](../api/blockeditor/#disabletoolbaritems) method. This method accepts a single item or an array of items to be disabled.

{% raw %}
```typescript
// Disable specific toolbar items
editor.disableToolbarItems('bold');

// Work with multiple items
editor.disableToolbarItems(['bold', 'italic', 'underline']);
```
{% endraw %}

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/block-editor/methods/formatting/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/block-editor/methods/formatting/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/block-editor/methods/formatting" %}

## Data Export Methods

### Getting data as JSON

You can export the editor content in JSON format using the [getDataAsJson](../api/blockeditor/#getdataasjson) method. This method allows you to export all blocks or a specific block.

{% raw %}
```typescript
// Get all blocks as JSON
const allBlocks = editor.getDataAsJson();

// Get a specific block as JSON
const specificBlock = editor.getDataAsJson('block-id');
```
{% endraw %}

### Getting data as HTML

You can export the editor content in HTML format using the [getDataAsHtml](../api/blockeditor/#getdataashtml) method. This method allows you to export all blocks or a specific block.

{% raw %}
```typescript
// Get all blocks as HTML
const allBlocksHtml: string = editor.getDataAsHtml();

// Get a specific block as HTML
const specificBlockHtml: string = editor.getDataAsHtml('block-id');
```
{% endraw %}

### Printing editor content

You can print the editor content using the [print](../api/blockeditor/#print) method. This method opens a print dialog with the current editor content formatted for printing.

{% raw %}
```typescript
// Print the editor content
editor.print();
```
{% endraw %}

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/block-editor/methods/data/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/block-editor/methods/data/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/block-editor/methods/data" %}