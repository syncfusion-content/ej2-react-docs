---
layout: post
title: Label Events in React Diagram | Syncfusion®
description: Listen for React Diagram annotation events including KeyDown, KeyUp, DoubleClick, TextEdit, and SelectionChange to drive custom edit-mode behavior.
control: Label Events
platform: ej2-react
documentation: ug
domainurl: ##DomainURL##
---

# Label Events in React Diagram

Annotations in React Diagram components are text labels that can be added to nodes and connectors to provide additional information. When users interact with these annotations, various events are triggered that allow developers to customize behavior and respond to user actions.

The diagram component provides several annotation-related events that fire during different interaction scenarios:

- **KeyDown** - Triggered when any key is pressed while the diagram (or an annotation) has focus.
- **KeyUp** - Triggered when a pressed key is released while the diagram (or an annotation) has focus.
- **DoubleClick** - Triggered when double-clicking on diagram elements such as nodes, connectors, or the diagram surface; activates annotation editing if an annotation is present.
- **TextEdit** - Triggered when annotation text editing is completed and focus is lost.
- **SelectionChange** - Triggered when annotations are selected or deselected.

## KeyDown Event

The [`keyDown`](https://helpej2.syncfusion.com/react/documentation/api/diagram/iKeyEventArgs) event triggers whenever any key is pressed while interacting with the diagram. This event provides access to key information and allows modification of diagram elements based on keyboard input.

The event arguments include details about the pressed key, modifier keys, and the current diagram state. Useful members on `IKeyEventArgs` include `key` (the pressed key), `keyCode`, `altKey`, `ctrlKey`, and `shiftKey`. The following example demonstrates capturing the keyDown event to modify a node's fill color with each key press:

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/diagram/annotations/es5Event-cs1/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/diagram/annotations/es5Event-cs1/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/diagram/annotations/es5Event-cs1" %}

## KeyUp Event

The [`keyUp`](https://helpej2.syncfusion.com/react/documentation/api/diagram/iKeyEventArgs) event triggers when a pressed key is released. This event is useful for handling scenarios where the complete key press cycle (press and release) needs to be captured, such as implementing keyboard shortcuts or text input validation.

Unlike the keyDown event, keyUp ensures that the key action has been fully completed. The following example shows how to capture the keyUp event and modify the fill color of a node:

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/diagram/annotations/es5Event-cs2/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/diagram/annotations/es5Event-cs2/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/diagram/annotations/es5Event-cs2" %}

## DoubleClick Event

The [`doubleClick`](https://helpej2.syncfusion.com/react/documentation/api/diagram/iDoubleClickEventArgs) event triggers when users double-click on nodes, connectors, or the diagram surface. This interaction automatically activates annotation editing mode for the clicked element, allowing users to modify text content directly.

The event provides information about the clicked element, mouse position, and current selection state. Useful members on `IDoubleClickEventArgs` include `element` (the clicked diagram model), `source`, `position`, and `cause`. Developers can use this event to implement custom behaviors or prevent default annotation editing when needed:

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/diagram/annotations/es5Event-cs3/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/diagram/annotations/es5Event-cs3/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/diagram/annotations/es5Event-cs3" %}

## TextEdit Event

The [`textEdit`](https://helpej2.syncfusion.com/react/documentation/api/diagram/iTextEditEventArgs) event triggers when annotation text editing is completed and focus moves away from the text editor. This event occurs after users finish modifying annotation content and provides access to both the old and new text values.

This event is particularly useful for implementing text validation, formatting, or saving changes to external data sources. The handler receives an `ITextEditEventArgs` object with `newValue`, `oldValue`, `annotation`, and `cancel` (set to `true` to discard the change).

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/diagram/annotations/es5Event-cs4/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/diagram/annotations/es5Event-cs4/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/diagram/annotations/es5Event-cs4" %}

### Preventing Text Changes

The textEdit event allows prevention of text modifications by setting the `cancel` property to **true**. This is useful for implementing validation rules or maintaining read-only annotations:

```javascript
textEdit={(args) => {
  // Prevents any new content from being added to the annotation
  args.cancel = true;
}}
```

## SelectionChange Event

The [`selectionChange`](https://helpej2.syncfusion.com/react/documentation/api/diagram/iSelectionChangeEventArgs) event triggers when annotations of nodes or connectors are selected or deselected within the diagram. This event provides detailed information about the selection state changes and affected elements.

The event is useful for implementing custom selection behaviors, updating property panels, or synchronizing selection state with other application components.

```javascript
import * as React from "react";
import * as ReactDOM from "react-dom";
import { DiagramComponent } from "@syncfusion/ej2-react-diagrams";

let node = [{
  offsetX: 250,
  offsetY: 250,
  width: 100,
  height: 100,
  annotations: [{ content: 'Annotation' }]
}];

function App() {
  const selectionChange = (args) => {
    // Handle selection change for annotations
  };
  return (
    <DiagramComponent
      id="container"
      width={'100%'}
      height={'600px'}
      nodes={node}
      selectionChange={selectionChange}
    />
  );
}

const root = ReactDOM.createRoot(document.getElementById('diagram'));
root.render(<App />);
```

### Preventing Selection

Selection can be prevented by setting the `cancel` property of [`ISelectionChangeEventArgs`](https://helpej2.syncfusion.com/react/documentation/api/diagram/iSelectionChangeEventArgs) to **true** during the selection change process:

```javascript
selectionChange={(args) => {
  if (args.state === 'Changing') {
    // Prevents selection
    args.cancel = true;
  }
}}
```