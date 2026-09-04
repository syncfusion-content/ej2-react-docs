---
layout: post
title: How to render palette alone in React Color Picker | Syncfusion
description: Render only the palette view in the React Color Picker by setting mode to Palette and modeSwitcher to false for a compact UI.
control: Render palette alone 
platform: ej2-react
documentation: ug
domainurl: ##DomainURL##
---

# How to render palette alone in React Color Picker

To render only the palette in the React Color Picker, set the [`mode`](https://ej2.syncfusion.com/react/documentation/api/color-picker#mode) property to `Palette` and the [`modeSwitcher`](https://ej2.syncfusion.com/react/documentation/api/color-picker#modeswitcher) property to `false`.

In the following sample, the [`showButtons`](https://ej2.syncfusion.com/react/documentation/api/color-picker#showbuttons) property is set to `false` to hide the control buttons, displaying only the `Palette` area.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/colorpicker/how-to-cs4/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/colorpicker/how-to-cs4/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/colorpicker/how-to-cs4" %}

>> To render only the `Picker`, set the [`mode`](https://ej2.syncfusion.com/react/documentation/api/color-picker#mode) property to `Picker`.
