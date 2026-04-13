---
layout: post
title: Set item wise custom template in React Toolbar component | Syncfusion
description: Learn here all about Set item wise custom template in Syncfusion React Toolbar component of Syncfusion Essential JS 2 and more.
control: Set item wise custom template 
platform: ej2-react
documentation: ug
domainurl: ##DomainURL##
---

# Set item wise custom template in React Toolbar component

The Toolbar supports adding template commands using the  `template` property. Template property can be given as the `HTML element` that is either a `string`  or a `query selector`.

## As string

The HTML element tag can be given as a string for the template property. Here, the checkbox is rendered as a HTML template.

```ts
template: "<div><input type='checkbox' id='check1' checked=''>Accept</input></div>"

```

## As selector

The template property also allows getting template content through query `selector`. Here, checkbox 'ID' attribute is specified in the template.

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