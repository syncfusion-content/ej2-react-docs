---
layout: post
title: Restrict the maximum toast to show in React Toast component | Syncfusion
description: Learn here all about Restrict the maximum toast to show in Syncfusion React Toast component of Syncfusion Essential JS 2 and more.
control: Restrict the maximum toast to show 
platform: ej2-react
documentation: ug
domainurl: ##DomainURL##
---

# Restrict the maximum toast to show in React Toast component

You can restrict the maximum toast count by event callback function. You can terminate the toast displaying process by setting boolean as true to cancel, the argument which is obtained from [`beforeOpen`](https://ej2.syncfusion.com/react/documentation/api/toast/#beforeopen) Event.

You can restrict by your own count with custom code blocks. The below sample demonstrates that, how to restrict toast displaying up to 3.

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