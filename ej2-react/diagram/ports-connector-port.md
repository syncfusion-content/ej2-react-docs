---
layout: post
title: Connector ports in React Diagram Component | Syncfusion®
description: Learn how to create connector ports, configure alignment and displacement, and establish port-to-port connections in Syncfusion® React Diagram Component.
control: Ports 
platform: ej2-react
documentation: ug
domainurl: ##DomainURL##
---

# Using Connector Ports in React Diagram Component

Connector ports serve as connection points along connectors, enabling other connectors to attach at specific locations rather than just the endpoints. This guide covers creating connector ports, configuring their alignment and displacement, and establishing port-to-port connections.

## Create Connector Port

Connector ports serve as connection points along connectors, enabling other connectors to attach at specific locations rather than just the endpoints. Creating connector ports follows the same pattern as node ports - define a port collection and assign it to the connector's [`ports`](https://ej2.syncfusion.com/react/documentation/api/diagram/connector/#ports) property.

The following code example shows how to create connector port.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/diagram/ports/ports-con1/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/diagram/ports/ports-con1/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/diagram/ports/ports-con1"%}


## Port Alignment

Control the position of ports along the connector using the [`alignment`](https://ej2.syncfusion.com/react/documentation/api/diagram/portAlignment/) property. This property determines where the port appears relative to the connector's path:

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

{% previewsample "page.domainurl/code-snippet/diagram/ports/ports-con2"%}



## Port Displacement

Fine-tune port positioning using the [`displacement`](https://ej2.syncfusion.com/react/documentation/api/diagram/point/) property, which applies offset values to move ports from their aligned position. Displacement works by shifting the port by specified x and y coordinates relative to the alignment point.

The following code example demonstrates how to apply displacement to connector ports:

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/diagram/ports/ports-con3/app/index.jsx%}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/diagram/ports/ports-con3/app/index.tsx%}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/diagram/ports/ports-con3"%}


N> The displacement will work only if we set alignment as after or before.

## Establish Port-to-Port Connections

Connect one connector to another connector's port by specifying the port ID in the [`sourcePortID`](https://ej2.syncfusion.com/react/documentation/api/diagram/connector/#sourceportid) or [`targetPortID`](https://ej2.syncfusion.com/react/documentation/api/diagram/connector/#targetportid) property. This creates precise connection points along connector paths instead of connecting to endpoints.

The following code example shows how to connect a connector to a connector port:

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/diagram/ports/ports-con4/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/diagram/ports/ports-con4/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/diagram/ports/ports-con4"%}

## See also

* [How to customize the ports.](./ports-appearance)

* [How to set the position of the port.](./ports-positioning)

* [How to interact with the ports.](./ports-interaction)