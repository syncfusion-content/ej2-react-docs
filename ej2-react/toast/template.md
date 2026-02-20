---
layout: post
title: Template in React Toast component | Syncfusion
description: Learn here all about Template in Syncfusion React Toast component of Syncfusion Essential JS 2 and more.
control: Toast
platform: ej2-react
documentation: ug
domainurl: ##DomainURL##
---

# Custom toast templates

Create custom toast layouts using HTML templates rather than relying on predefined title and content properties. Templates enable rendering of complex content structures, custom styling, and interactive elements within toasts. Specify templates as HTML strings or query selectors referencing existing DOM elements.

## Template string

Provide HTML content directly as a string to the `template` property:

```ts
template: "<div class='custom-toast'><h4>Custom Title</h4><p>Custom content here</p></div>"
```

## Template selector

Reference an existing DOM element by its ID using a query selector:

```ts
template: "#templateId"
```

`[Class-component]`

{% tabs %}
{% highlight js tabtitle="app.jsx" %}
{% include code-snippet/toast/toast-cs39/app/App.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="app.tsx" %}
{% include code-snippet/toast/toast-cs39/app/App.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/toast/toast-cs39" %}

`[Functional-component]`

{% tabs %}
{% highlight js tabtitle="app.jsx" %}
{% include code-snippet/toast/toast-cs40/app/App.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="app.tsx" %}
{% include code-snippet/toast/toast-cs40/app/App.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/toast/toast-cs40" %}

## See Also

* [Add template dynamically](./how-to/add-dynamic-template/)