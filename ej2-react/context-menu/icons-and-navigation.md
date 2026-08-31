---
layout: post
title: Icons and Navigation in React Context Menu | Syncfusion
description: Add icons to React Context Menu items via `iconCss` and configure the `url` property to navigate to internal routes or external web pages.
control: Context Menu 
platform: ej2-react
documentation: ug
domainurl: ##DomainURL##
---

# Icons and Navigation in React Context Menu

## Icons

The Context Menu component supports icons and images on menu items to provide a visual representation of actions and enhance user experience. To add an icon to a menu item, configure the [`iconCss`](https://ej2.syncfusion.com/react/documentation/api/context-menu/menuitemmodel#iconcss) property with the appropriate CSS class. By default, icons are positioned to the left side of the menu item text; this position is automatically mirrored to the right when the component is rendered with `enableRtl={true}`. Only CSS/font icons are supported through `iconCss` (image URLs are not supported via `iconCss`).

For a full list of menu item fields — including `iconCss`, `url`, `disabled`, `separator`, `children`, and `id` — see the [`MenuItemModel`](https://ej2.syncfusion.com/react/documentation/api/context-menu/menuitemmodel) API reference.

In the following sample, icons for Cut, Copy and Paste menu items are added using the `iconCss` property with `e-icons` CSS classes.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/context-menu/icons-cs1/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/context-menu/icons-cs1/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/context-menu/icons-cs1" %}

## URL Navigation

The Context Menu component enables navigation to external web pages or internal routes when menu items are clicked. This functionality is implemented by configuring the [`url`](https://ej2.syncfusion.com/react/documentation/api/context-menu/menuitemmodel#url) property. When a menu item with a URL is selected, the browser navigates to the specified location. In the following sample, navigation URLs for Flipkart, Amazon, and Snapdeal menu items are configured using the `url` property.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/context-menu/navigation-cs1/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/context-menu/navigation-cs1/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/context-menu/navigation-cs1" %}

### Opening links in a new tab

The `MenuItemModel` does not expose a `target` property directly. To open links in a new tab, set the `target` attribute to `_blank` on the rendered anchor element using the [`beforeItemRender`](https://ej2.syncfusion.com/react/documentation/api/context-menu/index-default#beforeitemrender) event. The event handler receives a `MenuEventArgs` argument whose `element` field is the rendered DOM node for the item.

```tsx
import { ContextMenuComponent, MenuEventArgs } from '@syncfusion/ej2-react-navigations';

function onBeforeItemRender(args: MenuEventArgs) {
    // The url item renders an <a> element inside the menu item.
    args.element.getElementsByTagName('a')[0].setAttribute('target', '_blank');
}

function App() {
    const menuItems = [
        { text: 'Flipkart', url: 'https://www.flipkart.com' },
        { text: 'Amazon', url: 'https://www.amazon.com' }
    ];
    return (
        <ContextMenuComponent target="#target" items={menuItems}
            beforeItemRender={onBeforeItemRender} />
    );
}
```

## See also

* [Getting started with the React Context Menu](./getting-started)
* [Accessibility in React Context Menu](./accessibility)
* [How to change menu items dynamically](./how-to/change-menu-items-dynamically)