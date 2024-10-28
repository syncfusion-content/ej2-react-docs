---
layout: post
title: Ruler in React Diagram component | Syncfusion
description: Learn here all about Ruler in Syncfusion React Diagram component of Syncfusion Essential JS 2 and more.
control: Ruler 
platform: ej2-react
documentation: ug
domainurl: ##DomainURL##
---

# Ruler in React Diagram component

The ruler provides horizontal and vertical guides for measuring in the diagram control. It can be used to measure diagram objects, indicate positions, and align diagram elements, making it especially useful for creating scale models.The ruler also includes a position indicator that displays the precise location of the mouse cursor on the diagram canvas, with the default color of the position indicator marker being red.

## Define rulers

The [`rulerSettings`](https://ej2.syncfusion.com/react/documentation/api/diagram/rulerSettings/) property of diagram is used to control the visibility and appearance of the ruler in the diagram.

The [`showRulers`](https://ej2.syncfusion.com/react/documentation/api/diagram/rulerSettings/#showrulers) property is used to show or hide the rulers in the diagram.


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

[`horizontalRuler`](https://ej2.syncfusion.com/react/documentation/api/diagram/rulerSettings/#horizontalruler) and [`verticalRuler`](https://ej2.syncfusion.com/react/documentation/api/diagram/rulerSettings/#verticalruler) properties of `rulerSettings` are used to customize the rulers appearance in the diagram.


By default, the ruler segments are arranged based on pixel values.

The HorizontalRuler’s [`interval`](https://ej2.syncfusion.com/react/documentation/api/diagram/diagramRuler/#interval) property defines the spacing between ruler segments, and the[`segmentWidth`](https://ej2.syncfusion.com/react/documentation/api/diagram/diagramRuler/#segmentwidth) property sets the width of each segment. Similarly, the VerticalRuler’s  [`interval`](https://ej2.syncfusion.com/react/documentation/api/diagram/diagramRuler/#interval) and [`segmentWidth`](https://ej2.syncfusion.com/react/documentation/api/diagram/diagramRuler/#segmentwidth) properties control the interval and segment width for the vertical ruler.

The HorizontalRuler’s [`tickAlignment`](https://ej2.syncfusion.com/react/documentation/api/diagram/diagramRuler/#tickalignment) property aligns the ruler ticks to the left or right side, while the VerticalRuler’s  [`tickAlignment`](https://ej2.syncfusion.com/react/documentation/api/diagram/diagramRuler/#tickalignment) aligns them to the top or bottom.

The HorizontalRuler’s [`thickness`](https://ej2.syncfusion.com/react/documentation/api/diagram/diagramRuler/#thickness) property sets the thickness of the horizontal ruler, and the VerticalRuler’s [`thickness`](https://ej2.syncfusion.com/react/documentation/api/diagram/diagramRuler/#thickness) property sets the thickness of the vertical ruler.

The following code shows how the diagram ruler can be customized.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/diagram/ruler/customRuler-cs1/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/diagram/ruler/customRuler-cs1/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/diagram/ruler/customRuler-cs1" %}


### Arrange tick

The HorizontalRuler’s [`arrangeTick`](https://ej2.syncfusion.com/react/documentation/api/diagram/diagramRuler/#arrangetick) and VerticalRuler’s [`arrangeTick`](https://ej2.syncfusion.com/react/documentation/api/diagram/diagramRuler/#arrangetick) functions allow you to customize the appearance of ruler ticks. These functions are called for each tick rendering.

The following code demonstrates how to use the `arrangeTick` function to customize the tickLength.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/diagram/ruler/customRuler-cs2/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/diagram/ruler/customRuler-cs2/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/diagram/ruler/customRuler-cs2" %}

### Marker color

The HorizontalRuler’s [`markerColor`](https://ej2.syncfusion.com/react/documentation/api/diagram/diagramRuler/#markercolor) and VerticalRuler’s [`markerColor`](https://ej2.syncfusion.com/react/documentation/api/diagram/diagramRuler/#markercolor) properties are used to define the ruler marker color and marker will be shown while hovering mouse over the diagram canvas.

N> : The MarkerColor property can be customized using the [`marker`](./style/#customizing-the-ruler) CSS style.