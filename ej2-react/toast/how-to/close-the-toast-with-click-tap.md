---
layout: post
title: Close the toast with click tap in React Toast component | Syncfusion
description: Learn here all about Close the toast with click tap in Syncfusion React Toast component of Syncfusion Essential JS 2 and more.
control: Toast
platform: ej2-react
documentation: ug
domainurl: ##DomainURL##
---

# Close the toast with click tap in React Toast component

By default, toasts automatically dismiss after the configured timeout period. To enable immediate dismissal on user interaction, set the [clickToClose](https://ej2.syncfusion.com/react/documentation/api/toast/toastClickEventArgs/#clicktoclose) property to `true` in the `click` event callback. This approach works best with static toasts (timeOut set to 0) that remain visible until explicitly closed. Click-to-close behavior enhances user control and is particularly useful for action-based notifications.

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