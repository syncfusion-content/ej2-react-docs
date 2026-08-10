---
layout: post
title: How to prevent Toast close on mobile swipe in React Toast | Syncfusion
description: Block accidental React Toast dismissal via mobile swipe by checking the close action type in beforeClose and cancelling the event.
control: Toast
platform: ej2-react
documentation: ug
domainurl: ##DomainURL##
---

# How to prevent Toast close on mobile swipe in React Toast

Prevent users from accidentally dismissing toasts via mobile swipe gestures by implementing validation in the [`beforeClose`](https://ej2.syncfusion.com/react/documentation/api/toast#beforeClose) event. Check if the close action type is "swipe" and set the `cancel` property to `true` to prevent dismissal. This pattern is useful for critical notifications or action-required messages where accidental swipe dismissal should be avoided on mobile devices.

The following example demonstrates preventing toast close with mobile swipe:

`[Class-component]`

{% tabs %}
{% highlight js tabtitle="app.jsx" %}
{% include code-snippet/toast/toast-cs29/app/App.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="app.tsx" %}
{% include code-snippet/toast/toast-cs29/app/App.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/toast/toast-cs29" %}

`[Functional-component]`

{% tabs %}
{% highlight js tabtitle="app.jsx" %}
{% include code-snippet/toast/toast-cs30/app/App.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="app.tsx" %}
{% include code-snippet/toast/toast-cs30/app/App.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/toast/toast-cs30" %}