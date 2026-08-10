---
layout: post
title: How to open on condition in React Dialog | Syncfusion
description: Conditionally open or prevent a React Dialog by setting the beforeOpen event's cancel argument to true based on a runtime check.
control: Prevent opening of the dialog 
platform: ej2-react
documentation: ug
domainurl: ##DomainURL##
---

# How to open on condition in React Dialog

You can prevent the dialog from opening by setting the [beforeOpen](https://ej2.syncfusion.com/react/documentation/api/dialog#beforeopen) event argument cancel value to `true`. In the following sample, the success dialog opens only when a username with a minimum of 4 characters is entered. Otherwise, the dialog will not open.

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