---
layout: post
title: Connector Port in React Diagram | Syncfusion®
description: Define connector port drop points in the React Diagram so other connectors can attach mid-path through alignment and displacement for precision.
control: Ports 
platform: ej2-react
documentation: ug
domainurl: ##DomainURL##
---

# Connector Port in React Diagram

Before working with connector ports, ensure the Diagram component is set up with connectors and ports. For details, see [Ports](./ports.md) and [Connectors](./connectors.md).

Connector ports serve as connection points along connectors, enabling other connectors to attach at specific locations rather than just the endpoints. This guide covers creating connector ports, configuring their alignment and displacement, and establishing port-to-port connections.

## Create Connector Port

Creating connector ports follows the same pattern as node ports - define a port collection and assign it to the connector's [`ports`](https://ej2.syncfusion.com/react/documentation/api/diagram/connector#ports) property.

The following code example shows how to create a connector port:

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/diagram/ports/ports-con1/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/diagram/ports/ports-con1/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/diagram/ports/ports-con1" %}


## Port Alignment

Control the position of ports along the connector using the [`alignment`](https://ej2.syncfusion.com/react/documentation/api/diagram/portalignment) property. This property determines where the port appears relative to the connector's path. Valid `PortAlignment` values are `Before`, `Center` (default), and `After`:

- **Before**: Positions the port at the source end of the connector.
- **After**: Positions the port at the target end of the connector.
- **Center**: Positions the port at the midpoint of the connector (default).

The following code example shows how to set different alignment values for connector ports:

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/diagram/ports/ports-con2/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/diagram/ports/ports-con2/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/diagram/ports/ports-con2" %}

## Port Displacement

Fine-tune port positioning using the [`displacement`](https://ej2.syncfusion.com/react/documentation/api/diagram/point) property, which applies offset values to move ports from their aligned position. Displacement works with alignment by shifting the port by the specified x and y coordinates relative to the alignment point. Displacement has no effect when `alignment` is set to `Center` (the default).

The following code example demonstrates how to apply displacement to connector ports:

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/diagram/ports/ports-con3/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/diagram/ports/ports-con3/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/diagram/ports/ports-con3" %}

N> Displacement only takes effect when `alignment` is set to `Before` or `After`.

## Establish Port-to-Port Connections

Connect one connector to another connector's port by specifying the port ID in the [`sourcePortID`](https://ej2.syncfusion.com/react/documentation/api/diagram/connector#sourceportid) or [`targetPortID`](https://ej2.syncfusion.com/react/documentation/api/diagram/connector#targetportid) property, creating precise mid-path connection points. For example, set `sourcePortID: 'port1'` and `targetPortID: 'port2'` on the connecting connector. If the specified port ID does not exist on the target connector, the connection falls back to the connector endpoint.

The following code example shows how to connect a connector to a connector port:

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/diagram/ports/ports-con4/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/diagram/ports/ports-con4/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/diagram/ports/ports-con4" %}

## See also

* [How to customize the ports](./ports-appearance)
* [How to set the position of the port](./ports-positioning)
* [How to interact with the ports](./ports-interaction)
* [Ports overview](./ports)