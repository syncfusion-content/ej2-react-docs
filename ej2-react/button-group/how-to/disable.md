---
layout: post
title: How to disable in React Button Group | Syncfusion
description: Disable individual buttons or the entire React Button Group by adding the disabled attribute to the relevant button elements.
control: Disable 
platform: ej2-react
documentation: ug
domainurl: ##DomainURL##
---

# How to disable in React Button Group

Disable buttons in a React Button Group to prevent user interaction. You can disable individual buttons or the entire React Button Group.

## Disable a particular button

Add the [`disabled`](https://ej2.syncfusion.com/react/documentation/api/button#disabled) attribute to a specific button element to disable only that button within the React Button Group.

## Disable the entire React Button Group

Add the `disabled` attribute to all button elements to disable the entire React Button Group.

The following example demonstrates how to disable individual buttons and the entire React Button Group:

{% tabs %}
{% highlight js tabtitle="app.jsx" %}
{% include code-snippet/button-group/default-cs3/app/app.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="app.tsx" %}
{% include code-snippet/button-group/default-cs3/app/app.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/button-group/default-cs3" %}

> To disable radio/checkbox type React Button Group, the `disabled` attribute should be added to the particular input element.