---
layout: post
title: Filtering in React MultiColumn Combobox component | Syncfusion
description: Checkout and learn about Filtering with React MultiColumn Combobox component of Syncfusion Essential JS 2 and more.
platform: ej2-react
control: MultiColumn Combobox
documentation: ug
domainurl: ##DomainURL##
---

# Filtering in React MultiColumn ComboBox component

The MultiColumn ComboBox has built-in support to filter the data items, which allows users to filter the list of items based on their input. The filter operation starts as soon as you start typing characters in the component. The filtering can be disabled by setting the [allowFiltering](https://j2.syncfusion.com/react/documentation/api/multicolumn-combobox#allowfiltering) to `false`. By default the value is `true`.

## Change the filter type

You can change the filter type by using the [filterType](https://j2.syncfusion.com/react/documentation/api/multicolumn-combobox#filtertype) property. The `filterType` supports filtering options such as [StartsWith](https://j2.syncfusion.com/react/documentation/api/multicolumn-combobox/filterType/), [EndsWith](https://j2.syncfusion.com/react/documentation/api/multicolumn-combobox/filterType/) and [Contains](https://j2.syncfusion.com/react/documentation/api/multicolumn-combobox/filterType/).

In the following example, data filtering is done with `EndsWith` type.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/multicolumn-combobox/filtering/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/multicolumn-combobox/filtering/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/multicolumn-combobox/filtering" %}
