---
layout: post
title: Appearance in React Linear gauge component | Syncfusion
description: Learn here all about Appearance in Syncfusion React Linear gauge component of Syncfusion Essential JS 2 and more.
control: Appearance 
platform: ej2-react
documentation: ug
domainurl: ##DomainURL##
---

# Appearance in React Linear gauge component

<!-- markdownlint-disable MD013 -->

## Customizing the Linear Gauge area

The following properties are available in the [`LinearGaugeComponent`](https://ej2.syncfusion.com/react/documentation/api/linear-gauge/) to customize the Linear Gauge area.

* [`background`](https://ej2.syncfusion.com/react/documentation/api/linear-gauge/#background) - Applies the background color for the Linear Gauge.
* [`border`](https://ej2.syncfusion.com/react/documentation/api/linear-gauge/#border) - To customize the color and width of the border in Linear Gauge.
* [`margin`](https://ej2.syncfusion.com/react/documentation/api/linear-gauge/#margin) - To customize the margins of the Linear Gauge.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/linear-gauge/appearance-cs1/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/linear-gauge/appearance-cs1/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/linear-gauge/appearance-cs1" %}

## Setting up the Linear Gauge title

The title for the Linear Gauge can be set using [`title`](https://ej2.syncfusion.com/react/documentation/api/linear-gauge/#title) property in [`LinearGaugeComponent`](https://ej2.syncfusion.com/react/documentation/api/linear-gauge/). Its appearance can be customized using the [`titleStyle`](https://ej2.syncfusion.com/react/documentation/api/linear-gauge/#titlestyle) with the below properties.

* [`color`](https://ej2.syncfusion.com/react/documentation/api/linear-gauge/fontModel/#color) - Specifies the text color of the title.
* [`fontStyle`](https://ej2.syncfusion.com/react/documentation/api/linear-gauge/fontModel/#fontStyle) - Specifies the font style of the title.
* [`fontWeight`](https://ej2.syncfusion.com/react/documentation/api/linear-gauge/fontModel/#fontweight) - Specifies the font weight of the title.
* [`size`](https://ej2.syncfusion.com/react/documentation/api/linear-gauge/fontModel/#size) - Specifies the font size of the title.
* [`opacity`](https://ej2.syncfusion.com/react/documentation/api/linear-gauge/fontModel/#opacity) - Specifies the opacity of the title.
* [`fontFamily`](https://ej2.syncfusion.com/react/documentation/api/linear-gauge/fontModel/#fontfamily) - Specifies the font family of the title.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/linear-gauge/appearance-cs2/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/linear-gauge/appearance-cs2/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/linear-gauge/appearance-cs2" %}

## Customizing the Linear Gauge container

The area used to render the ranges and pointers at the center position of the gauge is called container. The following types of container to be applicable for Linear Gauge.

* Normal
* Rounded Rectangle
* Thermometer

   The type of the container can be modified by using the [`type`](https://ej2.syncfusion.com/react/documentation/api/linear-gauge/containerModel/#type) property in [`container`](https://ej2.syncfusion.com/react/documentation/api/linear-gauge/containerModel/). The container can be customized by using the following properties in [`container`](https://ej2.syncfusion.com/react/documentation/api/linear-gauge/containerModel/).

* [`offset`](https://ej2.syncfusion.com/react/documentation/api/linear-gauge/containerModel/#offset) - To place the container with the specified distance from the axis of the Linear Gauge.
* [`width`](https://ej2.syncfusion.com/react/documentation/api/linear-gauge/containerModel/#width) - To set the thickness of the container.
* [`height`](https://ej2.syncfusion.com/react/documentation/api/linear-gauge/containerModel/#height) - To set the length of the container.
* [`backgroundColor`](https://ej2.syncfusion.com/react/documentation/api/linear-gauge/containerModel/#backgroundcolor) - To set the background color of the container.
* [`border`](https://ej2.syncfusion.com/react/documentation/api/linear-gauge/container/#border) - To set the color and width for the border of the container.

### Normal

The **Normal** type will render the container as a rectangle and this is the default container type.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/linear-gauge/appearance-cs3/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/linear-gauge/appearance-cs3/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/linear-gauge/appearance-cs3" %}

### Rounded Rectangle

The **RoundedRectangle** type will render the container as a rectangle with rounded corner radius. The rounded corner radius of the container can be customized using the [`roundedCornerRadius`](https://ej2.syncfusion.com/react/documentation/api/linear-gauge/container/#roundedcornerradius) property in [`container`](https://ej2.syncfusion.com/react/documentation/api/linear-gauge/containerModel/).

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/linear-gauge/appearance-cs4/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/linear-gauge/appearance-cs4/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/linear-gauge/appearance-cs4" %}

### Thermometer

The **Thermometer** type will render the container similar to the appearance of thermometer.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/linear-gauge/appearance-cs5/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/linear-gauge/appearance-cs5/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/linear-gauge/appearance-cs5" %}

## Fitting the Linear Gauge to the control

The Linear Gauge component is rendered with margin by default. To remove the margin around the Linear Gauge, the [`allowMargin`](https://ej2.syncfusion.com/react/documentation/api/linear-gauge/#allowmargin) property in [`LinearGaugeComponent`](https://ej2.syncfusion.com/react/documentation/api/linear-gauge/) is set as **false**.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/linear-gauge/appearance-cs6/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/linear-gauge/appearance-cs6/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/linear-gauge/appearance-cs6" %}

>To use this feature, set the [`allowMargin`](https://ej2.syncfusion.com/react/documentation/api/linear-gauge/#allowmargin) property to **false**, the [`width`](https://ej2.syncfusion.com/react/documentation/api/linear-gauge/#width) property to **100%** and the properties of [`margin`](https://ej2.syncfusion.com/react/documentation/api/linear-gauge/#margin) to **0**.
