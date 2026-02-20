---
layout: post
title: Customize progress bar theme and sizing in React Toast component | Syncfusion
description: Learn here all about Customize progress bar theme and sizing in Syncfusion React Toast component of Syncfusion Essential JS 2 and more.
control: Toast
platform: ej2-react
documentation: ug
domainurl: ##DomainURL##
---

# Customize progress bar theme and sizing in React Toast component

By default, the Toast progress bar uses theme-defined styling and dimensions. Customize progress bar appearance including color, height, and animation speed using either custom CSS classes or the [`beforeOpen`](https://ej2.syncfusion.com/react/documentation/api/toast/#beforeopen) event. Event-based customization enables dynamic styling based on toast content or application state, while CSS approaches provide consistent styling across all toasts.

The following example demonstrates progress bar customization using the `beforeOpen` event:

`[Class-component]`

{% tabs %}
{% highlight js tabtitle="app.jsx" %}
{% include code-snippet/toast/toast-cs23/app/App.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="app.tsx" %}
{% include code-snippet/toast/toast-cs23/app/App.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/toast/toast-cs23" %}

`[Functional-component]`

{% tabs %}
{% highlight js tabtitle="app.jsx" %}
{% include code-snippet/toast/toast-cs24/app/App.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="app.tsx" %}
{% include code-snippet/toast/toast-cs24/app/App.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/toast/toast-cs24" %}
