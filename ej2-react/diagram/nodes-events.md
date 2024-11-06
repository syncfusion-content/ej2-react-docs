---
layout: post
title: Events of node interaction in React Diagram component | Syncfusion
description: Learn here all about Nodes in Syncfusion React Diagram component of Syncfusion Essential JS 2 and more.
control: Events of node
platform: ej2-react
documentation: ug
domainurl: ##DomainURL##
---

# Events of nodes in React Diagram control

Diagram provides some events support for node that triggers when interacting with the node.

## Click event

Triggers when the node is clicked. The following code example explains how to get the [`click`](https://helpej2.syncfusion.com/react/documentation/api/diagram/#click) event in the diagram.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/diagram/nodes/nEvent-cs1/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/diagram/nodes/nEvent-cs1/app/index.tsx %}
{% endhighlight %}
{% endtabs %}
 
 {% previewsample "page.domainurl/code-snippet/diagram/nodes/nEvent-cs1" %}

## Selection change event

Triggers when the node is selected in diagram.
The following code example explains how to get the [`selectionChange`](https://helpej2.syncfusion.com/react/documentation/api/diagram/#selectionchange) event in the diagram.


{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/diagram/nodes/nEvent-cs2/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/diagram/nodes/nEvent-cs2/app/index.tsx %}
{% endhighlight %}
{% endtabs %}
 
 {% previewsample "page.domainurl/code-snippet/diagram/nodes/nEvent-cs2" %}

 You can prevent selection by setting the `cancel` property of [`SelectionChangeEventArgs`](https://helpej2.syncfusion.com/react/documentation/api/diagram/iSegmentChangeEventArgs/) to true, as shown in the code snippet below.

```ts
  selectionChange: function (args: ISelectionChangeEventArgs) {
    if (args.state == 'Changing') {
      //Prevents selection
      args.cancel = true;
    }
  },

```

## Position change event

While dragging the node through interaction, the position change event can be used to do the customization.
The following code example explains how to get the [`positionChange`](https://helpej2.syncfusion.com/react/documentation/api/diagram/#positionchange) event in the diagram.


{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/diagram/nodes/nEvent-cs3/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/diagram/nodes/nEvent-cs3/app/index.tsx %}
{% endhighlight %}
{% endtabs %}
 
 {% previewsample "page.domainurl/code-snippet/diagram/nodes/nEvent-cs3" %}

 You can prevent dragging by setting the `cancel` property of [`DraggingEventArgs`](https://helpej2.syncfusion.com/react/documentation/api/diagram/iDraggingEventArgs/) to true, as shown in the code snippet below.

 ```ts
   positionChange: function (args: IDraggingEventArgs) {
    if (args.state == 'Progress') {
      //Prevents dragging
      args.cancel = true;
    }
  },

```

## Size change event

While resizing the node during the interaction, the size change event can be used to do the customization.
The following code example explains how to get the [`sizeChange`](https://helpej2.syncfusion.com/react/documentation/api/diagram/#sizechange) event in the diagram.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/diagram/nodes/nEvent-cs4/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/diagram/nodes/nEvent-cs4/app/index.tsx %}
{% endhighlight %}
{% endtabs %}
 
 {% previewsample "page.domainurl/code-snippet/diagram/nodes/nEvent-cs4" %}

 You can prevent resizing by setting the `cancel` property of [`SizeChangeEventArgs`](https://helpej2.syncfusion.com/react/documentation/api/diagram/isizechangeeventargs/) to true, as shown in the code snippet below.

 ```ts
    sizeChange: function (args: ISizeChangeEventArgs) {
    if (args.state == 'Progress') {
      //Prevents resizing
      args.cancel = true;
    }
  },

```

## Rotate change event

While rotating the node during the interaction, the rotate change event can be used to do the customization.
The following code example explains how to get the [`rotateChange`](.https://helpej2.syncfusion.com/react/documentation/api/diagram/#rotatechange) event in the diagram.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/diagram/nodes/nEvent-cs5/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/diagram/nodes/nEvent-cs5/app/index.tsx %}
{% endhighlight %}
{% endtabs %}
 
 {% previewsample "page.domainurl/code-snippet/diagram/nodes/nEvent-cs5" %}

 You can prevent rotation by setting the `cancel` property of [`RotationEventArgs`](https://helpej2.syncfusion.com/react/documentation/api/diagram/irotationeventargs/) to true, as shown in the code snippet below.

 ```ts
  rotateChange: function (args: IRotationEventArgs) {
    if (args.state == 'Progress') {
      //Prevents rotation
      args.cancel = true;
    }
  },

```

## Property change event

Triggers when there is any property change occurred for the node. The following code example explains how to get the [`propertyChange`](.https://helpej2.syncfusion.com/react/documentation/api/diagram/#propertychange) event in the diagram.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/diagram/nodes/nEvent-cs6/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/diagram/nodes/nEvent-cs6/app/index.tsx %}
{% endhighlight %}
{% endtabs %}
 
 {% previewsample "page.domainurl/code-snippet/diagram/nodes/nEvent-cs6" %}

## Collection change event

Triggers when the node is added or removed in diagram dynamically.
The following code example explains how to get the [`collectionChange`](https://helpej2.syncfusion.com/react/documentation/api/diagram/#collectionchange) event in the diagram.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/diagram/nodes/nEvent-cs7/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/diagram/nodes/nEvent-cs7/app/index.tsx %}
{% endhighlight %}
{% endtabs %}
 
 {% previewsample "page.domainurl/code-snippet/diagram/nodes/nEvent-cs7" %}

You can prevent changes to the diagram collection, such as adding or deleting nodes, by setting the `cancel` property of [`CollectionChangeEventArgs`](https://helpej2.syncfusion.com/react/documentation/api/diagram/icollectionchangeeventargs/) to true, as shown in the code snippet below.

 ```ts
    collectionChange: function (args: ICollectionChangeEventArgs) {
    if (args.state == 'Changing') {
      //Prevents collection change - Prevents Adding or deleting nodes
      args.cancel = true;
    }
  },

```

## Mouse Events

### Mouse enter event

The [`mouseEnter`](https://helpej2.syncfusion.com/react/documentation/api/diagram/#mouseenter) is triggered when the mouse enters the node surface.

### Mouse over event

The [`mouseOver`](https://helpej2.syncfusion.com/react/documentation/api/diagram/#mouseover) is triggered when the mouse hover over the node surface.

### Mouse leave event

The [`mouseLeave`](https://helpej2.syncfusion.com/react/documentation/api/diagram/#mouseleave) is triggered when the mouse leaves the node surface.

The following code example shows how to handle these events in the diagram and change the color of a node based on these events:

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/diagram/nodes/nEvent-cs8/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/diagram/nodes/nEvent-cs8/app/index.tsx %}
{% endhighlight %}
{% endtabs %}
 
 {% previewsample "page.domainurl/code-snippet/diagram/nodes/nEvent-cs8" %}