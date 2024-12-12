---
layout: post
title: Expand and collapse nodes in React Diagram component | Syncfusion®
description: Learn here all about Nodes in Syncfusion® React Diagram component of Syncfusion Essential® JS 2 and more.
control: Expand and collapse of nodes
platform: ej2-react
documentation: ug
domainurl: ##DomainURL##
---

# Expand icon and collapse icon in React Diagram control

Diagram provides support to describe the state of the node. i.e., the node is expanded or collapsed state. The IsExpanded property of node is used to expand or collapse the children nodes.The Expand and Collapse support is used to compress the hierarchy view so that only the roots of each elements are visible.

The following properties of the Node are used to represent the state of the node and allows user to Expand and Collapse the desired Node:

* ExpandIcon

* CollapseIcon

N> Icon can be created only when the node has outEdges.

To explore the properties of expand and collapse icon, refer to [`expandIcon`](https://ej2.syncfusion.com/react/documentation/api/diagram/node/#expandicon) and [`collapseIcon`](https://ej2.syncfusion.com/react/documentation/api/diagram/node/#collapseicon).

## Customizing expand and collapse icon

### Size and shape

Set a size for an icon by using [`width`](https://ej2.syncfusion.com/react/documentation/api/diagram/iconShapeModel/#width) and [`height`](https://ej2.syncfusion.com/react/documentation/api/diagram/iconShapeModel/#height) properties.

The expandIcon’s and collapseIcon’s [`shape`](https://ej2.syncfusion.com/react/documentation/api/diagram/iconShapeModel/#shape) property allows to define the shape of the icon.

The following code example illustrates how to create an icon of various shapes.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/diagram/nodes/nExpandAndCollapse-cs1/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/diagram/nodes/nExpandAndCollapse-cs1/app/index.tsx %}
{% endhighlight %}
{% endtabs %}
 
 {% previewsample "page.domainurl/code-snippet/diagram/nodes/nExpandAndCollapse-cs1" %}

### Appearance and alignment of icon

Set the borderColor, borderWidth, and background color for an icon using [`borderColor`](https://ej2.syncfusion.com/react/documentation/api/diagram/iconShapeModel/#bordercolor), [`borderWidth`](https://ej2.syncfusion.com/react/documentation/api/diagram/iconShapeModel/#borderwidth), and [`fill`](https://ej2.syncfusion.com/react/documentation/api/diagram/iconShapeModel/#fill) properties.

The corner radius can be set using the [`cornerRadius`](https://ej2.syncfusion.com/react/documentation/api/diagram/iconShapeModel/#cornerradius) property of the icon.

The icon can be aligned relative to the node boundaries. It has margin, offset, horizontalAlignment, and verticalAlignment settings. It is quite tricky, when all four alignments are used together but gives you more control over alignment.

The [`iconColor`](https://ej2.syncfusion.com/react/documentation/api/diagram/iconShapeModel/#iconcolor) property can be used to set the strokeColor of the Icon.

The following code example illustrates the customization of icons.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/diagram/nodes/nExpandAndCollapse-cs2/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/diagram/nodes/nExpandAndCollapse-cs2/app/index.tsx %}
{% endhighlight %}
{% endtabs %}
 
 {% previewsample "page.domainurl/code-snippet/diagram/nodes/nExpandAndCollapse-cs2" %}

## IsExpanded

[`isExpanded`](https://ej2.syncfusion.com/react/documentation/api/diagram/node/#isexpanded) property is used to defines whether the node is expanded or not. The following example demonstrate node’s `isExpanded` property. The default value of isExpanded property is true.

```ts

let node:NodeModel =  {
        id: 'Start', width: 140, height: 50, offsetX: 300, offsetY: 50,
        //Expand state of node
        isExpanded:false
        expandIcon: {shape: 'ArrowDown',   width: 20,
        height: 15},
        collapseIcon: {shape: 'ArrowUp',  width: 20,
        height: 15}
    }

```
