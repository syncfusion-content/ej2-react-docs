---
layout: post
title: Prevent closing of modal dialog in React Dialog component | Syncfusion
description: Learn here all about Prevent closing of modal dialog in Syncfusion React Dialog component of Syncfusion Essential JS 2 and more.
control: Prevent closing of modal dialog 
platform: ej2-react
documentation: ug
domainurl: ##DomainURL##
---

# Prevent closing of modal dialog in React Dialog component

You can prevent closing of a modal dialog by setting the [beforeClose](https://ej2.syncfusion.com/react/documentation/api/dialog/#beforeclose) event argument cancel value to `true`. In the following sample, the dialog closes only when a username with a minimum of 4 characters is entered. Otherwise, the dialog cannot be closed.

`[Class-component]`

{% tabs %}
{% highlight js tabtitle="app.jsx" %}
{% include code-snippet/dialog/dlg-validation-cs1/app/App.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="app.tsx" %}
{% include code-snippet/dialog/dlg-validation-cs1/app/App.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/dialog/dlg-validation-cs1" %}

`[Functional-component]`

{% tabs %}
{% highlight js tabtitle="app.jsx" %}
{% include code-snippet/dialog/dlg-validation-cs2/app/App.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="app.tsx" %}
{% include code-snippet/dialog/dlg-validation-cs2/app/App.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/dialog/dlg-validation-cs2" %}