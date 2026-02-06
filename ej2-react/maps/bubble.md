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

Bubbles in the Maps component provide a visual representation of data values across geographical regions. They appear as circular or square shapes scattered over map areas, with their size proportional to the underlying data values. To enable bubbles, set the [`visible`](https://ej2.syncfusion.com/react/documentation/api/maps/bubbleSettingsModel#visible) property of [`BubbleDirective`](https://ej2.syncfusion.com/react/documentation/api/maps/bubbleSettingsModel) to **true**. Then, bind the data source to the [`dataSource`](https://ej2.syncfusion.com/react/documentation/api/maps/bubbleSettingsModel#datasource) property and specify the field containing numerical data using the [`valuePath`](https://ej2.syncfusion.com/react/documentation/api/maps/bubbleSettingsModel#valuepath) property.

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

By default, bubbles render as **Circle**. To display square-shaped bubbles, set the [`bubbleType`](https://ej2.syncfusion.com/react/documentation/api/maps/bubbleSettingsModel#bubbletype) property of [`BubbleDirective`](https://ej2.syncfusion.com/react/documentation/api/maps/bubbleSettingsModel) to **Square**.

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

The [`BubbleDirective`](https://ej2.syncfusion.com/react/documentation/api/maps/bubbleSettingsModel) provides the following properties to customize the appearance of bubbles in the Maps component.

* [`border`](https://ej2.syncfusion.com/react/documentation/api/maps/bubbleSettingsModel#border) – To customize the color, width and opacity of the border of the bubbles in Maps.
* [`fill`](https://ej2.syncfusion.com/react/documentation/api/maps/bubbleSettingsModel#fill) – To apply the color for bubbles in Maps.
* [`opacity`](https://ej2.syncfusion.com/react/documentation/api/maps/bubbleSettingsModel#opacity) – To apply opacity to the bubbles in Maps.
* [`animationDelay`](https://ej2.syncfusion.com/react/documentation/api/maps/bubbleSettingsModel#animationdelay) - To change the time delay in the transition for bubbles.
* [`animationDuration`](https://ej2.syncfusion.com/react/documentation/api/maps/bubbleSettingsModel#animationduration) - To change the time duration of animation for bubbles.

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

The color for each bubble in the Maps can be set using the [`colorValuePath`](https://ej2.syncfusion.com/react/documentation/api/maps/bubbleSettingsModel#colorvaluepath) property of [`BubbleDirective`](https://ej2.syncfusion.com/react/documentation/api/maps/bubbleSettingsModel). The value for the [`colorValuePath`](https://ej2.syncfusion.com/react/documentation/api/maps/bubbleSettingsModel#colorvaluepath) property is the field name from the data source of the [`BubbleDirective`](https://ej2.syncfusion.com/react/documentation/api/maps/bubbleSettingsModel) which contains the color values.

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

The size of the bubbles is calculated from the values got from the [`valuePath`](https://ej2.syncfusion.com/react/documentation/api/maps/bubbleSettingsModel#valuepath) property. The range for the radius of the bubbles can be modified using [`minRadius`](https://ej2.syncfusion.com/react/documentation/api/maps/bubbleSettingsModel#minradius) and [`maxRadius`](https://ej2.syncfusion.com/react/documentation/api/maps/bubbleSettingsModel#maxradius) properties.

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

Multiple bubble groups can be added to the Maps component by defining an array of bubble configuration objects in the [`BubbleDirective`](https://ej2.syncfusion.com/react/documentation/api/maps/bubbleSettingsModel) property. Each bubble group can be customized independently. The following example demonstrates gender-wise population ratio using two different bubble groups.

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

To enable tooltips for bubbles, set the [`visible`](https://ej2.syncfusion.com/react/documentation/api/maps/tooltipSettingsModel#visible) property of [`tooltipSettings`](https://ej2.syncfusion.com/react/documentation/api/maps/tooltipSettingsModel) to **true**. The tooltip content is specified using the [`valuePath`](https://ej2.syncfusion.com/react/documentation/api/maps/tooltipSettingsModel#valuepath) property, which should be set to the field name from the data source that contains the tooltip values. Additionally, custom HTML content can be displayed in the tooltip using the [`template`](https://ej2.syncfusion.com/react/documentation/api/maps/tooltipSettingsModel#template) property.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/maps/default-map-cs11/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/maps/default-map-cs11/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/maps/default-map-cs11" %}