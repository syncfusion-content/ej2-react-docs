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

## Particular button

To disable a particular button in a ButtonGroup, [`disabled`](https://ej2.syncfusion.com/react/documentation/api/button#disabled) attribute should be added to corresponding button element.

## Whole ButtonGroup

To disable whole ButtonGroup, `disabled` attribute should be added to all the button elements.

The following example illustrates how to disable the particular and the whole ButtonGroup.

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