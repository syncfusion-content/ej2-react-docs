---
layout: post
title: How to add a dynamic template in React Toast | Syncfusion
description: Reuse one React Toast instance to show varied content by passing updated ToastModel configuration to the show method.
control: Toast
platform: ej2-react
documentation: ug
domainurl: ##DomainURL##
---

# How to add a dynamic template in React Toast

The Toast component supports dynamic template updates, enabling you to display different content in multiple toasts based on application state or user actions. Modify Toast properties including templates by passing updated configuration to the [`show`](https://ej2.syncfusion.com/react/documentation/api/toast#show) method. This pattern is useful for reusing a single Toast instance to display varied content types or messages throughout the application lifecycle.

`[Class-component]`

{% tabs %}
{% highlight js tabtitle="app.jsx" %}
{% include code-snippet/toast/toast-cs19/app/App.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="app.tsx" %}
{% include code-snippet/toast/toast-cs19/app/App.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/toast/toast-cs19" %}

`[Functional-component]`

{% tabs %}
{% highlight js tabtitle="app.jsx" %}
{% include code-snippet/toast/toast-cs20/app/App.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="app.tsx" %}
{% include code-snippet/toast/toast-cs20/app/App.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/toast/toast-cs20" %}