---
layout: post
title: Drag and drop list items in React ListView component | Syncfusion
description: Learn here all about Drag and drop list items in Syncfusion React ListView component of Syncfusion Essential JS 2 and more.
control: Drag and drop list items 
platform: ej2-react
documentation: ug
domainurl: ##DomainURL##
---

# Drag and drop list items in React ListView component

The ListView component doesn't have built-in drag and drop support. However, we can achieve this functionality using the [`TreeView`](https://ej2.syncfusion.com/react/documentation/treeview/getting-started/) component with ListView appearance.

Drag and Drop in the TreeView component can be enabled by setting [`allowDragAndDrop`](https://ej2.syncfusion.com/react/documentation/api/treeview/#allowdraganddrop) to `true`.

```ts
  <TreeViewComponent id='treeview'
          dataSource={data}
          allowDragAndDrop = {true}
          fields= {field} >
  </TreeViewComponent>
```

The TreeView component is used to represent hierarchical data in a tree-like structure. By default, list items in TreeView can be dropped as children of target elements. We can prevent this behavior by canceling the [`nodeDragStop`](https://ej2.syncfusion.com/react/documentation/api/treeview/#nodedragstop) and [`nodeDragging`](https://ej2.syncfusion.com/react/documentation/api/treeview/#nodedragging) events.


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
{% highlight ts tabtitle="index.css" %}
{% include code-snippet/listview/reorder-cs1/index.css %}
{% endhighlight %}
{% highlight ts tabtitle="index.html" %}
{% include code-snippet/listview/reorder-cs1/index.html %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/listview/reorder-cs1" %}
