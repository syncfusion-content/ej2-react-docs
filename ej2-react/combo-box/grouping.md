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

The ComboBox supports grouping nested elements based on different categories. The category of each list item can be mapped through the [groupBy](https://ej2.syncfusion.com/react/documentation/api/combo-box/#fields) field in the data table. The group header is displayed both as inline and fixed headers. The fixed group header content updates dynamically as you scroll through the popup list, displaying the category value for each group.

In the following example, vegetables are grouped according to their category using the `groupBy` field.

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

The grouping header can be customized using the `groupTemplate` property. This allows you to design custom headers for both inline and fixed group display modes. Refer to [Group Template support to ComboBox](https://ej2.syncfusion.com/react/documentation/combo-box/templates#group-template) for detailed implementation.

## See Also

* [Group Template support to ComboBox](https://ej2.syncfusion.com/react/documentation/combo-box/templates#group-template).