---
layout: post
title: How to close on click outside in React Dialog | Syncfusion
description: Close a React Dialog when the user clicks outside its region by invoking the hide method, while disabling Esc close with closeOnEscape set to false.
control: Close dialog when clicking outside 
platform: ej2-react
documentation: ug
domainurl: ##DomainURL##
---

# How to close when click outside of its region in React Dialog

By default, dialog can be closed by pressing Esc key and clicking the close icon on the right of dialog header. It can also be closed by clicking outside of the dialog using hide method.
Set the [CloseOnEscape](https://ej2.syncfusion.com/react/documentation/api/dialog#closeonescape) property value to false to prevent closing of the dialog when pressing Esc key.

In the following sample, dialog is closed when clicking outside the dialog area using [hide](https://ej2.syncfusion.com/react/documentation/api/dialog#hide) method.

`[Class-component]`

{% tabs %}
{% highlight js tabtitle="app.jsx" %}
{% include code-snippet/dialog/dlg-close-cs1/app/App.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="app.tsx" %}
{% include code-snippet/dialog/dlg-close-cs1/app/App.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/dialog/dlg-close-cs1" %}

`[Functional-component]`

{% tabs %}
{% highlight js tabtitle="app.jsx" %}
{% include code-snippet/dialog/dlg-close-cs2/app/App.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="app.tsx" %}
{% include code-snippet/dialog/dlg-close-cs2/app/App.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/dialog/dlg-close-cs2" %}
