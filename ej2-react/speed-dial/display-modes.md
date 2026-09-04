---
layout: post
title: Display modes in React Speed Dial | Syncfusion
description: Switch between Linear and Radial display modes for the React Speed Dial action items. Set direction, angles, and offsets via the mode property.
control: Display modes 
platform: ej2-react
documentation: ug
domainurl: ##DomainURL##
---

# Display modes in React Speed Dial

Choose between two layout modes to display React Speed Dial action items using the [`mode`](https://ej2.syncfusion.com/react/documentation/api/speed-dial#mode) property: Linear (list-based) and Radial (circular). Select the mode based on your UI design needs and available screen space.

## Linear display mode

In `Linear` mode, React Speed Dial action items are displayed in a straight line format—either horizontally or vertically. This layout is ideal for straightforward action lists. By default, React Speed Dial items display in `Linear` mode.

### Direction

Control the direction in which action items extend from the React Speed Dial button by setting the [`direction`](https://ej2.syncfusion.com/react/documentation/api/speed-dial#direction) property. The `direction` determines whether items flow left, right, up, or down from the button. By default, the direction is set to `Auto`, where the layout automatically adjusts based on the React Speed Dial's [`position`](https://ej2.syncfusion.com/react/documentation/api/speed-dial#position) on the screen to avoid viewport edges.

The available Linear directions are:

* **Left** - Action items extend leftward from the React Speed Dial button
* **Right** - Action items extend rightward from the React Speed Dial button
* **Up** - Action items extend upward from the React Speed Dial button
* **Down** - Action items extend downward from the React Speed Dial button
* **Auto** - Direction auto-calculates based on the React Speed Dial's position to keep items visible. For example, if React Speed Dial is at bottom-right, items display at top.

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

Display action items in a circular pattern around the React Speed Dial button using `Radial` mode. This creates a radial menu layout ideal for presenting multiple options in an organized, visually distinctive way. For comprehensive radial mode customization options including direction, angles, and offset, see the [Radial Menu documentation](https://ej2.syncfusion.com/react/documentation/speed-dial/radial-menu/).