---
layout: post
title: How to render multiple Sidebar in React Sidebar | Syncfusion
description: Render two Syncfusion React Sidebars on the same page that share the same main content area, one on each side, using the `position` property.
control: Multiple Sidebar 
platform: ej2-react
documentation: ug
domainurl: ##DomainURL##
---

# How to render multiple Sidebar in React Sidebar

Two Sidebars can be initialized in a web page with same main content. Sidebars can be initialized on right side or left side of the main content using [position](https://ej2.syncfusion.com/react/documentation/api/sidebar/#position) property.

>The HTML element with class name `e-main-content` will be considered as the main content and both the
Sidebars will behave as side content to this main content area.

{% tabs %}
{% highlight js tabtitle="app.jsx" %}
{% include code-snippet/sidebar/multiple-cs1/app/App.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="app.tsx" %}
{% include code-snippet/sidebar/multiple-cs1/app/App.tsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/sidebar/multiple-cs1/app/index.tsx %}
{% endhighlight %}
{% highlight js tabtitle="index.html" %}
{% include code-snippet/sidebar/multiple-cs1/index.html %}
{% endhighlight %}
{% highlight ts tabtitle="style.css" %}
{% include code-snippet/sidebar/multiple-cs1/style.css %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/sidebar/multiple-cs1" %}
