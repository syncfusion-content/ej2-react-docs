---
layout: post
title: Animation in React Toast component | Syncfusion
description: Learn here all about Animation in Syncfusion React Toast component of Syncfusion Essential JS 2 and more.
control: Toast
platform: ej2-react
documentation: ug
domainurl: ##DomainURL##
---

# Animation in React Toast component

The Toast component supports customizable animations for display and dismissal, enhancing the visual feedback of notification appearance and removal. Configure enter and exit animations using standard animation library options. By default, toasts use `FadeIn` animation when appearing and `FadeOut` animation when disappearing. Custom animations create smoother user experience and draw attention to important notifications.

> **Accessibility note:** Consider users who prefer reduced motion. Toasts respecting the `prefers-reduced-motion` media query will minimize or disable animations for accessibility compliance.

`[Class-component]`

{% tabs %}
{% highlight js tabtitle="app.jsx" %}
{% include code-snippet/toast/toast-cs5/app/App.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="app.tsx" %}
{% include code-snippet/toast/toast-cs5/app/App.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/toast/toast-cs5" %}

`[Functional-component]`

{% tabs %}
{% highlight js tabtitle="app.jsx" %}
{% include code-snippet/toast/toast-cs6/app/App.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="app.tsx" %}
{% include code-snippet/toast/toast-cs6/app/App.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/toast/toast-cs6" %}
