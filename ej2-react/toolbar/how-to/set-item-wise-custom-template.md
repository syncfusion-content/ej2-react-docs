---
layout: post
title: How to set a custom template in Toolbar | Syncfusion
description: Replace an individual Syncfusion React Toolbar command with a custom React template by configuring the template property on that item.
control: Set item wise custom template 
platform: ej2-react
documentation: ug
domainurl: ##DomainURL##
---

# How to set a custom template in Toolbar

The React Toolbar supports adding template commands using the  `template` property. Template property can be given as the `HTML element` that is either a `string`  or a `query selector`.

## As string

The HTML element tag can be given as a string for the `template` property; the string supports plain HTML markup, which is injected into the item. Here, the checkbox is rendered as an HTML template.

```html
template: "<div><input type='checkbox' id='check1' checked='' /><label for='check1'>Accept</label></div>"
```

## As selector

The `template` property also allows getting template content through a query `selector` that refers to an element present in the DOM. Here, the checkbox's `id` attribute is specified in the template.

```ts
template: "#Template"

```

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/toolbar/toolbar-templateID-cs1/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/toolbar/toolbar-templateID-cs1/app/index.tsx %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/toolbar/toolbar-templateID-cs1/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/toolbar/toolbar-templateID-cs1" %}