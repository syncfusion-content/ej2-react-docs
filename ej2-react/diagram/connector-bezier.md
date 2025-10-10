---
layout: post
title: Bezier Connectors in React Diagram Component | Syncfusion®
description: Learn to create, edit, and customize Bezier connectors in the Syncfusion React Diagram. Master smooth, interactive, and precise curved connections.
control: Connectors 
platform: ej2-react
documentation: ug
domainurl: ##DomainURL##
---

# Bezier Connectors in Diagram Component

Bezier segments create curved paths whose shape can be configured using either control points or vectors.

To create a bezier segment, the [`segment.type`](https://ej2.syncfusion.com/react/documentation/api/diagram/segments) is set as **bezier** and need to specify [`type`](https://helpej2.syncfusion.com/react/documentation/api/diagram/connector/#type) for the connector. 

The following code example illustrates how to create a default bezier segment.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/diagram/connectors/es5ConnectorsBezier-cs1/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/diagram/connectors/es5ConnectorsBezier-cs1/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/diagram/connectors/es5ConnectorsBezier-cs1" %}

## Bezier Segment Editing

The shape of a Bezier connector can be interactively modified by dragging its segment control points. These points, also known as thumbs, appear along the connector and allow you to adjust the curve's vectors and points.

![Bezier Segment edit Gif](images/Bezier-control.gif)


### Control Points

The curvature of a Bezier segment is determined by its control points. There are two primary ways to define the position of these control points:

*   **Fixed Positioning (`point1`, `point2`)**: When you use the [`point1`](https://helpej2.syncfusion.com/react/documentation/api/diagram/bezierSegment/#point1) and [`point2`](https://helpej2.syncfusion.com/react/documentation/api/diagram/bezierSegment/#point2) properties, the control points are set at fixed coordinates. These points remain stationary even when the connector's start or end points are moved. This is useful for creating static, predictable curves.

#### Point

The `point1 ` and `point2`(https://helpej2.syncfusion.com/react/documentation/api/diagram/bezierSegment/#point2) properties of bezier segment enable you to set the control points. The following code example illustrates how to configure the bezier segments with control points.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/diagram/connectors/es5ConnectorsBezierPoints-cs1/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/diagram/connectors/es5ConnectorsBezierPoints-cs1/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/diagram/connectors/es5ConnectorsBezierPoints-cs1" %}

![Bezier Control point set by point1 and point2](images/Bezier-point1.gif)

#### Vector

The [`vector1`](https://helpej2.syncfusion.com/react/documentation/api/diagram/bezierSegment/#vector1) and [`vector2`](https://helpej2.syncfusion.com/react/documentation/api/diagram/bezierSegment/#vector2) properties of bezier segment enable you to define the vectors. The following code illustrates how to configure a bezier curve with vectors.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/diagram/connectors/es5ConnectorsBezierVector-cs1/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/diagram/connectors/es5ConnectorsBezierVector-cs1/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/diagram/connectors/es5ConnectorsBezierVector-cs1" %}

![Bezier Control point set by vector1 and vector1](images/Bezier-vector1.gif)

### Avoid Overlapping with Bezier

By default, if no segments are explicitly defined for a Bezier connector, the Diagram component automatically generates segments. This routing logic is designed to prevent the connector from overlapping with its connected source and target nodes, ensuring a clean and readable layout.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/diagram/connectors/es5ConnectorBezierAvoidOverlapping-cs1/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/diagram/connectors/es5ConnectorBezierAvoidOverlapping-cs1/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/diagram/connectors/es5ConnectorBezierAvoidOverlapping-cs1" %}

### Allow Segment Reset.

The `allowSegmentReset` property gives you control over whether a Bezier segment’s control points should be reset to their default positions when the source or target node is moved. This provides greater flexibility in maintaining custom curve shapes during diagram editing.

#### `allowSegmentReset` is **true** (Default)

When `allowSegmentReset` is **true**, moving a connected node will reset the Bezier control points, recalculating the curve.

![Allow Segment rest true](images/allowsegReset-true.gif)

#### `allowSegmentReset` is **false**

When `allowSegmentReset` is **false**, the custom positions of the control points are preserved when a connected node is moved, maintaining the user-defined curve.

![Allow Segment rest false](images/allowsegReset-false.gif)

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/diagram/connectors/es5Segmentreset-cs1/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/diagram/connectors/es5Segmentreset-cs1/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/diagram/connectors/es5Segmentreset-cs1" %}

### How to Customize Bezier Segment Thumb Size

The interactive thumbs used to edit Bezier segments have a default size of 10×10 pixels. This size can be customized either globally for all connectors or individually for each connector using the [`segmentThumbSize`](https://helpej2.syncfusion.com/react/documentation/api/diagram/#segmentthumbsize) property.
To change the thumb size for all Bezier connectors, set the `segmentThumbSize` property in the diagram’s model.
To customize the thumb size for a specific connector, disable the [`InheritSegmentThumbSize`](https://helpej2.syncfusion.com/react/documentation/api/diagram/connectorConstraints/) constraint, then set the desired `segmentThumbSize.


{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/diagram/connectors/es5ConnectorsBezierThumbSize-cs1/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/diagram/connectors/es5ConnectorsBezierThumbSize-cs1/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/diagram/connectors/es5ConnectorsBezierThumbSize-cs1" %}