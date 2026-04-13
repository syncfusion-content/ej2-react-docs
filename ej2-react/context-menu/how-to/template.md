---
layout: post
title: Template in React Context menu component | Syncfusion
description: Learn here all about Template in Syncfusion React Context menu component of Syncfusion Essential JS 2 and more.
control: Context Menu 
platform: ej2-react
documentation: ug
domainurl: ##DomainURL##
---

# Template customization in React Context menu component

The ContextMenu component supports extensive template customization, allowing you to embed complex UI elements and interactive components within menu items. This flexibility enables creating rich, context-aware menus that go beyond simple text-based navigation.

## Show table in sub ContextMenu

Menu items of the ContextMenu can be customized according to the requirement. The section explains about how to customize table template in sub menu item.

This can be achieved by appending table layout while `li` rendering by using `beforeItemRender` event.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/context-menu/table-cs1/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/context-menu/table-cs1/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/context-menu/table-cs1" %}

## UI components in ContextMenu

UI components can also be placed inside the each `li` element of ContextMenu.

In the following example, CheckBox component is placed inside each `li` element and this can be achieved by creating CheckBox component in `beforeItemRender` event and appending it into the `li` element.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/context-menu/ui-element-cs1/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/context-menu/ui-element-cs1/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/context-menu/ui-element-cs1" %}
