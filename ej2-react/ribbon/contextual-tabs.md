---
layout: post
title: Contextual Tabs in React Ribbon | Syncfusion
description: Learn how to add contextual tabs in the React Ribbon that appear contextually for the selected item, with built-in and custom Ribbon item support.
control: Ribbon
platform: ej2-react
documentation: ug
domainurl: ##DomainURL##
---

# Contextual Tabs in React Ribbon

Ribbon Contextual Tabs are special tabs that appear only when a specific object or context is selected, such as a table, image, or chart. They provide users with a set of tools relevant only to the selected item. These tabs can host all built-in and custom Ribbon items to perform specific actions.

## Visible tabs

You can control the initial visibility of a contextual tab by setting the [visible](https://ej2.syncfusion.com/react/documentation/api/ribbon/ribbonContextualTabSettingsModel#visible) property to `true` or `false` within the `e-ribbon-contextual-tab` directive.

## Adding Contextual Tabs

Add contextual tabs to the Ribbon by using the `RibbonContextualTabsDirective`. You can define multiple contextual tabs, each containing one or more standard Ribbon tabs.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/ribbon/add-contextual-tab/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/ribbon/add-contextual-tab/app/index.tsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.css" %}
{% include code-snippet/ribbon/add-contextual-tab/index.css %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/ribbon/add-contextual-tab" %}

## Selected tabs

The [isSelected](https://ej2.syncfusion.com/react/documentation/api/ribbon/ribbonContextualTabSettingsModel#isselected) property determines which contextual tab is active upon initialization. Setting this property to `true` makes the corresponding tab the currently selected one.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/ribbon/select-contextual-tab/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/ribbon/select-contextual-tab/app/index.tsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.css" %}
{% include code-snippet/ribbon/select-contextual-tab/index.css %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/ribbon/select-contextual-tab" %}

## Methods

The Ribbon provides methods to dynamically manage the visibility of contextual tabs after the component has been initialized.

### Show Tab

The [showTab](https://ej2.syncfusion.com/react/documentation/api/ribbon#showtab) method makes a specific contextual tab visible in the Ribbon.

### Hide Tab

The [hideTab](https://ej2.syncfusion.com/react/documentation/api/ribbon#hidetab) method hides a specific contextual tab in the Ribbon.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/ribbon/contextual-tab-method/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/ribbon/contextual-tab-method/app/index.tsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.css" %}
{% include code-snippet/ribbon/contextual-tab-method/index.css %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/ribbon/contextual-tab-method" %}