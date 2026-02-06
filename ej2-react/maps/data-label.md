---
layout: post
title: Data label in React Maps component | Syncfusion
description: Learn here all about Data label in Syncfusion React Maps component of Syncfusion Essential JS 2 and more.
control: Data label 
platform: ej2-react
documentation: ug
domainurl: ##DomainURL##
---

# Data label in React Maps component

Data labels display information about map shapes. Enable data labels by setting the [visible](https://ej2.syncfusion.com/react/documentation/api/maps/dataLabelSettingsModel#visible) property of the [dataLabelSettings](https://ej2.syncfusion.com/react/documentation/api/maps/dataLabelSettingsModel) to **true**.

## Adding data labels

To display data labels, specify the field name containing the label text in the [labelPath](https://ej2.syncfusion.com/react/documentation/api/maps/dataLabelSettingsModel#labelpath) property of [dataLabelSettings](https://ej2.syncfusion.com/react/documentation/api/maps/dataLabelSettingsModel) must be used. The value of the [labelPath](https://ej2.syncfusion.com/react/documentation/api/maps/dataLabelSettingsModel#labelpath). The field can come from either the shape data or the layer data source.

The following example sets [labelPath](https://ej2.syncfusion.com/react/documentation/api/maps/dataLabelSettingsModel#labelpath) from a field in the shape data.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/maps/default-map-cs27/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/maps/default-map-cs27/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/maps/default-map-cs27" %}

In the following example, the value of [labelPath](https://ej2.syncfusion.com/react/documentation/api/maps/dataLabelSettingsModel#labelpath) property is set from the field name in the data source of the layer settings.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/maps/default-map-cs28/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/maps/default-map-cs28/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/maps/default-map-cs28" %}

## Customization

Customize data label appearance using the following properties in [dataLabelSettings](https://ej2.syncfusion.com/react/documentation/api/maps/dataLabelSettingsModel).

* [border](https://ej2.syncfusion.com/react/documentation/api/maps/dataLabelSettingsModel#border) - To customize the color, width and opacity for the border of the data labels in Maps.
* [fill](https://ej2.syncfusion.com/react/documentation/api/maps/dataLabelSettingsModel#fill) - To apply the color of the data labels in Maps.
* [opacity](https://ej2.syncfusion.com/react/documentation/api/maps/dataLabelSettingsModel#opacity) - To customize the transparency of the data labels in Maps.
* [textStyle](https://ej2.syncfusion.com/react/documentation/api/maps/dataLabelSettingsModel#textstyle) - To customize the text style of the data labels in Maps.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/maps/default-map-cs29/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/maps/default-map-cs29/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/maps/default-map-cs29" %}

## Label animation

Animate data labels during initial rendering by setting the [animationDuration](https://ej2.syncfusion.com/react/documentation/api/maps/dataLabelSettingsModel#animationduration) property in the [dataLabelSettings](https://ej2.syncfusion.com/react/documentation/api/maps/dataLabelSettingsModel). Specify the duration in milliseconds.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/maps/default-map-cs108/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/maps/default-map-cs108/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/maps/default-map-cs108" %}

## Smart labels

Control label behavior when labels exceed shape boundaries using the [smartLabelMode](https://ej2.syncfusion.com/react/documentation/api/maps/dataLabelSettingsModel#smartlabelmode) property. 

The following modes are available:

* **None** -  It specifies that no action is taken, when a label exceeds the shape's region.
* **Hide** -  It specifies to hide the labels, when it exceeds the shape's region.
* **Trim** -  It specifies to trim the labels, when it exceeds the shape's region.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/maps/default-map-cs30/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/maps/default-map-cs30/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/maps/default-map-cs30" %}

## Intersect action

Control label behavior when labels overlap with other labels using the [intersectionAction](https://ej2.syncfusion.com/react/documentation/api/maps/dataLabelSettingsModel#intersectionaction) property. The following options are available:

* **None** -  It specifies that no action is taken, when the labels intersect.
* **Hide** -  It specifies to hide the labels when they intersect.
* **Trim** -  It specifies to trim the labels when they intersect.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/maps/default-map-cs31/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/maps/default-map-cs31/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/maps/default-map-cs31" %}

## Adding data label as a template

Add custom HTML elements as data label templates using the [template](https://ej2.syncfusion.com/react/documentation/api/maps/dataLabelSettingsModel#template) property of [dataLabelSettings](https://ej2.syncfusion.com/react/documentation/api/maps/dataLabelSettingsModel) is used to set the data label as a template. Any text or HTML element can be added as the template in data labels.

>The `smartLabelMode`, `intersectionAction`, `animationDuration`, `border`, `fill`, `opacity`, and `textStyle` properties do not apply to templates. Apply styles to label templates using standard CSS for HTML elements.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/maps/default-map-cs32/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/maps/default-map-cs32/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/maps/default-map-cs32" %}