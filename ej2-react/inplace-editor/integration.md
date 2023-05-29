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

The In-place Editor supports adding HTML5 input components using the [template](https://ej2.syncfusion.com/react/documentation/api/inplace-editor/#template) property. The Template property can be given as either a `string` or a `query selector`.

## As a string

The HTML element tag can be given as a string for the template property. Here, the input is rendered as an HTML template.

```ts
template: "<div><input type='text' id='name'></input></div>"

```

## As a selector

The template property also allows getting template content through query `selector`. Here, the input wrapper element 'ID' attribute is specified in the template.

```ts
template: "#date"

```

Template mode, the `value` property not handled by the In-place Editor component. So, before sending a value to the server, you need to modify at [actionBegin](https://ej2.syncfusion.com/react/documentation/api/inplace-editor/#actionbegin) event, otherwise, an empty string will pass. In the following template sample, before submitting a data to the server, event argument and [value](https://ej2.syncfusion.com/react/documentation/api/inplace-editor/#value) property content updated in the `actionBegin` event handler.

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