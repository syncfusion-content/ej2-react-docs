---
layout: post
title: Events in React Block Editor component | Syncfusion
description: Checkout and learn about Events with React Block Editor component of Syncfusion Essential JS 2 and more.
platform: ej2-react
control: Block Editor
documentation: ug
domainurl: ##DomainURL##
---

# Events in React Block Editor component

The Block Editor component provides a comprehensive set of events that allow you to monitor and respond to various user interactions and editor state changes. These events enable you to implement custom behaviors, validation, logging, and integration with other systems.

## Created

The [created](../api/blockeditor/#created) event is triggered when the Block Editor component is successfully initialized and ready for use. This event is useful for performing setup operations or initializing additional features after the editor is created.

{% raw %}
```typescript
<BlockEditorComponent created={handleCreated}></BlockEditorComponent>
```
{% endraw %}

## ContentChanged

The [contentChanged](../api/blockeditor/#contentchanged) event is triggered whenever the content within the editor is modified. This includes content additions, deletions, or any structural modifications to the document.

{% raw %}
```typescript
<BlockEditorComponent contentChanged={handleContentChanged}></BlockEditorComponent>
```
{% endraw %}

## SelectionChanged

The [selectionChanged](../api/blockeditor/#selectionchanged) event is triggered when the user's text selection changes within the editor. This can be useful for updating UI elements based on the current selection.

{% raw %}
```typescript
<BlockEditorComponent selectionChanged={handleSelectionChanged}></BlockEditorComponent>
```
{% endraw %}

## UndoRedoPerformed

The [undoRedoPerformed](../api/blockeditor/#undoredoperformed) event is triggered when an undo or redo operation is executed. This event provides information about the action performed and the state before and after the operation.

{% raw %}
```typescript
<BlockEditorComponent undoRedoPerformed={handleUndoRedoPerformed}></BlockEditorComponent>
```
{% endraw %}

## BlockAdded

The [blockAdded](../api/blockeditor/#blockadded) event is triggered when a new block is added to the editor. This includes blocks added through user interaction, paste operations, or programmatic insertion.

{% raw %}
```typescript
<BlockEditorComponent blockAdded={handleBlockAdded}></BlockEditorComponent>
```
{% endraw %}

## BlockRemoved

The [blockRemoved](../api/blockeditor/#blockremoved) event is triggered when a block is removed from the editor. This can occur through user deletion, cut operations, or programmatic removal.

{% raw %}
```typescript
<BlockEditorComponent blockRemoved={handleBlockRemoved}></BlockEditorComponent>
```
{% endraw %}

## BlockMoved

The [blockMoved](../api/blockeditor/#blockmoved) event is triggered when blocks are moved from one position to another within the editor. This includes drag-and-drop operations, through keyboard shortcuts or programmatic block reordering.

{% raw %}
```typescript
<BlockEditorComponent blockMoved={handleBlockMoved}></BlockEditorComponent>
```
{% endraw %}

## BlockDragStart

The [blockDragStart](../api/blockeditor/#blockdragstart) event is triggered at the beginning of a block drag operation, providing information about the blocks being dragged and their initial position.

{% raw %}
```typescript
<BlockEditorComponent blockDragStart={handleBlockDragStart}></BlockEditorComponent>
```
{% endraw %}

## BlockDrag

The [blockDrag](../api/blockeditor/#blockdrag) event is triggered during a drag operation, providing information about the blocks being dragged and their current position.

{% raw %}
```typescript
<BlockEditorComponent blockDrag={handleBlockDrag}></BlockEditorComponent>
```
{% endraw %}

## BlockDrop

The [blockDrop](../api/blockeditor/#blockdrop) event is triggered when blocks are successfully dropped at their destination during a drag-and-drop operation.

{% raw %}
```typescript
<BlockEditorComponent blockDrop={handleBlockDrop}></BlockEditorComponent>
```
{% endraw %}

## Focus

The [focus](../api/blockeditor/#focus) event is triggered when the editor gains focus. This is useful for updating UI states and managing editor interactions.

{% raw %}
```typescript
<BlockEditorComponent focus={handleFocus}></BlockEditorComponent>
```
{% endraw %}

## Blur

The [blur](../api/blockeditor/#blur) event is triggered when the editor loses focus. This is commonly used for auto-saving content or hiding UI elements.

{% raw %}
```typescript
<BlockEditorComponent blur={handleBlur}></BlockEditorComponent>
```
{% endraw %}

## KeyActionExecuted

The [keyActionExecuted](../api/blockeditor/#keyactionexecuted) event is triggered when a keyboard shortcut is executed. This provides information about the key combination used and the corresponding action performed.

{% raw %}
```typescript
<BlockEditorComponent keyActionExecuted={handleKeyActionExecuted}></BlockEditorComponent>
```
{% endraw %}

## BeforePaste

The [beforePaste](../api/blockeditor/#beforepaste) event is triggered before content is pasted into the editor. This event allows you to modify or cancel the paste operation.

{% raw %}
```typescript
<BlockEditorComponent beforePaste={handleBeforePaste}></BlockEditorComponent>
```
{% endraw %}

## AfterPaste

The [afterPaste](../api/blockeditor/#afterpaste) event is triggered after content has been successfully pasted into the editor. This is useful for post-processing pasted content or updating related UI elements.

{% raw %}
```typescript
<BlockEditorComponent afterPaste={handleAfterPaste}></BlockEditorComponent>
```
{% endraw %}