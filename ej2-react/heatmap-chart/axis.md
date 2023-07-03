---
layout: post
title: Axis in React HeatMap chart component | Syncfusion
description: Learn here all about axis in Syncfusion React HeatMap chart component of Syncfusion Essential JS 2 and more.
control: Axis 
platform: ej2-react
documentation: ug
domainurl: ##DomainURL##
---

# Axis in React HeatMap chart component

HeatMap consists of two axes namely, X-axis and Y-axis that displays the row headers and column headers to plot the data points respectively. You can define the type, format, and other customizing options for both axes in the HeatMap.

## Types

There are three different axis types available in the HeatMap, which defines the data type of the axis labels. You can define the axis type by using the [valueType](https://ej2.syncfusion.com/react/documentation/api/heatmap/axis/#valuetype) property in the HeatMap.

### Category axis

Category axis type is used to represent the string values in axis labels.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/heatmap/axis-cs1/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/heatmap/axis-cs1/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/heatmap/axis-cs1" %}

### Numeric axis

Numeric axis type is used to represent the numeric values in axis labels.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/heatmap/axis-cs2/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/heatmap/axis-cs2/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/heatmap/axis-cs2" %}

### Date-time axis

Date-time axis type is used to represent the date-time values in axis labels with a specific format. In date-time axis, you can define the start and end date/time using the [minimum](https://ej2.syncfusion.com/react/documentation/api/heatmap/axis/#minimum) and [maximum](https://ej2.syncfusion.com/react/documentation/api/heatmap/axis/#maximum) properties.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/heatmap/axis-cs3/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/heatmap/axis-cs3/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/heatmap/axis-cs3" %}

## Inversed axis

HeatMap supports inversing the axis origin for both axes, where the axis labels are placed in an inversed manner. You can enable axis inversing by enabling the [isInversed](https://ej2.syncfusion.com/react/documentation/api/heatmap/axis/#isinversed) property.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/heatmap/axis-cs4/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/heatmap/axis-cs4/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/heatmap/axis-cs4" %}

## Opposed axis

In HeatMap, you can place the axis label in an opposite position of its default axis label position by using the [opposedPosition](https://ej2.syncfusion.com/react/documentation/api/heatmap/axis/#opposedposition) property.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/heatmap/axis-cs5/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/heatmap/axis-cs5/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/heatmap/axis-cs5" %}

 ## Axis labels customization

### Customizing the text style

The text style of the axis labels can be customized using the following options available in the [textStyle](https://ej2.syncfusion.com/react/documentation/api/heatmap/axis/#textstyle) property.

* [color](https://helpej2.syncfusion.com/react/documentation/api/heatmap/fontModel/#color) - It is used to change the text color of the axis labels.
* [fontFamily](https://helpej2.syncfusion.com/react/documentation/api/heatmap/fontModel/#fontfamily) - It is used to change the font family of the axis labels.
* [fontStyle](https://helpej2.syncfusion.com/react/documentation/api/heatmap/fontModel/#fontstyle) - It is used to change the font style of the axis labels.
* [fontWeight](https://helpej2.syncfusion.com/react/documentation/api/heatmap/fontModel/#fontweight) - It is used to change the font weight of the axis labels.
* [size](https://helpej2.syncfusion.com/react/documentation/api/heatmap/fontModel/#size) - It is used to change the font size of the axis labels.
* [textAlignment](https://helpej2.syncfusion.com/react/documentation/api/heatmap/fontModel/#textalignment) - It is used to position and align the axis labels. This property allows you to specify values such as **Near**, **Center**, and **Far**.
* [textOverflow](https://helpej2.syncfusion.com/react/documentation/api/heatmap/fontModel/#textoverflow) - When the axis label exceeds the intended space, this property is used to trim or wrap it. This property takes values such as **None**, **Trim**, and **Wrap**.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/heatmap/axis-cs11/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/heatmap/axis-cs11/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/heatmap/axis-cs11" %}

### Customizing labels when intersecting with other labels

When the axis labels intersect, [labelIntersectAction](https://ej2.syncfusion.com/react/documentation/api/heatmap/axis/#labelintersectaction) property is used to handle the intersection. The `labelIntersectAction` property can take the following values.

* **None** - It specifies that no action is taken when the axis labels intersect.
* **Trim** - It specifies to trim the axis labels when they intersect.
* **Rotate45** - When the axis labels intersect, they are rotated to 45 degrees.
* **MultipleRows** - It specifies to show all the axis labels as multiple rows when they intersect.

The below example demonstrates to trim the axis labels by using the `labelIntersectAction` property.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/heatmap/axis-cs12/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/heatmap/axis-cs12/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/heatmap/axis-cs12" %}

### Rotating labels

The axis labels can be rotated to the desired angles by using the [labelRotation](https://ej2.syncfusion.com/react/documentation/api/heatmap/axis/#labelrotation) property.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/heatmap/axis-cs13/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/heatmap/axis-cs13/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/heatmap/axis-cs13" %}

### Label formatting

HeatMap supports formatting the axis labels by using the [labelFormat](https://ej2.syncfusion.com/react/documentation/api/heatmap/axis/#labelformat) property. Using this property, you can customize the axis label by global string format ('P', 'C', etc) or customized format like '{value}°C'.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/heatmap/axis-cs6/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/heatmap/axis-cs6/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/heatmap/axis-cs6" %}

## Axis intervals

In HeatMap, you can define an interval between the axis labels using the [interval](https://ej2.syncfusion.com/react/documentation/api/heatmap/axis/#interval) property. In date-time axis, you can change the interval mode by using the [intervalType](https://ej2.syncfusion.com/react/documentation/api/heatmap/axis/#intervaltype) property. The date-time axis supports the following interval types:

* Years
* Months
* Days
* Hours
* Minutes

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/heatmap/axis-cs7/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/heatmap/axis-cs7/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/heatmap/axis-cs7" %}

## Axis label increment

Axis label increment in the HeatMap is used to display the axis labels with regular interval values in numeric and date-time axes. The labels will be displayed with tick gaps when you set the label interval. But, to achieve the same behavior without tick gaps, use the label increment. You can set the axis label increment using the [increment](https://ej2.syncfusion.com/react/documentation/api/heatmap/axis/#increment) property and the default value of this property is **1**.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/heatmap/axis-cs8/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/heatmap/axis-cs8/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/heatmap/axis-cs8" %}

## Limiting labels in date-time axis

You can display the axis labels at specific time intervals along with the date-time axis using the [showLabelOn](https://ej2.syncfusion.com/react/documentation/api/heatmap/axis/#showlabelon) property. This property supports the following types:

* None: Displays the axis labels based on the `intervalType` and `interval` property of the axis. This type is default value of the `showLabelOn` property.
* Years: Displays the axis labels on every year between given date-time range.
* Months: Displays the axis labels on every month between given date-time range.
* Days: Displays the axis labels on every day between given date-time range.
* Minutes: Displays the axis labels on every minute between given date-time range.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/heatmap/axis-cs9/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/heatmap/axis-cs9/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/heatmap/axis-cs9" %}


## Multilevel Labels

Multilevel labels are used to classify a group of axis labels as a single category, which is then displayed with a label. By using [multiLevelLabels](https://ej2.syncfusion.com/react/documentation/api/heatmap/axis/#multilevellabels), you can add multiple levels on top of the axis labels.

To divide and group the axis labels, you can use `multiLevelLabels` property. The starting and ending indexes of the axis labels can be set using the [start](https://ej2.syncfusion.com/react/documentation/api/heatmap/multiLevelCategoriesModel/#start) and [end](https://ej2.syncfusion.com/react/documentation/api/heatmap/multiLevelCategoriesModel/#end) properties in the [categories](https://ej2.syncfusion.com/react/documentation/api/heatmap/multiLevelCategoriesModel/). The [text](https://ej2.syncfusion.com/react/documentation/api/heatmap/multiLevelCategoriesModel/#text) property can be used to specify a name for the grouped axis labels.

The multilevel labels can be customized by using the following properties.
* [overflow](https://ej2.syncfusion.com/react/documentation/api/heatmap/multiLevelLabels/#overflow) - It is used to trim or wrap the multilevel labels when the label overflows the intended space. NOTE: This property is only for x-axis.
* [alignment](https://ej2.syncfusion.com/react/documentation/api/heatmap/multiLevelLabels/#alignment) - It is used to place and align the multilevel labels.
* [maximumTextWidth](https://ej2.syncfusion.com/react/documentation/api/heatmap/multiLevelCategoriesModel/#maximumtextwidth) - It is used to set the maximum width of the text. When the text length exceeds the maximum text width, the overflow action will be performed.
* [textStyle](https://ej2.syncfusion.com/react/documentation/api/heatmap/multiLevelLabels/#textstyle) - It is used to customize the font style of the multilevel labels.
* [border](https://ej2.syncfusion.com/react/documentation/api/heatmap/multiLevelLabels/#border) - It is used to customize the border of the multilevel labels displayed in the x-axis and y-axis.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/heatmap/axis-cs10/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/heatmap/axis-cs10/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/heatmap/axis-cs10" %}
