---
layout: post
title: Undo redo in React Diagram component | Syncfusion
description: Learn here all about Undo redo in Syncfusion React Diagram component of Syncfusion Essential JS 2 and more.
control: Undo redo 
platform: ej2-react
documentation: ug
domainurl: ##DomainURL##
---

# Undo redo in React Diagram component

Diagram tracks the history of actions that are performed after initializing the diagram and provides support to reverse and restore those changes.

## Undo and redo

Diagram provides built-in support to track the changes that are made through interaction and through public APIs. The changes can be reverted or restored either through shortcut keys or through commands.

>Note: If you want to use Undo-Redo in diagram, you need to inject UndoRedo in the diagram.

## Undo/redo through shortcut keys

Undo/redo commands can be executed through shortcut keys. Shortcut key for undo is Ctrl+z and shortcut key for redo is Ctrl+y.

## Undo/redo through public APIs

The client-side methods [`undo`](https://ej2.syncfusion.com/react/documentation/api/diagram) and [`redo`](https://ej2.syncfusion.com/react/documentation/api/diagram) help you to revert/restore the changes. The following code example illustrates how to undo/redo the changes through script.

The following code example illustrates how to undo/redo the changes through script.

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

When a change in the diagram is reverted or restored (undo/redo), the historyChange event gets triggered.

### Group multiple changes

History list allows to revert or restore multiple changes through a single undo/redo command. For example, revert/restore the fill color change of multiple elements at a time.

The client-side method [`startGroupAction`](https://ej2.syncfusion.com/react/documentation/api/diagram) is used to notify the diagram to start grouping the changes. The client-side method [`endGroupAction`](https://ej2.syncfusion.com/react/documentation/api/diagram) is used to notify to stop grouping the changes. The following code illustrates how to undo/redo fillColor change of multiple elements at a time.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/diagram/undo redo/groupAction-cs1/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/diagram/undo redo/groupAction-cs1/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/diagram/undo redo/groupAction-cs1" %}

### Track custom changes

Diagram provides options to track the changes that are made to custom properties. For example, in case of an employee relationship diagram, track the changes in the employee information. The historyManager of the diagram enables you to track such changes. The following example illustrates how to track such custom property changes.

Before changing the employee information, save the existing information to historyManager by using the client-side method push of historyManager.The historyManager canLog method can be used which takes a history entry as argument and returns whether the specific entry can be added or not.

The following code example illustrates how to save the existing property values.

```ts
let diagramInstance: DiagramComponent;
function App() {
  return (
    <DiagramComponent
      id="container"
      ref={(diagram) => (diagramInstance = diagram)}
      width={'100%'}
      height={'600px'}
    >
      <Inject services={[UndoRedo]} />
    </DiagramComponent>
  );
}
const root = ReactDOM.createRoot(document.getElementById('diagram'));
root.render(<App />);

//Creates a custom entry
let entry: HistoryEntry = {
    undoObject: diagramInstance.nodes[0];
};
// adds that to history list
diagramInstance.historyManager.push(entry);
diagramInstance.dataBind();
```

## canLog

canLog in the history list, which takes a history entry as argument and returns whether the specific entry can be added or not.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/diagram/undo redo/es5Connect-cs5/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/diagram/undo redo/es5Connect-cs5/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/diagram/undo redo/es5Connect-cs5" %}

### Track undo/redo actions

The historyManager undoStack property is used to get the collection of undo actions which should be performed in the diagram.
The undoStack/redoStack is the read-only property.

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

## History change event

The [`historyChange`](https://ej2.syncfusion.com/react/documentation/api/diagram) event triggers, whenever the interaction of the node and connector is take place.

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
        // history change event
        diagramInstance.historyChange = (arg: IHistoryChangeArgs) => {
            //causes of history change
            let cause: string = arg.cause;
        }

```

## Stack Limit

The [`stackLimit`](https://ej2.syncfusion.com/react/documentation/api/diagram) property of history manager is used to limits the number of actions to be stored on the history manager.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/diagram/undo redo/es5Connect-cs6/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/diagram/undo redo/es5Connect-cs6/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/diagram/undo redo/es5Connect-cs6" %}

## Retain Selection

You can retain a selection at undo/redo operation by using the client-side API Method called `updateSelection`.  Using this method, we can select a diagram objects.

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
// Update the previous selection
diagramInstance.updateSelection: (object: NodeModel, diagram: Diagram) => {
let selArr = [];
selArr.push(object)
diagram.select(selArr);
}

```
