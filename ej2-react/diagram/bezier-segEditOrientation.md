---
layout: post
title: Bezier Segment edit orientation in React Diagram component | Syncfusion
description: Learn here all about Connectors in Syncfusion React Diagram component of Syncfusion Essential JS 2 and more.
control: Bezier Segment edit orientation 
platform: ej2-react
documentation: ug
domainurl: ##DomainURL##
---

# Bezier Connector Settings

## How to edit bezier segments based on bezier connector settings

The intermediate point of two adjacent bezier segments can be edited interactively based on the [`segmentEditOrientation`](../api/diagram/bezierSegmentEditOrientation/) property of [`bezierSettings`](../api/diagram/bezierSettingsModel/).

| SegmentEditOrientation value | Description | Output |
|-------- | -------- | -------- |
| Bidirectional |It allows the intermediate points to be dragged in either vertical or horizontal directions. | ![Bidirectional](images/bez-bidirectional.gif) |
| Freeform | It allows the intermediate points to be dragged in any direction. | ![Freeform](images/bez-freeform.gif) |

The following code illustrates how to interact with Bezier efficiently by using the [`smoothness`](../api/diagram/bezierSmoothness/) and `segmentEditOrientation` properties of the `bezierSettings`.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/diagram/connectors/es5EditOrientation-cs1/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/diagram/connectors/es5EditOrientation-cs1/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/diagram/connectors/es5EditOrientation-cs1" %}
