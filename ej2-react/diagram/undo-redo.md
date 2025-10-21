---
layout: post
title: Undo redo in React Diagram Component | Syncfusion®
description: Learn how to implement undo and redo functionality with history management in Syncfusion® React Diagram Component of Syncfusion Essential® JS 2 and more.
control: Undo redo 
platform: ej2-react
documentation: ug
domainurl: ##DomainURL##
---

# Undo and Redo in React Diagram Component

The React Diagram component automatically tracks all user interactions and programmatic changes, providing robust undo and redo functionality. This feature enables users to reverse or restore actions, making diagram editing more intuitive and error-tolerant.

## Basic Undo and Redo Operations

The diagram provides built-in support to track changes made through both user interactions and public API calls. These changes can be reversed or restored using keyboard shortcuts or programmatic commands.

N> The UndoRedo module must be injected to access undo/redo features in the diagram component.

### Keyboard Shortcuts

Use these standard keyboard shortcuts for quick undo/redo operations:
- **Undo**: `Ctrl+Z`
- **Redo**: `Ctrl+Y`

### Programmatic undo and redo

The [`undo`](https://helpej2.syncfusion.com/react/documentation/api/diagram/#undo) and [`redo`](https://helpej2.syncfusion.com/react/documentation/api/diagram/#redo) methods allow you to control undo/redo operations programmatically. The following example demonstrates how to implement these methods:

```ts

// initialize Diagram component
let diagramInstance: DiagramComponent;
function App() {
  return (
    <DiagramComponent
      id="container"
      ref={(diagram) => (diagramInstance = diagram)}
      width={'100%'}
      height={'600px'}
    />
  );
}
const root = ReactDOM.createRoot(document.getElementById('diagram'));
root.render(<App />);
// Reverts the last action performed
diagramInstance.undo();
// Restores the last undone action
diagramInstance.redo();
```
### Enabling and Disabling Undo/Redo

Undo/Redo for diagram can be enabled/disabled with the [`constraints`](https://helpej2.syncfusion.com/react/documentation/api/diagram/diagramConstraints/) property of the diagram component.

### History Change Events

The [`historyChange`](https://helpej2.syncfusion.com/react/documentation/api/diagram/#historychange) event triggers whenever an action is undone or redone, allowing you to respond to history state changes.

## Advanced history management

### Grouping multiple actions

Group related changes into a single undo/redo operation using the history grouping feature. This approach allows users to undo or redo multiple related changes simultaneously rather than reversing each action individually.

Use [`startGroupAction`](https://helpej2.syncfusion.com/react/documentation/api/diagram/#startgroupaction)to begin grouping actions and [`endGroupAction`](https://helpej2.syncfusion.com/react/documentation/api/diagram/#endgroupaction) to complete the group. The following example shows how to group multiple fill color changes:

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/diagram/undoredo/groupAction-cs1/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/diagram/undoredo/groupAction-cs1/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/diagram/undoredo/groupAction-cs1" %}

### Managing History Stack Size
The [`stackLimit`](https://helpej2.syncfusion.com/react/documentation/api/diagram/history/#stacklimit) property controls the maximum number of actions stored in the history manager. Setting an appropriate limit helps manage memory usage in applications with extensive editing operations.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/diagram/undoredo/es5Connect-cs6/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/diagram/undoredo/es5Connect-cs6/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/diagram/undoredo/es5Connect-cs6" %}

### Restricting History Logging

Prevent specific actions from being recorded in the history using the [`canLog`](https://helpej2.syncfusion.com/react/documentation/api/diagram/history/#canlog) property. This feature is useful when certain operations should not be undoable.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/diagram/undoredo/es5Connect-cs5/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/diagram/undoredo/es5Connect-cs5/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/diagram/undoredo/es5Connect-cs5" %}

## History Stack Inspection

### Accessing Undo and Redo Stacks

The [`undoStack`](https://helpej2.syncfusion.com/react/documentation/api/diagram/history/#undostack) property is used to get the collection of undo actions which should be performed in the diagram. The [`redoStack`](https://helpej2.syncfusion.com/react/documentation/api/diagram/history/#redostack) property is used to get the collection of redo actions which should be performed in the diagram. The undoStack/redoStack is the read-only property.

```ts
let diagramInstance: DiagramComponent;
function App() {
  return (
    <DiagramComponent
      id="container"
      ref={(diagram) => (diagramInstance = diagram)}
      width={'100%'}
      height={'600px'}
      nodes={nodes}
    >
      <Inject services={[UndoRedo]} />
    </DiagramComponent>
  );
}
const root = ReactDOM.createRoot(document.getElementById('diagram'));
root.render(<App />);
//get the collection of undoStack objects
let undoStack = diagramInstance.historyManager.undoStack;
//get the collection of redoStack objects
let redoStack = diagramInstance.historyManager.redoStack;
```

### Checking Availability of Undo and Redo Operations

The [`canUndo`](https://helpej2.syncfusion.com/react/documentation/api/diagram/history/#canundo) and [`canRedo`](https://helpej2.syncfusion.com/react/documentation/api/diagram/history/#canredo) properties indicate whether undo or redo operations are available. These properties return **true** when actions exist in their respective history stacks.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/diagram/undoredo/es5Undo-cs1/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/diagram/undoredo/es5Undo-cs1/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/diagram/undoredo/es5CurrentEntry-cs1" %}

### Current Entry Tracking

During user interactions with nodes or connectors, the current history entry is stored in the [`currentEntry`](https://helpej2.syncfusion.com/react/documentation/api/diagram/history/#currententry) property of the [`historyManager`](https://helpej2.syncfusion.com/react/documentation/api/diagram/#historymanager).

The following code shows how to get the current entry from the diagram history:

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/diagram/undoredo/es5CurrentEntry-cs1/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/diagram/undoredo/es5CurrentEntry-cs1/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/diagram/undoredo/es5CurrentEntry-cs1" %}

## History Management Utilities

### Clearing History

The [`clearHistory`](https://helpej2.syncfusion.com/react/documentation/api/diagram/#clearhistory)  method to remove all recorded actions from both undo and redo history stacks:

```ts
//Clears all the histories
diagramInstance.clearHistory();

```
### Retrieving History Stacks

The [`getHistoryStack`](https://helpej2.syncfusion.com/react/documentation/api/diagram/#gethistorystack) method retrieves either the [`undoStack`](https://helpej2.syncfusion.com/react/documentation/api/diagram/history/#undostack) or [`redoStack`](https://helpej2.syncfusion.com/react/documentation/api/diagram/history/#redostack) from the history manager. Pass **true** to get the undo stack or false to get the redo stack:

```ts
// Fetch undoStack from history manager
diagramInstance.getHistoryStack(true)

// Fetch redoStack from history manager
diagramInstance.getHistoryStack(false)

```

## Event Handling

### History Change Event

The [`historyChange`](https://helpej2.syncfusion.com/react/documentation/api/diagram/iHistoryChangeArgs/) event triggers whenever interactions with nodes and connectors occur. This event provides an opportunity to implement custom logic or UI updates based on history state changes:

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/diagram/undoredo/es5HistoryChange-cs1/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/diagram/undoredo/es5HistoryChange-cs1/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/diagram/undoredo/es5HistoryChange-cs1" %}

While interacting with diagram, this event can be used to do the customization.
