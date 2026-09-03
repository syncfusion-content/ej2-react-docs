---
layout: post
title: How to use ColorPicker in DropDownButton in React | Syncfusion
description: Open the React Color Picker from inside a DropDownButton by setting the button's target property to the inline Color Picker wrapper.
control: Colorpicker in dropdownbutton 
platform: ej2-react
documentation: ug
domainurl: ##DomainURL##
---

# How to use ColorPicker in DropDownButton in React Color Picker

This section explains how to render the React Color Picker in a DropDownButton. The [`target`](https://ej2.syncfusion.com/react/documentation/api/drop-down-button#target) property of the DropDownButton enables this scenario. To learn about the `target` property, refer to the [`Popup templating`](./../../drop-down-button/popup-items#popup-templating) section.

In the following sample, the React Color Picker is rendered as inline by setting the [`inline`](https://ej2.syncfusion.com/react/documentation/api/color-picker#inline) property to `true`, and the rendered React Color Picker wrapper is passed as a `target` to the DropDownButton.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/colorpicker/dropdownbtn-cs1/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/colorpicker/dropdownbtn-cs1/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/colorpicker/dropdownbtn-cs1" %}
