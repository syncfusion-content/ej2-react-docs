---
layout: post
title: File Menu in React Ribbon component | Syncfusion
description:  Checkout and learn about File Menu in Syncfusion React Ribbon component of Syncfusion Essential JS 2 and more.
control: Ribbon
platform: ej2-react
documentation: ug
domainurl: ##DomainURL##
---

# File Menu in the React Ribbon

The Syncfusion Angular Ribbon component includes a built-in file menu that allows you to add menu items for performing specific actions like creating, opening, or saving documents. The file menu is highly configurable and can be enabled by defining the [fileMenu](https://ej2.syncfusion.com/react/documentation/api/ribbon/ribbonFileMenu/) property.

## Visibility

The visibility of the file menu can be controlled by setting the [visible](https://ej2.syncfusion.com/react/documentation/api/ribbon/fileMenuSettingsModel/#visible) property to `true`. By default, the file menu is hidden.

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

## Adding Menu Items

Menu items are added to the file menu through the [menuItems](https://ej2.syncfusion.com/react/documentation/api/ribbon/fileMenuSettingsModel/#menuitems) property, which accepts an array of [MenuItemModel](https://ej2.syncfusion.com/react/documentation/api/menu/menuItemModel/).

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

By default, a submenu expands when the user hovers over its parent item. This behavior can be changed to expand on a click by setting the [showItemOnClick](https://ej2.syncfusion.com/react/documentation/api/ribbon/fileMenuSettingsModel/#showitemonclick) property to `true`.

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

## Custom Header Text

The header text can be customized by defining new content in the[text](https://ej2.syncfusion.com/react/documentation/api/ribbon/fileMenuSettingsModel/#text) property.

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