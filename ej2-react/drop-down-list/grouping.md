---
layout: post
title: Grouping in React Drop down list component | Syncfusion
description: Learn here all about Grouping in Syncfusion React Drop down list component of Syncfusion Essential JS 2 and more.
control: Grouping 
platform: ej2-react
documentation: ug
domainurl: ##DomainURL##
---

# Grouping in React Drop down list component

The DropDownList supports grouping nested elements based on different categories. The category of each list item can be mapped through the [groupBy](https://ej2.syncfusion.com/react/documentation/api/drop-down-list/#fields) field in the data table. The group header is displayed both as inline and fixed headers. The fixed group header content updates dynamically as you scroll through the popup list, displaying the category value for each group.

In the following example, vegetables are grouped according to their category using the `groupBy` field.

`[Class-component]`

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/dropdownlist/basic-cs29/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/dropdownlist/basic-cs29/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/dropdownlist/basic-cs29" %}

`[Functional-component]`

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/dropdownlist/basic-cs30/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/dropdownlist/basic-cs30/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/dropdownlist/basic-cs30" %}

## Customization

The grouping header can be customized using the [`groupTemplate`](https://ej2.syncfusion.com/react/documentation/api/drop-down-list/#grouptemplate) property. This allows you to design custom headers for both inline and fixed group display modes. Refer to [Group Template support to DropDownList](./templates#group-template) for detailed implementation.

To get started with grouping, grouping templates and adding icons in React DropDownList, you can check on this video:

{% youtube "https://www.youtube.com/watch?v=BNLFOnUTko4" %}

## See Also

* [Group Template support to DropDownList](./templates#group-template).
* [How to disable the fixed group header](./how-to/group-header)
