---
layout: post
title: Polygon in React Maps component | Syncfusion
description: Learn here all about Polygon in Syncfusion React Maps component of Syncfusion Essential JS 2 and more.
control: Polygon 
platform: ej2-react
documentation: ug
domainurl: ##DomainURL##
---

# Polygon shape in React Maps component

The Maps component allows you to add polygon shape to a geometry map or an online map by using the properties in the [polygons](https://ej2.syncfusion.com/react/documentation/api/maps/polygonSettingsModel/#polygons). This section describes how to add polygon shape to the map and customize them.

To render polygon shapes in Maps, **Polygon** module must be injected into the Maps using `<Inject services={[Polygon]} />` method. The polygon shape can be rendered over the map layer by defining the [points](https://ej2.syncfusion.com/react/documentation/api/maps/polygonSettingModel/#points) property in the `polygons` of the Maps component. The `points` property uses a collection of latitude and longitude values to define the polygon shape.

The `polygons` provides the following properties for customizing the polygon shape of the Maps component.

* [fill](https://ej2.syncfusion.com/react/documentation/api/maps/polygonSettingModel/#fill) - It is used to change the color of the polygon shape.
* [opacity](https://ej2.syncfusion.com/react/documentation/api/maps/polygonSettingModel/#opacity) - It is used to change the opacity of the polygon shape.
* [borderColor](https://ej2.syncfusion.com/react/documentation/api/maps/polygonSettingModel/#bordercolor) - It is used to change the color of the border in the polygon shape.
* [borderWidth](https://ej2.syncfusion.com/react/documentation/api/maps/polygonSettingModel/#borderwidth) - It is used to change the width of the border in the polygon shape.
* [borderOpacity](https://ej2.syncfusion.com/react/documentation/api/maps/polygonSettingModel/#borderopacity) - It is used to change the opacity of the border in the polygon shape.

> You can also include “n” polygon shapes using the [polygons](https://ej2.syncfusion.com/react/documentation/api/maps/polygonSettingsModel/#polygons) property.

The following example shows how to customize the polygon shape over the geometry map.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/maps/polygon-cs1/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/maps/polygon-cs1/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/maps/polygon-cs1" %}
