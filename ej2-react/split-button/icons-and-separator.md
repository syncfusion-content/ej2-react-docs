---
layout: post
title: Icons and separator in React Split button component | Syncfusion
description: Learn here all about Icons and separator in Syncfusion React Split button component of Syncfusion Essential JS 2 and more.
control: Icons and separator 
platform: ej2-react
documentation: ug
domainurl: ##DomainURL##
---

# Icons and separator in React Split button component

## SplitButton icons

Display visual icons in SplitButton to enhance action recognition and improve user experience. Set the [`iconCss`](https://ej2.syncfusion.com/react/documentation/api/split-button#iconcss) property with `e-icons` class and appropriate icon CSS to render icons from Syncfusion's built-in icon library. By default, icons appear on the left side of the button text; use the [`iconPosition`](https://ej2.syncfusion.com/react/documentation/api/split-button#iconposition) property to position icons to the right, top, or bottom.

The following example demonstrates how to add icons to the SplitButton component.

{% tabs %}
{% highlight js tabtitle="app.jsx" %}
{% include code-snippet/split-button/icon-cs1/app/app.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="app.tsx" %}
{% include code-snippet/split-button/icon-cs1/app/app.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/split-button/icon-cs1" %}

> The Essential<sup style="font-size:70%">&reg;</sup> JS 2 provides a set of icons that can be loaded by applying `e-icons` class name to the element.
You can also use third party icons on the SplitButton using the [`iconCss`](https://ej2.syncfusion.com/react/documentation/api/split-button#iconcss) property.

### Vertical button

Create a vertical button layout in SplitButton by applying the `e-vertical` class through the [`cssClass`](https://ej2.syncfusion.com/react/documentation/api/split-button#cssclass) property. This orientation stacks the icon and text vertically, useful for compact toolbar layouts or custom UI designs requiring vertical button arrangements.

The following example demonstrates how to enable vertical button support in the SplitButton component.

{% tabs %}
{% highlight js tabtitle="app.jsx" %}
{% include code-snippet/split-button/vertical-cs1/app/app.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="app.tsx" %}
{% include code-snippet/split-button/vertical-cs1/app/app.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/split-button/vertical-cs1" %}

> The Essential<sup style="font-size:70%">&reg;</sup> JS 2 provides a set of icons that can be loaded by applying `e-icons` class name to the element.
You can also use third party icons on the SplitButton using the [`iconCss`](https://ej2.syncfusion.com/react/documentation/api/split-button#iconcss) property.

## Separator

Add visual separators between popup menu items to group related actions and improve readability. Enable separators by setting the `separator` property to `true` on individual menu items, creating visual dividers that organize popup content hierarchically.

The following example demonstrates how to enable separators in SplitButton popup items.

{% tabs %}
{% highlight js tabtitle="app.jsx" %}
{% include code-snippet/split-button/separator-cs1/app/app.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="app.tsx" %}
{% include code-snippet/split-button/separator-cs1/app/app.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/split-button/separator-cs1" %}

## See Also

* [SplitButton popup with icons](./popup-items#icons)
