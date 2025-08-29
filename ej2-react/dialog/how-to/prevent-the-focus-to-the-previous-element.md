---
layout: post
title: Prevent the focus to previous element in React Dialog | Syncfusion
description: Learn how to prevent focus from returning to the previously focused element in Syncfusion React Dialog component of Syncfusion Essential JS 2 and more.
control: Prevent the focus to previous element 
platform: ej2-react
documentation: ug
domainurl: ##DomainURL##
---

# Prevent focus to previous element in React Dialog component

By default, when the dialog is closed, focus returns to the element that was previously focused before the dialog opened. You can prevent this behavior using the `beforeClose` event and setting the `preventFocus` argument to `true`.

Bind the `beforeClose` event and enable the `preventFocus` argument as shown in the sample below.

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