---
layout: post
title: Bezier Segment edit orientation in React Diagram Component | Syncfusion®
description: Learn to configure Bezier segment orientation in Syncfusion React Diagram Component for custom curved connectors.
control: Bezier Segment edit orientation 
platform: ej2-react
documentation: ug
domainurl: ##DomainURL##
---

# Bezier Segment Edit Orientation

Bezier connectors in diagrams provide smooth, curved connections between nodes with customizable control points. The segment edit orientation feature allows interactive modification of bezier connector segments to achieve the desired visual flow and connection paths.

## Interactive Editing of Bezier Segments

The intermediate control points between adjacent bezier segments can be edited interactively during runtime based on the [`segmentEditOrientation`](https://ej2.syncfusion.com/react/documentation/api/diagram/bezierSegmentEditOrientation/) property within the [`bezierSettings`](https://ej2.syncfusion.com/react/documentation/api/diagram/bezierSettingsModel/)configuration. This property determines the directional constraints applied when users drag the intermediate points to reshape the connector.

### Segment Edit Orientation Options

The following table describes the available orientation modes and their interactive behavior:

| SegmentEditOrientation value | Description | Output |
|-------- | -------- | -------- |
| Bidirectional |It allows the intermediate points to be dragged in either vertical or horizontal directions. | ![Bidirectional](images/bez-bidirectional.gif) |
| Freeform | It allows the intermediate points to be dragged in any direction. | ![Freeform](images/bez-freeform.gif) |

The following code demonstrates how to configure bezier connectors with interactive segment editing using both the [`smoothness`](https://ej2.syncfusion.com/react/documentation/api/diagram/bezierSmoothness/) property for curve refinement and the `segmentEditOrientation` property for interaction control:

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/diagram/connectors/es5EditOrientation-cs1/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/diagram/connectors/es5EditOrientation-cs1/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/diagram/connectors/es5EditOrientation-cs1" %}
