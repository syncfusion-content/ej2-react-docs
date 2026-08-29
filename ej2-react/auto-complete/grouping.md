---
layout: post
title: Grouping in React AutoComplete | Syncfusion
description: Group Syncfusion React AutoComplete list items by category using the groupBy field, with both inline and fixed group headers that update while scrolling.
control: Grouping 
platform: ej2-react
documentation: ug
domainurl: ##DomainURL##
---

# Grouping in React AutoComplete

The AutoComplete supports grouping flat data items based on a category field. The category of each list item can be mapped through the [`groupBy`](https://ej2.syncfusion.com/react/documentation/api/auto-complete#fields) field in the data source. The `groupBy` value should map to a string field in the data; for an overview of field mapping, see [Field mapping](./data-binding#field-mapping). The group header is displayed as both an inline and a fixed header. The fixed group header updates dynamically to reflect the category of the items currently in view while scrolling.

In the following sample, vegetables are grouped based on their category using the `groupBy` field. The `Category` field name used here is an example; you can map `groupBy` to any field in your data.

`[Class Component]`

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/autocomplete/basic-cs21/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/autocomplete/basic-cs21/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/autocomplete/basic-cs21" %}

`[Functional Component]`

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/autocomplete/basic-cs22/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/autocomplete/basic-cs22/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/autocomplete/basic-cs22" %}

## Customizing the group header

You can customize the group header using the [`groupTemplate`](https://ej2.syncfusion.com/react/documentation/api/auto-complete#grouptemplate) property. This allows custom rendering using the `groupTemplate` property for both inline and fixed headers.

## See also

* [Group Template support to AutoComplete](./templates#group-template)