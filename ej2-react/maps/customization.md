---
layout: post
title: Customization in React Maps component | Syncfusion
description: Learn here all about Customization in Syncfusion React Maps component of Syncfusion Essential JS 2 and more.
control: Customization 
platform: ej2-react
documentation: ug
domainurl: ##DomainURL##
---

# Customization in React Maps component

The Maps component provides various options to customize its appearance, including size, title, theme, container styling, shape properties, and projection type. This section explains how to configure these customization options.

## Setting the size for Maps

The width and height of the Maps can be set using the [`width`](https://ej2.syncfusion.com/react/documentation/api/maps/mapsModel#width) and [`height`](https://ej2.syncfusion.com/react/documentation/api/maps/mapsModel#height) properties in the Maps component. Percentage or pixel values can be used for the height and width values.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/maps/default-map-cs18/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/maps/default-map-cs18/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/maps/default-map-cs18" %}

## Maps title

The [`titleSettings`](https://ej2.syncfusion.com/react/documentation/api/maps/titleSettingsModel) property configures the title displayed on the Maps component. The title can be customized using the following properties.

The [`titleSettings`](https://ej2.syncfusion.com/react/documentation/api/maps/titleSettingsModel) property configures the title displayed on the Maps component. The title can be customized using the following properties:

* [`alignment`](https://ej2.syncfusion.com/react/documentation/api/maps/titleSettingsModel#alignment) - To customize the alignment for the text in the title for the Maps. The possible values are **Center**, **Near** and **Far**.
* [`description`](https://ej2.syncfusion.com/react/documentation/api/maps/titleSettingsModel#description) - To set the description of the title in Maps.
* [`text`](https://ej2.syncfusion.com/react/documentation/api/maps/titleSettingsModel#text) - To set the text for the title in Maps.
* [`textStyle`](https://ej2.syncfusion.com/react/documentation/api/maps/titleSettingsModel#textstyle) - To customize the text of the title in Maps.
* [`subtitleSettings`](https://ej2.syncfusion.com/react/documentation/api/maps/titleSettingsModel#subtitlesettings) - To customize the subtitle for the Maps.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/maps/default-map-cs19/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/maps/default-map-cs19/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/maps/default-map-cs19" %}

## Setting theme

The Maps component supports the following themes.

* Material
* Fabric
* Bootstrap
* HighContrast
* MaterialDark
* FabricDark
* BootstrapDark
* Bootstrap4
* HighContrastLight
* Tailwind

By default, the Maps are rendered by the **Material** theme. The theme of the Maps component is changed using the [`theme`](https://ej2.syncfusion.com/react/documentation/api/maps#theme) property.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/maps/default-map-cs20/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/maps/default-map-cs20/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/maps/default-map-cs20" %}

## Customizing Maps container

The following properties are available to customize the container in the Maps.

* [`background`](https://ej2.syncfusion.com/react/documentation/api/maps/mapsModel#background) - To apply the background color to the container in the Maps.
* [`border`](https://ej2.syncfusion.com/react/documentation/api/maps/mapsModel#border) - To customize the color, width and opacity of the border of the Maps.
* [`margin`](https://ej2.syncfusion.com/react/documentation/api/maps/mapsModel#margin) - To customize the margins of the Maps.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/maps/default-map-cs21/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/maps/default-map-cs21/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/maps/default-map-cs21" %}

## Customizing Maps area

The Maps area has a default background color of **white**. To change the background color, use the [background](https://ej2.syncfusion.com/react/documentation/api/maps/mapsAreaSettingsModel#background) property in [mapsArea](https://ej2.syncfusion.com/react/documentation/api/maps/mapsAreaSettingsModel). The [border](https://ej2.syncfusion.com/react/documentation/api/maps/mapsAreaSettingsModel#border) property in [mapsArea](https://ej2.syncfusion.com/react/documentation/api/maps/mapsAreaSettingsModel) customizes the border around the Maps area.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/maps/default-map-cs22/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/maps/default-map-cs22/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/maps/default-map-cs22" %}

## Customizing the shapes

The following properties are available in [`shapeSettings`](https://ej2.syncfusion.com/react/documentation/api/maps/shapeSettingsModel) to customize the shapes of the Maps.

* [`fill`](https://ej2.syncfusion.com/react/documentation/api/maps/shapeSettingsModel#fill) - To apply the fill color to the all the shapes.
* [`autofill`](https://ej2.syncfusion.com/react/documentation/api/maps/shapeSettingsModel#autofill) - To apply the palette colors to the shapes if it is set as true.
* [`palette`](https://ej2.syncfusion.com/react/documentation/api/maps/shapeSettingsModel#palette) - To set the custom palette for the shapes.
* [`border`](https://ej2.syncfusion.com/react/documentation/api/maps/shapeSettingsModel#border) - To customize the color, width and opacity of the border of the shapes.
* [`dashArray`](https://ej2.syncfusion.com/react/documentation/api/maps/shapeSettingsModel#dasharray) - To define the pattern of dashes and gaps that is applied to the outline of the shapes.
* [`opacity`](https://ej2.syncfusion.com/react/documentation/api/maps/shapeSettingsModel#opacity) - To customize the transparency for the shapes.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/maps/default-map-cs23/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/maps/default-map-cs23/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/maps/default-map-cs23" %}

## Setting color to the shapes from the data source

The color for each shape in the Maps can be set using the [`colorValuePath`](https://ej2.syncfusion.com/react/documentation/api/maps/shapeSettingsModel#colorvaluepath) property of [`shapeSettings`](https://ej2.syncfusion.com/react/documentation/api/maps/shapeSettingsModel). The value for the [`colorValuePath`](https://ej2.syncfusion.com/react/documentation/api/maps/shapeSettingsModel#colorvaluepath) property is the field name from the data source of the [`shapeSettings`](https://ej2.syncfusion.com/react/documentation/api/maps/shapeSettingsModel) which contains the color values.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/maps/default-map-cs24/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/maps/default-map-cs24/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/maps/default-map-cs24" %}

## Applying border to individual shapes

The border of each shape in the Maps can be customized using the [`borderColorValuePath`](https://ej2.syncfusion.com/react/documentation/api/maps/shapeSettingsModel#bordercolorvaluepath) and [`borderWidthValuePath`](https://ej2.syncfusion.com/react/documentation/api/maps/shapeSettingsModel#borderwidthvaluepath) properties to modify the color and the width of the border respectively. The field name in the data source of the layer which contains the color and the width values must be set in the [`borderColorValuePath`](https://ej2.syncfusion.com/react/documentation/api/maps/shapeSettingsModel#bordercolorvaluepath) and [`borderWidthValuePath`](https://ej2.syncfusion.com/react/documentation/api/maps/shapeSettingsModel#borderwidthvaluepath) properties respectively. If the values of [`borderWidthValuePath`](https://ej2.syncfusion.com/react/documentation/api/maps/shapeSettingsModel#borderwidthvaluepath) and [`borderColorValuePath`](https://ej2.syncfusion.com/react/documentation/api/maps/shapeSettingsModel#bordercolorvaluepath) do not match with the field name from the data source, then the color and width of the border will be applied to the shapes using the [`border`](https://ej2.syncfusion.com/react/documentation/api/maps/shapeSettingsModel#border) property in the [`shapeSettings`](https://ej2.syncfusion.com/react/documentation/api/maps/shapeSettingsModel).

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/maps/default-map-cs25/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/maps/default-map-cs25/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/maps/default-map-cs25" %}

## Projection type

The Maps component supports the following projection types:

* Mercator
* Equirectangular
* Miller
* Eckert3
* Eckert5
* Eckert6
* Winkel3
* AitOff

The default projection is **Mercator**, which renders the map based on coordinates without stretching. Each projection type represents the Earth's surface differently, affecting how shapes and distances appear on the map. To change the projection, use the [projectionType](https://ej2.syncfusion.com/react/documentation/api/maps/projectionType) property.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/maps/default-map-cs26/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/maps/default-map-cs26/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/maps/default-map-cs26" %}