---
layout: post
title: Port Appearance in React Diagram | Syncfusion®
description: Style React Diagram ports with stroke color, width, fill, opacity, and size, and toggle port visibility per connector and interaction needs.
control: Ports 
platform: ej2-react
documentation: ug
domainurl: ##DomainURL##
---

# Port Appearance in React Diagram

## Overview

Before customizing port appearance, ensure ports are added to nodes. For details, see [Ports](./ports.md#create-port).

Ports serve as connection points on diagram nodes where connectors can be attached. The appearance of ports can be customized through the port's `style` object using the [`strokeColor`](https://ej2.syncfusion.com/react/documentation/api/diagram/shapeStyleModel#strokecolor), [`strokeWidth`](https://ej2.syncfusion.com/react/documentation/api/diagram/shapeStyleModel#strokewidth), [`fill`](https://ej2.syncfusion.com/react/documentation/api/diagram/shapeStyleModel#fill), and [`opacity`](https://ej2.syncfusion.com/react/documentation/api/diagram/shapeStyleModel#opacity) properties of the port. Customize the port size by using the [`width`](https://ej2.syncfusion.com/react/documentation/api/diagram/pointPortModel#width) and [`height`](https://ej2.syncfusion.com/react/documentation/api/diagram/pointPortModel#height) properties of the port. The port's [`visibility`](https://ej2.syncfusion.com/react/documentation/api/diagram/portVisibility) property allows you to define when the port should be visible.

For more information about port visibility, refer to [PortVisibility](#port-visibility).

The following code illustrates how to change the appearance of a port.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/diagram/ports/ports-cs5/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/diagram/ports/ports-cs5/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/diagram/ports/ports-cs5" %}

## Change Appearance of Port at Runtime

The appearance of a port can be changed at runtime by customizing the style properties of the port. After modifying the port's style properties, call `diagram.dataBind()` to apply the changes. This is useful when you need to provide visual feedback based on user interactions or application state changes. The following code illustrates how to change the appearance of a port at runtime.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/diagram/ports/ports-cs6/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/diagram/ports/ports-cs6/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/diagram/ports/ports-cs6" %}

## Port Visibility

The visibility of ports is determined by the [`visibility`](https://ej2.syncfusion.com/react/documentation/api/diagram/pointportmodel#visibility) property of each port using the [`PortVisibility`](https://ej2.syncfusion.com/react/documentation/api/diagram/portVisibility) enum. This enum includes properties such as **Connect**, **Hidden**, **Hover**, and **Visible**. By default, the port visibility is set to **Hidden**.

| Property | Definition |
|----|----|
| Hover | Port is visible when the mouse hovers over the DiagramElement. |
| Hidden | Port is not visible for the DiagramElement. |
| Connect | The port becomes visible when you hover the connector thumb over the DiagramElement where the port resides. |
| Visible | Port is always visible for the DiagramElement. |

## Port Shape

The shape of a port can be changed by using its [`shape`](https://ej2.syncfusion.com/react/documentation/api/diagram/pointPortModel#shape) property. To explore the different types of port shapes, refer to [`Port Shapes`](https://ej2.syncfusion.com/react/documentation/api/diagram/portshapes). By default, the port shape is **Square**. Different shapes help distinguish between different types of connections or data flow directions.

### Types of Port Shapes

The following basic built-in `PortShapes` are available for ports:

* Circle
* Custom
* Square
* X

### Customize the Port’s Shape

Custom shape support is provided for ports. You can add the custom path data instead of built-in shapes when you need specific visual indicators that match your application's design requirements or represent particular data types.
To render a custom shape, set shape to **Custom** and define the path by using the port's [`pathData`](https://ej2.syncfusion.com/react/documentation/api/diagram/pointPortModel#pathdata) property.

 The following code illustrates how to set a custom shape for a port.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/diagram/ports/ports-shapes/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/diagram/ports/ports-shapes/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/diagram/ports/ports-shapes" %}


## Constraints

The constraints property allows you to enable or disable certain behaviors of ports, providing fine-grained control over port functionality. For more information about port constraints, refer to [`PortConstraints`](https://ej2.syncfusion.com/react/documentation/api/diagram/portconstraints).

The PortConstraints may have multiple behaviors like listed below:

| Constraints | Usage |
|----|----|
| None | Disables all behaviors of Port. |
| Draw | Enables or disables to draw a connector. |
| InConnect | Enables or disables connecting to the incoming Connector. |
| OutConnect | Enables or disables connecting the outgoing Connector. |
| ToolTip | Enables or disables the tooltip for the ports. |
| Drag | Enables or disables dragging of port. |
| InheritTooltip | Inherits the tooltip behavior from the parent node or connector. |

## See also

* [How to interact with the ports](./ports-interaction)
* [How to set the position of the port](./ports-positioning)
* [How to create connector port](./ports-connector-port)
* [Ports overview](./ports)