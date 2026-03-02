---
layout: post
title: Icons in React Drop down button component | Syncfusion
description: Learn here all about Icons in Syncfusion React Drop down button component of Syncfusion Essential JS 2 and more.
control: Icons 
platform: ej2-react
documentation: ug
domainurl: ##DomainURL##
---

# Icons in React Drop down button component

## DropDownButton icons

Display an icon in the DropDownButton using the [`iconCss`](https://ej2.syncfusion.com/react/documentation/api/drop-down-button/#iconcss) property. Set the property to `e-icons` along with the desired icon CSS class. By default, icons appear on the left side of the button text. Customize the icon position using the [`iconPosition`](https://ej2.syncfusion.com/react/documentation/api/drop-down-button/#iconposition) property.

The following example demonstrates DropDownButtons with default and `Top` icon positions:

{% tabs %}
{% highlight js tabtitle="app.jsx" %}
{% include code-snippet/drop-down-button/icon-cs1/app/app.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="app.tsx" %}
{% include code-snippet/drop-down-button/icon-cs1/app/app.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/drop-down-button/icon-cs1" %}

### Icon-only DropDownButton

Create an icon-only DropDownButton by using the [`iconCss`](https://ej2.syncfusion.com/react/documentation/api/drop-down-button/#iconcss) property and hiding the dropdown caret with the `e-caret-hide` class through the [`cssClass`](https://ej2.syncfusion.com/react/documentation/api/drop-down-button/#cssclass) property.

{% tabs %}
{% highlight js tabtitle="app.jsx" %}
{% include code-snippet/drop-down-button/icon-only-cs1/app/app.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="app.tsx" %}
{% include code-snippet/drop-down-button/icon-only-cs1/app/app.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/drop-down-button/icon-only-cs1" %}

### DropDownButton with sprite image

Use sprite images as button icons by applying the [`iconCss`](https://ej2.syncfusion.com/react/documentation/api/drop-down-button/#iconcss) property. The following example uses the `e-image` class with background positioning. Set the element's `width` and `height` to `32px` to properly display the sprite image.

{% tabs %}
{% highlight js tabtitle="app.jsx" %}
{% include code-snippet/drop-down-button/sprite-cs1/app/app.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="app.tsx" %}
{% include code-snippet/drop-down-button/sprite-cs1/app/app.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/drop-down-button/sprite-cs1" %}

> Syncfusion provides a set of icons available through the `e-icons` class. You can also integrate third-party icons using the [`iconCss`](https://ej2.syncfusion.com/react/documentation/api/drop-down-button/#iconcss) property.

## Vertical button

Create a vertical DropDownButton layout by adding the `e-vertical` class using the [`cssClass`](https://ej2.syncfusion.com/react/documentation/api/drop-down-button/#cssclass) property. This orientation positions the button icon above the text.

{% tabs %}
{% highlight js tabtitle="app.jsx" %}
{% include code-snippet/drop-down-button/vertical-cs1/app/app.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="app.tsx" %}
{% include code-snippet/drop-down-button/vertical-cs1/app/app.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/drop-down-button/vertical-cs1" %}

> The Essential<sup style="font-size:70%">&reg;</sup> JS 2 provides a set of icons that can be loaded by applying `e-icons` class name to the element. You can also use third party icons on the DropDownButton using the [`iconCss`](https://ej2.syncfusion.com/react/documentation/api/drop-down-button/#iconcss) property.

## See Also

* [Dropdown popup with icons](./popup-items#icons)
* [Customized icon size](./how-to/customize-icon-and-width)