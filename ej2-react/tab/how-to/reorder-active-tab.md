---
layout: post
title: How to reorder the active Tab in React Tab | Syncfusion
description: Reorder Syncfusion React Tab items in the header bar by enabling dragAndDrop or calling the reorderTabs method.
control: Reorder active tab 
platform: ej2-react
documentation: ug
domainurl: ##DomainURL##
---

# How to reorder the active Tab in React Tab

When the `overflowMode` is set to `Popup`, items that do not fit within the header are moved into the popup. By default, when a user selects an item from the popup, that item is reordered back into the header as the active React Tab. To prevent this behavior, set the [`reorderActiveTab`](https://ej2.syncfusion.com/react/documentation/api/tab#reorderactivetab) property to `false`. The selected item then remains inside the popup and is highlighted as the active React Tab.

> To reorder React Tab items programmatically or by drag-and-drop, see the [Drag and Drop](../../tab/drag-and-drop) documentation.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/tab/tab-cs6/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/tab/tab-cs6/app/index.tsx %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/tab/tab-cs6/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/tab/tab-cs6" %}
