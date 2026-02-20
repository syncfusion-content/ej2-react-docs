---
layout: post
title: Show different types of toast in React Toast component | Syncfusion
description: Learn here all about Show different types of toast in Syncfusion React Toast component of Syncfusion Essential JS 2 and more.
control: Toast
platform: ej2-react
documentation: ug
domainurl: ##DomainURL##
---

# Show different types of toast in React Toast component

The Syncfusion Toast component provides four predefined style variants for communicating different message types and severity levels. Apply these variants using the [`cssClass`](https://ej2.syncfusion.com/react/documentation/api/toast/#cssclass) property to create semantically meaningful notifications. Selecting appropriate toast types helps users quickly understand the nature and urgency of messages.

| CSS Class | Use Case |
| --- | --- |
| `e-toast-success` | Positive outcomes, confirmations, or completion messages (e.g., "File uploaded successfully") |
| `e-toast-info` | Informational messages or general updates (e.g., "New message received") |
| `e-toast-warning` | Caution messages or warnings requiring attention (e.g., "Unsaved changes") |
| `e-toast-danger` | Error messages or critical issues (e.g., "Connection failed") |

`[Class-component]`

{% tabs %}
{% highlight js tabtitle="app.jsx" %}
{% include code-snippet/toast/toast-cs33/app/App.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="app.tsx" %}
{% include code-snippet/toast/toast-cs33/app/App.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/toast/toast-cs33" %}

`[Functional-component]`

{% tabs %}
{% highlight js tabtitle="app.jsx" %}
{% include code-snippet/toast/toast-cs34/app/App.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="app.tsx" %}
{% include code-snippet/toast/toast-cs34/app/App.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/toast/toast-cs34" %}