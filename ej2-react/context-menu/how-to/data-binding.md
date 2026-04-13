---
layout: post
title: Data binding in React Context menu component | Syncfusion
description: Learn here all about Data binding in Syncfusion React Context menu component of Syncfusion Essential JS 2 and more.
control: Context Menu 
platform: ej2-react
documentation: ug
domainurl: ##DomainURL##
---

# Populate menu items with data source in React Context menu component

The ContextMenu component supports data binding through the [`items`](https://ej2.syncfusion.com/react/documentation/api/context-menu/menuItemModel/#items) property, allowing you to populate menu items dynamically from local data sources. This approach is particularly useful when menu content needs to be generated from arrays, objects, or other structured data formats, providing flexibility for dynamic menu scenarios.

The following example demonstrates how to bind local data source to the ContextMenu:

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/context-menu/data-binding-cs1/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/context-menu/data-binding-cs1/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/context-menu/data-binding-cs1" %}

> While accessing Array we got the exception 'object is possibly undefined' due to 'strictNullChecks' option. So you can disable it in 'tsconfig.json' file.