---
layout: post
title: Layers in React Maps component | Syncfusion
description: Learn here all about Layers in Syncfusion React Maps component of Syncfusion Essential JS 2 and more.
control: Layers 
platform: ej2-react
documentation: ug
domainurl: ##DomainURL##
---

# Layers in React Maps component

Layers are the fundamental building blocks of the Maps component. Each layer can display shape data from GeoJSON files or map providers. The Maps component renders content through the [`layers`](https://ej2.syncfusion.com/react/documentation/api/maps#layers) property, and multiple layers can be added to create rich, layered map visualizations.

## Multilayer

The Multilayer support allows loading multiple shape files and map providers in a single container, enabling Maps to display more information. The shape layer or map providers are the main layers of the Maps. Multiple layers can be added as **SubLayer** over the main layers using the [`type`](https://ej2.syncfusion.com/react/documentation/api/maps/layerSettingsModel#type) property of [`layers`](https://ej2.syncfusion.com/react/documentation/api/maps#layers).

## Sublayer

A sublayer is an overlay layer that renders on top of the main layer. It allows displaying multiple shape files in a single map view. For example, a sublayer can highlight specific states, display rivers, valleys, or cities over a country map. Similar to the main layer, sub layers support markers, bubbles, color mapping, and legends.

In the following example, the United States map shape from the **usa.ts** file serves as the main layer, while **texas.ts** and **california.ts** files are rendered as sub layers.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/maps/default-map-cs47/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/maps/default-map-cs47/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/maps/default-map-cs47" %}

## Displaying a different layer in the view

Multiple shape files and map providers can be loaded simultaneously in Maps. The [`baseLayerIndex`](https://ej2.syncfusion.com/react/documentation/api/maps/mapsModel#baselayerindex) property is used to determine which layer on the user interface should be displayed. This property is used for the Maps drill-down feature, so when the [`baseLayerIndex`](https://ej2.syncfusion.com/react/documentation/api/maps/mapsModel#baselayerindex) value is changed, the corresponding shape is loaded. In this example, two layers can be loaded with the World map and the United States map. Based on the given [`baseLayerIndex`](https://ej2.syncfusion.com/react/documentation/api/maps/mapsModel#baselayerindex) value the corresponding shape will be loaded in the user interface. If the [`baseLayerIndex`](https://ej2.syncfusion.com/react/documentation/api/maps/mapsModel#baselayerindex) value is set to **0**, then the world map will be loaded.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/maps/default-map-cs48/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/maps/default-map-cs48/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/maps/default-map-cs48" %}

## Rendering custom shapes

Custom shapes (also known as custom maps) can be rendered in the Maps component for non-geographic visualizations such as bus seat booking layouts, stadium seating arrangements, or floor plans. To render custom shapes, create a JSON file in GeoJSON format with the required geometries either manually or using an online map tool. Set the GeoJSON file to the [`shapeData`](https://ej2.syncfusion.com/react/documentation/api/maps/layerSettingsModel#shapedata) property in the Maps layer and set the [`geometryType`](https://ej2.syncfusion.com/react/documentation/api/maps/layerSettingsModel#geometrytype) to **Normal**.

Please refer this [`link`](https://cdn.syncfusion.com/maps/map-data/seat.json) for an example GeoJSON file containing information about bus seat selection.

Please refer this [`link`](https://ej2.syncfusion.com/react/demos/#/material/maps/seat-booking) for more information and a live demonstration.
