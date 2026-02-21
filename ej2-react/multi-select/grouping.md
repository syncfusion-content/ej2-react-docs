---
layout: post
title: Grouping in React Multi select component | Syncfusion
description: Learn here all about Grouping in Syncfusion React Multi select component of Syncfusion Essential JS 2 and more.
control: Grouping 
platform: ej2-react
documentation: ug
domainurl: ##DomainURL##
---

# Grouping in React Multi select component

The MultiSelect supports wrapping nested elements into a group based on different categories. The category of each list item can be mapped through the [groupBy](https://ej2.syncfusion.com/react/documentation/api/multi-select/#fields) field in the data table. The group header is displayed both as inline and fixed headers. The fixed group header content is updated dynamically as you scroll through the popup list, displaying the category value for each group.

In the following sample, vegetables are grouped according to their category using the `groupBy` field.

`[Class-component]`

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/multiselect/basic-cs25/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/multiselect/basic-cs25/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/multiselect/basic-cs25" %}

`[Functional-component]`

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/multiselect/basic-cs26/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/multiselect/basic-cs26/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/multiselect/basic-cs26" %}

## Customization

The grouping header can be customized using the `groupTemplate` property. This allows you to design custom headers for both inline and fixed group display modes, providing flexible control over group header appearance and content.

## Grouping with CheckBox

The MultiSelect now supports rendering checkboxes in group headers, allowing you to select all items within a group in a single action. Enable this feature by setting the [`enableGroupCheckBox`](https://ej2.syncfusion.com/react/documentation/api/multi-select/#enablegroupcheckbox) property to **true** and configuring the **mode** property as **CheckBox**.

Inject the `CheckBoxSelection` module in the MultiSelect to use the checkbox.

`[Class-component]`

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/multiselect/basic-cs27/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/multiselect/basic-cs27/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/multiselect/basic-cs27" %}

`[Functional-component]`

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/multiselect/basic-cs28/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/multiselect/basic-cs28/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/multiselect/basic-cs28" %}

## See Also

* [Group Template support to MultiSelect](./templates#group-template).