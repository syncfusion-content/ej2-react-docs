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

The ContextMenu component provides dynamic item management capabilities, allowing you to add or remove menu items programmatically at runtime. This functionality enables responsive menu systems that adapt to changing application states, user permissions, or contextual requirements.

ContextMenu items can be dynamically modified using the [`insertAfter`](https://ej2.syncfusion.com/react/documentation/api/menu/#insertafter), [`insertBefore`](https://ej2.syncfusion.com/react/documentation/api/menu/#insertbefore) and [`removeItems`](https://ej2.syncfusion.com/react/documentation/api/menu/#removeitems) methods.

The `insertAfter` method adds new menu items after a specified target item, while `insertBefore` adds items before the target. The `removeItems` method removes specified items from the menu structure.

In the following example, the **Display Settings** menu items are added before the **Personalize** item, the **Sort By** menu items are added after the **Refresh**, and the **Paste** item is removed from context menu.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/context-menu/getting-started-cs2/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/context-menu/getting-started-cs2/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/context-menu/getting-started-cs2" %}
