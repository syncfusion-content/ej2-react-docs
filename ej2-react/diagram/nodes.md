---
layout: post
title: Nodes in React Diagram component | Syncfusion
description: Learn here all about Nodes in Syncfusion React Diagram component of Syncfusion Essential JS 2 and more.
control: Nodes 
platform: ej2-react
documentation: ug
domainurl: ##DomainURL##
---

# Nodes in React Diagram component

Nodes are graphical objects used to visually represent the geometrical information, process flow, internal business procedure, entity, or any other kind of data, and it represents the functions of a complete system regarding to how it interacts with external entities.

![Node](images/node.png)

<!-- markdownlint-disable MD033 -->

## Create node

A node can be created and added to the diagram either programmatically or interactively. The [`id`](../api/diagram/nodeModel/#id) property of a node is used to define its unique identifier and can later be used to find the node at runtime for customization. Nodes are stacked on the diagram area from bottom to top in the order they are added.

N> Note: There should not be any white-spaces in the ID string while setting the ID.

## Add node through nodes collection

To create a node, define the [`node`](../api/diagram/node) object and add that to [`nodes`](../api/diagram/nodeModel/) collection of the [`diagram model`](../api/diagram/). The following code example illustrates how to add a node to the diagram.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/diagram/nodes/nodes-cs1/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/diagram/nodes/nodes-cs1/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/diagram/nodes/nodes-cs1" %}

N> Node id should not begin with numbers(should begin with a letter). Node Id should be unique for all the shapes and connectors.

## Add/Remove node at runtime

Nodes can be added at runtime by using public method, [`add`](https://helpej2.syncfusion.com/react/documentation/api/diagram/#add) and can be removed at runtime by using public method, [`remove`](https://helpej2.syncfusion.com/react/documentation/api/diagram/#remove). On adding node at runtime, the nodes collection is changed and the [`collectionChange`](https://helpej2.syncfusion.com/react/documentation/api/diagram/#collectionchange) event will trigger.

The following code illustrates how to add a node.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/diagram/nodes/nodes-cs2/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/diagram/nodes/nodes-cs2/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/diagram/nodes/nodes-cs2" %}

## Add collection of nodes at runtime

* The collection of nodes can be dynamically added using [`addElements`](https://helpej2.syncfusion.com/react/documentation/api/diagram/#addelements) method.Each time an element is added to the diagram canvas, the [`collectionChange`](https://ej2.syncfusion.com/react/documentation/api/diagram#collectionchange) event will be triggered.

The following code illustrates how to add nodes collection at run time.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/diagram/nodes/nodes-cs3/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/diagram/nodes/nodes-cs3/app/index.tsx %}
{% endhighlight %}
{% endtabs %}
          
{% previewsample "page.domainurl/code-snippet/diagram/nodes/nodes-cs3" %}

## Add node from palette

Nodes can be predefined and added to the palette, and can be dropped into the diagram when needed. For more information
about adding nodes from symbol palette, refer to [`Symbol Palette`](https://ej2.syncfusion.com/react/documentation/api/diagram/symbolPaletteModel).

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/diagram/nodes/nodes-cs8/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/diagram/nodes/nodes-cs8/app/index.tsx %}
{% endhighlight %}
{% endtabs %}
          
{% previewsample "page.domainurl/code-snippet/diagram/nodes/nodes-cs8" %}

## Create node through data source

Nodes can be generated automatically with the information provided through dataSource property. The default properties for these nodes are fetched from default settings ([`getNodeDefaults`](https://helpej2.syncfusion.com/react/documentation/api/diagram/#getnodedefaults)). For more information about data source, refer to  [`DataBinding`](./data-binding).

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/diagram/nodes/nodes-cs5/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/diagram/nodes/nodes-cs5/app/index.tsx %}
{% endhighlight %}
{% endtabs %}
          
{% previewsample "page.domainurl/code-snippet/diagram/nodes/nodes-cs5" %}

## Draw nodes

Nodes can be interactively drawn by clicking and dragging the diagram surface.

To draw a shape, you have to activate the drawing tool by setting `DrawOnce` or `ContinuousDraw` to the [`tool`](.https://helpej2.syncfusion.com/react/documentation/api/diagram/#tool) property and you need to set the `node` object by using the [`drawingObject`](.https://helpej2.syncfusion.com/react/documentation/api/diagram/#drawingobject) property. The following code example illustrates how to draw a rectangle at runtime.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/diagram/nodes/nodes-cs6/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/diagram/nodes/nodes-cs6/app/index.tsx %}
{% endhighlight %}
{% endtabs %}
          
{% previewsample "page.domainurl/code-snippet/diagram/nodes/nodes-cs6" %}

## Update node at runtime

You can modify any node properties at runtime, and the changes will be instantly reflected. For example, here you can change the size and color of the node.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/diagram/nodes/nodes-cs7/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/diagram/nodes/nodes-cs7/app/index.tsx %}
{% endhighlight %}
{% endtabs %}
          
{% previewsample "page.domainurl/code-snippet/diagram/nodes/nodes-cs7" %}

N> Once the property is updated, you should call the [`dataBind`](./data-binding) to reflect the changes instantly.

## Clone node at runtime

Cloning a node creates a new node instance with identical properties and attributes. You can clone a node using the [`copy`](https://helpej2.syncfusion.com/react/documentation/api/diagram/#copy) and [`paste`](https://helpej2.syncfusion.com/react/documentation/api/diagram/#paste) public methods of the diagram model.

 
The following code example illustrates how to clone node at runtime

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/diagram/nodes/nodes-cs8/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/diagram/nodes/nodes-cs8/app/index.tsx %}
{% endhighlight %}
{% endtabs %}
          
{% previewsample "page.domainurl/code-snippet/diagram/nodes/nodes-cs8" %}

## Add nodes from tree view

By customizing the [`dragEnter`](https://helpej2.syncfusion.com/react/documentation/api/diagram/#dragenter) functionality, you can allow elements from other components, such as the tree view, to be converted into nodes based on the data of the dragged element.

## See Also

* [How to add annotations to the node](./labels)
* [How to add ports to the node](./ports)
* [How to enable/disable the behavior of the node](./constraints)
* [How to add nodes to the symbol palette](./symbol-palette)
* [How to edit the node visual interface](./interaction#selection)
* [How to create diagram nodes using drawing tools](./tools)
