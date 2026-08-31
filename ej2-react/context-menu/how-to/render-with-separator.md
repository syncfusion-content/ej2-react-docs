---
layout: post
title: How to render with separators in React Context Menu | Syncfusion
description: Group React Context Menu items with horizontal separator lines using the `separator` property on individual menu item entries.
control: Context Menu 
platform: ej2-react
documentation: ug
domainurl: ##DomainURL##
---
# How to render with separators in React Context Menu

Separators are non-selectable horizontal lines that visually divide menu items. You can group the menu items using the [`separator`](https://ej2.syncfusion.com/react/documentation/api/context-menu/menuitemmodel#separator) property, which is a `boolean` field that defaults to `false`.

In the following sample, a separator is placed between the **Paste** and **Font** items to group the menu items.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/context-menu/separators-cs1/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/context-menu/separators-cs1/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/context-menu/separators-cs1" %}

> The [`separator`](https://ej2.syncfusion.com/react/documentation/api/context-menu/menuitemmodel#separator) property `should not` be given along with
the other fields in the [`MenuItem`](https://ej2.syncfusion.com/react/documentation/api/context-menu/menuitemmodel).
