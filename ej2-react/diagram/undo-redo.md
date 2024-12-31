---
layout: post
title: Undo redo in React Diagram component | Syncfusion®
description: Learn here all about Undo redo in Syncfusion® React Diagram component of Syncfusion Essential® JS 2 and more.
control: Undo redo 
platform: ej2-react
documentation: ug
domainurl: ##DomainURL##
---

# Undo redo in React Diagram component

Diagram tracks the history of actions that are performed after initializing the diagram and provides support to reverse and restore those changes.

## Undo and redo

Diagram provides built-in support to track the changes that are made through interaction and through public APIs. The changes can be reverted or restored either through shortcut keys or through commands.

N> If you want to use Undo-Redo in diagram, you need to inject UndoRedo in the diagram.

## Undo/redo through shortcut keys

Undo/redo commands can be executed through shortcut keys. Shortcut key for undo is **`Ctrl+z`** and shortcut key for redo is **`Ctrl+y`**.

## Undo/redo through public APIs

The client-side methods [`undo`](https://helpej2.syncfusion.com/react/documentation/api/diagram/#undo) and [`redo`](https://helpej2.syncfusion.com/react/documentation/api/diagram/#redo) help you to revert/restore the changes. The following code example illustrates how to undo/redo the changes through script.

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

Undo/Redo for diagram can be enabled/disabled with the [`constraints`](https://helpej2.syncfusion.com/react/documentation/api/diagram/diagramConstraints/) property of diagram.

When a change in the diagram is reverted or restored (undo/redo), the [`historyChange`](https://helpej2.syncfusion.com/react/documentation/api/diagram/#historychange) event gets triggered.

## Group multiple changes

History list allows to revert or restore multiple changes through a single undo/redo command. For example, revert/restore the fill color change of multiple elements at a time.

The diagram method [`startGroupAction`](https://helpej2.syncfusion.com/react/documentation/api/diagram/#startgroupaction) allows you to log multiple actions at a time in the history manager stack. It is easier to undo or revert the changes made in the diagram in a single undo/redo process instead of reverting every actions one by one.The diagram method [`endGroupAction`](https://helpej2.syncfusion.com/react/documentation/api/diagram/#endgroupaction) allows you to end the group actions that are stored in the stack history. The following code illustrates how to undo/redo multiple fillColor change of a node at a time.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/diagram/undoredo/groupAction-cs1/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/diagram/undoredo/groupAction-cs1/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/diagram/undoredo/groupAction-cs1" %}

## Stack Limit

The [`stackLimit`](https://helpej2.syncfusion.com/react/documentation/api/diagram/history/#stacklimit) property of history manager is used to limits the number of actions to be stored on the history manager.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/diagram/undoredo/es5Connect-cs6/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/diagram/undoredo/es5Connect-cs6/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/diagram/undoredo/es5Connect-cs6" %}

## Restrict Undo/Redo

Undo, Redo process can be avoided for particular element by using [`canLog`](https://helpej2.syncfusion.com/react/documentation/api/diagram/history/#canlog) property in the history manager. The following example illustrates how to prevent history entry using `canLog` function.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/diagram/undoredo/es5Connect-cs5/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/diagram/undoredo/es5Connect-cs5/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/diagram/undoredo/es5Connect-cs5" %}

## undo/redo stack

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

## canUndo/canRedo 

The [`canUndo`](https://helpej2.syncfusion.com/react/documentation/api/diagram/history/#canundo) property returns true if there are actions in the undo history stack; otherwise, it returns false. This property helps identify whether any actions are present in the undo stack.The [`canRedo`](https://helpej2.syncfusion.com/react/documentation/api/diagram/history/#canredo) property returns true if there are actions in the redo history stack; otherwise, it returns false. This property helps identify whether any actions are present in the redo stack.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/diagram/undoredo/es5Undo-cs1/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/diagram/undoredo/es5Undo-cs1/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/diagram/undoredo/es5CurrentEntry-cs1" %}

## Current entry

While performing interactions with a node or connector, the current history entry is added to the [`currentEntry`](https://helpej2.syncfusion.com/react/documentation/api/diagram/history/#currententry) property of the [`historyManager`](https://helpej2.syncfusion.com/react/documentation/api/diagram/#historymanager).

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

## Clear history

The [`clearHistory`](https://helpej2.syncfusion.com/react/documentation/api/diagram/#clearhistory) method of diagram is used to remove all the recorded actions from the undo and redo history.

```ts
//Clears all the histories
diagramInstance.clearHistory();

```
## Get history stack

The [`getHistoryStack`](https://helpej2.syncfusion.com/react/documentation/api/diagram/#gethistorystack) method of the diagram retrieves the [`undoStack`](https://helpej2.syncfusion.com/react/documentation/api/diagram/history/#undostack) or [`redoStack`](https://helpej2.syncfusion.com/react/documentation/api/diagram/history/#redostack) from the historyManager. This method takes a single parameter, isUndoStack. Pass true to get the undoStack or false to get the redoStack.

```ts
// Fetch undoStack from history manager
diagramInstance.getHistoryStack(true)

// Fetch redoStack from history manager
diagramInstance.getHistoryStack(false)

```

## History change event

The [`historyChange`](https://helpej2.syncfusion.com/react/documentation/api/diagram/iHistoryChangeArgs/) event triggers, whenever the interaction of the node and connector is take place. When interacting, the entries get added to the history manager to trigger this event. The following example shows how to get this event in diagram.

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
