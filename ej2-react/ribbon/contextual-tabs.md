---
layout: post
title: Ribbon Contextual Tabs in React Ribbon component | Syncfusion
description: Check out and learn about Ribbon Contextual Tabs in Syncfusion React Ribbon component of Syncfusion Essential JS 2 and more.
control: Ribbon
platform: ej2-react
documentation: ug
domainurl: ##DomainURL##
---

# Ribbon contextual tabs

The Ribbon Contextual tabs are similar to the Ribbon tabs that are displayed on demand based on their needs, such as an image or a table tabs. It supports adding all built-in and custom ribbon items to perform specific actions.

## Visible tabs

You can utilize the [visible](https://ej2.syncfusion.com/react/documentation/api/ribbon/ribbonContextualTabSettings/#visible) property to control the visibility of each contextual tab.

## Adding contextual tabs

You can utilize the `RibbonContextualTabsDirective` to add contextual tabs in the Ribbon where you can add multiple tabs based on your needs.

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

By using the [isSelected](https://ej2.syncfusion.com/react/documentation/api/ribbon/ribbonContextualTabSettings/#isselected) property you can control the selected state of each contextual tab and indicates which tab is currently active.

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

### Show tab

You can use the [showTab](https://ej2.syncfusion.com/react/documentation/api/ribbon#showtab) method to make the specific Contextual tab visible in the Ribbon.

### Hide tab

You can use the [hideTab](https://ej2.syncfusion.com/react/documentation/api/ribbon#hidetab) method to hide specific Contextual tab in the Ribbon.

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
