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

The ComboBox control provides flexible binding capabilities for primitive data types like strings and numbers. You can effortlessly bind local primitive data arrays, fetch and bind data from remote sources, and even custom data binding to suit specific requirements. Bind the value of primitive data to the [value](../api/combo-box/#value) property of the ComboBox.

Primitive data types include:

* String
* Number
* Boolean
* Null

The following sample shows the example for preselect values for primitive data type

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

In the ComboBox control, object binding allows you to bind to a dataset of objects. When [`allowObjectBinding`](../api/combo-box/#allowobjectbinding) is enabled, the value of the control will be an object of the same type as the selected item in the [value](../api/combo-box/#value) property. This feature seamlessly binds arrays of objects, whether sourced locally, retrieved from remote endpoints, or customized to suit specific application needs.

The following sample shows the example for preselect values for object data type

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
