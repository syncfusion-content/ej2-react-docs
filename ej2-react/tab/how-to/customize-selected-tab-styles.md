---
layout: post
title: How to customize selected Tab styles in React | Syncfusion
description: Change the visual style of the active Syncfusion React Tab item by overriding the e-tab-active and related CSS classes.
control: Customize selected tab styles 
platform: ej2-react
documentation: ug
domainurl: ##DomainURL##
---

# How to customize selected Tab styles in React

You can customize the Tab style by overriding its header and active tab CSS classes. Define HTML string for adding animation and customizing the Tab header and pass it to [`text`](https://ej2.syncfusion.com/react/documentation/api/tab/header/#text) property. Now you can override the style using custom CSS classes added to the Tab elements.

> You can add the custom class into Tab component using [`cssClass`](https://ej2.syncfusion.com/react/documentation/api/toolbar/item/#cssclass) property which is used to customize the Tab component.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/tab/custom-styles-cs1/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/tab/custom-styles-cs1/app/index.tsx %}
{% endhighlight %}
{% highlight css tabtitle="index.css" %}
{% include code-snippet/tab/custom-styles-cs1/index.css %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/tab/custom-styles-cs1" %}
