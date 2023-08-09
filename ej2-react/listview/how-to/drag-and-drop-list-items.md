---
layout: post
title: Drag and drop list items in React Listview component | Syncfusion
description: Learn here all about Drag and drop list items in Syncfusion React Listview component of Syncfusion Essential JS 2 and more.
control: Drag and drop list items 
platform: ej2-react
documentation: ug
domainurl: ##DomainURL##
---

# Drag and drop list items in React Listview component

In ListView component, we don't have drag and drop support. But we can achieve this requirement using [`TreeView`](https://ej2.syncfusion.com/react/documentation/treeview/getting-started/) component with ListView appearance.

Drag and Drop in TreeView component was enabled by setting [`allowDragAndDrop`](https://ej2.syncfusion.com/react/documentation/api/treeview/#allowdraganddrop) to `true`.

```ts

        <TreeViewComponent id='treeview'
                dataSource={data}
                allowDragAndDrop = {true}
                fields= {field} >
        </TreeViewComponent>

```

The TreeView component is used to represent hierarchical data in a tree like structure. So, list items in TreeView can be dropped to child of target element. we can prevent this behaviour by cancelling the [`nodeDragStop`](https://ej2.syncfusion.com/react/documentation/api/treeview/#nodedragstop) and [`nodeDragging`](https://ej2.syncfusion.com/react/documentation/api/treeview/#nodedragging) events.



```ts

function onDragStop(args: DragAndDropEventArgs) {
    //Block the Child Drop operation in TreeView
   let  draggingItem: HTMLCollection = document.getElementsByClassName("e-drop-in");
    if (draggingItem.length == 1) {
        draggingItem[0].classList.add('e-no-drop');
        args.cancel = true;
    }
}

return (
  <TreeViewComponent id='treeview'
          dataSource={data}
          allowDragAndDrop = {true}
          nodeDragging = {onDragStop.bind(this)}
          nodeDragStop = {onDragStop.bind(this)}
          fields= {field} >
  </TreeViewComponent>
)

```

```ts
function onDragStop(args) {
    //Block the Child Drop operation in TreeView
    let draggingItem = document.getElementsByClassName("e-drop-in");
    if (draggingItem.length == 1) {
        draggingItem[0].classList.add('e-no-drop');
        args.cancel = true;
    }
}
return (<TreeViewComponent id='treeview' dataSource={data} allowDragAndDrop={true} nodeDragging={onDragStop.bind(this)} nodeDragStop={onDragStop.bind(this)} fields={field}>
  </TreeViewComponent>);
```

In the below sample, we have rendered draggable list items.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/listview/reorder-cs1/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/listview/reorder-cs1/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/listview/reorder-cs1" %}