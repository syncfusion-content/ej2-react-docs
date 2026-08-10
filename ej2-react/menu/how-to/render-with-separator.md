---
layout: post
title: How to render Menu with separators in React | Syncfusion
description: Group Syncfusion React Menu items with horizontal or vertical separator lines using the `separator` property on individual menu items.
control: Render with separator 
platform: ej2-react
documentation: ug
domainurl: ##DomainURL##
---

# How to render Menu with separators in React

The separators are both horizontal and vertical lines used to separate the menu items. You cannot select the separators, but you can enable separators to group the menu items using the [`separator`](https://ej2.syncfusion.com/react/documentation/api/menu/menuItemModel/#separator) property. The `Open` and `Save` sub menu items are grouped using the `separator` property in the following sample.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/menu/getting-started-cs10/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/menu/getting-started-cs10/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/menu/getting-started-cs10" %}

> You can also enable the separator to group **horizontal** menu items.