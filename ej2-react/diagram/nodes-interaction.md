---
layout: post
title: Nodes in React Diagram component | Syncfusion®
description: Learn about interactive node operations in Syncfusion React Diagram component including selection, dragging, resizing, and rotation.
control: Nodes interaction
platform: ej2-react
documentation: ug
domainurl: ##DomainURL##
---

# Node Interaction in React Diagram Component

The React Diagram component provides comprehensive support for interactive node operations, enabling users to select, drag, resize, rotate, and flip nodes through both mouse interactions and programmatic methods. These interactions form the foundation of dynamic diagram editing capabilities.

## Select

Node selection is fundamental to diagram interaction. Users can select nodes by clicking on them and deselect by clicking on the diagram canvas.

![Select/UnSelect Node](images/Single-node-select.gif)

### Programmatic Node Selection

Nodes can be selected at runtime by using the [`select`](https://ej2.syncfusion.com/react/documentation/api/diagram/#select) method and the selection can be cleared in the diagram by using the [`clearSelection`](https://ej2.syncfusion.com/react/documentation/api/diagram/#clearselection) or [`unSelect`](https://ej2.syncfusion.com/react/documentation/api/diagram/#unselect) method to remove specific objects from selection.
 The following code explains how to select and clear selection in the diagram.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/diagram/nodes/nInteraction-cs1/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/diagram/nodes/nInteraction-cs1/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/diagram/nodes/nInteraction-cs1" %}
### Selection Methods Reference

|Method | Parameter | Description|
|----|----|----|
|[`unSelect`](https://ej2.syncfusion.com/react/documentation/api/diagram/#unselect)| NodeModel/ConnectorModel | The object to remove from the selection.|
|[`clearSelection`](https://ej2.syncfusion.com/react/documentation/api/diagram/#clearselection)| - | Clears all the selection in the diagram.|

## Drag

Node dragging allows users to reposition nodes within the diagram canvas. Users can click and hold a node, then drag it to any location on the canvas.

![Drag node](images/drag-single-node.gif)

### Programmatic Node Dragging

Nodes can be moved programmatically using the [`drag`](https://ej2.syncfusion.com/react/documentation/api/diagram/#drag) method, which accepts the target object and new position coordinates.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/diagram/nodes/nInteraction-cs2/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/diagram/nodes/nInteraction-cs2/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/diagram/nodes/nInteraction-cs2" %}

## Resize

When a node is selected, resize handles appear on all sides, allowing users to modify the node's dimensions by clicking and dragging these handles.

![Resize Node](images/resize-Single-node.gif)

### Programmatic Node Resizing

Node dimensions can be modified at runtime using the  [`scale`](https://ej2.syncfusion.com/react/documentation/api/diagram/#scale) method, which applies scaling factors to adjust the node size proportionally.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/diagram/nodes/nInteraction-cs3/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/diagram/nodes/nInteraction-cs3/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/diagram/nodes/nInteraction-cs3" %}

## Rotate

Node rotation is performed interactively by clicking and dragging the rotate handle that appears when a node is selected.

![Rotate Node](images/rotate-single-node.gif)

### Programmatic Node Rotation

Nodes can be rotated at runtime using the [`rotate`](https://ej2.syncfusion.com/react/documentation/api/diagram/#rotate) method, which accepts the target object and rotation angle in degrees.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/diagram/nodes/nInteraction-cs4/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/diagram/nodes/nInteraction-cs4/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/diagram/nodes/nInteraction-cs4" %}

## Flip

The diagram component supports node flipping operations to create mirrored images of nodes. The [`flip`](https://ej2.syncfusion.com/react/documentation/api/diagram/node/#flip) property controls the flip direction and behavior.

### Flip Directions
give the mirrored image of the original element.
The flip types are as follows:

* HorizontalFlip
 [`Horizontal`](https://ej2.syncfusion.com/react/documentation/api/diagram/flipDirection/) is used to change the element in horizontal direction.

* VerticalFlip
[`Vertical`](https://ej2.syncfusion.com/react/documentation/api/diagram/flipDirection/) is used to change the element in vertical direction

* Both
[`Both`](https://ej2.syncfusion.com/react/documentation/api/diagram/flipDirection/) which involves both vertical and horizontal changes of the element.

The following example demonstrates how to apply flip transformations to nodes:

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/diagram/nodes/nInteraction-cs5/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/diagram/nodes/nInteraction-cs5/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/diagram/nodes/nInteraction-cs5" %}

>Note: The flip is also applicable for group and BPMN shapes.

### Runtime Flip Updates

Node flip properties can be updated dynamically at runtime using the `^` operator, which allows toggling flip states by applying the same flip direction multiple times.

The following example demonstrates how to update the flip for a node dynamically:

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/diagram/nodes/node-cs4-flip/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/diagram/nodes/node-cs4-flip/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/diagram/nodes/node-cs4-flip" %}


### Flip Modes

The [`flipMode`](https://ej2.syncfusion.com/react/documentation/api/diagram/flipMode/) property controls which elements are affected during flip operations, determining whether ports, labels, and label text are flipped along with the node.

| FlipMode | Description | 
| -------- | -------- |
|Label| It flips the label along with the object while keeping the text readable.|
|Port| It flips the port along with the object.|
|All| It flips the port, label, and label text along with the object.|
|None| It flips only the object.|
|LabelText| It flips the object and inverts the label without changing its position.|
|PortAndLabel| It flips the port and label along with the object while keeping the text readable.|
|PortAndLabelText| It flips the port and label text along with the object.|
|LabelAndLabelText| It flips the label and label text along with the Object.|

### Flip Mode Visual Examples

The following table demonstrates how different flip modes affect node appearance across various flip directions:

| Flip Direction | Flip Mode | Default Node | Flipped Node |
| -------- | -------- | -------- | -------- |
| Horizontal | All |![Horizontal All](images/Horizontal-All.jpg)|![HorizontalFlip All](images/HorizontalFlip-All.jpg)| 
| Horizontal | Label |![Horizontal Label](images/Horizontal-All.jpg)|![HorizontalFlip Label](images/HorizontalFlip-Label.jpg)|
| Horizontal | LabelText |![Horizontal LabelText](images/Horizontal-All.jpg)|![HorizontalFlip LabelText](images/HorizontalFlip-LabelText.jpg)|
| Horizontal | Port |![Horizontal Port](images/Horizontal-All.jpg)|![HorizontalFlip Port](images/HorizontalFlip-Port.jpg)|
| Horizontal | None |![Horizontal None](images/Horizontal-All.jpg)|![HorizontalFlip None](images/HorizontalFlip-None.jpg)|
| Horizontal | PortAndLabel |![Horizontal PortAndLabel](images/Horizontal-All.jpg)|![HorizontalFlip PortAndLabel](images/HorizontalFlip-PortAndLabel.jpg)|
| Horizontal | PortAndLabelText |![Horizontal PortAndLabelText](images/Horizontal-All.jpg)|![HorizontalFlip PortAndLabelText](images/HorizontalFlip-PortAndLabelText.jpg)|
| Horizontal | LabelAndLabelText |![Horizontal LabelAndLabelText](images/Horizontal-All.jpg)|![HorizontalFlip LabelAndLabelText](images/HorizontalFlip-LabelAndLabelText.jpg)|
| Vertical | All |![Vertical All](images/Vertical-All.jpg)|![VerticalFlip All](images/VerticalFlip-All.jpg)| 
| Vertical | Label |![Vertical Label](images/Vertical-All.jpg)|![VerticalFlip Label](images/VerticalFlip-Label.jpg)|  
| Vertical | LabelText |![Vertical LabelText](images/Vertical-All.jpg)|![VerticalFlip LabelText](images/VerticalFlip-LabelText.jpg)| 
| Vertical | Port |![Vertical Port](images/Vertical-All.jpg)|![VerticalFlip Port](images/VerticalFlip-Port.jpg)| 
| Vertical | None |![Vertical None](images/Vertical-All.jpg)|![VerticalFlip None](images/VerticalFlip-None.jpg)|  
| Vertical | PortAndLabel |![Vertical PortAndLabel](images/Vertical-All.jpg)|![VerticalFlip PortAndLabel](images/VerticalFlip-PortAndLabel.jpg)|  
| Vertical | PortAndLabelText |![Vertical PortAndLabelText](images/Vertical-All.jpg)|![VerticalFlip PortAndLabelText](images/VerticalFlip-PortAndLabelText.jpg)|  
| Vertical | LabelAndLabelText |![Vertical LabelAndLabelText](images/Vertical-All.jpg)|![VerticalFlip LabelAndLabelText](images/VerticalFlip-LabelAndLabelText.jpg)|  
| Both | All |![Both All](images/Vertical-All.jpg)|![BothFlip All](images/BothFlip-All.jpg)|  
| Both | Label |![Both Label](images/Vertical-All.jpg)|![BothFlip Label](images/BothFlip-Label.jpg)|
| Both | LabelText |![Both LabelText](images/Vertical-All.jpg)|![BothFlip LabelText](images/BothFlip-LabelText.jpg)| 
| Both | Port |![Both Port](images/Vertical-All.jpg)|![BothFlip Port](images/BothFlip-Port.jpg)| 
| Both | None |![Both None](images/Vertical-All.jpg)|![BothFlip None](images/BothFlip-None.jpg)|
| Both | PortAndLabel |![Both PortAndLabel](images/Vertical-All.jpg)|![BothFlip PortAndLabel](images/BothFlip-PortAndLabel.jpg)| 
| Both | PortAndLabelText |![Both PortAndLabelText](images/Vertical-All.jpg)|![BothFlip PortAndLabelText](images/BothFlip-PortAndLabelText.jpg)| 
| Both | LabelAndLabelText |![Both LabelAndLabelText](images/Vertical-All.jpg)|![BothFlip LabelAndLabelText](images/BothFlip-LabelAndLabelText.jpg)| 

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/diagram/nodes/nInteraction-cs6/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/diagram/nodes/nInteraction-cs6/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/diagram/nodes/nInteraction-cs6" %}