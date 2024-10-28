---
layout: post
title: Ports appearance in React Diagram component | Syncfusion
description: Learn here all about Ports in Syncfusion React Diagram component of Syncfusion Essential JS 2 and more.
control: Ports 
platform: ej2-react
documentation: ug
domainurl: ##DomainURL##
---


## Appearance

The appearance of ports can be customized by using [`strokeColor`](https://ej2.syncfusion.com/react/documentation/api/diagram/shapeStyleModel/#strokecolor), [`strokeWidth`](https://ej2.syncfusion.com/react/documentation/api/diagram/shapeStyleModel/#strokewidth),[`fill`](https://ej2.syncfusion.com/react/documentation/api/diagram/shapeStyleModel/#fill) and [`opacity`](https://ej2.syncfusion.com/react/documentation/api/diagram/shapeStyleModel/#opacity) properties of the port. Customize the port size by using the [`width`](https://ej2.syncfusion.com/react/documentation/api/diagram/pointPortModel/#width) and [`height`](https://ej2.syncfusion.com/react/documentation/api/diagram/pointPortModel/#height) properties of port. The ports [`visibility`](https://ej2.syncfusion.com/react/documentation/api/diagram/portvisibility/) property allows you to define, when the port should be visible. 

For more information about port visibility refer [`Port Visibility`](#port-visibility)

The following code illustrates how to change the appearance of port.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/diagram/ports/ports-cs5/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/diagram/ports/ports-cs5/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/diagram/ports/ports-cs5" %}

### Change appearance of port at runtime

The appearance of port can be changed at runtime by customizing the style of port.The following code illustrates how to change the appearance of port at runtime.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/diagram/ports/ports-cs6/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/diagram/ports/ports-cs6/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/diagram/ports/ports-cs6" %}

## Port visibility

The visibility of the ports is determined by the [`visibility`](https://ej2.syncfusion.com/react/documentation/api/diagram/portvisibility/) property of port using the [`PortVisibility`](https://ej2.syncfusion.com/react/documentation/api/diagram/portVisibility/) enum, This enum includes properties such as `Connect`, `Hidden`, `Hover`, and `Visible`. By default, the port visibility is set to **Hidden**.

| Property | Definition |
|----|----|
| Hover | Port is visible when mousehover the DiagramElement. |
| Hidden | Port is not visible for the DiagramElement. |
| Connect | The port becomes visible when you hover the connector thumb over the DiagramElement where the port resides. |
| Visible | Port is always visible for the DiagramElement. |

## Port shape 

The shape of port can be changed by using its shape property. To explore the different types of port shapes, refer to [`Port Shapes`](https://ej2.syncfusion.com/react/documentation/api/diagram/portshapes/). By default the port shape is `Square`.

### Types of port shapes

We have provided some basic built-in `PortShapes` for the port. Find the shapes as follows.

* Circle
* Custom
* Square
* X

### Customize the port’s shape

Custom shape support has been provided for port. You can able to add the custom path data instead of build-in shapes. 
If you need to render a custom shape, then you can set shape as `Custom` and define path using [`pathData`](https://ej2.syncfusion.com/react/documentation/api/diagram/pointPortModel/#pathdata) property of port.

 The following code illustrates how to set custom shape to the port.

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

The constraints property allows to enable/disable certain behaviors of ports. For more information about port constraints, refer to [`Port Constraints`](https://ej2.syncfusion.com/react/documentation/api/diagram/portconstraints/).

The PortConstraints may have multiple behaviors like listed below:

| Constraints | Usage |
|----|----|
| None |Disables all behaviors of Port. |
| Draw |Enables or disables to draw a connector. |
| InConnect |Enables or disables connecting to the incoming Connector.  |
| OutConnect | Enables or disables connecting the outgoing Connector. |
| ToolTip |Enables or disables the Tooltip  for the ports. |
| Drag |Enables or disables dragging of port.  |
| InheritTooltip | Enables or disables the Tooltip  for the ports. |

## See also

* [How to interact with the ports](./ports-interaction)

* [How to set the position of the port](./ports-positioning)

* [How to create connector port](./ports-connector-port)