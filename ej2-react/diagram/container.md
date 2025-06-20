---
layout: post
title: Container in React Diagram component | Syncfusion®
description: Learn here all about Container in Syncfusion® React Diagram component of Syncfusion Essential® JS 2 and more.
control: Container 
platform: ej2-react
documentation: ug
domainurl: ##DomainURL##
---

# Container in React Diagram component

A Container is a group of logically related shapes surrounded by a visible boundary. Shapes can be added or removed from the container at runtime. Changes made to the container do not affect its child elements, which can be individually selected, moved, or edited.

## Create Container

### Add a Container

The following code illustrates how to create a container node.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/diagram/container/container-1/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/diagram/container/container-1/app/index.tsx %}
{% endhighlight %}
{% endtabs %}
          
{% previewsample "page.domainurl/code-snippet/diagram/container/container-1" %}

### Setting a Header

You can provide a textual description for a container using its [header](https://ej2.syncfusion.com/react/documentation/api/diagram/containerModel/#header) property. Also, users can customize the header's appearance using the header's [style](https://ej2.syncfusion.com/react/documentation/api/diagram/headerModel/#style) property.

The following code example explains how to define a container header and its customization:

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/diagram/container/container-2/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/diagram/container/container-2/app/index.tsx %}
{% endhighlight %}
{% endtabs %}
          
{% previewsample "page.domainurl/code-snippet/diagram/container/container-2" %}

N> You can edit the header by double-clicking the region of the container's header.

### Container from symbol palette

Container nodes can be preconfigured and added to the symbol palette. Users can drag and drop these container nodes into the diagram as needed.

To learn more, refer to the [Symbol Palette](./symbol-palette) documentation.

## Interactively add or remove diagram elements into Container

You can interactively add or remove diagram elements from the Container in the runtime. When a diagram element is dropped near the container's edge, the container automatically resizes to accommodate it.

![Container](images/container.gif)

## Interaction

Containers support the same interactions as regular nodes—such as selection, dragging, resizing, and rotating. For more information refer to the [`nodes interactions`](./nodes-interaction)

## Events

The events triggered when interacting with container nodes are similar to those for individual nodes. For more information, refer to the [`nodes events`](./nodes-events)

## See Also

* [How to add nodes to the symbol palette](./symbol-palette)
* [How to customize nodes](./nodes-customization)
* [How to add ports to the node](./ports)
* [How to enable/disable the behavior of the node](./constraints)
* [How to create diagram nodes using drawing tools](./tools)
