---
layout: post
title: Display modes in React Speed dial component | Syncfusion
description: Learn here all about Display modes in Syncfusion React Speed dial component of Syncfusion Essential JS 2 and more.
control: Display modes 
platform: ej2-react
documentation: ug
domainurl: ##DomainURL##
---

# Display modes in React Speed dial component

Choose between two layout modes to display SpeedDial action items using the [`mode`](https://ej2.syncfusion.com/react/documentation/api/speed-dial#mode) property: Linear (list-based) and Radial (circular). Select the mode based on your UI design needs and available screen space.

## Linear display mode

In `Linear` mode, SpeedDial action items are displayed in a straight line format—either horizontally or vertically. This layout is ideal for straightforward action lists. By default, SpeedDial items display in `Linear` mode.

### Direction

Control the direction in which action items extend from the SpeedDial button by setting the [`direction`](https://ej2.syncfusion.com/react/documentation/api/speed-dial#direction) property. The `direction` determines whether items flow left, right, up, or down from the button. By default, the direction is set to `Auto`, where the layout automatically adjusts based on the SpeedDial's [`position`](https://ej2.syncfusion.com/react/documentation/api/speed-dial#position) on the screen to avoid viewport edges.

The available Linear directions are:

* **Left** - Action items extend leftward from the SpeedDial button
* **Right** - Action items extend rightward from the SpeedDial button
* **Up** - Action items extend upward from the SpeedDial button
* **Down** - Action items extend downward from the SpeedDial button
* **Auto** - Direction auto-calculates based on the SpeedDial's position to keep items visible. For example, if SpeedDial is at bottom-right, items display at top.

{% tabs %}
{% highlight js tabtitle="app.jsx" %}
{% include code-snippet/speed-dial/radial-cs1/app/app.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="app.tsx" %}
{% include code-snippet/speed-dial/radial-cs1/app/app.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/speed-dial/radial-cs1" %}

## Radial display mode (Radial Menu)

Display action items in a circular pattern around the SpeedDial button using `Radial` mode. This creates a radial menu layout ideal for presenting multiple options in an organized, visually distinctive way. For comprehensive radial mode customization options including direction, angles, and offset, see the [Radial Menu documentation](https://ej2.syncfusion.com/react/documentation/speed-dial/radial-menu/).