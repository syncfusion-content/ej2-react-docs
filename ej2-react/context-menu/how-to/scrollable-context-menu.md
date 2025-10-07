---
layout: post
title: Scrollable Context Menu in react Context menu component | Syncfusion
description: Learn here all about Render Scrollable Context Menu in Syncfusion React Context menu component of Syncfusion Essential JS 2 and more.
control: Context Menu 
platform: ej2-react
documentation: ug
domainurl: ##DomainURL##
---

# Render Scrollable Context Menu in React Context menu component

The Context Menu component provides scrolling functionality through the [enableScrolling](https://ej2.syncfusion.com/react/documentation/api/context-menu/#enablescrolling) property to manage overflow behavior when menu items exceed the available display area. This feature ensures all menu options remain accessible without disrupting page layout, particularly beneficial for menus with extensive item lists.

Enable scrolling by setting the `enableScrolling` property to `true`. Use the [beforeOpen](https://ej2.syncfusion.com/react/documentation/api/context-menu/#beforeopen) event to configure the menu container height and ensure proper scrollable area implementation.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/context-menu/scroller-cs1/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/context-menu/scroller-cs1/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/context-menu/scroller-cs1" %}