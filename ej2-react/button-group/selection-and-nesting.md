---
layout: post
title: Selection and nesting in React Button group component | Syncfusion
description: Learn here all about Selection and nesting in Syncfusion React Button group component of Syncfusion Essential JS 2 and more.
control: Selection and nesting 
platform: ej2-react
documentation: ug
domainurl: ##DomainURL##
---

# Selection and nesting in React Button group component

## Selection

### Single selection

ButtonGroup supports radio type selection, where only one button can be selected at a time. Create a radio type ButtonGroup by adding input elements with the `id` attribute and corresponding labels with the `htmlFor` attribute. Set the input element's `type` to `radio` and add the `e-btn` class to the label element.

The following example demonstrates single selection behavior in a ButtonGroup:

{% tabs %}
{% highlight js tabtitle="app.jsx" %}
{% include code-snippet/button-group/default-cs8/app/app.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="app.tsx" %}
{% include code-snippet/button-group/default-cs8/app/app.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/button-group/default-cs8" %}

### Multiple selection

ButtonGroup supports checkbox type selection, allowing multiple buttons to be selected simultaneously. Create a checkbox type ButtonGroup by adding input elements with the `id` attribute and corresponding labels with the `htmlFor` attribute. Set the input element's `type` to `checkbox` and add the `e-btn` class to the label element.

The following example demonstrates multiple selection behavior in a ButtonGroup:

{% tabs %}
{% highlight js tabtitle="app.jsx" %}
{% include code-snippet/button-group/default-cs9/app/app.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="app.tsx" %}
{% include code-snippet/button-group/default-cs9/app/app.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/button-group/default-cs9" %}

## Nesting

ButtonGroup supports nesting with other Syncfusion components. The following components can be nested within a ButtonGroup:
* DropDownButton
* SplitButton

To enable nesting support, configure the [`SplitButton dependencies`](./../split-button/getting-started#dependencies) in `system.config.js`.

### DropDownButton

Initialize the DropDownButton component by referring to the [`DropDownButton Getting Started documentation`](./../drop-down-button/getting-started).

The following example adds the DropDownButton component to the ButtonGroup by importing it from `ej2-react-splitbuttons`:

{% tabs %}
{% highlight js tabtitle="app.jsx" %}
{% include code-snippet/button-group/nesting-cs1/app/app.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="app.tsx" %}
{% include code-snippet/button-group/nesting-cs1/app/app.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/button-group/nesting-cs1" %}

### SplitButton

Initialize the SplitButton component by referring to the [`SplitButton Getting Started documentation`](../split-button/getting-started).

The following example adds the SplitButton component to the ButtonGroup by importing it from `ej2-react-splitbuttons`:

{% tabs %}
{% highlight js tabtitle="app.jsx" %}
{% include code-snippet/button-group/nesting-cs2/app/app.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="app.tsx" %}
{% include code-snippet/button-group/nesting-cs2/app/app.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/button-group/nesting-cs2" %}

## See Also

* [Show ButtonGroup selected state on initial render](./how-to/show-buttongroup-selected-state-on-initial-render)
