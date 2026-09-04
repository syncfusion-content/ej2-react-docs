---
layout: post
title: Templates in React Context Menu | Syncfusion
description: Use `itemTemplate` and the `beforeItemRender` event to render custom React content in Context Menu items and build multi-level nested menus.
control: Context Menu 
platform: ej2-react
documentation: ug
domainurl: ##DomainURL##
---

# Templates in React Context Menu

## Item template

The [itemTemplate](https://ej2.syncfusion.com/react/documentation/api/context-menu/index-default#itemtemplate) property in the Context Menu component allows you to define custom templates for displaying menu items. This feature enables you to customize the appearance, layout, and content of menu items beyond the default text-based display. Use item templates when you need to include icons, formatted text, additional metadata, or complex HTML structures within menu items.

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

The React Context Menu items can be customized using the [`beforeItemRender`](https://ej2.syncfusion.com/react/documentation/api/context-menu/index-default#beforeitemrender) event. This event fires during rendering of each menu item. The handler receives a `MenuEventArgs` argument exposing:

| Member | Description |
| --- | --- |
| `element` | The DOM node rendered for the menu item. |
| `item` | The data object (`MenuItemModel`) for the menu item, used to read fields such as `text`, `iconCss`, and `url`. |

The following example reads `args.item.text` to choose a keyboard shortcut and appends a `<span>` element to `args.element` during the rendering process. The `createElement` utility from `@syncfusion/ej2-base` is used to create the span element.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/context-menu/template-cs1/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/context-menu/template-cs1/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/context-menu/template-cs1" %}

## Multi-level nesting

The React Context Menu component supports multiple levels of nesting for creating hierarchical menu structures. Achieve this by mapping the `items` field of each parent menu item (see [`MenuItemModel.items`](https://ej2.syncfusion.com/react/documentation/api/context-menu/menuitemmodel#items)) to an array of child `MenuItemModel` objects. By default, submenu items open on hover; the menu is not limited to a fixed nesting depth, but for usability we recommend keeping nesting to three or four levels. The following example demonstrates a three-level nested React Context Menu structure.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/context-menu/getting-started-cs6/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/context-menu/getting-started-cs6/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/context-menu/getting-started-cs6" %}

> By default, submenu items open when the parent item is hovered. To open submenu items only on click, set the [`showItemOnClick`](https://ej2.syncfusion.com/react/documentation/api/context-menu/index-default#showitemonclick) property to `true`.

## See also

* [Populate menu items with data source](./how-to/data-binding)
