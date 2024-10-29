---
layout: post
title: Connector ports in React Diagram component | Syncfusion
description: Learn here all about Ports in Syncfusion React Diagram component of Syncfusion Essential JS 2 and more.
control: Ports 
platform: ej2-react
documentation: ug
domainurl: ##DomainURL##
---

## Create connector port

The creation of connector ports is similar to the creation of node ports. To create connector ports, you need to define a port collection and assign it to the connector's ports property. 

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


## Port alignment

The port can be aligned before, after, or at the center of the connector by utilizing the [`alignment`](https://ej2.syncfusion.com/react/documentation/api/diagram/portAlignment/) property. By default, the port alignment is set to **center**.

The following code example shows how to set alignment to the connector port.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/diagram/ports/ports-con2/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/diagram/ports/ports-con2/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/diagram/ports/ports-con2"%}



## Port displacement

The connector port displacement allows users to adjust the position of ports relative to the connector. By setting displacement offsets, ports can be moved to precise locations along the connector.

The following code example shows how to set displacement to the connector port.

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

## Connector port connection

To establish a connection between connectors, connector ports are utilized. For this connection, the `sourcePortID` or `targetPortID` should be set to the ID of the respective port on the connector.

The following code example explains how to connect connector to the connector port.


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

* [How to customize the ports](./ports-appearance)

* [How to set the position of the port](./ports-positioning)

* [How to interact with the ports](./ports-interaction)