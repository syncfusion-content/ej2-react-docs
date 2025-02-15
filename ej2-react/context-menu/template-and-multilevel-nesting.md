---
layout: post
title: Template and nesting in React Context menu component | Syncfusion
description: Learn here all about Template and multilevel nesting in Syncfusion React Context menu component of Syncfusion Essential JS 2 and more.
control: Template and multilevel nesting 
platform: ej2-react
documentation: ug
domainurl: ##DomainURL##
---

# Template and multilevel nesting in React Context menu component

## Item template

The [itemTemplate](https://ej2.syncfusion.com/react/documentation/api/context-menu/#itemtemplate) property in the ContextMenu component allows you to define custom templates for displaying menu items within the context menu. This feature is particularly useful when you want to customize the appearance or layout of the menu items beyond the default text-based list.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/context-menu/template-cs2/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/context-menu/template-cs2/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/context-menu/template-cs2" %}

## Customize the specific menu items

The ContextMenu items can be customized using the [`beforeItemRender`](https://ej2.syncfusion.com/react/documentation/api/context-menu/#beforeitemrender) property. The item render event triggers while rendering each menu item. The event argument will be used to identify the menu item and customized it based on the requirement. In the following sample, the menu item is rendered with keycode for specified action in ContextMenu using the template. Here, the keycode is specified for Save as, View page source, and Inspect in the right side corner of the menu items by adding span element in the [`beforeItemRender`](https://ej2.syncfusion.com/react/documentation/api/context-menu/#beforeitemrender) event.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/context-menu/template-cs1/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/context-menu/template-cs1/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/context-menu/template-cs1" %}

> To create span element, `createElement` util function used from `ej2-base`.

## Multilevel nesting

Multiple level nesting supports in ContextMenu. It can be achieved by mapping the [`items`](https://ej2.syncfusion.com/react/documentation/api/context-menu/menuItemModel/#items) property inside the parent [`menuItems`](https://ej2.syncfusion.com/react/documentation/api/context-menu/#items). In the below sample, three level nesting of ContextMenu is provided.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/context-menu/getting-started-cs6/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/context-menu/getting-started-cs6/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/context-menu/getting-started-cs6" %}

> To open sub menu items only on click, [`showItemOnClick`](https://ej2.syncfusion.com/react/documentation/api/context-menu/#showitemonclick) property should be set as `true`.

## See Also

* [Populate menu items with data source](./how-to/data-binding)
