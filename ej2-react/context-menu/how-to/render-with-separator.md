---
layout: post
title: Render with separator in React Context menu component | Syncfusion
description: Learn here all about Render with separator in Syncfusion React Context menu component of Syncfusion Essential JS 2 and more.
control: Context Menu  
platform: ej2-react
documentation: ug
domainurl: ##DomainURL##
---
# Render with separator in React Context menu component

The Separators are horizontal lines that are used to separate the menu items. You cannot select the separators. You can enable separators to group the menu items using the [`separator`](https://ej2.syncfusion.com/react/documentation/api/context-menu/menuItemModel/#separator) property. Cut, Copy, and Paste menu items are grouped using `separator` property in the following sample.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/context-menu/separators-cs1/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/context-menu/separators-cs1/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/context-menu/separators-cs1" %}

> The [`separator`](https://ej2.syncfusion.com/react/documentation/api/context-menu/menuItemModel/#separator) property `should not` be given along with
the other fields in the [`MenuItem`](https://ej2.syncfusion.com/react/documentation/api/context-menu/menuItemModel/).
