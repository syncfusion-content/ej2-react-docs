---
layout: post
title: Connector Interaction in React Diagram component | Syncfusion
description: Learn here all about Connectors in Syncfusion React Diagram component of Syncfusion Essential JS 2 and more.
control: Connector Interaction
platform: ej2-react
documentation: ug
domainurl: ##DomainURL##
---

# Connector interaction in EJ2 React Diagram

Connectors can be selected, dragged, and routed over the diagram page.

## Select and unSelect connector.

A connector can be selected, simply just by clicking on it.

A connector can be selected at runtime by using the Select method and clear the selection in the diagram using the ClearSelection. The following code explains how to select and clear selection in the diagram.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/diagram/connectors/es5SelectUnselect-cs1/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/diagram/connectors/es5SelectUnselect-cs1/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/diagram/connectors/es5SelectUnselect-cs1" %}

## Drag Connector

Connector can be dragged by just clicking on the connector and dragging.

![Connector Drag Gif](images/connector-dragGif.gif)

A connector can be dragged at runtime by using the Drag method. The following code explains how to drag the connector by using the drag method.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/diagram/connectors/es5DragConnector-cs1/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/diagram/connectors/es5DragConnector-cs1/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/diagram/connectors/es5DragConnector-cs1" %}

## End point dragging

The connector can be selected by clicking it. When the connector is selected, circles will be added on the starting and ending of the connector that is represented by Thumbs. Clicking and dragging those handles helps you to adjust the source and target points.

![End Point drag GIF](images/EndPointDragGif.gif)

You can also update the endPoints of diagram by using [`dragSourceEnd`](https://helpej2.syncfusion.com/react/documentation/api/diagram/#dragsourceend) and [`dragTargetEnd`](https://helpej2.syncfusion.com/react/documentation/api/diagram/#dragtargetend) methods of diagram. 

The following code example shows the ways to drag connector end point at runtime.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/diagram/connectors/es5dragEnd-cs1/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/diagram/connectors/es5dragEnd-cs1/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/diagram/connectors/es5dragEnd-cs1" %}

## Segment editing

Diagram allows you to edit connector segments at runtime. To enable this feature, you need to activate the [`DragSegmentThumb`](https://helpej2.syncfusion.com/react/documentation/api/diagram/connector/#constraints) constraint for the connector.

```ts
{     connector.constraints =
      ConnectorConstraints.Default | ConnectorConstraints.DragSegmentThumb;
}

```

N> To edit a connector segment, you need to inject the `ConnectorEditing` module into the diagram.

![Connector segmnet edit](images/connectorEditing.gif)

## Flip

The diagram Provides support to flip the connector. The [`flip`](https://helpej2.syncfusion.com/react/documentation/api/diagram/connector/#flip) is performed to give the mirrored image of the original element.

The flip types are as follows:

* HorizontalFlip
 [`Horizontal`](https://helpej2.syncfusion.com/react/documentation/api/diagram/flipDirection/) is used to interchange the connector source and target x points.

* VerticalFlip
[`Vertical`](https://helpej2.syncfusion.com/react/documentation/api/diagram/flipDirection/) is used to interchange the connector source and target y points.

* Both
[`Both`](https://helpej2.syncfusion.com/react/documentation/api/diagram/flipDirection/) is used to interchange the source point as target point and target point as source point

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/diagram/connectors/es5ConnectNode-cs3/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/diagram/connectors/es5ConnectNode-cs3/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/diagram/connectors/es5ConnectNode-cs3" %}

 N> The flip is not applicable when the connectors connect in nodes