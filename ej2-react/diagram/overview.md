---
layout: post
title: Overview in React Diagram | Syncfusion®
description: Add the React Diagram Overview (mini-map) panel for one-click navigation, panning, and zoom-to-area in large canvases through a small reference control.
control: Overview 
platform: ej2-react
documentation: ug
domainurl: ##DomainURL##
---

# Overview in React Diagram

The Overview component provides a miniature preview of the entire diagram content, enabling efficient navigation and viewport management for large diagrams. This component displays a scaled-down version of the diagram with a highlighted rectangle representing the current viewport, allowing users to quickly navigate to specific areas without manual zooming and panning.

## When to Use Overview

The Overview component is essential when working with:

* Large diagrams that exceed the visible viewport.
* Complex flowcharts or organizational charts requiring frequent navigation.
* Multi-section diagrams where users need to jump between different areas.
* Applications where users need spatial awareness of their current position within the diagram.


## Create Overview Component

To implement an overview, configure the [`sourceID`](https://ej2.syncfusion.com/react/documentation/api/overview/overviewModel#sourceid) property to reference the target diagram's identifier. This establishes the connection between the overview and the main diagram. The target `DiagramComponent` must have a valid `id` and be rendered in the DOM before the Overview binds to it via `sourceID`.

Define the overview dimensions using the [`width`](https://ej2.syncfusion.com/react/documentation/api/overview/overviewModel#width) and [`height`](https://ej2.syncfusion.com/react/documentation/api/overview/overviewModel#height) properties to ensure optimal visibility and performance. For the complete list of available properties, see the [Overview API reference](https://ej2.syncfusion.com/react/documentation/api/overview/overviewModel). The example below also sets `snapSettings` to `SnapConstraints.None` and defines a `NodeModel` array to populate the diagram.


The following code demonstrates a basic overview implementation. The component is rendered to the DOM using `ReactDOM.createRoot(...).render(<App />)`.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/diagram/overView/es5Node-cs2/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/diagram/overView/es5Node-cs2/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/diagram/overView/es5Node-cs2" %}

## Overview Interactions

The overview displays the current viewport as a red rectangle overlay. This rectangle serves as an interactive control for diagram navigation and zoom operations. These interactions are enabled by default; no additional configuration or code is required to enable drag, resize, or click navigation when the Overview is bound to a diagram.

### Available Interactions

* **Resize the rectangle**: Adjusts diagram zoom level proportionally.
* **Drag the rectangle**: Pans the diagram to follow rectangle movement.
* **Click on a position**: Instantly navigates to the clicked location.
* **Click and drag selection**: Defines a specific region for navigation and zoom.

### Interactive Navigation Example

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/diagram/overView/es5Node-cs1/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/diagram/overView/es5Node-cs1/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/diagram/overView/es5Node-cs1" %}

![Overview-interaction](images/overview-interaction.gif)

## Troubleshooting

If the Overview appears blank, verify that the diagram's `id` matches the Overview's `sourceID` and that the target diagram is rendered before the Overview.