---
layout: post
title: How to set orientation in React Button Group | Syncfusion
description: Arrange React Button Group buttons vertically or horizontally. Use the e-vertical CSS class to switch from the default horizontal layout.
control: Orientation 
platform: ej2-react
documentation: ug
domainurl: ##DomainURL##
---
# How to set orientation in React Button Group

Arrange React Button Group buttons in vertical or horizontal orientation. By default, React Button Group displays buttons horizontally.

## Vertical orientation

Display buttons vertically by applying the `e-vertical` CSS class to the React Button Group target element. Vertical orientation is useful for sidebar navigation and stacked button layouts.

The following example demonstrates how to create a React Button Group with vertical orientation:

{% tabs %}
{% highlight js tabtitle="app.jsx" %}
{% include code-snippet/button-group/default-cs6/app/app.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="app.tsx" %}
{% include code-snippet/button-group/default-cs6/app/app.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/button-group/default-cs6" %}

> React Button Group does not support SplitButton component nesting in a vertical orientation.