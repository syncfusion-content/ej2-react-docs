---
layout: post
title: How to prevent closing of modal in React Dialog | Syncfusion
description: Block a React modal Dialog from closing by setting the beforeClose event's cancel argument to true, useful for validation gating.
control: Prevent closing of modal dialog 
platform: ej2-react
documentation: ug
domainurl: ##DomainURL##
---

# How to prevent closing of modal in React Dialog

You can prevent a modal dialog from closing by setting the `args.cancel` property of the [`beforeClose`](https://ej2.syncfusion.com/react/documentation/api/dialog#beforeclose) event to `true`. The [`beforeClose`](https://ej2.syncfusion.com/react/documentation/api/dialog#beforeclose) event receives an `args` object whose `cancel` property can be set to `true` to abort the close action. Related properties such as [`closeOnEscape`](https://ej2.syncfusion.com/react/documentation/api/dialog#closeonescape) and [`showCloseIcon`](https://ej2.syncfusion.com/react/documentation/api/dialog#showcloseicon) should also be set to `false` to prevent the user from closing the dialog via the Esc key or the close icon.

In the following sample, the dialog closes only when both validation rules pass: the username must be at least 4 characters long AND the password must be non-empty. Otherwise, the dialog cannot be closed.

> The sample uses custom CSS classes (`login-form`, `wrap`, `e-float-input`, `e-float-line`, `e-float-text`) for the login form layout. Ensure the supporting CSS (for example, a `login-form` stylesheet) is loaded in your application for the sample to render correctly.

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