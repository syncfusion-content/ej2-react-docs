---
layout: post
title: Bubble in React Maps component | Syncfusion
description: Learn here all about Bubble in Syncfusion React Maps component of Syncfusion Essential JS 2 and more.
control: Bubble 
platform: ej2-react
documentation: ug
domainurl: ##DomainURL##
---

# Bubble in React Maps component

This section shows how to customize the appearance of the bubbles in the Maps component. The below video demonstrates the same.

{% youtube "https://www.youtube.com/watch?v=EHEfv0x6XtU" %}

Bubbles in the Maps component represent the underlying data values of the Maps. It can be scattered throughout the Maps shapes that contain values in the data source. Bubbles are enabled by setting the [`visible`](https://ej2.syncfusion.com/react/documentation/api/maps/bubbleSettingsModel/#visible) property of [`bubbleSettings`](https://ej2.syncfusion.com/react/documentation/api/maps/bubbleSettingsModel) to **true**. To add bubbles to the Maps, bind the data source to the [`dataSource`](https://ej2.syncfusion.com/react/documentation/api/maps/bubbleSettingsModel/#datasource) property of [`BubbleDirective`](https://ej2.syncfusion.com/react/documentation/api/maps/bubbleSettingsModel) and set the field name, that contains the numerical data, in the data source to the [`valuePath`](https://ej2.syncfusion.com/react/documentation/api/maps/bubbleSettingsModel/#valuepath) property.

```ts
export let world_map = // paste the World map from World.json GeoJSON file.
```

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/maps/default-map-cs5/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/maps/default-map-cs5/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/maps/default-map-cs5" %}

## Bubble shapes

The following types of shapes are available to render the bubbles in Maps.

* Circle
* Square

By default, bubbles are rendered in the **Circle** type. To change the type of the bubble, set the [`bubbleType`](https://ej2.syncfusion.com/react/documentation/api/maps/bubbleSettingsModel/#bubbletype) property of [`BubbleDirective`](https://ej2.syncfusion.com/react/documentation/api/maps/bubbleSettingsModel) as **Square** to render the square shape bubbles.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/maps/default-map-cs6/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/maps/default-map-cs6/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/maps/default-map-cs6" %}

## Customization

The following properties are available in [`BubbleDirective`](https://ej2.syncfusion.com/react/documentation/api/maps/bubbleSettingsModel) to customize the bubbles of the Maps component.

* [`border`](https://ej2.syncfusion.com/react/documentation/api/maps/bubbleSettingsModel/#border) – To customize the color, width and opacity of the border of the bubbles in Maps.
* [`fill`](https://ej2.syncfusion.com/react/documentation/api/maps/bubbleSettingsModel/#fill) – To apply the color for bubbles in Maps.
* [`opacity`](https://ej2.syncfusion.com/react/documentation/api/maps/bubbleSettingsModel/#opacity) – To apply opacity to the bubbles in Maps.
* [`animationDelay`](https://ej2.syncfusion.com/react/documentation/api/maps/bubbleSettingsModel/#animationdelay) - To change the time delay in the transition for bubbles.
* [`animationDuration`](https://ej2.syncfusion.com/react/documentation/api/maps/bubbleSettingsModel/#animationduration) - To change the time duration of animation for bubbles.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/maps/default-map-cs7/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/maps/default-map-cs7/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/maps/default-map-cs7" %}

## Setting colors to the bubbles from the data source

The color for each bubble in the Maps can be set using the [`colorValuePath`](https://ej2.syncfusion.com/react/documentation/api/maps/bubbleSettingsModel/#colorvaluepath) property of [`BubbleDirective`](https://ej2.syncfusion.com/react/documentation/api/maps/bubbleSettingsModel). The value for the [`colorValuePath`](https://ej2.syncfusion.com/react/documentation/api/maps/bubbleSettingsModel/#colorvaluepath) property is the field name from the data source of the [`BubbleDirective`](https://ej2.syncfusion.com/react/documentation/api/maps/bubbleSettingsModel) which contains the color values.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/maps/default-map-cs8/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/maps/default-map-cs8/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/maps/default-map-cs8" %}

## Setting the range of the bubble size

The size of the bubbles is calculated from the values got from the [`valuePath`](https://ej2.syncfusion.com/react/documentation/api/maps/bubbleSettingsModel/#valuepath) property. The range for the radius of the bubbles can be modified using [`minRadius`](https://ej2.syncfusion.com/react/documentation/api/maps/bubbleSettingsModel/#minradius) and [`maxRadius`](https://ej2.syncfusion.com/react/documentation/api/maps/bubbleSettingsModel/#maxradius) properties.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/maps/default-map-cs9/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/maps/default-map-cs9/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/maps/default-map-cs9" %}

## Multiple bubble groups

Multiple groups of bubbles can be added to the Maps using the [`BubbleDirective`](https://ej2.syncfusion.com/react/documentation/api/maps/bubbleSettingsModel) in which the properties of bubbles are added as an array. The customization for the bubbles can be done with the [`BubbleDirective`](https://ej2.syncfusion.com/react/documentation/api/maps/bubbleSettingsModel). In the following example, the gender-wise population ratio is demonstrated with two different bubble groups.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/maps/default-map-cs10/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/maps/default-map-cs10/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/maps/default-map-cs10" %}

## Enable tooltip for bubble

The tooltip for the bubbles can be enabled by setting the [`visible`](https://ej2.syncfusion.com/react/documentation/api/maps/tooltipSettingsModel/#visible) property of the [`tooltipSettings`](https://ej2.syncfusion.com/react/documentation/api/maps/tooltipSettingsModel) as **true**. The content for the tooltip can be set using the [`valuePath`](https://ej2.syncfusion.com/react/documentation/api/maps/tooltipSettingsModel/#valuepath) property in the [`tooltipSettings`](https://ej2.syncfusion.com/react/documentation/api/maps/tooltipSettingsModel) of the [`BubbleDirective`](https://ej2.syncfusion.com/react/documentation/api/maps/bubbleSettingsModel) where the value for the [`valuePath`](https://ej2.syncfusion.com/react/documentation/api/maps/tooltipSettingsModel/#valuepath) property is the field name from the data source of the [`BubbleDirective`](https://ej2.syncfusion.com/react/documentation/api/maps/bubbleSettingsModel). Also added any HTML element as the template in tooltip using the [`template`](https://ej2.syncfusion.com/react/documentation/api/maps/tooltipSettingsModel/#template) property.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/maps/default-map-cs11/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/maps/default-map-cs11/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/maps/default-map-cs11" %}