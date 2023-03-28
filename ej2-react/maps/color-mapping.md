---
layout: post
title: Color mapping in React Maps component | Syncfusion
description: Learn here all about Color mapping in Syncfusion React Maps component of Syncfusion Essential JS 2 and more.
control: Color mapping 
platform: ej2-react
documentation: ug
domainurl: ##DomainURL##
---

# Color mapping in React Maps component

Color mapping is used to customize the shape colors based on the given values. It has three types.

1. Range color mapping
2. Equal color mapping
3. Desaturation color mapping.

To add color mapping to the shapes of the Maps, bind the data source to the [`dataSource`](https://ej2.syncfusion.com/react/documentation/api/maps/layerSettingsModel/#datasource) property of [`layerSettings`](https://ej2.syncfusion.com/react/documentation/api/maps/layerSettingsModel) and set the field name which contains the color value in the data source to the [`colorValuePath`](https://ej2.syncfusion.com/react/documentation/api/maps/shapeSettingsModel/#colorvaluepath) property.

## Types of color mapping

### Range color mapping

Range color mapping applies the color to the shapes of the Maps which matches the numeric values in the data source within the given color mapping ranges. The [`from`](https://ej2.syncfusion.com/react/documentation/api/maps/colorMappingSettingsModel/#from) and [`to`](https://ej2.syncfusion.com/react/documentation/api/maps/colorMappingSettingsModel/#to) properties in the [`colorMapping`](https://ej2.syncfusion.com/react/documentation/api/maps/colorMappingSettingsModel/) are used to specify the color mapping ranges in the Maps.



```ts
export let population_density = [
    https://ej2.syncfusion.com/react/documentation.
    {
        'code': 'AE',
        'value': 90,
        'name': 'United Arab Emirates',
        'population': 8264070,
        'density': 99
    },
    {
        'code': 'GB',
        'value': 257,
        'name': 'United Kingdom',
        'population': 62041708,
        'density': 255
    },
    {
        'code': 'US',
        'value': 34,
        'name': 'United States',
        'population': 325020000,
        'density': 33
    }
    ...
    ];
```

Bind the **population_density** data to the [`dataSource`](https://ej2.syncfusion.com/react/documentation/api/maps/layerSettingsModel/#datasource) property of [`layerSettings`](https://ej2.syncfusion.com/react/documentation/api/maps/layerSettingsModel/) and set the [`colorValuePath`](https://ej2.syncfusion.com/react/documentation/api/maps/shapeSettingsModel/#colorvaluepath) property of [`shapeSettings`](https://ej2.syncfusion.com/react/documentation/api/maps/shapeSettingsModel/) as **density**. The range values can be set using the [`from`](https://ej2.syncfusion.com/react/documentation/api/maps/colorMappingSettingsModel/#from) and [`to`](https://ej2.syncfusion.com/react/documentation/api/maps/colorMappingSettingsModel/#to) properties of [`colorMapping`](https://ej2.syncfusion.com/react/documentation/api/maps/colorMappingSettingsModel/).

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/maps/default-map-cs12/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/maps/default-map-cs12/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/maps/default-map-cs12" %}

### Equal color mapping

Equal color mapping applies the color to the shapes of the Maps when the [`value`](https://ej2.syncfusion.com/react/documentation/api/maps/colorMappingSettingsModel/#value) property of [`colorMapping`](https://ej2.syncfusion.com/react/documentation/api/maps/colorMappingSettingsModel/) matches with the values provided in the data source. The following example shows how to apply equal color mapping to the shapes with the data source **unCountries** which illustrates the permanent and non-permanent countries in the UN security council.



```ts
export let unCountries: object[] = [
{ Country: 'China', Membership: 'Permanent' },
{ Country: 'France', Membership: 'Permanent' },
{ Country: 'Russia', Membership: 'Permanent' },
{ Country: 'United Kingdom', Membership: 'Permanent' },
{ Country: 'United States', Membership: 'Permanent' },
{ Country: 'Bolivia', Membership: 'Non-Permanent' },
{ Country: 'Eq. Guinea', Membership: 'Non-Permanent' },
{ Country: 'Ethiopia', Membership: 'Non-Permanent' },
{ Country: "Côte d'Ivoire", Membership: 'Permanent' },
{ Country: 'Kazakhstan', Membership: 'Non-Permanent' },
{ Country: 'Kuwait', Membership: 'Non-Permanent' },
{ Country: 'Netherlands', Membership: 'Non-Permanent' },
{ Country: 'Peru', Membership: 'Non-Permanent' },
{ Country: 'Poland', Membership: 'Non-Permanent' },
{ Country: 'Sweden', Membership: 'Non-Permanent' },
];
```

Bind the **unCountries** data to the [`dataSource`](https://ej2.syncfusion.com/react/documentation/api/maps/layerSettingsModel/#datasource) property of [`layerSettings`](https://ej2.syncfusion.com/react/documentation/api/maps/layerSettingsModel/) and set the [`colorValuePath`](https://ej2.syncfusion.com/react/documentation/api/maps/shapeSettingsModel/#colorvaluepath) property of [`shapeSettings`](https://ej2.syncfusion.com/react/documentation/api/maps/shapeSettingsModel/) as **Membership**. Set the [`value`](https://ej2.syncfusion.com/react/documentation/api/maps/colorMappingSettingsModel/#value) property in the [`colorMapping`](https://ej2.syncfusion.com/react/documentation/api/maps/colorMappingSettingsModel/) to **Permanent** and **Non-Permanent** in the different set of color mapping properties. If the corresponding value of the [`colorValuePath`](https://ej2.syncfusion.com/react/documentation/api/maps/shapeSettingsModel/#colorvaluepath) property matches with the corresponding field name in the data source, then the given color will be applied.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/maps/default-map-cs13/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/maps/default-map-cs13/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/maps/default-map-cs13" %}

### Desaturation color mapping

Desaturation color mapping applies the color to the shapes of the Maps, similar to the range color mapping. The opacity will be applied in this color mapping based on the [`minOpacity`](https://ej2.syncfusion.com/react/documentation/api/maps/colorMappingSettingsModel/#minopacity) and [`maxOpacity`](https://ej2.syncfusion.com/react/documentation/api/maps/colorMappingSettingsModel/#maxopacity) properties in the [`colorMapping`](https://ej2.syncfusion.com/react/documentation/api/maps/colorMappingSettingsModel/) property.

>The following example shows how to apply desaturation color mapping to the shapes with the data source  **population_density** that is available in the [Range color mapping](#range-color-mapping) section.

Bind the **population_density** data to the [`dataSource`](https://ej2.syncfusion.com/react/documentation/api/maps/layerSettingsModel/#datasource) property of [`layerSettings`](https://ej2.syncfusion.com/react/documentation/api/maps/layerSettingsModel/) and set the [`colorValuePath`](https://ej2.syncfusion.com/react/documentation/api/maps/shapeSettingsModel/#colorvaluepath) property of [`shapeSettings`](https://ej2.syncfusion.com/react/documentation/api/maps/shapeSettingsModel/) as **density**. The range values can be set using the [`from`](https://ej2.syncfusion.com/react/documentation/api/maps/colorMappingSettingsModel/#from) and [`to`](https://ej2.syncfusion.com/react/documentation/api/maps/colorMappingSettingsModel/#to) properties of [`colorMapping`](https://ej2.syncfusion.com/react/documentation/api/maps/colorMappingSettingsModel/).

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/maps/default-map-cs14/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/maps/default-map-cs14/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/maps/default-map-cs14" %}

## Multiple colors for a single shape

Multiple colors can be added to the color mapping which can be used as gradient effect to a specific shape based on the ranges in the data source. By using the [`color`](https://ej2.syncfusion.com/react/documentation/api/maps/colorMappingSettingsModel/#color) property of [`colorMapping`](https://ej2.syncfusion.com/react/documentation/api/maps/colorMappingSettingsModel/), any number of colors can be set to the shapes as a gradient.

>The following example demonstrates how to use multiple colors in color mapping with the data source  **population_density** that is available in the [Range color mapping](#range-color-mapping) section.

Bind the **population_density** data to the [`dataSource`](../api/maps/layerSettingsModel/#datasource) property of [`layerSettings`](https://ej2.syncfusion.com/react/documentation/api/maps/layerSettingsModel/) and set the [`colorValuePath`](https://ej2.syncfusion.com/react/documentation/api/maps/shapeSettingsModel/#colorvaluepath) property of [`shapeSettings`](https://ej2.syncfusion.com/react/documentation/api/maps/shapeSettingsModel/) as **density**. The range values can be set using the [`from`](https://ej2.syncfusion.com/react/documentation/api/maps/colorMappingSettingsModel/#from) and [`to`](https://ej2.syncfusion.com/react/documentation/api/maps/colorMappingSettingsModel/#to) properties of [`colorMapping`](https://ej2.syncfusion.com/react/documentation/api/maps/colorMappingSettingsModel/).

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/maps/default-map-cs15/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/maps/default-map-cs15/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/maps/default-map-cs15" %}

## Color for items excluded from color mapping

Color mapping can be applied to the shapes in the Maps which does not match color mapping criteria such as range or equal values using the [`color`](https://ej2.syncfusion.com/react/documentation/api/maps/colorMappingSettingsModel/#color) property of [`colorMapping`](https://ej2.syncfusion.com/react/documentation/api/maps/colorMappingSettingsModel/).

>The following example shows how to set the color for items excluded from the color mapping with the data source **population_density** that is available in the [Range color mapping](#range-color-mapping) section.

In the following example, color mapping is added for the ranges from 0 to 200. If there are any records in the data source that are outside of this range, the color mapping will not be applied. To apply the color for these excluded items, set the [`color`](https://ej2.syncfusion.com/react/documentation/api/maps/colorMappingSettingsModel/#color) property alone in the [`colorMapping`](https://ej2.syncfusion.com/react/documentation/api/maps/colorMappingSettingsModel/).

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/maps/default-map-cs16/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/maps/default-map-cs16/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/maps/default-map-cs16" %}

## Color mapping for bubbles

The color mapping types such as range color mapping, equal color mapping and desaturation color mapping are applicable for bubbles in the Maps. To add color mapping for bubbles of the Maps, bind the data source to the [`dataSource`](https://ej2.syncfusion.com/react/documentation/api/maps/bubbleSettingsModel/#datasource) property of [`bubbleSettings`](https://ej2.syncfusion.com/react/documentation/api/maps/bubbleSettingsModel) and set the field name which contains the color value in the data source to the [`colorValuePath`](https://ej2.syncfusion.com/react/documentation/api/maps/bubbleSettingsModel/#colorvaluepath) property. Multiple colors for a single set of bubbles and color for excluded items from [`colorMapping`](https://ej2.syncfusion.com/react/documentation/api/maps/colorMappingSettingsModel/) are also applicable for bubbles.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/maps/default-map-cs17/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/maps/default-map-cs17/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/maps/default-map-cs17" %}