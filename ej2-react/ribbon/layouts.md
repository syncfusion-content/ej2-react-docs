---
layout: post
title: Layouts in React Ribbon component | Syncfusion
description:  Checkout and learn about Layouts in Syncfusion React Ribbon component of Syncfusion Essential JS 2 and more.
control: Ribbon
platform: ej2-react
documentation: ug
domainurl: ##DomainURL##
---

# Layouts in React Ribbon component

The Ribbon allows to customize the layout by using the [activeLayout](https://ej2.syncfusion.com/react/documentation/api/ribbon/#activelayout) property. The Ribbon component supports the following layouts:

## Classic layout

In classic layout, the Ribbon component organizes the items and groups in a traditional form by setting the [activeLayout](https://ej2.syncfusion.com/react/documentation/api/ribbon/#activelayout) property to [Classic](https://ej2.syncfusion.com/react/documentation/api/ribbon/ribbonLayout/). By default, the Ribbon component renders in the `Classic` layout.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/ribbon/Classic/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/ribbon/Classic/app/index.tsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.css" %}
{% include code-snippet/ribbon/Classic/index.css %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/ribbon/Classic" %}

### Defining items size

You can use the [allowedSizes](https://ej2.syncfusion.com/react/documentation/api/ribbon/ribbonItemModel/#allowedsizes) property to set the allowed size for an item. The Ribbon items can be appeared in three different sizes: Large(large icon with text), Medium(small icon with text) and Small(small icon only). On resizing, the items size can be changed based on the available width of the tab content from the order of Large-> Medium-> Small and vice versa.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/ribbon/ItemSize/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/ribbon/ItemSize/app/index.tsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.css" %}
{% include code-snippet/ribbon/ItemSize/index.css %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/ribbon/ItemSize" %}

### Defining items orientation

The Ribbon group [orientation](https://ej2.syncfusion.com/react/documentation/api/ribbon/ribbonGroup/#orientation) property allows to manage how the items are aligned either in a `Row` or `Column`. By default, the orientation is set to `Column`, in which the items are arranged vertically.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/ribbon/Orientation/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/ribbon/Orientation/app/index.tsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.css" %}
{% include code-snippet/ribbon/Orientation/index.css %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/ribbon/Orientation" %}

>  When the orientation is set to `Row` a group may have a maximum of three collections each of which may contain any number of items. When the orientation is set to `Column` a group may have any number of collections, each of which may contain one large-sized item or three medium/small-sized items. If two large-sized items are specified, it automatically converts into two medium/small-sized items.

### Defining group header

You can use the [header](https://ej2.syncfusion.com/react/documentation/api/ribbon/ribbonGroup/#header) property to set the name for each group header.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/ribbon/HeaderText/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/ribbon/HeaderText/app/index.tsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.css" %}
{% include code-snippet/ribbon/HeaderText/index.css %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/ribbon/HeaderText" %}

### Defining group icon

You can use the [groupIconCss](https://ej2.syncfusion.com/react/documentation/api/ribbon/ribbonGroup/#groupiconcss) property to customize the icons in the group overflow button. When the ribbon's size is adjusted, the group popup will appear.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/ribbon/GroupIconCss/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/ribbon/GroupIconCss/app/index.tsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.css" %}
{% include code-snippet/ribbon/GroupIconCss/index.css %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/ribbon/GroupIconCss" %}

### Enabling group launcher icon

You can use the [showLauncherIcon](https://ej2.syncfusion.com/react/documentation/api/ribbon/ribbonGroup/#showlaunchericon) property to enable or disable the launcher icon for each group. By default, the property is set to `false`.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/ribbon/LauncherIcon/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/ribbon/LauncherIcon/app/index.tsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.css" %}
{% include code-snippet/ribbon/LauncherIcon/index.css %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/ribbon/LauncherIcon" %}

#### Customize launcher icon

You can use the [launcherIconCss](https://ej2.syncfusion.com/react/documentation/api/ribbon/ribbonModel/#launchericoncss) property to customize the launcher icon by applying the custom styles.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/ribbon/CustomLauncherIcon/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/ribbon/CustomLauncherIcon/app/index.tsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.css" %}
{% include code-snippet/ribbon/CustomLauncherIcon/index.css %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/ribbon/CustomLauncherIcon" %}

### Defining group collapsible state

You can use the [isCollapsible](https://ej2.syncfusion.com/react/documentation/api/ribbon/ribbonGroup/#iscollapsible) property to determine whether the group is collapsed or not during resize. By default, the property is set to `true`. To prevent the group from being collapsed, set the property to `false`.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/ribbon/CollapsibleState/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/ribbon/CollapsibleState/app/index.tsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.css" %}
{% include code-snippet/ribbon/CollapsibleState/index.css %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/ribbon/CollapsibleState" %}

#### Defining priority order for group collapse or expand

You can use the [priority](https://ej2.syncfusion.com/react/documentation/api/ribbon/ribbonGroup/#priority) property to set the priority order for each group which should be collapsed or expanded on resizing. When collapsing, higher priority values are fetched first. When expanding, lower priority values are fetched first.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/ribbon/Priority/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/ribbon/Priority/app/index.tsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.css" %}
{% include code-snippet/ribbon/Priority/index.css %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/ribbon/Priority" %}

## Simplified layout

In simplified layout, the Ribbon component organizes the items and groups into a single row by setting the [activeLayout](https://ej2.syncfusion.com/react/documentation/api/ribbon/#activelayout) property to [Simplified](https://ej2.syncfusion.com/react/documentation/api/ribbon/ribbonLayout/).

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/ribbon/Simplified/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/ribbon/Simplified/app/index.tsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.css" %}
{% include code-snippet/ribbon/Simplified/index.css %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/ribbon/Simplified" %}

### Enabling group overflow popup

You can use the [enableGroupOverflow](https://ej2.syncfusion.com/react/documentation/api/ribbon/ribbonGroup/#enablegroupoverflow) property to add a separate popup for the overflow items in the group while resizing. The overflow items will appear in the standard common popup, located at the right end of the tab content if it is set to `false`.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/ribbon/GroupOverflow/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/ribbon/GroupOverflow/app/index.tsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.css" %}
{% include code-snippet/ribbon/GroupOverflow/index.css %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/ribbon/GroupOverflow" %}

## Minimized State

You can hide the Ribbon contents and display only the tab headers by double-clicking on the tab header. In minimized state, the Ribbon component expands to its normal state when click on the tab header.

You can use the [isMinimized](https://ej2.syncfusion.com/react/documentation/api/ribbon/#isminimized) property to change the Ribbon component to minimized state. By default, the value is `false`.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/ribbon/Minimized/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/ribbon/Minimized/app/index.tsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.css" %}
{% include code-snippet/ribbon/Minimized/index.css %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/ribbon/Minimized" %}

## Show or hide the layout switcher

You can use the [hideLayoutSwitcher](https://ej2.syncfusion.com/react/documentation/api/ribbon/#hidelayoutswitcher) property to show/hide the Ribbon layout switcher button. By default, the value is `false`.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/ribbon/HideLayoutSwitcher/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/ribbon/HideLayoutSwitcher/app/index.tsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.css" %}
{% include code-snippet/ribbon/HideLayoutSwitcher/index.css %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/ribbon/HideLayoutSwitcher" %}
