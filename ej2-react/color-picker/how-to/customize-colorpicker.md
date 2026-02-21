---
layout: post
title: Customize colorpicker in React Color picker component | Syncfusion
description: Learn here all about Customize colorpicker in Syncfusion React Color picker component of Syncfusion Essential JS 2 and more.
control: Customize colorpicker 
platform: ej2-react
documentation: ug
domainurl: ##DomainURL##
---

# Customize colorpicker in React Color picker component

## Custom palette

By default, the palette is rendered with default colors. To load custom colors, specify them in the [`presetColors`](https://ej2.syncfusion.com/react/documentation/api/color-picker/#presetcolors) property. To customize palette tiles, add a custom class using the [`BeforeTileRender`](https://ej2.syncfusion.com/react/documentation/api/color-picker/#beforetilerender) event.

The following sample demonstrates these features.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/colorpicker/custom/palette-cs1/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/colorpicker/custom/palette-cs1/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/colorpicker/custom/palette-cs1" %}

## Hide input area from picker

By default, the input area is rendered in the ColorPicker. To hide it, add the `e-hide-value` class using the [`cssClass`](https://ej2.syncfusion.com/react/documentation/api/color-picker/#cssclass) property.

In the following sample, the ColorPicker renders without an input area.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/colorpicker/how-to-cs1/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/colorpicker/how-to-cs1/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/colorpicker/how-to-cs1" %}

## Custom handle

The ColorPicker handle shape and UI can be customized. In the following example, the handle is customized as an SVG icon; you can customize it based on your requirements.

The following sample shows the customized ColorPicker handle.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/colorpicker/custom/handle-cs1/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/colorpicker/custom/handle-cs1/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/colorpicker/custom/handle-cs1" %}

## Custom primary button

By default, the applied color is displayed in the primary button. You can customize it to show an icon instead.

In the following sample, the `picker` icon is added to the primary button, and the [`change`](https://ej2.syncfusion.com/react/documentation/api/color-picker/#change) event updates the selected color in the bottom portion of the icon.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/colorpicker/icon-cs1/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/colorpicker/icon-cs1/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/colorpicker/icon-cs1" %}

>> The Essential<sup style="font-size:70%">&reg;</sup> JS 2 provides a set of icons that can be loaded by applying `e-icons` class name to the element. You can also use third party icon to customize the primary button.

## Display hex code in input

The ColorPicker input element can be displayed in place of the primary button. The applied color hex code is updated in the input.

The following sample shows the ColorPicker with an input displaying the hex code.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/colorpicker/input-cs1/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/colorpicker/input-cs1/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/colorpicker/input-cs1" %}

## Custom UI

The ColorPicker UI can be customized in various ways. The following sample shows an Excel-like UI customization using the SplitButton and Dialog components. When you click the "more colors" option from the palette, a dialog containing the ColorPicker opens.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/colorpicker/position-cs1/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/colorpicker/position-cs1/app/index.tsx %}
{% endhighlight %}
{% highlight css tabtitle="styles.css" %}
{% include code-snippet/colorpicker/position-cs1/styles.css %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/colorpicker/position-cs1" %}

