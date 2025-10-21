---
layout: post
title: Ports positioning in React Diagram Component | Syncfusion®
description: Learn how to position ports on nodes in  Syncfusion® React Diagram Component of Syncfusion Essential® JS 2 and more.
control: Ports 
platform: ej2-react
documentation: ug
domainurl: ##DomainURL##
---

# Port positioning in React Diagram Component

The React Diagram component provides flexible options for positioning ports on nodes. Ports can be precisely positioned using offset coordinates, alignment properties, and margin values to create professional diagram layouts that meet specific design requirements.

## Understanding Port Offset Positioning

The [`offset`](https://ej2.syncfusion.com/react/documentation/api/diagram/pointModel/) property positions ports using fractional coordinates relative to the node boundaries. The coordinate system uses values from 0 to 1, where:

- **0** represents the top edge (for Y-axis) or left edge (for X-axis).
- **1** represents the bottom edge (for Y-axis) or right edge (for X-axis).
- **0.5** represents the center point of the width or height.

The following table demonstrates port positioning with different offset values:

| Offset values | Output |
| -------- | -------- |
| (0,0) | ![Port offset (0,0)](images/port0-0.png) |
| (0,0.5) | ![Port offset (0,0.5)](images/port0-0.5.png) |
| (0,1) | ![Port offset (0,1)](images/port0-1.png) |
| (0.5,0) | ![Port offset (0.5,0)](images/port0.5-0.png) |
| (0.5,0.5) |![Port offset (0.5,0.5)](images/port0.5-0.5.png) |
| (0.5,1) | ![Port offset (0.5,1)](images/port0.5-1.png) |
| (1,0) | ![Port offset (1,0)](images/port1-0.png) |
| (1,0.5) | ![Port offset (1,0.5)](images/port1-0.5.png) |
| (1,1) | ![Port offset (1,1)](images/port1-1.png) |

## Horizontal and Vertical Alignment Options

The [`horizontalAlignment`](https://ej2.syncfusion.com/react/documentation/api/diagram/horizontalAlignment/) and [`verticalAlignment`](https://ej2.syncfusion.com/react/documentation/api/diagram/verticalAlignment/) properties provide fine-grained control over port positioning at the specified offset coordinates. These properties determine how the port aligns relative to its calculated position.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/diagram/ports/ports-pos1/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/diagram/ports/ports-pos1/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/diagram/ports/ports-pos1" %}


The following table shows all possible alignment combinations when using offset (0, 0):

| Horizontal Alignment | Vertical Alignment | Output with Offset(0,0) |
| -------- | -------- | -------- |
| Left | Top | ![Left Top Position](images/port-in-lefttop-position.png) |
| Center | Top | ![Center Top Position](images/port-in-centertop-position.png) |
| Right | Top |  ![Right Top Position](images/port-in-righttop-position.png) |
| Left | Center | ![Left Center Position](images/port-in-leftcenter-position.png) |
| Center | Center| ![Center Center Position](images/port-in-centercenter-position.png) |
| Right | Center | ![Right Center Position](images/port-in-rightcenter-position.png) |
| Left | Bottom | ![Left Bottom Position](images/port-in-leftbottom-position.png) |
| Center | Bottom | ![Center Bottom Position](images/port-in-centerbottom-position.png) |
| Right |Bottom |![Right Bottom Position](images/port-in-rightbottom-position.png) |



## Adding Margin Spacing to Ports

[`Margin`](https://ej2.syncfusion.com/react/documentation/api/diagram/marginModel/) property applies additional spacing around ports using absolute pixel values. Margin creates blank space on any or all four sides of the port, allowing for precise positioning adjustments beyond the basic offset and alignment settings.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/diagram/ports/ports-pos2/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/diagram/ports/ports-pos2/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/diagram/ports/ports-pos2" %}

## See also

* [How to interact with the ports.](./ports-interaction)

* [How to customize the ports.](./ports-appearance)

* [How to create connector port.](./ports-connector-port)