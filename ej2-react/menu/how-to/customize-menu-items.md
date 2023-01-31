---
layout: post
title: Customize menu items in React Menu component | Syncfusion
description: Learn here all about Customize menu items in Syncfusion React Menu component of Syncfusion Essential JS 2 and more.
control: Customize menu items 
platform: ej2-react
documentation: ug
domainurl: ##DomainURL##
---

# Customize menu items in React Menu component

## Add or remove menu items

Menu items can be added or removed using the [`insertAfter`](https://ej2.syncfusion.com/react/documentation/api/menu#insertafter), [`insertBefore`](https://ej2.syncfusion.com/react/documentation/api/menu#insertbefore) and [`removeItems`](https://ej2.syncfusion.com/react/documentation/api/menu#removeitems) methods.

In the following example, the **Europe** menu items are added before the **Oceania** item, the **Africa** menu items are added after the **Asia**, and the **South America** and **Mexico** items are removed from menu.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/menu/getting-started-cs8/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/menu/getting-started-cs8/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/menu/getting-started-cs8" %}

> To process items with `ID` values, set `isUnique` to `true`.

## Enable or disable menu items

You can enable and disable the menu items using the [`enableItems`](https://ej2.syncfusion.com/react/documentation/api/menu#enableitems) method in Menu. To enable menuItems, set the `enable` property in argument to `true` and vice-versa.

In the following example, the **Directory** header item, **Conferences**, and **Music** sub menu items are disabled.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/menu/enable-disable-cs1/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/menu/enable-disable-cs1/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/menu/enable-disable-cs1" %}

> To disable sub menu items, use the [`beforeOpen`](https://ej2.syncfusion.com/react/documentation/api/menu#beforeopen) event.

## Hide or show menu items

You can show or hide the menu items using the [`showItems`](https://ej2.syncfusion.com/react/documentation/api/menu#showitems) and [`hideItems`](https://ej2.syncfusion.com/react/documentation/api/menu#hideitems) methods.

In the following example, the **Movies** header item, **Workshops**, and **Music** sub menu items are hidden in menu.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/menu/enable-disable-cs2/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/menu/enable-disable-cs2/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/menu/enable-disable-cs2" %}

> Using the [`beforeOpen`](https://ej2.syncfusion.com/react/documentation/api/menu#beforeopen) event, you can hide the sub menu items as in the above example since the menu supports to hide items only for headers initially.
