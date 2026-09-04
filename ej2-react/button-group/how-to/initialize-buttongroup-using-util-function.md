---
layout: post
title: Init with util in React Button Group | Syncfusion
description: Initialize a React Button Group with the createButtonGroup utility from ej2-splitbuttons for basic, radio, and checkbox type configurations.
control: Initialize buttongroup using util function 
platform: ej2-react
documentation: ug
domainurl: ##DomainURL##
---

# How to init with util in React Button Group

The `createButtonGroup` utility function provides an alternative approach to initialize React Button Group components with minimal setup. This function automatically applies ButtonGroup styling and behavior to elements.

To use the `createButtonGroup` utility function, configure the [`SplitButton dependencies`](./../../split-button/getting-started#dependencies) in `system.config.js`.

The `createButtonGroup` method accepts Button options, element selectors, and CSS classes, then applies the corresponding styling to the elements.

## Create basic React Button Group

To create a basic React Button Group, the target element along with the button elements should be created and `createButtonGroup` is to be imported from `ej2-splitbuttons`.

## For radio type React Button Group

To create a radio type React Button Group, the target element along with the input elements should be created with type `radio`.

## For checkbox type React Button Group

Checkbox type React Button Group creation is similar to radio type React Button Group, instead the type of the input elements should be `checkbox`.

The following example illustrates how to create React Button Group using `createButtonGroup` function for basic, checkbox, and radio type behaviors.

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