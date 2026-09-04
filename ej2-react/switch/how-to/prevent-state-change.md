---
layout: post
title: How to prevent state change in React Toggle Switch Button | Syncfusion
description: Cancel or validate a React Toggle Switch Button state change with the beforeChange event for conditional transitions and business rule enforcement.
control: Prevent State Change 
platform: ej2-react
documentation: ug
domainurl: ##DomainURL##
---

# How to prevent state change in React Toggle Switch Button

The [`beforeChange`](https://ej2.syncfusion.com/react/documentation/api/switch/#beforechange) event fires before the React Toggle Switch Button's state changes. Use this event to intercept state transitions, validate conditions, or cancel the change action entirely. This approach enables conditional state management, validation workflows, and prevents state transitions that don't meet business logic requirements.


{% tabs %}
{% highlight js tabtitle="app.jsx" %}
{% include code-snippet/switch/before-change-cs1/app/app.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="app.tsx" %}
{% include code-snippet/switch/before-change-cs1/app/app.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/switch/before-change-cs1" %}