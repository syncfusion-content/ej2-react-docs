---
layout: post
title: Prevent State Change in React Switch component | Syncfusion
description: Learn here all about Prevent State Change in Syncfusion React Switch component of Syncfusion Essential JS 2 and more.
control: Prevent State Change 
platform: ej2-react
documentation: ug
domainurl: ##DomainURL##
---

# Prevent State Change in React Switch component

The [beforeChange](https://ej2.syncfusion.com/react/documentation/api/switch/#beforechange) event is triggered before the switch's state is altered. This event provides an opportunity to intercept and potentially cancel the change action before it is applied. It allows for implementing conditional logic or validating the change prior to it being rendered on the UI.


{% tabs %}
{% highlight js tabtitle="app.jsx" %}
{% include code-snippet/switch/before-change-cs1/app/app.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="app.tsx" %}
{% include code-snippet/switch/before-change-cs1/app/app.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/switch/before-change-cs1" %}