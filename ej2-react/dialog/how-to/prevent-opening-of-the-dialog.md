---
layout: post
title: Prevent opening of the dialog in React Dialog component | Syncfusion
description: Learn here all about Prevent opening of the dialog in Syncfusion React Dialog component of Syncfusion Essential JS 2 and more.
control: Prevent opening of the dialog 
platform: ej2-react
documentation: ug
domainurl: ##DomainURL##
---

# Prevent opening of the dialog in React Dialog component

You can prevent opening of the dialog by setting the [beforeOpen](https://ej2.syncfusion.com/react/documentation/api/dialog/#beforeopen) event argument cancel value to true. In the following sample, the success dialog is opened when you enter the username value with minimum 4 characters. Otherwise, it will not be opened.

`[Class-component]`

{% tabs %}
{% highlight js tabtitle="app.jsx" %}
{% include code-snippet/dialog/dlg-check-cs1/app/App.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="app.tsx" %}
{% include code-snippet/dialog/dlg-check-cs1/app/App.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/dialog/dlg-check-cs1" %}

`[Functional-component]`

{% tabs %}
{% highlight js tabtitle="app.jsx" %}
{% include code-snippet/dialog/dlg-check-cs2/app/App.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="app.tsx" %}
{% include code-snippet/dialog/dlg-check-cs2/app/App.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/dialog/dlg-check-cs2" %}