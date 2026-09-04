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


You can prevent the React Dialog from opening by setting the `args.cancel` property of the [`beforeOpen`](https://ej2.syncfusion.com/react/documentation/api/dialog#beforeopen) event to `true`. The [`beforeOpen`](https://ej2.syncfusion.com/react/documentation/api/dialog#beforeopen) event receives an `args` object whose `cancel` property can be set to `true` to abort the open action. In the following sample, the success React Dialog opens only when a username with a minimum of 4 characters is entered. Otherwise, the React Dialog will not open.

> The sample uses custom CSS classes (`login-form`, `wrap`, `e-float-input`, `e-float-line`, `e-float-text`, `button-contain`, `e-input-focus`) for the login form layout and focus styling. Ensure the supporting CSS is loaded in your application for the sample to render correctly. The `onInputFocus` and `onInputBlur` handlers add and remove the `e-input-focus` class to provide visual focus styling on the input fields.

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