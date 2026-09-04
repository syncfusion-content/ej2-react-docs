---
layout: post
title: How to prevent duplicate Toast display in React Toast | Syncfusion
description: Cancel duplicate React Toast notifications in the beforeOpen event by matching existing content and setting cancel to true.
control: Toast
platform: ej2-react
documentation: ug
domainurl: ##DomainURL##
---

# How to prevent duplicate Toast display in React Toast

Prevent duplicate React Toast notifications by detecting matching React Toast and canceling display of redundant messages. Implement duplicate prevention using the [`beforeOpen`](https://ej2.syncfusion.com/react/documentation/api/toast#beforeopen) event callback to check existing React Toast content and set the `cancel` property to `true` to stop display. This pattern improves user experience by eliminating notification fatigue and reducing screen clutter from repeated messages.

The following example demonstrates preventing duplicate toasts based on matching titles:

`[Class-component]`

{% tabs %}
{% highlight js tabtitle="app.jsx" %}
{% include code-snippet/toast/toast-cs27/app/App.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="app.tsx" %}
{% include code-snippet/toast/toast-cs27/app/App.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/toast/toast-cs27" %}

`[Functional-component]`

{% tabs %}
{% highlight js tabtitle="app.jsx" %}
{% include code-snippet/toast/toast-cs28/app/App.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="app.tsx" %}
{% include code-snippet/toast/toast-cs28/app/App.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/toast/toast-cs28" %}