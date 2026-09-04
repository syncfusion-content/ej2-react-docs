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

The [`hide`](https://ej2.syncfusion.com/react/documentation/api/dialog#hide) method closes the React Dialog programmatically. It accepts an optional `animationSettings` object argument that controls the close animation; if omitted, the React Dialog's configured `animationSettings` (a `Zoom` effect in the samples below) is used.

In the following sample, the React Dialog is closed when clicking outside the React Dialog area using the [`hide`](https://ej2.syncfusion.com/react/documentation/api/dialog#hide) method.

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
