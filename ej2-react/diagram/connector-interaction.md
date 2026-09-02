---
layout: post
title: Connector Interaction in React Diagram | Syncfusion®
description: Select, drag, edit endpoints, flip, and modify segments on React Diagram connectors interactively using both mouse gestures and runtime methods.
control: Connector Interaction
platform: ej2-react
documentation: ug
domainurl: ##DomainURL##
---

# Connector Interaction in React Diagram

Connectors in the React Diagram component support various interaction capabilities including selection, dragging, endpoint manipulation, segment editing, and flipping operations. These interactions enable users to dynamically modify connector behavior and appearance within the diagram.

## Select and Unselect Connector

A connector can be selected by clicking on it. This selection enables further operations such as dragging, editing, or applying transformations.

Connectors can be selected programmatically at runtime using the **select** method and selection can be cleared using the **clearSelection** method. The following code demonstrates how to select and clear selection in the diagram.

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

Connectors can be repositioned by clicking and dragging them to a new location within the diagram canvas.

![Connector Drag Gif](images/connector-dragGif.gif)

A connector can be dragged at runtime by using the `drag` method. The following code explains how to drag the connector by using the `drag` method.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/diagram/connectors/es5DragConnector-cs1/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/diagram/connectors/es5DragConnector-cs1/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/diagram/connectors/es5DragConnector-cs1" %}

## End Point Dragging

When a connector is selected, circular handles (thumbs) appear at the source and target endpoints. These handles allow users to adjust the connector's start and end positions by clicking and dragging them.

![End Point drag GIF](images/EndPointDragGif.gif)

The endpoints of connectors can also be updated programmatically using the [`dragSourceEnd`](https://helpej2.syncfusion.com/react/documentation/api/diagram#dragsourceend) and [`dragTargetEnd`](https://helpej2.syncfusion.com/react/documentation/api/diagram#dragtargetend) methods of the diagram component, passing the new source or target point coordinates.

The following code example demonstrates how to drag connector end points at runtime.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/diagram/connectors/es5dragEnd-cs1/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/diagram/connectors/es5dragEnd-cs1/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/diagram/connectors/es5dragEnd-cs1" %}

## Segment Editing

The diagram allows editing of individual connector segments at runtime. To enable this feature, import `ConnectorConstraints` and activate the [`DragSegmentThumb`](https://helpej2.syncfusion.com/react/documentation/api/diagram/connector#constraints) constraint for the connector.

```ts
connector.constraints = ConnectorConstraints.Default | ConnectorConstraints.DragSegmentThumb;
```

To edit connector segments, inject the **ConnectorEditing** module into the diagram, for example:

```ts
import { DiagramComponent, Inject, ConnectorEditing } from '@syncfusion/ej2-react-diagrams';

<DiagramComponent ...>
  <Inject services={[ConnectorEditing]} />
</DiagramComponent>
```

![Connector segment edit](images/connectorEditing.gif)

## Flip

The diagram provides support for flipping connectors to create mirrored versions of the original element. The [`flip`](https://helpej2.syncfusion.com/react/documentation/api/diagram/connector#flip) operation transforms the connector based on the specified flip direction.

Use the connector's `flip` method with a `FlipDirection` value, for example:

```ts
connector.flip(FlipDirection.Horizontal);
```

The available flip types are:

* **Horizontal Flip** - [`Horizontal`](https://helpej2.syncfusion.com/react/documentation/api/diagram/flipDirection) interchanges the connector source and target x coordinates.

* **Vertical Flip** - [`Vertical`](https://helpej2.syncfusion.com/react/documentation/api/diagram/flipDirection) interchanges the connector source and target y coordinates.

* **Both** - [`Both`](https://helpej2.syncfusion.com/react/documentation/api/diagram/flipDirection) swaps the source point as the target point and the target point as the source point.


{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/diagram/connectors/es5ConnectNode-cs3/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/diagram/connectors/es5ConnectNode-cs3/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/diagram/connectors/es5ConnectNode-cs3" %}

 N> The flip operation is not applicable when connectors are connected to nodes.