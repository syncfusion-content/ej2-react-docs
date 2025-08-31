---
layout: post
title: Layouts in React Ribbon component | Syncfusion
description:  Checkout and learn about Layouts in Syncfusion React Ribbon component of Syncfusion Essential JS 2 and more.
control: Ribbon
platform: ej2-react
documentation: ug
domainurl: ##DomainURL##
---

# Layouts in the React Ribbon Component

The Ribbon layout can be customized using the [activeLayout](https://ej2.syncfusion.com/react/documentation/api/ribbon/#activelayout) property. The Ribbon component supports the following layouts:

## Classic layout

In the Classic layout, the Ribbon component organizes items and groups in a traditional multi-row format. This is the default layout and can be explicitly set by assigning [activeLayout](https://ej2.syncfusion.com/react/documentation/api/ribbon/#activelayout) to the [Classic](https://ej2.syncfusion.com/react/documentation/api/ribbon/ribbonLayout/) property.

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

### Defining item size

The [allowedSizes](https://ej2.syncfusion.com/react/documentation/api/ribbon/ribbonItemModel/#allowedsizes) property sets the permitted sizes for a ribbon item. Ribbon items can be displayed in three sizes: Large (large icon with text), Medium (small icon with text), and Small (small icon only). During resizing, item sizes automatically adjust based on the available tab content width, transitioning from Large to Medium and then to Small.

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

### Defining item orientation

The group's [orientation](https://ej2.syncfusion.com/react/documentation/api/ribbon/ribbonGroup/#orientation) property manages how items are aligned, either in a `Row` or `Column`. By default, the orientation is `Column`, which arranges items vertically.

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

### Defining a group header

The [header](https://ej2.syncfusion.com/react/documentation/api/ribbon/ribbonGroup/#header) property sets the title for each group.

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

### Defining a group icon

The [groupIconCss](https://ej2.syncfusion.com/react/documentation/api/ribbon/ribbonGroup/#groupiconcss) property customizes the icon for the group's overflow button. When the ribbon's width is reduced, groups collapse into this button, which reveals a popup menu with the group's items when clicked.

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

### Enabling the group launcher icon

The [showLauncherIcon](https://ej2.syncfusion.com/react/documentation/api/ribbon/ribbonGroup/#showlaunchericon) property enables or disables the launcher icon for a group. This property is `false` by default.

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

#### Customize the launcher icon

The [launcherIconCss](https://ej2.syncfusion.com/react/documentation/api/ribbon/ribbonModel/#launchericoncss) property customizes the group's launcher icon with a custom CSS class.

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

### Defining the group collapsible state

The [isCollapsible](https://ej2.syncfusion.com/react/documentation/api/ribbon/ribbonGroup/#iscollapsible) property determines whether a group collapses during resizing. By default, this property is `true`. Set it to `false` to prevent the group from collapsing.

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

### Defining priority for group collapsing and expanding

The [priority](https://ej2.syncfusion.com/react/documentation/api/ribbon/ribbonGroup/#priority) property sets the order in which groups collapse or expand on resize. When collapsing, groups with higher priority values are processed first. When expanding, groups with lower priority values are processed first.

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

In the Simplified layout, the Ribbon organizes items and groups into a single row, creating a more compact interface. This layout is enabled by setting the [activeLayout](https://ej2.syncfusion.com/react/documentation/api/ribbon/#activelayout) property to [Simplified](https://ej2.syncfusion.com/react/documentation/api/ribbon/ribbonLayout/).

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

The [enableGroupOverflow](https://ej2.syncfusion.com/react/documentation/api/ribbon/ribbonGroup/#enablegroupoverflow) property creates a dedicated popup menu for a group's overflow items during resizing. If this is `false`, overflow items are moved to a common overflow popup at the right end of the tab content area.

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

The Ribbon can be minimized to hide its contents and display only the tab headers. To toggle this state, double-click a tab header or click the collapse/expand icon. When minimized, clicking a tab header temporarily expands the content.

The [isMinimized](https://ej2.syncfusion.com/react/documentation/api/ribbon/#isminimized) property programmatically sets the Ribbon's minimized state. The `minimized` event is triggered when this state changes.

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

## Showing or hiding the layout switcher

The [hideLayoutSwitcher](https://ej2.syncfusion.com/react/documentation/api/ribbon/#hidelayoutswitcher) property shows or hides the layout switcher button. By default, this property is `false`, and the button is visible.

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
