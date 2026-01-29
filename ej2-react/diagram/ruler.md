---
layout: post
title: Ruler in React Diagram Component | Syncfusion®
description: Learn here all about Ruler in Syncfusion® React Diagram Component of Syncfusion Essential® JS 2 and more.
control: Ruler 
platform: ej2-react
documentation: ug
domainurl: ##DomainURL##
---

# Ruler in React Diagram Component

The ruler provides horizontal and vertical guides for measuring in the diagram control. It can be used to measure diagram objects, indicate positions, and align diagram elements, making it especially useful for creating scale models. The ruler also includes a position indicator that displays the precise location of the mouse cursor on the diagram canvas, with the default color of the position indicator marker being red.

The diagram ruler consists of two components: a horizontal ruler displayed along the top edge and a vertical ruler along the left edge of the diagram canvas. Both rulers work together to provide comprehensive positioning and measurement capabilities.

## Define Rulers

The [`rulerSettings`](https://ej2.syncfusion.com/react/documentation/api/diagram/rulerSettings/) property of diagram controls the visibility and appearance of the ruler in the diagram.
The [`showRulers`](https://ej2.syncfusion.com/react/documentation/api/diagram/rulerSettings/#showrulers) property shows or hides the rulers in the diagram.

The following code shows how to add a ruler to the diagram.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/diagram/ruler/ruler-cs1/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/diagram/ruler/ruler-cs1/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/diagram/ruler/ruler-cs1" %}

## Customizing the Ruler

The [`horizontalRuler`](https://ej2.syncfusion.com/react/documentation/api/diagram/rulerSettings/#horizontalruler) and [`verticalRuler`](https://ej2.syncfusion.com/react/documentation/api/diagram/rulerSettings/#verticalruler) properties of `rulerSettings` customize the rulers appearance in the diagram.

By default, the ruler segments are arranged based on pixel values, with each segment representing a unit of measurement on the diagram canvas.

### Ruler Spacing and Dimensions

The [`interval`](https://ej2.syncfusion.com/react/documentation/api/diagram/diagramRuler/#interval) property defines the spacing between ruler segments, while the [`segmentWidth`](https://ej2.syncfusion.com/react/documentation/api/diagram/diagramRuler/#segmentwidth) property sets the width of each segment.
These properties apply to both horizontal and vertical rulers.

### Tick Alignment

The [`tickAlignment`](https://ej2.syncfusion.com/react/documentation/api/diagram/diagramRuler/#tickalignment) property controls the positioning of ruler tick marks. For the horizontal ruler, ticks can be aligned to the left or right side, while for the vertical ruler, they can be aligned to the top or bottom.

### Ruler Thickness

The [`thickness`](https://ej2.syncfusion.com/react/documentation/api/diagram/diagramRuler/#thickness) property sets the thickness of the ruler display area for both horizontal and vertical rulers.

The following code shows how the diagram ruler can be customized.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/diagram/reactCurlyExamples/customRuler-cs1/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/diagram/reactCurlyExamples/customRuler-cs1/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/diagram/ruler/customRuler-cs1" %}


### Arrange Tick

The [`arrangeTick`](https://ej2.syncfusion.com/react/documentation/api/diagram/diagramRuler/#arrangetick) function allows customization of ruler tick appearance for both horizontal and vertical rulers. This function is called during the rendering of each tick mark, providing control over tick properties such as length and style.

The following code demonstrates how to use the `arrangeTick` function to customize the tick length.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/diagram/ruler/customRuler-cs2/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/diagram/ruler/customRuler-cs2/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/diagram/ruler/customRuler-cs2" %}

### Marker Color

The HorizontalRuler’s [`markerColor`](https://ej2.syncfusion.com/react/documentation/api/diagram/diagramRuler/#markercolor)property defines the ruler marker color for both horizontal and vertical rulers. The marker appears when hovering the mouse over the diagram canvas, providing precise position feedback.

N>  The MarkerColor property can be customized using the [`marker`](./style/#customizing-the-ruler) CSS style.