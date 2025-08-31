---
layout: post
title: Ribbon Keytip in React Ribbon component | Syncfusion
description:  Checkout and learn about Ribbon Keytip in Syncfusion React Ribbon component of Syncfusion Essential JS 2 and more.
control: Ribbon
platform: ej2-react
documentation: ug
domainurl: ##DomainURL##
---

# Ribbon Keytips in React Ribbon Component

The Ribbon component supports KeyTips to provide keyboard navigation for its items. This feature can be enabled by setting the [enableKeyTips](https://ej2.syncfusion.com/react/documentation/api/ribbon/#enablekeytips) property to `true`.

The keytips will be shown when the `Alt + Windows/Command` keys are pressed. This allows users to access any Ribbon element by pressing the corresponding keys.

## Ribbon Item KeyTip

You can assign a KeyTip to any Ribbon item, including tabs, groups, and individual controls, using the [keyTip](https://ej2.syncfusion.com/react/documentation/api/ribbon/ribbonItem/#keytip) property.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/ribbon/keytip/itemKeytip/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/ribbon/keytip/itemKeytip/app/index.tsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.css" %}
{% include code-snippet/ribbon/keytip/itemKeytip/index.css %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/ribbon/keytip/itemKeytip" %}

## File Menu KeyTip

A KeyTip can be assigned to the File Menu button using the [keyTip](https://ej2.syncfusion.com/react/documentation/api/ribbon/fileMenuSettings/#keytip) property within the `fileMenuSettings`.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/ribbon/keytip/filemenu-keytip/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/ribbon/keytip/filemenu-keytip/app/index.tsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.css" %}
{% include code-snippet/ribbon/keytip/filemenu-keytip/index.css %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/ribbon/keytip/filemenu-keytip" %}

## Backstage Menu KeyTip

You can assign KeyTips to Backstage menu items by defining the [keyTip](https://ej2.syncfusion.com/react/documentation/api/ribbon/backStageMenu/#keytip) property for each item in the Backstage configuration.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/ribbon/keytip/backStageMenu-keytip/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/ribbon/keytip/backStageMenu-keytip/app/index.tsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.css" %}
{% include code-snippet/ribbon/keytip/backStageMenu-keytip/index.css %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/ribbon/keytip/backStageMenu-keytip" %}

## Ribbon Layout Switcher KeyTip

A KeyTip can be added to the layout switcher button using the [layoutSwitcherKeyTip](https://ej2.syncfusion.com/react/documentation/api/ribbon/#layoutswitcherkeytip) property.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/ribbon/keytip/layoutSwitcher-keytip/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/ribbon/keytip/layoutSwitcher-keytip/app/index.tsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.css" %}
{% include code-snippet/ribbon/keytip/layoutSwitcher-keytip/index.css %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/ribbon/keytip/layoutSwitcher-keytip" %}

## Ribbon Launcher Icon KeyTip

A KeyTip can be assigned to a group's launcher icon using the [launcherIconKeyTip](https://ej2.syncfusion.com/react/documentation/api/ribbon/ribbonGroup/#keytip) property.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/ribbon/keytip/launcher-keytip/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/ribbon/keytip/launcher-keytip/app/index.tsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.css" %}
{% include code-snippet/ribbon/keytip/launcher-keytip/index.css %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/ribbon/keytip/launcher-keytip" %}

## Methods

### Show keytips

Use the [showKeyTips](https://ej2.syncfusion.com/react/documentation/api/ribbon/ribbonKeyTip/#showkeytips) method to display the KeyTips dynamically. To navigate into a specific tab's or group's KeyTips, pass its KeyTip as an argument. For instance, `showKeyTips('H')` will show the KeyTips for all items under the element assigned the 'H' KeyTip.

### Hide keyTips

Use the [hideKeyTips](https://ej2.syncfusion.com/react/documentation/api/ribbon/ribbonKeyTip/#hidekeytips) method to hide all visible KeyTips on the Ribbon.

## Guidelines for adding keytips

Before adding keytips to the ribbon items consider the following:

* Avoid using the same keytip setting on multiple items.

> For example: When you add the keytip text `H` or `HF` for the same items, it activates the first item occurrence of `H`, while any subsequent instances of `H` or `HF` are ignored.
* Do not use the same first letter for the single and double keytip items.

> For example: When accessing keytip text `F`, `FP` and `FPF` added for the different ribbon items and pressing `F` key, only the `F` key tip associated item will be activated while the `FP`, `FPF` configured ribbon items will be ignored.