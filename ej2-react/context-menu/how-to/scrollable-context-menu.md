---
layout: post
title: Scrollable Context Menu in React Context menu component | Syncfusion
description: Learn here all about Render Scrollable Context Menu in Syncfusion React Context menu component of Syncfusion Essential JS 2 and more.
control: Render Scrollable Context Menu 
platform: ej2-react
documentation: ug
domainurl: ##DomainURL##
---

# Render Scrollable Context Menu in React Context menu component

To enable scrolling for the Context Menu, use the [enableScrolling](https://ej2.syncfusion.com/react/documentation/api/context-menu/#enablescrolling) property to manage the overflow behavior of menu items by enabling or disabling scroll functionality. This is especially useful when dealing with a large number of menu items that exceed the viewport height, ensuring the context menu remains accessible without affecting the page layout.

To achieve this functionality, set the `enableScrolling` property to `true`. Additionally, use the [beforeOpen](https://ej2.syncfusion.com/react/documentation/api/context-menu/#beforeopen) event to adjust the height of the menu's parent element, ensuring the scrollable area is applied correctly.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/context-menu/scroller-cs1/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/context-menu/scroller-cs1/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/context-menu/scroller-cs1" %}