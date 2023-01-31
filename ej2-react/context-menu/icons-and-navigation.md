---
layout: post
title: Icons and navigation in React Context menu component | Syncfusion
description: Learn here all about Icons and navigation in Syncfusion React Context menu component of Syncfusion Essential JS 2 and more.
control: Icons and navigation 
platform: ej2-react
documentation: ug
domainurl: ##DomainURL##
---

# Icons and navigation in React Context menu component

## Icons

The ContextMenu item have an icon / image in it to provide visual representation of the action. To place the icon on a menu item, set the [`iconCss`](https://ej2.syncfusion.com/react/documentation/api/context-menu/menuItemModel#iconcss) property to e-icons with the required icon CSS. By default, the icon is positioned to the left side of the menu item. In the following sample, the icons for Cut, Copy and Paste menu items are added using `iconCss` property.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/context-menu/icons-cs1/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/context-menu/icons-cs1/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/context-menu/icons-cs1" %}

## Navigation URL

Navigation URL in ContextMenu is used for navigating to other web page when menu item is clicked. This can be achieved by providing link to the menu item using the [`url`](https://ej2.syncfusion.com/react/documentation/api/context-menu/menuItemModel#url) property.In the following sample, Navigation URL for Flipkart, Amazon, and Snapdeal menu items are added using the `url` property.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/context-menu/navigation-cs1/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/context-menu/navigation-cs1/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/context-menu/navigation-cs1" %}

> To open the links in new tab, set 'target' attribute with the value '_blank' in the
[`beforeItemRender`](https://ej2.syncfusion.com/react/documentation/api/context-menu#beforeitemrender) event.

## See Also

* [How to change menu items dynamically](./how-to/change-menu-items-dynamically)
