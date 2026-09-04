---
layout: post
title: How to add or remove items in Context Menu in React | Syncfusion
description: Add or remove React Context Menu items at runtime by calling the `insertAfter`, `insertBefore`, and `removeItems` public methods.
control: Context Menu 
platform: ej2-react
documentation: ug
domainurl: ##DomainURL##
---
# How to add or remove items in Context Menu in React

The React Context Menu component provides dynamic item management capabilities, allowing you to add or remove menu items programmatically. This functionality enables dynamic menu systems that adapt to changing application states, user permissions, or contextual requirements.


React Context Menu items can be dynamically modified using the [`insertAfter`](https://ej2.syncfusion.com/react/documentation/api/context-menu/index-default#insertafter), [`insertBefore`](https://ej2.syncfusion.com/react/documentation/api/context-menu/index-default#insertbefore), and [`removeItems`](https://ej2.syncfusion.com/react/documentation/api/context-menu/index-default#removeitems) public methods. These methods are exposed on the `ContextMenuComponent` instance and are accessed through a component `ref`.

| Method | Signature | Returns | Description |
| --- | --- | --- | --- |
| `insertAfter` | `insertAfter(items: MenuItemModel[], target: string)` | `void` | Inserts the supplied items after the menu item whose `text` matches the `target` argument. |
| `insertBefore` | `insertBefore(items: MenuItemModel[], target: string)` | `void` | Inserts the supplied items before the menu item whose `text` matches the `target` argument. |
| `removeItems` | `removeItems(items: string[])` | `void` | Removes the menu items whose `text` values match the supplied array. |

> The `target` argument for `insertAfter` / `insertBefore` matches an existing menu item by its `text` value. Mutation of submenu (nested) items via these methods is not supported; use item binding / state updates to restructure nested menus.

## Calling the methods safely

Call these methods **after** the component has initialized — typically inside the `created` event handler — and access the instance through a React `ref`. Calling them before `created` raises a "no item found" error because the menu structure has not been built yet.

In the following example, the **Display Settings** menu items are added before the **Personalize** item, the **Sort By** menu items are added after the **Refresh** item, and the **Paste** item is removed from the React Context Menu.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/context-menu/getting-started-cs2/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/context-menu/getting-started-cs2/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/context-menu/getting-started-cs2" %}