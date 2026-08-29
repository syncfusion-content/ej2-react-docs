---
layout: post
title: How to use Tab key navigation in React Tab | Syncfusion
description: Move focus and select Syncfusion React Tab items with the keyboard by enabling enableKeyNavigation and using the arrow keys.
control: Tab key navigation 
platform: ej2-react
documentation: ug
domainurl: ##DomainURL##
---

# How to use Tab key navigation in React Tab

The [`tabIndex`](https://ej2.syncfusion.com/react/documentation/api/tab/tabItem#tabindex) property of a Tab item is used to enable Tab key navigation for that particular item. When a positive value is assigned to the [`tabIndex`](https://ej2.syncfusion.com/react/documentation/api/tab/tabItem#tabindex) property, the user can switch focus to the next or previous Tab item using the `Tab` or `Shift+Tab` keys. By default, the user can only switch between Tab items using the arrow keys.

Accepted values for `tabIndex` are non-negative integers (`0` and above). Setting `tabIndex="0"` on every item lets users navigate through the Tab items in their declared order using the `Tab` key. To define a custom focus order, assign a positive numeric value to each item — items are visited in ascending `tabIndex` order.

> The `tabIndex` property only affects navigation between Tab items using the `Tab` key. The user can still switch between Tab items using the arrow keys, regardless of the value of `tabIndex`.

To use the [`tabIndex`](https://ej2.syncfusion.com/react/documentation/api/tab/tabItem#tabindex) property, assign a value to the property of each Tab item that you want to enable Tab key navigation for. For example:

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/tab/tab-cs7/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/tab/tab-cs7/app/index.tsx %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/tab/tab-cs7/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/tab/tab-cs7" %}

With this code, the user will be able to switch between the Tab items using the `Tab` and `Shift+Tab` keys, in the order specified by the [`tabIndex`](https://ej2.syncfusion.com/react/documentation/api/tab/tabItem#tabindex) values.
