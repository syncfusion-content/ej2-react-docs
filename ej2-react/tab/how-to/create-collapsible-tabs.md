---
layout: post
title: How to create collapsible Tabs in React Tab | Syncfusion
description: Make a Syncfusion React Tab item collapsible by setting the isCollapsible property so users can hide its content area.
control: Create collapsible tabs 
platform: ej2-react
documentation: ug
domainurl: ##DomainURL##
---

# How to create collapsible Tabs in React Tab

You can achieve collapse and expand functionality in React Tab by adding and removing a custom CSS class in the click event handler for each tab.

> Use the [`creating`](https://ej2.syncfusion.com/react/documentation/api/tab#created) event to capture a reference to each React Tab item's content element, then read or toggle the `collapse` class from the click handler.

* Define a CSS class that sets the `display` style property to `none`. In this example, a `collapse` class is added to the content element to hide it using the [`created`](https://ej2.syncfusion.com/react/documentation/api/tab#created) event.
* Bind the [`selected`](https://ej2.syncfusion.com/react/documentation/api/tab#selected) event for React Tab to collapse the initially selected React Tab item, and bind a custom click handler for the React Tab headers.
* In the event handler, add and remove the `collapse` class to hide and show the corresponding React Tab content.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/tab/collapse-cs1/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/tab/collapse-cs1/app/index.tsx %}
{% endhighlight %}
{% highlight css tabtitle="index.css" %}
{% include code-snippet/tab/collapse-cs1/index.css %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/tab/collapse-cs1" %}
