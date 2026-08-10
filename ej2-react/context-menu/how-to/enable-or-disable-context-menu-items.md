---
layout: post
title: How to enable or disable items in React | Syncfusion
description: Enable or disable React Context Menu items and sub menu items at runtime by calling the `enableItems` method with item ids and a boolean.
control: Context Menu
platform: ej2-react
documentation: ug
domainurl: ##DomainURL##
---

# How to enable or disable items in React

The ContextMenu component supports dynamic state management of menu items through the [`enableItems`](https://ej2.syncfusion.com/react/documentation/api/menu/#enableitems) method. This functionality allows you to control menu item availability based on application state, user permissions, or contextual conditions, enhancing user experience by showing only relevant actions.

The `enableItems` method accepts three parameters: an array of item identifiers (`items`), a boolean value (`enable`) to specify the desired state, and an optional `isUniqueId` parameter to indicate whether the identifiers refer to unique IDs or text content. When `enable` is set to `true`, the specified items become interactive; when `false`, they become disabled and visually dimmed.

In the following example, the **Display Settings** parent item and **Medium icons** sub menu item are disabled to demonstrate different levels of menu item control.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/context-menu/getting-started-cs4/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/context-menu/getting-started-cs4/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/context-menu/getting-started-cs4" %}

> To disable sub menu items, use the [`beforeOpen`](https://ej2.syncfusion.com/react/documentation/api/menu/#beforeopen) event.