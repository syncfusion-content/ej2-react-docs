---
layout: post
title: Add dynamic template in React Toast component | Syncfusion
description: Learn here all about Add dynamic template in Syncfusion React Toast component of Syncfusion Essential JS 2 and more.
control: Toast
platform: ej2-react
documentation: ug
domainurl: ##DomainURL##
---

# Add dynamic template in React Toast component

The Toast component supports dynamic template updates, enabling you to display different content in multiple toasts based on application state or user actions. Modify Toast properties including templates by passing updated configuration to the [`show`](https://ej2.syncfusion.com/react/documentation/api/toast/#show) method. This pattern is useful for reusing a single Toast instance to display varied content types or messages throughout the application lifecycle.

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