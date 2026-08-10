---
layout: post
title: How to prevent focus on the first element in React Dialog | Syncfusion
description: Stop the React Dialog from auto-focusing the first element on open by setting the preventFocus argument to true in the open event.
control: Prevent focus on first element 
platform: ej2-react
documentation: ug
domainurl: ##DomainURL##
---

# How to prevent focus on the first element in React Dialog

By default, when the dialog opens, focus is automatically set to the first focusable element in the content area. You can prevent this default behavior using the [open](https://ej2.syncfusion.com/react/documentation/api/dialog#open) event and setting the `preventFocus` argument to `true`.

Bind the open event and enable the `preventFocus` argument as shown in the following sample.

`[Class-component]`

{% tabs %}
{% highlight js tabtitle="app.jsx" %}
{% include code-snippet/dialog/dlg-focus-cs1/app/App.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="app.tsx" %}
{% include code-snippet/dialog/dlg-focus-cs1/app/App.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/dialog/dlg-focus-cs1" %}

`[Functional-component]`

{% tabs %}
{% highlight js tabtitle="app.jsx" %}
{% include code-snippet/dialog/dlg-focus-cs2/app/App.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="app.tsx" %}
{% include code-snippet/dialog/dlg-focus-cs2/app/App.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/dialog/dlg-focus-cs2" %}

 ## See Also

* [Prevent the focus to the previous element](./how-to/prevent-the-focus-to-the-previous-element.md)