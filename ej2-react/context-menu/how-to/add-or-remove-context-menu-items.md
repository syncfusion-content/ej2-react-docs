---
layout: post
title: Add or remove context menu items in React Context menu component | Syncfusion
description: Learn here all about Add or remove context menu items in Syncfusion React Context menu component of Syncfusion Essential JS 2 and more.
control: Add or remove context menu items 
platform: ej2-react
documentation: ug
domainurl: ##DomainURL##
---
# Add or remove context menu items in React Context menu component

ContextMenu items can be added or removed using the [`insertAfter`](https://ej2.syncfusion.com/react/documentation/api/menu#insertafter), [`insertBefore`](https://ej2.syncfusion.com/react/documentation/api/menu#insertbefore) and [`removeItems`](https://ej2.syncfusion.com/react/documentation/api/menu#removeitems) methods.

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
