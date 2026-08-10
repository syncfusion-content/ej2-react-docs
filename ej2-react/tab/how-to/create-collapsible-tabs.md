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

You can achieve collapse and expand functionality in Tab by adding/removing a custom CSS class in the click event handler for each tab.
* Define a CSS class to set the style property display as none. Here 'collapse' class is added to the content element for hiding it using [`created`](https://ej2.syncfusion.com/react/documentation/api/tab/#created) event.
* Bind the [`selected`](https://ej2.syncfusion.com/react/documentation/api/tab/#selected) event for Tab to collapse the initially selected Tab item and bind custom click handler for the Tab headers.
* In the event handler, add and remove 'collapse' class to hide and show the corresponding Tab content.

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
