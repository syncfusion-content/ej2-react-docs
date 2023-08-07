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

DropDownButton can have an icon to provide the visual representation of the action. To place the icon on a DropDownButton, set the [`iconCss`](https://ej2.syncfusion.com/react/documentation/api/drop-down-button/#iconcss) property to `e-icons` with the required icon CSS. By default, the icon is positioned to the left side of the DropDownButton. You
can customize the icon's position by using the [`iconPosition`](https://ej2.syncfusion.com/react/documentation/api/drop-down-button/#iconposition)property.

In the following example, the DropDownButton with default iconPosition and iconPosition as `Top` is showcased.

{% tabs %}
{% highlight js tabtitle="app.jsx" %}
{% include code-snippet/drop-down-button/icon-cs1/app/app.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="app.tsx" %}
{% include code-snippet/drop-down-button/icon-cs1/app/app.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/drop-down-button/icon-cs1" %}

### Icon only DropDownButton

Icon only DropDownButton can be achieved by using [`iconCss`](https://ej2.syncfusion.com/react/documentation/api/drop-down-button/#iconcss) property and to hide drop down arrow
`e-caret-hide` class is added using [`cssClass`](https://ej2.syncfusion.com/react/documentation/api/drop-down-button/#cssclass) property.

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

Sprite images can be loaded in DropDownButton instead of font icons using [`iconCss`](https://ej2.syncfusion.com/react/documentation/api/drop-down-button/#iconcss) property.

In this following example, `e-image` class is added with background url of the sprite image along with X and Y positions. The `width` and `height` of the element set as `32px`.

{% tabs %}
{% highlight js tabtitle="app.jsx" %}
{% include code-snippet/drop-down-button/sprite-cs1/app/app.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="app.tsx" %}
{% include code-snippet/drop-down-button/sprite-cs1/app/app.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/drop-down-button/sprite-cs1" %}

> The Essential JS 2 provides a set of icons that can be loaded by applying `e-icons` class name to the element. You can also use third party icons on the DropDownButton using the [`iconCss`](https://ej2.syncfusion.com/react/documentation/api/drop-down-button/#iconcss) property.

## Vertical button

Vertical Button in DropDownButton can be achieved by adding `e-vertical` class using `cssClass` property.

{% tabs %}
{% highlight js tabtitle="app.jsx" %}
{% include code-snippet/drop-down-button/vertical-cs1/app/app.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="app.tsx" %}
{% include code-snippet/drop-down-button/vertical-cs1/app/app.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/drop-down-button/vertical-cs1" %}

> The Essential JS 2 provides a set of icons that can be loaded by applying `e-icons` class name to the element. You can also use third party icons on the DropDownButton using the [`iconCss`](https://ej2.syncfusion.com/react/documentation/api/drop-down-button/#iconcss) property.

## See Also

* [Dropdown popup with icons](./popup-items#icons)
* [Customized icon size](./how-to/customize-icon-and-width)