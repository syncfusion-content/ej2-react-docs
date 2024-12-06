---
layout: post
title: Bezier connectors in React Diagram component | Syncfusion®
description: Learn here all about Connectors in Syncfusion® React Diagram component of Syncfusion Essential® JS 2 and more.
control: Connectors 
platform: ej2-react
documentation: ug
domainurl: ##DomainURL##
---

# Bezier Connectors in EJ2 React Diagram control

Bezier segments are used to create curve segments and the curves are configurable either with the control points or with vectors.

To create a bezier segment, the [`segment.type`](https://ej2.syncfusion.com/react/documentation/api/diagram/segments) is set as `bezier` and need to specify [`type`](https://helpej2.syncfusion.com/react/documentation/api/diagram/connector/#type) for the connector. 

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

## Bezier segment editing

* A segment control point of the Bezier connector is used to change the bezier vectors and points of the connector.

![Bezier Segment edit Gif](images/Bezier-control.gif)


### Control Points

* Bezier control points can be positioned in two ways.

* When setting control point positions using the The [`point1`](https://helpej2.syncfusion.com/react/documentation/api/diagram/bezierSegment/#point1) and [`point2`](https://helpej2.syncfusion.com/react/documentation/api/diagram/bezierSegment/#point2)  properties, the control point remains fixed in its set position while dragging connector end points.
* When setting control point positions using the [`vector1`](https://helpej2.syncfusion.com/react/documentation/api/diagram/bezierSegment/#vector1) and [`vector2`](https://helpej2.syncfusion.com/react/documentation/api/diagram/bezierSegment/#vector2) properties, the control point dynamically adjusts to maintain the angle and distance originally set while moving the connector end points.

#### Point

The [`point1`](https://helpej2.syncfusion.com/react/documentation/api/diagram/bezierSegment/#point1) and [`point2`](https://helpej2.syncfusion.com/react/documentation/api/diagram/bezierSegment/#point2) properties of bezier segment enable you to set the control points. The following code example illustrates how to configure the bezier segments with control points.

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

### Avoid overlapping with bezier

By default, when there are no segments defined for a bezier connector, the bezier segments will be created automatically and routed in such a way that avoids overlapping with the source and target nodes.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/diagram/connectors/es5ConnectorBezierAvoidOverlapping-cs1/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/diagram/connectors/es5ConnectorBezierAvoidOverlapping-cs1/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/diagram/connectors/es5ConnectorBezierAvoidOverlapping-cs1" %}

### Allow segment reset.

This feature allows users to choose whether to reset the control points of bezier segments when moving the source or target node. This decision empowers users to maintain control over the positioning of bezier curves, enhancing flexibility and precision in diagram editing.

#### With allow segment reset as true.

![Allow Segment rest true](images/allowsegReset-true.gif)

##### With allow segment reset as false.

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

### How to customize Bezier Segment Thumb Size

Bezier segment thumbs default to size 10. This can be adjusted globally or for individual connectors using the [`segmentThumbSize`](https://helpej2.syncfusion.com/react/documentation/api/diagram/#segmentthumbsize) property.
To change the thumb size for all Bezier connectors, set the [`segmentThumbSize`](https://helpej2.syncfusion.com/react/documentation/api/diagram/#segmentthumbsize) property in the diagram’s model.
To customize the thumb size for a specific connector, disable the [`InheritSegmentThumbSize`](https://helpej2.syncfusion.com/react/documentation/api/diagram/connectorConstraints/) constraint, then set the desired [`segmentThumbSize`](https://helpej2.syncfusion.com/react/documentation/api/diagram/#segmentthumbsize).


{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/diagram/connectors/es5ConnectorsBezierThumbSize-cs1/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/diagram/connectors/es5ConnectorsBezierThumbSize-cs1/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/diagram/connectors/es5ConnectorsBezierThumbSize-cs1" %}