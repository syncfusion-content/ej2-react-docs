---
layout: post
title: Value binding in React Drop down list component | Syncfusion
description: Learn here all about Value binding in Syncfusion React Drop down list component of Syncfusion Essential JS 2 and more.
control: Value binding 
platform: ej2-react
documentation: ug
domainurl: ##DomainURL##
---

# Value binding in DropDownList

Value binding in the DropDown List control allows you to associate data values with each list item. This facilitates managing and retrieving selected values efficiently. The DropDown List component provides flexibility in binding both primitive data types and complex objects.

## Primitive Data Types

The DropDown List control provides flexible binding for primitive data types such as strings and numbers. Bind local primitive data arrays, remote data sources, or custom data to the [value](../api/drop-down-list/#value) property of the DropDown List.

Supported primitive data types include:

* String
* Number
* Boolean
* Null

The following example demonstrates preselecting values for primitive data types:

`[Class-component]`

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/dropdownlist/primitive/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/dropdownlist/primitive/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/dropdownlist/primitive" %}


## Object Data Types

Object binding in the DropDown List control enables you to bind datasets of objects. When [`allowObjectBinding`](../api/drop-down-list/#allowobjectbinding) is enabled, the control's value is an object of the same type as the selected item in the [value](../api/drop-down-list/#value) property. Bind local object arrays, remote endpoints, or custom data sources.

The following example demonstrates preselecting values for object data types:

`[Class-component]`

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/dropdownlist/object/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/dropdownlist/object/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/dropdownlist/object" %}