---
layout: post
title: Handle no color support in React Color picker component | Syncfusion
description: Learn here all about Handle no color support in Syncfusion React Color picker component of Syncfusion Essential JS 2 and more.
control: Handle no color support 
platform: ej2-react
documentation: ug
domainurl: ##DomainURL##
---

# Handle no color support in React Color picker component

The ColorPicker component supports no color functionality. By clicking the no color tile from palette, the selected color becomes `empty` and considered as no color has been selected from color picker.

## Default no color

To achieve this, set [`noColor`](https://ej2.syncfusion.com/react/documentation/api/color-picker/#nocolor) property as `true`.

In the following sample, the first tile of the color palette represents the no color tile. By clicking the no color tile you can achieve the above functionalities.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/colorpicker/no-color/default-cs1/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/colorpicker/no-color/default-cs1/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/colorpicker/no-color/default-cs1" %}

<!-- markdownlint-disable -->
<!-- ## Custom no color

The following sample show the color palette with custom no color option.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/colorpicker/no-color/custom-cs1/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/colorpicker/no-color/custom-cs1/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/colorpicker/no-color/custom-cs1" %} -->