---
layout: post
title: How to prevent focus to previous element in React Dialog | Syncfusion
description: Stop the React Dialog from returning focus to the previously focused element on close by setting preventFocus to true in the beforeClose event.
control: Prevent the focus to previous element 
platform: ej2-react
documentation: ug
domainurl: ##DomainURL##
---

# How to prevent focus to the previous element in React Dialog

By default, when the dialog is closed, focus returns to the element that was previously focused before the dialog opened. You can prevent this behavior using the [`beforeClose`](https://ej2.syncfusion.com/react/documentation/api/dialog#beforeclose) event and setting the `preventFocus` argument to `true`. The `beforeClose` event receives an [`BeforeCloseEventArgs`](https://ej2.syncfusion.com/react/documentation/api/dialog#beforecloseeventargs) object whose `preventFocus` property can be set to `true` to stop the React Dialog from returning focus to the previously focused element.

Set the `preventFocus` argument in the `beforeClose` event handler as shown in the sample below.

`[Class-component]`

{% tabs %}
{% highlight js tabtitle="app.jsx" %}
{% include code-snippet/dialog/dlg-focus-cs3/app/App.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="app.tsx" %}
{% include code-snippet/dialog/dlg-focus-cs3/app/App.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/dialog/dlg-focus-cs3" %}

`[Functional-component]`

{% tabs %}
{% highlight js tabtitle="app.jsx" %}
{% include code-snippet/dialog/dlg-focus-cs3/app/App.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="app.tsx" %}
{% include code-snippet/dialog/dlg-focus-cs3/app/App.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/dialog/dlg-focus-cs3" %}