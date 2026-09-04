---
layout: post
title: How to make Context Menu scrollable in React | Syncfusion
description: Make a long React Context Menu scrollable by setting `enableScrolling` to `true` and configuring a fixed height in the `beforeOpen` event.
control: Context Menu 
platform: ej2-react
documentation: ug
domainurl: ##DomainURL##
---

# How to make Context Menu scrollable in React

The React Context Menu component provides scrolling functionality through the [`enableScrolling`](https://ej2.syncfusion.com/react/documentation/api/context-menu/index-default#enablescrolling) property to manage overflow behavior when menu items exceed the available display area. This feature ensures all menu options remain accessible without disrupting page layout.


Enable scrolling by setting the `enableScrolling` property to `true`, and set the height of the popup wrapper (`args.element.parentElement`) in the `beforeOpen` event so the popup uses a fixed scrollable area.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/context-menu/scroller-cs1/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/context-menu/scroller-cs1/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/context-menu/scroller-cs1" %}