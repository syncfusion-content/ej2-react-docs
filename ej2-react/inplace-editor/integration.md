---
layout: post
title: Integration in React Inplace editor component | Syncfusion
description: Learn here all about Integration in Syncfusion React Inplace editor component of Syncfusion Essential JS 2 and more.
control: Integration 
platform: ej2-react
documentation: ug
domainurl: ##DomainURL##
---

# Integration in React Inplace editor component

The In-place Editor supports integrating custom HTML5 input components using the [template](https://ej2.syncfusion.com/react/documentation/api/inplace-editor/#template) property. The template can be specified as either a `string` or a CSS `query selector`.

## As a string

Provide the template as an HTML string. The input is rendered as an HTML template.

```ts
template: "<div><input type='text' id='name'></input></div>"

```

## As a selector

Provide the template as a CSS query selector that references an element ID. The selector retrieves the template content from the corresponding DOM element.

```ts
template: "#date"

```

In template mode, the In-place Editor does not automatically handle the `value` property. Before submitting data to the server, manually update the [value](https://ej2.syncfusion.com/react/documentation/api/inplace-editor/#value) property in the [actionBegin](https://ej2.syncfusion.com/react/documentation/api/inplace-editor/#actionbegin) event handler; otherwise, an empty string will be sent. The following sample demonstrates how to update the value before server submission.

`[Class-component]`

{% tabs %}
{% highlight js tabtitle="app.jsx" %}
{% include code-snippet/in-place-editor/html-template-cs1/app/App.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="app.tsx" %}
{% include code-snippet/in-place-editor/html-template-cs1/app/App.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/in-place-editor/html-template-cs1" %}

`[Functional-component]`

{% tabs %}
{% highlight js tabtitle="app.jsx" %}
{% include code-snippet/in-place-editor/html-template-cs2/app/App.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="app.tsx" %}
{% include code-snippet/in-place-editor/html-template-cs2/app/App.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/in-place-editor/html-template-cs2" %}