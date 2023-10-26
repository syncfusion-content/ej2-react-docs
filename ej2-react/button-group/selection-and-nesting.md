---
layout: post
title: Selection and nesting in React Button Group Component | Syncfusion
description: Learn here all about selection and nesting in Syncfusion Essential React Button Group component, it's elements and more details.
control: Selection and nesting 
platform: ej2-react
documentation: ug
domainurl: ##DomainURL##
---

# Selection and nesting in React Button Group Component

## Selection

### Single selection

ButtonGroup supports radio type selection in which only one button can be selected. This can be achieved by adding input element
along with `id` attribute with its corresponding label along with `htmlFor` attribute inside the target element. In this ButtonGroup,
the type of the input element should be `radio` and `e-btn` is added to the `label` element.

The following example illustrates the single selection behavior in ButtonGroup.

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

ButtonGroup supports checkbox type selection in which multiple button can be selected. This can be achieved by adding input element along with `id` attribute with its corresponding label along with `htmlFor` attribute inside the target element. In this ButtonGroup, the type of the input element should be `checkbox` and `e-btn` is added to the `label` element.

The following example illustrates the multiple selection behavior in ButtonGroup.

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

Nesting with other components can be possible in ButtonGroup. The following components can be nested in ButtonGroup,
* DropDownButton
* SplitButton

For nesting support, [`SplitButton dependencies`](./../split-button/getting-started#dependencies) should be configured and it should be added in `system.config.js`.

### DropDownButton

To initialize DropDownButton component, refer [`DropDownButton Getting Started documentation`](./../drop-down-button/getting-started).

In the following example, DropDownButton component is added in `src/App.tsx` by importing it from `ej2-react-splitbuttons`.

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

To initialize SplitButton component, refer [`SplitButton Getting Started documentation`](../split-button/getting-started).

In the following example, SplitButton component is added in `src/App.tsx` by importing it from `ej2-react-splitbuttons`.

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
