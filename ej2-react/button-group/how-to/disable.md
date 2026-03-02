---
layout: post
title: Disable in React Button group component | Syncfusion
description: Learn here all about Disable in Syncfusion React Button group component of Syncfusion Essential JS 2 and more.
control: Disable 
platform: ej2-react
documentation: ug
domainurl: ##DomainURL##
---

# Disable in React Button group component

Disable buttons in a ButtonGroup to prevent user interaction. You can disable individual buttons or the entire ButtonGroup.

## Disable a particular button

Add the [`disabled`](https://ej2.syncfusion.com/react/documentation/api/button#disabled) attribute to a specific button element to disable only that button within the ButtonGroup.

## Disable the entire ButtonGroup

Add the `disabled` attribute to all button elements to disable the entire ButtonGroup.

The following example demonstrates how to disable individual buttons and the entire ButtonGroup:

{% tabs %}
{% highlight js tabtitle="app.jsx" %}
{% include code-snippet/button-group/default-cs3/app/app.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="app.tsx" %}
{% include code-snippet/button-group/default-cs3/app/app.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/button-group/default-cs3" %}

> To disable radio/checkbox type ButtonGroup, the `disabled` attribute should be added to the particular input element.