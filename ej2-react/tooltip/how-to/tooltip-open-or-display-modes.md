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

The open mode property of the Tooltip defines how it is triggered on a target element, such as by hovering, focusing, or clicking. The Tooltip component supports the following open mode types:

* Auto
* Hover
* Click
* Focus
* Custom

## Auto

Tooltip appears when you hover over the target element or when the target element receives the focus.

## Hover

Tooltip appears when you hover over the target element.

## Click

Tooltip appears when you click the target element.

## Focus

Tooltip appears when you focus on a target element (for example, by using the tab key).

## Custom

Tooltip is not triggered by any default action. You need to bind your own events and use either the [`open`](https://ej2.syncfusion.com/react/documentation/api/tooltip/#open) or [`close`](https://ej2.syncfusion.com/react/documentation/api/tooltip/#close) public methods.

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
{% highlight ts tabtitle="index.css" %}
{% include code-snippet/tooltip/open-property-cs2/index.css %}
{% endhighlight %}
{% highlight ts tabtitle="index.html" %}
{% include code-snippet/tooltip/open-property-cs2/index.html %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/tooltip/open-property-cs2" %}
