---
layout: post
title: Create collapsible tabs in React Tab component | Syncfusion
description: Learn here all about Create collapsible tabs in Syncfusion React Tab component of Syncfusion Essential JS 2 and more.
control: Create collapsible tabs 
platform: ej2-react
documentation: ug
domainurl: ##DomainURL##
---

# Create collapsible tabs in React Tab component

You can achieve collapse and expand functionality in Tab by adding/removing a custom CSS class in the click event handler for each tab.
* Define a CSS class to set the style property display as none. Here 'collapse' class is added to the content element for hiding it using [`created`](https://ej2.syncfusion.com/react/documentation/api/tab#created) event.
* Bind the [`selected`](https://ej2.syncfusion.com/react/documentation/api/tab#selected) event for Tab to collapse the initially selected Tab item and bind custom click handler for the Tab headers.
* In the event handler, add and remove 'collapse' class to hide and show the corresponding Tab content.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/tab/collapse-cs1/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/tab/collapse-cs1/app/index.tsx %}
{% endhighlight %}
{% highlight css tabtitle="index.css" %}
{% include code-snippet/tab/collapse-cs1/app/index.css %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/tab/collapse-cs1" %}
