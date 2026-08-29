---
layout: post
title: Value Binding in React AutoComplete | Syncfusion
description: Bind primitive or complex data values to the Syncfusion React AutoComplete using the value property for single-select, including strings, numbers, and objects.
control: Value binding 
platform: ej2-react
documentation: ug
domainurl: ##DomainURL##
---

# Value Binding in React AutoComplete

Value binding in the AutoComplete component allows you to associate data values with each list item. This makes it easier to manage and retrieve the selected value. The AutoComplete component provides flexibility in binding both primitive data types and complex objects. To read the selected value at runtime, handle the [`change`](https://ej2.syncfusion.com/react/documentation/api/auto-complete#change) event and read the `event.value` property; for object binding, `event.value` returns the full selected object (not just `fields.value`).

## Primitive data types

The AutoComplete supports binding primitive values such as strings and numbers. You can bind local primitive arrays, fetch remote sources, or implement custom binding to suit specific requirements. Bind the value of primitive data to the [`value`](../api/auto-complete#value) property of the AutoComplete.

Primitive data types include:

* String
* Number
* Boolean
* Null

> When the `value` property is set to `null` or an empty string, the AutoComplete clears any preselected item and renders with no value.

The following sample demonstrates setting a preselected value for primitive data types.

`[Class Component]`

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/autocomplete/primitive/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/autocomplete/primitive/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/autocomplete/primitive" %}

## Object data types

In the AutoComplete component, object binding allows you to bind to a dataset of objects. When [`allowObjectBinding`](../api/auto-complete#allowobjectbinding) is enabled (set to `true`), the value of the component will be an object of the same type as the selected item in the [`value`](../api/auto-complete#value) property. When `allowObjectBinding` is enabled, set `allowObjectBinding` and the `fields` mapping before the `value` prop, so the component can resolve the object against the `dataSource`; the full selected object (not just `fields.value`) is returned in `value`. This feature binds arrays of objects, whether sourced locally or retrieved from remote endpoints, using the same approach shown below.

The following sample demonstrates setting a preselected value for object data types.

`[Class Component]`

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/autocomplete/object/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/autocomplete/object/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/autocomplete/object" %}
