---
layout: post
title: Value binding in React Combo box component | Syncfusion
description: Learn here all about Value binding in Syncfusion React Combo box component of Syncfusion Essential JS 2 and more.
control: Value binding 
platform: ej2-react
documentation: ug
domainurl: ##DomainURL##
---

# Value binding in ComboBox Component

Value binding in the ComboBox control allows you to associate data values with each list item. This facilitates managing and retrieving selected values efficiently. The ComboBox component provides flexibility in binding both primitive data types and complex objects.

## Primitive Data Types

The ComboBox provides flexible binding for primitive data types such as strings and numbers. Bind local arrays, remote data sources, or customize binding to meet specific requirements. Set the value of primitive data using the [value](../api/combo-box/#value) property.

Supported primitive data types:

* String
* Number
* Boolean
* Null

The following example demonstrates preselecting values with primitive data types.

`[Class-component]`

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/combobox/primitive/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/combobox/primitive/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/combobox/primitive" %}

## Object Data Types

Object binding in the ComboBox allows you to bind a dataset of objects. When [`allowObjectBinding`](../api/combo-box/#allowobjectbinding) is enabled, the component's value becomes an object of the same type as the selected item in the [value](../api/combo-box/#value) property. This seamlessly binds object arrays from local sources, remote endpoints, or custom implementations.

The following example demonstrates preselecting values with object data types.

`[Class-component]`

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/combobox/object/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/combobox/object/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/combobox/object" %}
