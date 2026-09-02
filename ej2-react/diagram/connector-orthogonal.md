---
layout: post
title: Orthogonal Connectors in React Diagram | Syncfusion®
description: Create orthogonal connectors in the React Diagram whose segments stay perpendicular, with editable length and direction for structured flowcharts.
control: Orthogonal 
platform: ej2-react
documentation: ug
domainurl: ##DomainURL##
---

# Orthogonal Connectors in React Diagram

Orthogonal connectors use segments that are always perpendicular to each other, which is ideal for creating structured layouts in flowcharts or organizational charts.

To create an orthogonal connector, set its [`type`](https://helpej2.syncfusion.com/react/documentation/api/diagram/connector#type) property to **Orthogonal**. The supported segment `direction` values are **Top**, **Bottom**, **Left**, and **Right**. The following code example illustrates how to create a default orthogonal connector and customize its segments.

Multiple segments can be defined one after another. To create a connector with multiple segments, define and add the segments to the [`connector.segments`](https://helpej2.syncfusion.com/react/documentation/api/diagram/connector#segments) collection. The following code example illustrates how to create a connector with multiple segments.

The [`length`](https://helpej2.syncfusion.com/react/documentation/api/diagram/orthogonalSegment#length) and [`direction`](https://helpej2.syncfusion.com/react/documentation/api/diagram/orthogonalSegment#direction) properties let you define the flow and length of the segment in pixels. The following code example illustrates how to create customized orthogonal segments.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/diagram/connectors/es5ConnectorsOrthoSegments-cs1/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/diagram/connectors/es5ConnectorsOrthoSegments-cs1/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/diagram/connectors/es5ConnectorsOrthoSegments-cs1" %}

N> You need to mention the segment type as same as what you mentioned in connector type. There should be no contradiction between connector type and segment type.

## Orthogonal Segment Editing

N> The `ConnectorEditing` module must be injected to enable orthogonal segment editing: `Diagram.Inject(ConnectorEditing)`.

* Orthogonal thumbs allow you to adjust the length of adjacent segments by clicking and dragging them.
* When necessary, some segments are added or removed automatically, when dragging the segment.
* This maintains proper routing of orthogonality between segments.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/diagram/connectors/es5ConnectorsOrtho-cs1/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/diagram/connectors/es5ConnectorsOrtho-cs1/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/diagram/connectors/es5ConnectorsOrtho-cs1" %}

![Orthogonal Segment edit Gif](images/orthoSegEdit.gif)

## Avoid Overlapping

Orthogonal segments automatically reroute themselves to avoid overlapping with their connected source and target nodes when the [`avoidLineOverlapping`](https://helpej2.syncfusion.com/react/documentation/api/diagram/avoidlineoverlapping) connector constraint is enabled. The following example connects two nodes through ports and illustrates how an orthogonal connector adjusts its path when a connected node is moved.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/diagram/connectors/es5ConnectorsOverlapping-cs1/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/diagram/connectors/es5ConnectorsOverlapping-cs1/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/diagram/connectors/es5ConnectorsOverlapping-cs1" %}

## How to Customize Orthogonal Segment Thumb Shape

The thumbs used to edit orthogonal segments are rendered as a `Circle` by default. You can change this shape using the diagram's [`segmentThumbShape`](https://helpej2.syncfusion.com/react/documentation/api/diagram#segmentthumbshape) property. The following predefined shapes are available:

| Shape name | Shape |
|-------- | -------- |
|Rhombus| ![Rhombus](images/rhombus.png) |
| Square | ![Square](images/Square.png) |
| Rectangle | ![Rectangle](images/Rectangle.png) |
| Ellipse |![Ellipse](images/Ellipse.png) |
|Arrow| ![Arrow](images/Arrow.png) |
| OpenArrow | ![OpenArrow](images/OpenArrow.png) |
| Circle |![Circle](images/Circle.png) |
| Fletch|![Fletch](images/Fletch.png) |
|OpenFetch| ![OpenFetch](images/OpenFetch.png) |
| IndentedArrow | ![IndentedArrow](images/IndentedArrow.png) |
| OutdentedArrow | ![OutdentedArrow](images/OutdentedArrow.png) |
| DoubleArrow |![DoubleArrow](images/DoubleArrow.png) |

You can also customize the style of the thumb shape by overriding the `e-orthogonal-thumb` CSS class.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/diagram/connectors/es5ConnectorsThumbshape-cs1/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/diagram/connectors/es5ConnectorsThumbshape-cs1/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/diagram/connectors/es5ConnectorsThumbshape-cs1" %}

![Segment Thumb Shape](images/thumbshape.png)

Use the following CSS to customize the segment thumb's appearance.

```scss

 .e-orthogonal-thumb {

            stroke:#24039e;

            fill:rgb(126, 190, 219);

            stroke-width: 3px;

            }

```

## How to Customize Orthogonal Segment Thumb Size

By default, orthogonal segment thumbs have a width and height of 10px. This can be customized for all connectors or for individual ones using the [`segmentThumbSize`](https://helpej2.syncfusion.com/react/documentation/api/diagram#segmentthumbsize) property.
To customize the thumb size for a specific connector, you must first disable the [`InheritSegmentThumbSize`](https://helpej2.syncfusion.com/react/documentation/api/diagram/connectorConstraints#InheritSegmentThumbSize) constraint. Then, you can set the connector's unique `segmentThumbSize` value.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/diagram/connectors/es5ConnectorsOrthoThumbSize-cs1/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/diagram/connectors/es5ConnectorsOrthoThumbSize-cs1/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/diagram/connectors/es5ConnectorsOrthoThumbSize-cs1" %}