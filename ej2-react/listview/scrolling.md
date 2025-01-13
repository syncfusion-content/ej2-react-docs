---
layout: post
title: Scrolling in React Listview component | Syncfusion
description: Learn here all about Scrolling in Syncfusion React Listview component of Syncfusion Essential JS 2 and more.
control: Scrolling 
platform: ej2-react
documentation: ug
domainurl: ##DomainURL##
---

# Scrolling in React Listview component

Scrolling is a technique that allows you to load more items as the user scrolls through a list, providing a seamless and dynamic user experience. This document explains how to implement scrolling in the React ListView component.

To implement scrolling, render the ListView with a [`dataSource`](https://ej2.syncfusion.com/react/documentation/api/list-view/#datasource) and bind the [scroll](https://ej2.syncfusion.com/react/documentation/api/list-view/#scroll) event. Within the scroll event handler, you can access information such as the scroll direction, event name, and the distance from the scrollbar to the top and bottom ends through the distanceY parameter.

In the following example, new data is dynamically added while scrolling. When the user scrolls to the bottom and the remaining scrollable distance is less than 100 pixels, it loads a new batch of items into the list. This process continues as long as there are more items to render, providing a smooth, infinite scrolling experience.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/listview/scrolling/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/listview/scrolling/app/index.tsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.css" %}
{% include code-snippet/listview/scrolling/index.css %}
{% endhighlight %}
{% highlight ts tabtitle="index.html" %}
{% include code-snippet/listview/scrolling/index.html %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/listview/scrolling" %}
