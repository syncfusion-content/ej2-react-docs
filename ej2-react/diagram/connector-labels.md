---
layout: post
title: Connector Labels in React Diagram | Syncfusion®
description: Place text annotations along React Diagram connector paths with offset, alignment, displacement, segment angle, and margin controls for precise labeling.
control: Connector Labels 
platform: ej2-react
documentation: ug
domainurl: ##DomainURL##
---

# Connector Labels in React Diagram

Connector annotations are text labels that can be positioned along connector paths to provide descriptive information or context. These annotations offer flexible positioning and styling options to enhance diagram readability and communication.

N> Use the current Syncfusion® React Diagram package with the React version supported by your package release.

Annotations on connectors can be precisely positioned and customized using the following properties of the Annotation class:

* **offset** - Controls position along the connector path (0 to 1).
* **alignment** - Aligns the annotation relative to connector segments.
* **displacement** - Moves the annotation away from its calculated position.
* **segmentAngle** - Rotates the annotation based on connector direction.
* **horizontalAlignment** - Controls horizontal positioning.
* **verticalAlignment** - Controls vertical positioning.
* **margin** - Adds spacing around the annotation.

## Basic example

The following basic example shows a connector with a path annotation positioned on the connector path.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/diagram/annotations/es5Update-cs5/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/diagram/annotations/es5Update-cs5/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/diagram/annotations/es5Update-cs5" %}

## Annotation offset

The [`offset`](https://helpej2.syncfusion.com/react/documentation/api/diagram/pathAnnotationModel#offset) for [`pathAnnotation`](https://helpej2.syncfusion.com/react/documentation/api/diagram/pathAnnotationModel) accepts a number value ranging from 0 to 1, representing the position along the connector path from source to target point. An offset value of 0 positions the annotation at the source point, while 1 positions it at the target point. The default offset value is 0.5, which centers the annotation on the connector.

The following code example demonstrates how to configure the offset for connector annotations:

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/diagram/annotations/es5Update-cs5/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/diagram/annotations/es5Update-cs5/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/diagram/annotations/es5Update-cs5" %}

The following image shows the position of the annotation with respect to different offsets.

![PathAnnotation offset](images/diagram-pathAnnotation-offset.png)

## Annotation alignment

Connector annotations can be aligned relative to their segment path using the [`alignment`](https://helpej2.syncfusion.com/react/documentation/api/diagram/annotationAlignment) property. This property offers three alignment options:

* **Before** - Positions the annotation before the calculated offset point.
* **Center** - Centers the annotation at the offset point (default).
* **After** - Positions the annotation after the calculated offset point.

The following code example illustrates how to align connector annotations.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/diagram/annotations/es5Segment-cs1/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/diagram/annotations/es5Segment-cs1/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/diagram/annotations/es5Segment-cs1" %}

## Horizontal and vertical alignment

The [`horizontalAlignment`](https://helpej2.syncfusion.com/react/documentation/api/diagram/horizontalAlignment) and [`verticalAlignment`](https://helpej2.syncfusion.com/react/documentation/api/diagram/verticalAlignment) properties control the final placement of the annotation relative to its computed position. Use `horizontalAlignment` to place the annotation on the left, center, or right, and `verticalAlignment` to place it at the top, center, or bottom.

The following example demonstrates both properties:

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/diagram/annotations/es5Alignment-cs1/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/diagram/annotations/es5Alignment-cs1/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/diagram/annotations/es5Alignment-cs1" %}

## Displacement of annotation

The [`Displacement`](https://helpej2.syncfusion.com/react/documentation/api/diagram/pointModel) property allows annotations to be moved away from their calculated position by a specified distance. This feature is particularly useful for avoiding overlaps with connector paths or improving visual clarity.

The following example shows how to apply displacement to connector annotations:

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/diagram/annotations/es5Displacement-cs1/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/diagram/annotations/es5Displacement-cs1/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/diagram/annotations/es5Displacement-cs1" %}

N> Displacement applies only when `alignment` is set to **Before** or **After**.

## Segment angle for annotation

The [`segmentAngle`](https://helpej2.syncfusion.com/react/documentation/api/diagram/pathAnnotationModel#segmentangle) property controls whether annotations rotate to match the connector segment direction. When set to **true**, annotations automatically rotate based on the angle of the connector segment they are positioned on, creating a more integrated visual appearance. When set to **false** (default), annotations maintain their original orientation regardless of connector direction.

The following code example demonstrates how to configure segment angle rotation:

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/diagram/annotations/es5SegmentAngle-cs1/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/diagram/annotations/es5SegmentAngle-cs1/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/diagram/annotations/es5SegmentAngle-cs1" %}

|Segment angle|Output|
|-----|-----|
|True|![Segment angle true](images/diagram-annotation-segmentAngle-true.png)|
|False|![Segment angle false](images/diagram-annotation-segmentAngle-false.png)|