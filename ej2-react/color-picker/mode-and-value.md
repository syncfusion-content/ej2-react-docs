---
layout: post
title: Mode and value in React Color picker component | Syncfusion
description: Learn here all about Mode and value in Syncfusion React Color picker component of Syncfusion Essential JS 2 and more.
control: Mode and value 
platform: ej2-react
documentation: ug
domainurl: ##DomainURL##
---

# Mode and value in React Color picker component

## Inline

By default, the ColorPicker renders as a SplitButton and opens a popup to access the ColorPicker. To render the ColorPicker container alone and access it directly, set the [`inline`](https://ej2.syncfusion.com/react/documentation/api/color-picker/#inline) property to `true`.

The following sample shows inline rendering of the ColorPicker.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/colorpicker/getting-started-cs3/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/colorpicker/getting-started-cs3/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/colorpicker/getting-started-cs3" %}

>> The `showButtons` property is disabled in this sample because the control buttons are not needed for inline rendering. To learn about the control buttons' functionality, refer to the [`showButtons`](./how-to/hide-control-buttons) sample.

## Rendering palette at initial load

By default, the `Picker` area is rendered initially. To open the ColorPicker popup with the `Palette` area rendered, set the [`mode`](https://ej2.syncfusion.com/react/documentation/api/color-picker/#mode) property to `Palette`.

In the following sample, the ColorPicker opens with the `Palette` rendered initially.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/colorpicker/getting-started-cs4/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/colorpicker/getting-started-cs4/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/colorpicker/getting-started-cs4" %}

## Color value

The [`value`](https://ej2.syncfusion.com/react/documentation/api/color-picker/#value) property specifies the ColorPicker's color value. It supports three- or six-digit hex codes. To include opacity, use four- or eight-digit hex codes.

In the following sample, the color value is set as a four-digit hex code; the last digit represents the `opacity` value.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/colorpicker/mode-and-value-cs1/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/colorpicker/mode-and-value-cs1/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/colorpicker/mode-and-value-cs1" %}

>> The [`value`](https://ej2.syncfusion.com/react/documentation/api/color-picker/#value) property supports hex code with or without `#` prefix.

## See Also

* [How to render palette alone](./how-to/render-palette-alone)
* [Custom palette](./how-to/customize-colorpicker#custom-palette)
* [No color support in palette](./how-to/handle-no-color-support)
