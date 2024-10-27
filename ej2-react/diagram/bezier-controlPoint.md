---
layout: post
title: Bezier control points interaction in React Diagram component | Syncfusion
description: Learn here all about Connectors in Syncfusion React Diagram component of Syncfusion Essential JS 2 and more.
control: Bezier control points interaction
platform: ej2-react
documentation: ug
domainurl: ##DomainURL##
---

# Bezier Control points 

## How to interact with the bezier segments efficiently

While interacting with multiple bezier segments, maintain their control points at the same distance and angle by using the bezierSettings smoothness property of the connector class.

| BezierSmoothness value | Description | Output |
|-------- | -------- | -------- |
| SymmetricDistance| Both control points of adjacent segments will be at the same distance when any one of them is editing. | ![Symmetric distance](images/Symmetric-distance.gif) |
| SymmetricAngle | Both control points of adjacent segments will be at the same angle when any one of them is editing. | ![Symmetric Angle](images/symmetric-Angle.gif) |
| Default | Both control points of adjacent segments will be at the same angle and same distance when any one of them is editing. | ![Default](images/DefaultSymmetric.gif) |
| None | Segment’s control points are interacted independently from each other. | ![None](images/SymmetricNoneImage.png) |

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/diagram/connectors/es5BezierSegment-cs1/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/diagram/connectors/es5BezierSegment-cs1/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/diagram/connectors/es5BezierSegment-cs1" %}

## How to show or hide the bezier segment’s control points

By using the [`controlPointsVisibility`](https://ej2.syncfusion.com/react/documentation/api/diagram/controlPointsVisibility/) property of [`bezierSettings`](https://ej2.syncfusion.com/react/documentation/api/diagram/bezierSettingsModel/), you can enable or disable the visibility of the bezier segment’s control points.

| ControlPointsVisibility value | Description | Output |
|-------- | -------- | -------- |
| None |It allows you to hide all control points of the bezier connector. | ![ControlPointsVisibility None](images/controlPointVisibilityNone.png) |
| Source | It allows you to show control points of the source segment and hides all other control points in a bezier connector. | ![ControlPointsVisibility Source](images/controlPointVisibilitySource.png) |
| Target | It allows you to show control points of the target segment and hides all other control points in a bezier connector. | ![ControlPointsVisibility Target](images/controlPointVisibilityTarget.png) |
| Intermediate | It allows you to show control points of the intermediate segments and hides all other control points in a bezier connector.| ![ControlPointsVisibility Intermediate](images/controlPointVisibilityIntermediate.png) |
| All | It allows you to show all the control points of the bezier connector, including the source, target, and intermediate segments’ control points. | ![ControlPointsVisibility All](images/controlPointVisibilityAll.png) |
