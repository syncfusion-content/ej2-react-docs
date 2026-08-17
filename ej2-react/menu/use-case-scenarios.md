---
layout: post
title: Use Case Scenarios in React Menu | Syncfusion
description: Real-world Syncfusion React Menu integrations scrollable menus, Menu in Toolbar, hamburger Menu in Sidebar, and mobile ListView.
control: Use case scenarios 
platform: ej2-react
documentation: ug
domainurl: ##DomainURL##
---

# Use Case Scenarios in React Menu

## Scrollable menu

The menu component supports horizontal and vertical scrolling to render large menus and submenus in an adaptive way. This can be achieved by enabling the [`enableScrolling`](https://ej2.syncfusion.com/react/documentation/api/menu/index-default#enablescrolling) property and by restricting the corresponding menu/submenu size.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/menu/scroll-cs1/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/menu/scroll-cs1/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/menu/scroll-cs1" %}

## Menu in toolbar

The following example demonstrates how to integrate Menu with Toolbar component.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/menu/toolbar-menu-cs1/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/menu/toolbar-menu-cs1/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/menu/toolbar-menu-cs1" %}

## Hamburger menu

The following example demonstrates the use case of menu with Accordion component integrated in SideBar.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/menu/sidebar-menu-cs1/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/menu/sidebar-menu-cs1/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/menu/sidebar-menu-cs1" %}

## Mobile view

The following example demonstrates the use case of Menu in Mobile mode by using ListView component with hamburger.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/menu/listview-cs1/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/menu/listview-cs1/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/menu/listview-cs1" %}