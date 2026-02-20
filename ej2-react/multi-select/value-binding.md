---
layout: post
title: Value binding in React Multi select component | Syncfusion
description: Learn here all about Value binding in Syncfusion React Multi select component of Syncfusion Essential JS 2 and more.
control: Value binding 
platform: ej2-react
documentation: ug
domainurl: ##DomainURL##
---

# Value binding in React MultiSelect control

Value binding in the MultiSelect control associates data values with each list item, enabling efficient management and retrieval of selected values. The component supports flexible binding for both primitive data types and complex objects.

## Primitive Data Types

The MultiSelect provides flexible binding for primitive data types such as strings and numbers. Bind local arrays, remote data sources, or customize binding to meet specific requirements. Set the value of primitive data using the [value](../api/multi-select/#value) property.

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

## Object Data Types

Object binding in the MultiSelect allows you to bind a dataset of objects. When [`allowObjectBinding`](../api/multi-select/#allowobjectbinding) is enabled, the component's value becomes an object of the same type as the selected item in the [value](../api/multi-select/#value) property. This seamlessly binds object arrays from local sources, remote endpoints, or custom implementations.

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
