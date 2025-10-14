---
layout: post
title: Events of node interaction in React Diagram component | Syncfusion®
description: Learn about node interaction events in Syncfusion React Diagram including click, selection, position, size, rotate, property and collection events.
control: Events of node
platform: ej2-react
documentation: ug
domainurl: ##DomainURL##
---

# Node Interaction Events in React Diagram Component

The React Diagram component provides comprehensive event support for node interactions, allowing developers to respond to user actions and customize behavior during various interaction scenarios. These events are triggered when users interact with nodes through clicking, dragging, resizing, rotating, and other operations.

## Click Event

Triggered when a user clicks on a node. This event provides access to the clicked node and mouse event details, enabling custom click handling and node-specific actions.

The following code example demonstrates how to handle the  [`click`](https://ej2.syncfusion.com/react/documentation/api/diagram/#click) event in the diagram:

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/diagram/nodes/nEvent-cs1/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/diagram/nodes/nEvent-cs1/app/index.tsx %}
{% endhighlight %}
{% endtabs %}
 
 {% previewsample "page.domainurl/code-snippet/diagram/nodes/nEvent-cs1" %}

## Selection Change Event

Triggered when a node's selection state changes, either when selected or deselected. This event fires during both the selection process and completion, providing control over selection behavior.

The following code example shows how to handle the [`selectionChange`](https://ej2.syncfusion.com/react/documentation/api/diagram/#selectionchange) event:


{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/diagram/nodes/nEvent-cs2/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/diagram/nodes/nEvent-cs2/app/index.tsx %}
{% endhighlight %}
{% endtabs %}
 
 {% previewsample "page.domainurl/code-snippet/diagram/nodes/nEvent-cs2" %}

Selection can be prevented by setting the `cancel` property[`SelectionChangeEventArgs`](https://ej2.syncfusion.com/react/documentation/api/diagram/iSelectionChangeEventArgs/) to **true**, as shown in the following code:
```ts
  selectionChange: function (args: ISelectionChangeEventArgs) {
    if (args.state == 'Changing') {
      //Prevents selection
      args.cancel = true;
    }
  },

```

## Position Change Event

Triggered during node dragging operations, providing real-time position updates as users move nodes. This event enables position validation, snap-to-grid functionality, and custom drag behavior.

The following code example demonstrates how to handle the  [`positionChange`](https://ej2.syncfusion.com/react/documentation/api/diagram/#positionchange) event:


{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/diagram/nodes/nEvent-cs3/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/diagram/nodes/nEvent-cs3/app/index.tsx %}
{% endhighlight %}
{% endtabs %}
 
 {% previewsample "page.domainurl/code-snippet/diagram/nodes/nEvent-cs3" %}

Dragging can be prevented by setting the `cancel` property of [`DraggingEventArgs`](https://ej2.syncfusion.com/react/documentation/api/diagram/iDraggingEventArgs/) to **true**:

 ```ts
   positionChange: function (args: IDraggingEventArgs) {
    if (args.state == 'Progress') {
      //Prevents dragging
      args.cancel = true;
    }
  },

```

## Size Change Event

Triggered during node resizing operations when users interact with resize handles. This event provides access to the new dimensions and allows for size constraints and validation.

The following code example shows how to handle the [`sizeChange`](https://ej2.syncfusion.com/react/documentation/api/diagram/#sizechange) event:

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/diagram/nodes/nEvent-cs4/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/diagram/nodes/nEvent-cs4/app/index.tsx %}
{% endhighlight %}
{% endtabs %}
 
 {% previewsample "page.domainurl/code-snippet/diagram/nodes/nEvent-cs4" %}

Resizing can be prevented by setting the `cancel` property of[`SizeChangeEventArgs`](https://ej2.syncfusion.com/react/documentation/api/diagram/isizechangeeventargs/) to **true**:

 ```ts
    sizeChange: function (args: ISizeChangeEventArgs) {
    if (args.state == 'Progress') {
      //Prevents resizing
      args.cancel = true;
    }
  },

```

## Rotate Change Event

Triggered during node rotation operations when users interact with the rotation handle. This event enables rotation constraints and custom rotation behavior.

The following code example demonstrates how to handle the [`rotateChange`](https://ej2.syncfusion.com/react/documentation/api/diagram/#rotatechange) event:

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/diagram/nodes/nEvent-cs5/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/diagram/nodes/nEvent-cs5/app/index.tsx %}
{% endhighlight %}
{% endtabs %}
 
 {% previewsample "page.domainurl/code-snippet/diagram/nodes/nEvent-cs5" %}

Rotation can be prevented by setting the `cancel` property of[`RotationEventArgs`](https://ej2.syncfusion.com/react/documentation/api/diagram/irotationeventargs/) to **true**:

 ```ts
  rotateChange: function (args: IRotationEventArgs) {
    if (args.state == 'Progress') {
      //Prevents rotation
      args.cancel = true;
    }
  },

```

## Property Change Event

Triggered when any property of a node is modified programmatically or through user interaction. This event is useful for tracking changes and implementing custom validation logic.

The following code example shows how to handle the [`propertyChange`](https://ej2.syncfusion.com/react/documentation/api/diagram/#propertychange) event:

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/diagram/nodes/nEvent-cs6/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/diagram/nodes/nEvent-cs6/app/index.tsx %}
{% endhighlight %}
{% endtabs %}
 
 {% previewsample "page.domainurl/code-snippet/diagram/nodes/nEvent-cs6" %}

## Collection Change Event

Triggered when nodes are added to or removed from the diagram dynamically. This event provides control over diagram modifications and enables validation before collection changes occur.

The following code example demonstrates how to handle the  [`collectionChange`](https://ej2.syncfusion.com/react/documentation/api/diagram/#collectionchange) event:

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/diagram/nodes/nEvent-cs7/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/diagram/nodes/nEvent-cs7/app/index.tsx %}
{% endhighlight %}
{% endtabs %}
 
 {% previewsample "page.domainurl/code-snippet/diagram/nodes/nEvent-cs7" %}

Collection changes can be prevented by setting the `cancel` property of[`CollectionChangeEventArgs`](https://ej2.syncfusion.com/react/documentation/api/diagram/icollectionchangeeventargs/) to **true**:

 ```ts
    collectionChange: function (args: ICollectionChangeEventArgs) {
    if (args.state == 'Changing') {
      //Prevents collection change - Prevents Adding or deleting nodes
      args.cancel = true;
    }
  },

```

## Mouse Events

The diagram component provides mouse interaction events that trigger when users hover over or move the mouse cursor in relation to node surfaces.

### Mouse Enter Event

The [`mouseEnter`](https://ej2.syncfusion.com/react/documentation/api/diagram/#mouseenter) event is triggered when the mouse cursor enters a node's boundary area.

### Mouse Over Event

The [`mouseOver`](https://ej2.syncfusion.com/react/documentation/api/diagram/#mouseover) event is triggered when the mouse cursor hovers over a node's surface area.

### Mouse Leave Event

The [`mouseLeave`](https://ej2.syncfusion.com/react/documentation/api/diagram/#mouseleave) event is triggered when the mouse cursor leaves a node's boundary area.

The following code example demonstrates how to handle these mouse events and implement visual feedback by changing node colors based on mouse interactions:

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/diagram/nodes/nEvent-cs8/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/diagram/nodes/nEvent-cs8/app/index.tsx %}
{% endhighlight %}
{% endtabs %}
 
 {% previewsample "page.domainurl/code-snippet/diagram/nodes/nEvent-cs8" %}