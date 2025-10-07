---
layout: post
title: Templates React Context menu component | Syncfusion
description: Learn here all about Template and multilevel nesting in Syncfusion React Context menu component of Syncfusion Essential JS 2 and more.
control: Context Menu 
platform: ej2-react
documentation: ug
domainurl: ##DomainURL##
---

# Templates in React Context menu component

## Item template

The [itemTemplate](https://ej2.syncfusion.com/react/documentation/api/context-menu/#itemtemplate) property in the ContextMenu component allows you to define custom templates for displaying menu items. This feature enables you to customize the appearance, layout, and content of menu items beyond the default text-based display. Use item templates when you need to include icons, formatted text, additional metadata, or complex HTML structures within menu items.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/context-menu/template-cs2/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/context-menu/template-cs2/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/context-menu/template-cs2" %}

## Customize specific menu items

ContextMenu items can be customized using the [`beforeItemRender`](https://ej2.syncfusion.com/react/documentation/api/context-menu/#beforeitemrender) event. This event triggers while rendering each menu item, providing access to the item element and menu item data for customization based on specific requirements. The following example demonstrates how to add keyboard shortcuts to specific menu items by appending span elements during the rendering process.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/context-menu/template-cs1/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/context-menu/template-cs1/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/context-menu/template-cs1" %}

> To create span element, `createElement` util function used from `ej2-base`.

## Multi-level nesting

The ContextMenu component supports multiple levels of nesting for creating hierarchical menu structures. Achieve this by mapping the [`items`](https://ej2.syncfusion.com/react/documentation/api/context-menu/menuItemModel/#items) property within parent [`menuItems`](https://ej2.syncfusion.com/react/documentation/api/context-menu/#items). The following example demonstrates a three-level nested ContextMenu structure.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/context-menu/getting-started-cs6/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/context-menu/getting-started-cs6/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/context-menu/getting-started-cs6" %}

> To open sub menu items only on click, set the [`showItemOnClick`](https://ej2.syncfusion.com/react/documentation/api/context-menu/#showitemonclick) property to `true`.

## See Also

* [Populate menu items with data source](./how-to/data-binding)
