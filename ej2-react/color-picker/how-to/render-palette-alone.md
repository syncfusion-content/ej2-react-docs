---
layout: post
title: Render palette alone in React Color picker component | Syncfusion
description: Learn here all about Render palette alone in Syncfusion React Color picker component of Syncfusion Essential JS 2 and more.
control: Render palette alone 
platform: ej2-react
documentation: ug
domainurl: ##DomainURL##
---

# Render palette alone in React Color picker component

To render the `Palette` alone in ColorPicker, specify the [`mode`](https://ej2.syncfusion.com/react/documentation/api/color-picker#mode) property as `Palette`, and set the [`modeSwitcher`](https://ej2.syncfusion.com/react/documentation/api/color-picker#modeswitcher) property to `false`.

In the following sample, the [`showButtons`](https://ej2.syncfusion.com/react/documentation/api/color-picker#showbuttons) property is disabled to hide the control buttons and it renders only the `Palette` area.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/colorpicker/how-to-cs4/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/colorpicker/how-to-cs4/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/colorpicker/how-to-cs4" %}

>> To render `Picker` alone specify the [`mode`](https://ej2.syncfusion.com/react/documentation/api/color-picker#mode) property as 'Picker'.
