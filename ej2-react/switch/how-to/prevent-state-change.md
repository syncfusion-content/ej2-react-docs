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

The [`beforeChange`](https://ej2.syncfusion.com/react/documentation/api/switch/#beforechange) event fires before the Switch's state changes. Use this event to intercept state transitions, validate conditions, or cancel the change action entirely. This approach enables conditional state management, validation workflows, and prevents state transitions that don't meet business logic requirements.


{% tabs %}
{% highlight js tabtitle="app.jsx" %}
{% include code-snippet/switch/before-change-cs1/app/app.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="app.tsx" %}
{% include code-snippet/switch/before-change-cs1/app/app.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/switch/before-change-cs1" %}