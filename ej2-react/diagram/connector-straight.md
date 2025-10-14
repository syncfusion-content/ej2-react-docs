---
layout: post
title: Straight Connectors in React Diagram Component | Syncfusion®
description: Learn here all about Straight Connector Segments in Syncfusion® React Diagram Component of Syncfusion Essential® JS 2 and more.
control: Straight 
platform: ej2-react
documentation: ug
domainurl: ##DomainURL##
---

# Straight Connector Segments

Straight connector segments create direct linear connections between two points in a diagram. These segments are the simplest form of connector routing, providing the shortest path between nodes or connection points. Straight segments are ideal when you need clean, unobstructed connections without intermediate directional changes.

## Creating Straight Segments

To create a straight line connector, specify the [`type`](https://helpej2.syncfusion.com/react/documentation/api/diagram/connector/#type) of the segment as **straight** and add a straight segment to [`segments`](https://helpej2.syncfusion.com/react/documentation/api/diagram/connector/#segments) collection and need to specify [`type`](https://helpej2.syncfusion.com/react/documentation/api/diagram/connector/#type) property for the connector itself. The following code example demonstrates how to create a basic straight segment connector.

The following code example illustrates how to create a default straight segment.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/diagram/connectors/es5ConnectorsSegments-cs1/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/diagram/connectors/es5ConnectorsSegments-cs1/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/diagram/connectors/es5ConnectorsSegments-cs1" %}

## Defining Segment End Points

The [`point`](https://ej2.syncfusion.com/react/documentation/api/diagram/straightSegment/#point) property of a straight segment allows you to define its end point coordinates. This provides precise control over where each segment terminates, enabling complex connector paths composed of multiple straight segments. The following code example illustrates how to define the end point of a straight segment.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/diagram/connectors/es5ConnectorsSegmentsPoints-cs1/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/diagram/connectors/es5ConnectorsSegmentsPoints-cs1/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/diagram/connectors/es5ConnectorsSegmentsPoints-cs1" %}

## Straight Segment Editing

The end point of each straight segment is represented by a visual thumb control that enables interactive editing of the segment position. This allows users to dynamically modify connector paths by dragging segment endpoints.

### Adding Segments

New segments can be inserted into a straight line connector by clicking on the connector while pressing Shift and Ctrl keys simultaneously (Ctrl+Shift+Click). This creates additional control points for more complex routing.

### Removing Segments

Straight segments can be removed by clicking the segment end point while holding Ctrl and Shift keys (Ctrl+Shift+Click). This simplifies the connector path by eliminating unnecessary way points.

### Programmatic Editing

You can also add or remove segments programmatically using the [`editSegment`](https://ej2.syncfusion.com/react/documentation/api/diagram/#editsegment) method of the diagram component. This provides API-level control over connector segment manipulation.

The following example demonstrates how to add segments to a straight connector programmatically.

The following example shows how to add segments at runtime for the straight connector.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/diagram/connectors/es5StraightSegEdit-cs1/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/diagram/connectors/es5StraightSegEdit-cs1/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/diagram/connectors/es5StraightSegEdit-cs1" %}

![Straight Segment editing GIF](images/StraightSegEdit.gif)
