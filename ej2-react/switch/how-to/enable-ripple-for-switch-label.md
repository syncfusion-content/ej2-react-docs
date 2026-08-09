---
layout: post
title: How to enable ripple for label in React Switch | Syncfusion
description: Add Material Design ripple effects to the React Switch label by implementing the rippleMouseHandler method for tactile visual feedback.
control: Enable ripple for switch label 
platform: ej2-react
documentation: ug
domainurl: ##DomainURL##
---

# How to enable ripple for label in React Switch

Add Material Design ripple animations to Switch labels by implementing the `rippleMouseHandler` method. Ripple effects provide visual feedback when users interact with labels, enhancing the tactile response and improving perceived interactivity in your user interface.

The following example demonstrates how to add ripple effects to Switch labels.

{% tabs %}
{% highlight js tabtitle="app.jsx" %}
{% include code-snippet/switch/ripple-cs1/app/app.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="app.tsx" %}
{% include code-snippet/switch/ripple-cs1/app/app.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/switch/ripple-cs1" %}

> While accessing HTML Elements we got the exception 'object is possibly null' due to 'strictNullChecks' option. So you can disable it in 'tsconfig.json' file.