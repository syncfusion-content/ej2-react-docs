---
layout: post
title: Customize progress bar theme in React Toast | Syncfusion
description: Customize React Toast progress bar color, height, and animation via CSS classes or the beforeOpen event for dynamic styling.
control: Toast
platform: ej2-react
documentation: ug
domainurl: ##DomainURL##
---

# How to customize progress bar theme in React Toast

By default, the React Toast progress bar uses theme-defined styling and dimensions. Customize progress bar appearance including color, height, and animation speed using either custom CSS classes or the [`beforeOpen`](https://ej2.syncfusion.com/react/documentation/api/toast#beforeopen) event. Event-based customization enables dynamic styling based on React Toast content or application state, while CSS approaches provide consistent styling across all React Toast.

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
