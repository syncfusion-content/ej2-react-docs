---
layout: post
title: Colorpicker in dropdownbutton in React Color picker component | Syncfusion
description: Learn here all about Colorpicker in dropdownbutton in Syncfusion React Color picker component of Syncfusion Essential JS 2 and more.
control: Colorpicker in dropdownbutton 
platform: ej2-react
documentation: ug
domainurl: ##DomainURL##
---

# Colorpicker in dropdownbutton in React Color picker component

This section explains about how to render the ColorPicker in DropDownButton. The [`target`](https://ej2.syncfusion.com/react/documentation/api/drop-down-button#target) property of the DropDownButton helps to achieve this scenario. To know about the usage of `target` property refer to [`Popup templating`](./../../drop-down-button/popup-items#popup-templating) section.

In the below sample, the color picker is rendered as inline type by setting [`inline`](https://ej2.syncfusion.com/react/documentation/api/color-picker#inline) property as `true` and the rendered color picker wrapper is passed as a `target` to the DropDownButton to achieve the above scenario.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/colorpicker/dropdownbtn-cs1/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/colorpicker/dropdownbtn-cs1/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/colorpicker/dropdownbtn-cs1" %}
