---
layout: post
title: File Menu in React Ribbon component | Syncfusion
description:  Checkout and learn about File Menu in Syncfusion React Ribbon component of Syncfusion Essential JS 2 and more.
control: Ribbon
platform: ej2-react
documentation: ug
domainurl: ##DomainURL##
---

# File Menu in Ribbon component

The Ribbon component provides a built-in file menu that allows you to add menu items for performing specific actions. The file menu can be enabled by setting the [fileMenu](https://ej2.syncfusion.com/react/documentation/api/ribbon/ribbonFileMenu/) property.

## Visibility State

You can show the file menu by setting the [visible](https://ej2.syncfusion.com/react/documentation/api/ribbon/fileMenuSettingsModel/#visible) property to `true`. By default, the file menu is hidden.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/ribbon/Visibility/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/ribbon/Visibility/app/index.tsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.css" %}
{% include code-snippet/ribbon/Visibility/index.css %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/ribbon/Visibility" %}

## Adding menu items

The menu items can be added to the file menu using the [menuItems](https://ej2.syncfusion.com/documentation/api/ribbon/fileMenuSettingsModel/#menuitems) property as an array of [MenuItemModel](https://ej2.syncfusion.com/react/documentation/api/menu/menuItemModel/).

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/ribbon/MenuItems/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/ribbon/MenuItems/app/index.tsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.css" %}
{% include code-snippet/ribbon/MenuItems/index.css %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/ribbon/MenuItems" %}

## Open submenu on click

You can open the submenu on menu item click by setting the [showItemOnClick](https://ej2.syncfusion.com/react/documentation/api/ribbon/fileMenuSettingsModel/#showitemonclick) property to `true`. By default, the submenu will open on mouse hover.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/ribbon/SubmenuOnClick/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/ribbon/SubmenuOnClick/app/index.tsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.css" %}
{% include code-snippet/ribbon/SubmenuOnClick/index.css %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/ribbon/SubmenuOnClick" %}

## Custom header text

You can define the file menu header text content by using the [text](https://ej2.syncfusion.com/react/documentation/api/ribbon/fileMenuSettingsModel/#text) property.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/ribbon/Text/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/ribbon/Text/app/index.tsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.css" %}
{% include code-snippet/ribbon/Text/index.css %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/ribbon/Text" %}