---
layout: post
title: Value Binding in React MultiSelect Dropdown | Syncfusion
description: Bind the React MultiSelect Dropdown to primitive values such as strings, numbers, or booleans, or to complex objects via the value property.
control: Value binding 
platform: ej2-react
documentation: ug
domainurl: ##DomainURL##
---

# Value Binding in React MultiSelect Dropdown

Value binding in the MultiSelect control associates data values with each list item, enabling efficient management and retrieval of selected values. The component supports flexible binding for both primitive data types and complex objects.

## Primitive data types

The MultiSelect provides flexible binding for primitive data types such as strings and numbers. Bind local arrays, remote data sources, or customize binding to meet specific requirements. Set the value of primitive data using the [value](https://ej2.syncfusion.com/react/documentation/api/multi-select/index-default#value) property. The `value` property always accepts an array even when binding a single primitive value; the `fields` prop is optional for primitive binding.

Supported primitive data types:

* String
* Number
* Boolean
* Null

The following example demonstrates preselecting values with primitive data types.

`[Class-component]`

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/multiselect/primitive/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/multiselect/primitive/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/multiselect/primitive" %}

## Object data types

Object binding in the MultiSelect allows you to bind a dataset of objects. When [`allowObjectBinding`](https://ej2.syncfusion.com/react/documentation/api/multi-select/index-default#allowobjectbinding) is enabled, the `value` is an array of objects matching the selected items. This seamlessly binds object arrays from local sources, remote endpoints, or custom implementations.

The following example demonstrates preselecting values with object data types.

`[Class-component]`

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/multiselect/object/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/multiselect/object/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/multiselect/object" %}
