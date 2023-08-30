---
layout: post
title: Enable or disable context menu items in React Context menu component | Syncfusion
description: Learn here all about Enable or disable context menu items in Syncfusion React Context menu component of Syncfusion Essential JS 2 and more.
control: Enable or disable context menu items 
platform: ej2-react
documentation: ug
domainurl: ##DomainURL##
---
# Enable or disable context menu items in React Context menu component

You can enable and disable the menu items using the [`enableItems`](https://ej2.syncfusion.com/react/documentation/api/menu/#enableitems) method in ContextMenu. To enable menuItems, set the `enable` property in argument to `true` and vice-versa.

In the following example, the **Display Settings** in parent items and **Medium icons** in sub menu items are disabled.

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