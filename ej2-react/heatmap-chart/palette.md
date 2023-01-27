---
layout: post
title: Palette in React Heatmap chart component | Syncfusion
description: Learn here all about Palette in Syncfusion React Heatmap chart component of Syncfusion Essential JS 2 and more.
control: Palette 
platform: ej2-react
documentation: ug
domainurl: ##DomainURL##
---

# Palette in React Heatmap chart component

In heat map, each data point is displayed as a cell with applied color based on the data value. The palette in the heat map is used to define the color range for cells and gradient type for colors. You can define the colors either in RGB or hex codes using the [color](https://ej2.syncfusion.com/react/documentation/api/heatmap/paletteCollection/#color) property in the `palette`. The defined colors are applied to the cell background based on the palette type and cell value.

## Palette types

You can display the heat map cells either in gradient colors or fixed colors.

### Gradient

The smooth transition between the given palette colors can be applied for the heat map cells based on value. The heat map calculates all the gradient colors between the start and end colors for all distinct data values. Default start color and end color will be considered for gradient calculation, if the colors are not defined. The palette type must be defined as **Gradient** for the [type](https://ej2.syncfusion.com/react/documentation/api/heatmap/paletteSettings/#type) property in the `paletteSettings` property.

{% tabs %}
{% highlight js tabtitle="app.jsx" %}
{% include code-snippet/heatmap/palette-cs1/app/App.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="app.tsx" %}
{% include code-snippet/heatmap/palette-cs1/app/App.tsx %}
{% endhighlight %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/heatmap/palette-cs1/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/heatmap/palette-cs1/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/heatmap/palette-cs1" %}

### Fixed

In fixed palette type, solid colors are applied to the heat map cells. The data values can be grouped based on the number of colors defined for the heat map. The palette type should be defined as Fixed **Fixed** for the [type](https://ej2.syncfusion.com/react/documentation/api/heatmap/paletteSettings/#type) property in the `paletteSettings` property.

{% tabs %}
{% highlight js tabtitle="app.jsx" %}
{% include code-snippet/heatmap/palette-cs2/app/App.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="app.tsx" %}
{% include code-snippet/heatmap/palette-cs2/app/App.tsx %}
{% endhighlight %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/heatmap/palette-cs2/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/heatmap/palette-cs2/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/heatmap/palette-cs2" %}

## Defining color stops

You can define the colors ranges or color stops for data values in both gradient and fixed palette types. You need to define the data value in the [value](https://ej2.syncfusion.com/react/documentation/api/heatmap/paletteCollection/#value)property for `palette` property to calculate the color stops. The heat map automatically calculates the color stops if the [value](https://ej2.syncfusion.com/react/documentation/api/heatmap/paletteCollection/#value) property is not defined. The [label](https://ej2.syncfusion.com/react/documentation/api/heatmap/paletteCollection/#label) property is used to provide the additional information about the color that is to be displayed in the legend. If the label is not provided, the value is displayed in the legend. The labels can be automatically calculated based on data values, if both the values and labels are not defined.

{% tabs %}
{% highlight js tabtitle="app.jsx" %}
{% include code-snippet/heatmap/palette-cs3/app/App.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="app.tsx" %}
{% include code-snippet/heatmap/palette-cs3/app/App.tsx %}
{% endhighlight %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/heatmap/palette-cs3/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/heatmap/palette-cs3/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/heatmap/palette-cs3" %}

## Color range

The color range support is used to provide a specific color for specific range in heat map. The `startValue` and `endValue` properties are used to define the range start and end value. The `minColor` and `maxColor` properties represent the colors of given range. It's possible to set the cell color for the value not in the given range using the `fillColor` property.

> In Fixed type, the `minColor` value is used for cell color.

{% tabs %}
{% highlight js tabtitle="app.jsx" %}
{% include code-snippet/heatmap/palette-cs4/app/App.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="app.tsx" %}
{% include code-snippet/heatmap/palette-cs4/app/App.tsx %}
{% endhighlight %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/heatmap/palette-cs4/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/heatmap/palette-cs4/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/heatmap/palette-cs4" %}

## See Also

* [How to enable smart legend](./legend/#smart-legend)