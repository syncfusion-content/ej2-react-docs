---
layout: post
title: Radial menu in React Speed dial component | Syncfusion
description: Learn here all about Radial menu in Syncfusion React Speed dial component of Syncfusion Essential JS 2 and more.
control: Radial menu 
platform: ej2-react
documentation: ug
domainurl: ##DomainURL##
---

# Radial menu in React Speed dial component

Display SpeedDial action items in a circular pattern around the button by setting the [`mode`](https://ej2.syncfusion.com/react/documentation/api/speed-dial/#mode) property to `Radial`. Customize the radial layout using the [`radialSettings`](https://ej2.syncfusion.com/react/documentation/api/speed-dial#radialsettings) property to control `direction`, `startAngle`, `endAngle`, and `offset` values. This creates an elegant radial menu ideal for displaying multiple related actions.

## Radial menu direction

Control the direction in which items are arranged around the button by setting the [`direction`](https://ej2.syncfusion.com/react/documentation/api/speed-dial/radialSettingsModel/#direction) property to either `Clockwise` or `AntiClockwise`. The default value is [`Auto`](https://ej2.syncfusion.com/react/documentation/api/speed-dial/radialDirection/), which automatically determines the direction based on the SpeedDial's `position` property.

{% tabs %}
{% highlight js tabtitle="app.jsx" %}
{% include code-snippet/speed-dial/radial-cs3/app/app.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="app.tsx" %}
{% include code-snippet/speed-dial/radial-cs3/app/app.tsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.css" %}
{% include code-snippet/speed-dial/radial-cs3/index.css %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/speed-dial/radial-cs3" %}

## Radial menu start and end angle

Control the angular span of the radial menu by setting the [`startAngle`](https://ej2.syncfusion.com/react/documentation/api/speed-dial/radialSettingsModel/#startangle) and [`endAngle`](https://ej2.syncfusion.com/react/documentation/api/speed-dial/radialSettingsModel/#endangle) properties. These angles determine where items begin and end around the circle (0-360 degrees). If angles are not defined, items automatically distribute based on the SpeedDial's `position` property. Use custom angles to create partial arcs or specific patterns.

{% tabs %}
{% highlight js tabtitle="app.jsx" %}
{% include code-snippet/speed-dial/radial-cs4/app/app.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="app.tsx" %}
{% include code-snippet/speed-dial/radial-cs4/app/app.tsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.css" %}
{% include code-snippet/speed-dial/radial-cs4/index.css %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/speed-dial/radial-cs4" %}

## Offset

Control the distance between action items and the SpeedDial button using the [`offset`](https://ej2.syncfusion.com/react/documentation/api/speed-dial/radialSettingsModel/#offset) property. A larger offset pushes items further from the center button, while smaller values bring them closer. Adjust this to optimize layout spacing based on your design needs.

{% tabs %}
{% highlight js tabtitle="app.jsx" %}
{% include code-snippet/speed-dial/radial-cs5/app/app.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="app.tsx" %}
{% include code-snippet/speed-dial/radial-cs5/app/app.tsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.css" %}
{% include code-snippet/speed-dial/radial-cs5/index.css %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/speed-dial/radial-cs5" %}

Below example demonstrates the radial menu settings of the Speed Dial.

{% tabs %}
{% highlight js tabtitle="app.jsx" %}
{% include code-snippet/speed-dial/radial-cs2/app/app.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="app.tsx" %}
{% include code-snippet/speed-dial/radial-cs2/app/app.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/speed-dial/radial-cs2" %}
