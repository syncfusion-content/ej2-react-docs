---
layout: post
title: Grouping in React Combo box component | Syncfusion
description: Learn here all about Grouping in Syncfusion React Combo box component of Syncfusion Essential JS 2 and more.
control: Grouping 
platform: ej2-react
documentation: ug
domainurl: ##DomainURL##
---

# Grouping in React Combo box component

The ComboBox supports wrapping nested elements into a group based on different categories. The categoryof each list item can be mapped through the [groupBy](https://ej2.syncfusion.com/react/documentation/api/combo-box/#fields) &nbsp;field in the data table. The group header is displayed both as inline and fixed headers. The fixed group header content
is updated dynamically on scrolling the popup list with its category value.

In the following sample, the vegetables are grouped according on its category using `groupBy` field.

`[Class-component]`

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/combobox/basic-cs27/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/combobox/basic-cs27/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/combobox/basic-cs27" %}

`[Functional-component]`

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/combobox/basic-cs28/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/combobox/basic-cs28/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/combobox/basic-cs28" %}

## Customization

The grouping header is also provided with customization option. This allows custom designing using the `groupTemplate` property for both inline and fixed headers as referred here: [Group Template support to ComboBox](https://ej2.syncfusion.com/react/documentation/combo-box/templates#group-template).

## See Also

* [Group Template support to ComboBox](https://ej2.syncfusion.com/react/documentation/combo-box/templates#group-template).