---
layout: post
title: Restrict the maximum toast to show in React Toast component | Syncfusion
description: Learn here all about Restrict the maximum toast to show in Syncfusion React Toast component of Syncfusion Essential JS 2 and more.
control: Toast
platform: ej2-react
documentation: ug
domainurl: ##DomainURL##
---

# Restrict the maximum toast to show in React Toast component

Limit the number of toasts displayed simultaneously to prevent notification stack overflow and maintain a clean user interface. Track visible toast count in the [`beforeOpen`](https://ej2.syncfusion.com/react/documentation/api/toast/#beforeopen) event and set the `cancel` property to `true` when the maximum count is reached. This pattern is essential for applications that generate many notifications, ensuring UI remains usable and notifications remain scannable.

The following example demonstrates restricting maximum toast display to 3 notifications:

`[Class-component]`

{% tabs %}
{% highlight js tabtitle="app.jsx" %}
{% include code-snippet/toast/toast-cs31/app/App.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="app.tsx" %}
{% include code-snippet/toast/toast-cs31/app/App.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/toast/toast-cs31" %}

`[Functional-component]`

{% tabs %}
{% highlight js tabtitle="app.jsx" %}
{% include code-snippet/toast/toast-cs32/app/App.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="app.tsx" %}
{% include code-snippet/toast/toast-cs32/app/App.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/toast/toast-cs32" %}