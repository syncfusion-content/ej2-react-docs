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

Scrolling is a technique that allows you to load more items as the user scrolls through a list, providing a seamless and dynamic user experience.

Render the ListView with [`dataSource`](https://ej2.syncfusion.com/react/documentation/api/list-view/#datasource), and bind the [scroll](https://ej2.syncfusion.com/react/documentation/api/list-view/#scroll) event. Within the scroll event, you can access information such as the scroll direction, event name and the distance from the scrollbar to the top and bottom ends through the distanceY parameter.

In the given example, new data is seamlessly added while scrolling. When you scrolls to the bottom and the distance scrolled is less than 100 pixels, it dynamically loads a batch of items into the list as long as there are more items to render.

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
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/listview/scrolling" %}
