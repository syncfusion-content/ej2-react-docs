---
layout: post
title: Initialize buttongroup | Syncfusion
description: Learn here all about Initialize buttongroup using util function in Syncfusion React Button group component of Syncfusion Essential JS 2 and more.
control: Initialize buttongroup using util function 
platform: ej2-react
documentation: ug
domainurl: ##DomainURL##
---

# Initialize ButtonGroup using util function

The `createButtonGroup` utility function provides an alternative approach to initialize ButtonGroup components with minimal setup. This function automatically applies ButtonGroup styling and behavior to elements.

To use the `createButtonGroup` utility function, configure the [`SplitButton dependencies`](./../../split-button/getting-started#dependencies) in `system.config.js`.

The `createButtonGroup` method accepts Button options, element selectors, and CSS classes, then applies the corresponding styling to the elements.

## Create basic ButtonGroup

To create a basic ButtonGroup, the target element along with the button elements should be created and `createButtonGroup` is to be imported from `ej2-splitbuttons`.

## For radio type ButtonGroup

To create a radio type ButtonGroup, the target element along with the input elements should be created with type `radio`.

## For checkbox type ButtonGroup

Checkbox type ButtonGroup creation is similar to radio type ButtonGroup, instead the type of the input elements should be `checkbox`.

The following example illustrates how to create ButtonGroup using `createButtonGroup` function for basic, checkbox, and radio type behaviors.

{% tabs %}
{% highlight js tabtitle="app.jsx" %}
{% include code-snippet/button-group/util-cs2/app/app.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="app.tsx" %}
{% include code-snippet/button-group/util-cs2/app/app.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/button-group/util-cs2" %}

> If null value is passed in button options, then that particular button will be skipped from processing in `createButtonGroup` util function.