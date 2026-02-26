---
layout: post
title: Openstreetmap in React Maps component | Syncfusion
description: Learn here all about Openstreetmap in Syncfusion React Maps component of Syncfusion Essential JS 2 and more.
control: Openstreetmap 
platform: ej2-react
documentation: ug
domainurl: ##DomainURL##
---

# Openstreetmap integration in React Maps component

Map providers are online services that supply map tile images for rendering geographic visualizations. The Maps component supports integration with various tile-based map providers to display real-world geographic data.

OpenStreetMap (OSM) is an open-source online map provider built by a community of contributors. It is free to use under an open license and enables users to view and utilize geographic data collaboratively from anywhere on Earth. OSM provides small tile images based on requests and combines those images into a single image to display the map area in the Maps component.

## Attribution and licensing

OpenStreetMap is provided under the [Open Database License (ODbL)](https://www.openstreetmap.org/copyright). When using OSM tiles, proper attribution must be displayed as required by the license terms. Ensure compliance with OSM's attribution requirements by including appropriate credits in the application.

## Adding OpenStreetMap

OSM Maps can be rendered using the [urlTemplate](https://ej2.syncfusion.com/react/documentation/api/maps/layerSettingsModel#urltemplate) property. The URL template specifies the tile server endpoint that provides the map tile images. The Maps component automatically requests and combines the appropriate tiles based on the current map view, zoom level, and geographic extent.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/maps/default-map-cs84/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/maps/default-map-cs84/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/maps/default-map-cs84" %}

### Changing the tile server of the OpenStreetMap

The OSM tile server can be changed by specifying a different tile server URL in the  [urlTemplate](https://ej2.syncfusion.com/react/documentation/api/maps/layerSettingsModel#urltemplate) property. Various OSM tile servers are available with different styles and features. The URL template typically includes placeholders for zoom level and tile coordinates that are automatically replaced by the Maps component. For more details about available OSM tile servers and URL formats, refer to the [OSM tile server documentation](https://wiki.openstreetmap.org/wiki/Tiles).

## Enabling zooming and panning

The OSM layer supports zooming and panning interactions for enhanced map exploration. Zooming provides a closer view of specific areas for detailed analysis, while panning allows navigation across different regions of the map. These features can be enabled using the [zoomSettings](https://ej2.syncfusion.com/react/documentation/api/maps/zoomSettingsModel)  property with toolbar controls for user interaction.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/maps/code-path/default-map-cs85/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/maps/code-path/default-map-cs85/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/maps/default-map-cs85" %}

## Adding markers and navigation line

Markers can be added to OSM layers to highlight specific locations by setting the latitude and longitude coordinates using [MarkerDirective](https://ej2.syncfusion.com/react/documentation/api/maps/layerSettingsModel#markersettings). Navigation lines can be drawn on top of the OSM layer to visualize routes or connections between locations by configuring the [NavigationLineDirective](https://ej2.syncfusion.com/react/documentation/api/maps/layerSettingsModel#navigationlinesettings) with corresponding latitude and longitude coordinates.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/maps/default-map-cs86/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/maps/default-map-cs86/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/maps/default-map-cs86" %}

## Adding sublayer

GeoJSON shapes can be rendered as a sublayer on top of the OSM base layer to highlight specific regions such as continents, countries, or custom geographic areas. This is accomplished by adding an additional layer and setting the [type](https://ej2.syncfusion.com/react/documentation/api/maps/layerSettingsModel#type) property to **SubLayer**. The sublayer overlays the OSM tiles while maintaining interactivity with the base map.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/maps/default-map-cs87/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/maps/default-map-cs87/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/maps/default-map-cs87" %}

## Enabling legend

A legend can be displayed with OSM maps to provide visual context for markers, shapes, or data classifications. The legend is enabled by setting the [visible](https://ej2.syncfusion.com/react/documentation/api/maps/legendSettingsModel#visible) property of [legendSettings](https://ej2.syncfusion.com/react/documentation/api/maps/legendSettingsModel) to **true**. The legend can be configured to display marker shapes, custom icons, and interactive toggle functionality for controlling layer visibility.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/maps/code-path/default-map-cs88/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/maps/code-path/default-map-cs88/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/maps/default-map-cs88" %}