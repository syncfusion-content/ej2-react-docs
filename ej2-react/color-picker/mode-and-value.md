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

By default, the ColorPicker will be rendered using SplitButton and open the pop-up to access the ColorPicker. To render the ColorPicker container alone and to access it directly, render it as inline. It can be achieved by setting the [`inline`](https://ej2.syncfusion.com/react/documentation/api/color-picker#inline) property to `true`.

The following sample shows the inline type rendering of ColorPicker.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/colorpicker/getting-started-cs3/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/colorpicker/getting-started-cs3/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/colorpicker/getting-started-cs3" %}

>> The `showButtons` property is disabled in this sample because the control buttons are not needed for inline type. To know about the control buttons functionality, refer to the [`showButtons`](./how-to/hide-control-buttons) sample.

## Rendering palette at initial load

By default, the `Picker` area will be rendered at initial load. To render the Palette area while opening the ColorPicker pop-up, and specify the [`mode`](https://ej2.syncfusion.com/react/documentation/api/color-picker#mode) property as `Palette`.

In the following sample, it will render the `Palette` at initial load.

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

The [`value`](https://ej2.syncfusion.com/react/documentation/api/color-picker#value) property can be used to specify the color value to the ColorPicker. It supports either `three` or `six` digit hex codes. To include `opacity`, set the color value as `four` or `eight` digit hex code.

In the following sample, the color value sets as `four` digit hex code, the last digit represents the `opacity` value.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/colorpicker/mode-and-value-cs1/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/colorpicker/mode-and-value-cs1/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/colorpicker/mode-and-value-cs1" %}

>> The [`value`](https://ej2.syncfusion.com/react/documentation/api/color-picker#value) property supports hex code with or without `#` prefix.

## See Also

* [How to render palette alone](./how-to/render-palette-alone)
* [Custom palette](./how-to/customize-colorpicker#custom-palette)
* [No color support in palette](./how-to/handle-no-color-support)
