---
layout: post
title: Ports interaction in React Diagram Component | Syncfusion®
description: Learn about ports interaction in Syncfusion® React Diagram Component including drawing connectors, drag functionality, and events.
control: Ports 
platform: ej2-react
documentation: ug
domainurl: ##DomainURL##
---

# Interactive Port Features in React Diagram Component

Ports in React Diagram components support various interactive features that enhance user workflow and diagram creation efficiency. This guide covers drawing connectors from ports, drag functionality, automatic port creation, tooltips, and event handling.

## Draw Connector from Port

Ports can serve as connection points for creating connectors dynamically. Enable the `Draw` constraint on the [`constraints`](https://ej2.syncfusion.com/react/documentation/api/diagram/portconstraints/) property to allow users to draw connectors directly from ports. The default connector segment type is **Orthogonal**, providing structured, right-angled connections suitable for flowcharts and organizational diagrams.

The following code explains how to draw the connector by using the port constraints.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/diagram/ports/ports-int1/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/diagram/ports/ports-int1/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/diagram/ports/ports-int1" %}

### Draw Different Connector Types from Port

The default connector type can be customized when drawing from ports by configuring connector defaults. This flexibility allows creation of various connector styles to match different diagram requirements:

* **Straight**: Direct linear connections for simple relationships.
* **Bezier**: Curved connections for organic, flowing designs.
* **Orthogonal**: Right-angled connections for structured layouts.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/diagram/ports/ports-int2/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/diagram/ports/ports-int2/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/diagram/ports/ports-int2" %}

## Port Drag

Port drag functionality enables users to reposition ports by clicking and dragging with the mouse. This feature enhances diagram flexibility by allowing dynamic port placement adjustments. Enable this capability by setting the port constraints to **Drag**.

The following code explains how to enable port drag.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/diagram/ports/ports-int3/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/diagram/ports/ports-int3/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/diagram/ports/ports-int3" %}

## Automatic Port Creation

The Diagram component supports dynamic port creation through user interaction. Users can create ports on nodes or connectors by clicking and dragging while holding the Control (Ctrl) key. This feature is disabled by default and requires enabling the `DiagramConstraints.AutomaticPortCreation` constraint.

Ports can also be removed using the same Ctrl + Click interaction, provided the port is not connected to any connector. This prevents accidental disconnection of active connections.

The following example shows how to enable automatic port creation:

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/diagram/ports/automaticPortCreation/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/diagram/ports/automaticPortCreation/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/diagram/ports/automaticPortCreation" %}

## Port Tooltip

Port tooltips provide contextual information when users hover over ports, improving usability and user guidance. Enable this feature by setting the port constraints to **Tooltip**.

The following code explains how to enable port tooltip.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/diagram/ports/ports-int4/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/diagram/ports/ports-int4/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/diagram/ports/ports-int4" %}

## Events

Port interactions trigger specific events that enable custom handling and application logic. These events provide hooks for implementing validation, logging, or custom behaviors during port operations.

| Event| Description|
|----|----|
| [`Click`](https://ej2.syncfusion.com/react/documentation/api/diagram/iClickEventArgs/) | Triggers when the port is clicked. |
| [`Element Draw`](https://ej2.syncfusion.com/react/documentation/api/diagram/iElementDrawEventArgs/)  | Triggers when drawing a connector from the port. |
| [`Position Change`](https://ej2.syncfusion.com/react/documentation/api/diagram/iDraggingEventArgs/)  | Triggers when the port is dragged. |
| [`Connection Change`](https://ej2.syncfusion.com/react/documentation/api/diagram/iConnectionChangeEventArgs/) | Triggers when a connector is connected or disconnected from the port|

The following example shows how to get these events in diagram.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/diagram/ports/ports-int5/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/diagram/ports/ports-int5/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/diagram/ports/ports-int5" %}

## See also

* [How to customize the ports.](./ports-appearance)

* [How to set the position of the port.](./ports-positioning)

* [How to create connector port.](./ports-connector-port)
