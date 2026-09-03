---
layout: post
title: How to handle no color support in React Color Picker | Syncfusion
description: Add a no-color tile to the React Color Picker palette by setting noColor to true so users can clear the selected color.
control: Handle no color support 
platform: ej2-react
documentation: ug
domainurl: ##DomainURL##
---

# How to handle no color support in React Color Picker

The React Color Picker component supports a no-color feature. When you click the no-color tile in the palette, the selected color becomes empty, indicating that no color has been selected.

## Default no color

To enable this feature, set the [`noColor`](https://ej2.syncfusion.com/react/documentation/api/color-picker#nocolor) property to `true`.

In the following sample, the first tile of the palette represents the no-color option. Click it to clear the color selection.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/colorpicker/no-color/default-cs1/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/colorpicker/no-color/default-cs1/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/colorpicker/no-color/default-cs1" %}

>When the [`noColor`](https://ej2.syncfusion.com/react/documentation/api/color-picker#nocolor) property is enabled, ensure that the [`modeSwitcher`](https://ej2.syncfusion.com/react/documentation/api/color-picker#modeswitcher) property is disabled.

## Custom no color

The following sample shows the palette with a custom no-color option.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/colorpicker/no-color/custom-cs1/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/colorpicker/no-color/custom-cs1/app/index.tsx %}
{% endhighlight %}
{% highlight css tabtitle="styles.css" %}
{% include code-snippet/colorpicker/no-color/custom-cs1/styles.css %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/colorpicker/no-color/custom-cs1" %}
