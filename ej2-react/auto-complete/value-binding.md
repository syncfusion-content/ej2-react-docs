---
layout: post
title: Value binding in React AutoComplete component | Syncfusion
description: Learn here all about Value binding in Syncfusion React AutoComplete component of Syncfusion Essential JS 2 and more.
control: Value binding 
platform: ej2-react
documentation: ug
domainurl: ##DomainURL##
---

# Value binding in React AutoComplete Component

Value binding in the AutoComplete control allows you to associate data values with each list item. This facilitates managing and retrieving selected values efficiently. The AutoComplete component provides flexibility in binding both primitive data types and complex objects.

## Primitive Data Types

The AutoComplete control provides flexible binding capabilities for primitive data types like strings and numbers. You can effortlessly bind local primitive data arrays, fetch and bind data from remote sources, and even custom data binding to suit specific requirements. Bind the value of primitive data to the [value](../api/auto-complete#value) property of the AutoComplete.

Primitive data types include:

* String
* Number
* Boolean
* Null

The following sample demonstrates preselect values for primitive data types.

`[Class-component]`

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/autocomplete/primitive/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/autocomplete/primitive/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/autocomplete/primitive" %}

## Object Data Types

In the AutoComplete control, object binding allows you to bind to a dataset of objects. When [`allowObjectBinding`](../api/auto-complete#allowobjectbinding) is enabled, the value of the control will be an object of the same type as the selected item in the [value](../api/auto-complete#value) property. This feature seamlessly binds arrays of objects, whether sourced locally, retrieved from remote endpoints, or customized to suit specific application needs.

The following sample demonstrates preselect values for object data types.

`[Class-component]`

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/autocomplete/object/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/autocomplete/object/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/autocomplete/object" %}
