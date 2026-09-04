---
layout: post
title: How to close Toast on click or tap in React Toast | Syncfusion
description: Enable immediate React Toast dismissal by setting clickToClose to true in the click event for static, action-based notifications.
control: Toast
platform: ej2-react
documentation: ug
domainurl: ##DomainURL##
---

# How to close Toast on click or tap in React Toast

By default, React Toast automatically dismiss after the configured timeout period. To enable immediate dismissal on user interaction, set the [clickToClose](https://ej2.syncfusion.com/react/documentation/api/toast/toastClickEventArgs#clicktoclose) property to `true` in the `click` event callback. This approach works best with static React Toast (timeOut set to 0) that remain visible until explicitly closed. Click-to-close behavior enhances user control and is particularly useful for action-based notifications.

`[Class-component]`

{% tabs %}
{% highlight js tabtitle="app.jsx" %}
{% include code-snippet/toast/toast-cs21/app/App.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="app.tsx" %}
{% include code-snippet/toast/toast-cs21/app/App.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/toast/toast-cs21" %}

`[Functional-component]`

{% tabs %}
{% highlight js tabtitle="app.jsx" %}
{% include code-snippet/toast/toast-cs22/app/App.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="app.tsx" %}
{% include code-snippet/toast/toast-cs22/app/App.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/toast/toast-cs22" %}