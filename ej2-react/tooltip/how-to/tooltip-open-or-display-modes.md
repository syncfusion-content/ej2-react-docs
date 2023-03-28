---
layout: post
title: Tooltip open or display modes in React Tooltip component | Syncfusion
description: Learn here all about Tooltip open or display modes in Syncfusion React Tooltip component of Syncfusion Essential JS 2 and more.
control: Tooltip open or display modes 
platform: ej2-react
documentation: ug
domainurl: ##DomainURL##
---

# Tooltip open or display modes in React Tooltip component

The open mode property of tooltip can be defined on a target that is hovering, focusing, or clicking. Tooltip component have the following types of open mode:

* Auto
* Hover
* Click
* Focus
* Custom

## Auto

Tooltip appears when you hover over the target or when the target element receives the focus.

## Hover

Tooltip appears when you hover over the target.

## Click

Tooltip appears when you click a target element.

## Focus

Tooltip appears when you focus (say through tab key) on a target element.

## Custom

Tooltip is not triggered by any default action. So, bind your own events and use either open or close public methods.

{% tabs %}
{% highlight js tabtitle="app.jsx" %}
{% include code-snippet/tooltip/open-property-cs2/app/App.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="app.tsx" %}
{% include code-snippet/tooltip/open-property-cs2/app/App.tsx %}
{% endhighlight %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/tooltip/open-property-cs2/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/tooltip/open-property-cs2/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/tooltip/open-property-cs2" %}
