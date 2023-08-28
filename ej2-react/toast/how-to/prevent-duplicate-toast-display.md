---
layout: post
title: Prevent duplicate toast display in React Toast component | Syncfusion
description: Learn here all about Prevent duplicate toast display in Syncfusion React Toast component of Syncfusion Essential JS 2 and more.
control: Prevent duplicate toast display 
platform: ej2-react
documentation: ug
domainurl: ##DomainURL##
---

# Prevent duplicate toast display in React Toast component

You can prevent identical same Toast displaying in a screen by event function. You can terminate the Toast displaying process by setting cancel event property in [`beforeOpen`](https://ej2.syncfusion.com/react/documentation/api/toast/#beforeopen) Event.

Here below sample demonstrates preventing duplicate title Toast element displaying, with custom code blocks.

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