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

Arrange ButtonGroup buttons in vertical or horizontal orientation. By default, ButtonGroup displays buttons horizontally.

## Vertical orientation

Display buttons vertically by applying the `e-vertical` CSS class to the ButtonGroup target element. Vertical orientation is useful for sidebar navigation and stacked button layouts.

The following example demonstrates how to create a ButtonGroup with vertical orientation:

{% tabs %}
{% highlight js tabtitle="app.jsx" %}
{% include code-snippet/button-group/default-cs6/app/app.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="app.tsx" %}
{% include code-snippet/button-group/default-cs6/app/app.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/button-group/default-cs6" %}

> ButtonGroup does not support SplitButton component nesting in a vertical orientation.